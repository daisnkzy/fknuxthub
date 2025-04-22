<script setup>
definePageMeta({
	middleware: "otp",
	layout: "dashboard",
});
const { fetch: refreshSession } = useUserSession();
import { PinInputInput, PinInputRoot } from "radix-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";

const route = useRouter().currentRoute.value;
const { email } = route.query;
const code = ref([]);
const loading = ref(false);
const otpDisabled = ref(false);
const timer = ref(0);
let timerInterval = null;

async function submit() {
	try {
		loading.value = true;
		if (code.value.length !== 5) return;
		await $fetch("/api/auth/verify-otp", {
			method: "POST",
			body: { email, code: code.value.join("") },
		});
		toast.success("OTP has been verified");
		await refreshSession();
		return navigateTo("/dashboard");
	} catch (error) {
		toast.error(`Error: ${error.data.statusMessage}`);
		loading.value = false;
	}
}

async function resendOtp() {
	try {
		await $fetch("/api/auth/resend-otp", {
			method: "POST",
			body: { email },
		});
		toast.info("Resent OTP sent to your email");
		startTimer(60);
	} catch (error) {
		console.log(error);
		loading.value = false;
		toast.error(error?.data?.statusMessage ?? "An error occurred");
	}
}

function startTimer(duration) {
	otpDisabled.value = true;
	timer.value = duration;
	clearInterval(timerInterval);
	timerInterval = setInterval(() => {
		if (timer.value > 0) {
			timer.value--;
		} else {
			otpDisabled.value = false;
			clearInterval(timerInterval);
		}
	}, 1000);
}
</script>

<template>
	<main class="flex flex-col items-center justify-center">
		<div class="w-full max-w-md mx-auto mt-32 text-left">
			<div
				class="relative flex p-3 border-2 text-primary-600 border-primary-600 bg-primary-50 dark:bg-black w-fit rounded-2xl"
			>
				<div
					class="absolute border-2 border-primary-600/20 inset-[-6px] rounded-[20px]"
				></div>
				<Icon
					name="i-lucide-mail-check"
					class="w-6 h-6 text-primary-600 dark:text-primary-300"
				/>
			</div>

			<h1 class="mt-4 text-2xl font-medium">Check your email</h1>

			<p class="mt-1 text-sm text-gray-950/70 dark:text-white/70">
				We've sent a 5 digit code to
				<span class="font-semibold">{{ $route.query.email }}</span>
			</p>

			<div class="flex flex-col gap-4 mt-4 max-w-max">
				<div class="flex items-center gap-2">
					<PinInputRoot
						v-model="code"
						class="flex gap-2 mx-auto"
						@complete="submit"
					>
						<PinInputInput
							v-for="(id, index) in 5"
							:key="id"
							:index="index"
							autofocus
							class="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm dark:border-white/20 focus:border-gray-400 dark:focus:border-gray-600 focus:ring focus:ring-gray-500 dark:focus:ring-gray-700 focus:ring-opacity-20 focus:outline-none"
						/>
					</PinInputRoot>
				</div>
				<div class="flex">
					<UButton
						size="lg"
						color="primary"
						label="Verify code"
						block
						:loading="loading"
						:disabled="loading"
						@click="submit"
					/>
				</div>
			</div>

			<p class="mt-4 text-xs text-gray-500">
				Didn't receive the code?
				<UButton
					:disabled="otpDisabled"
					@click="resendOtp"
					variant="link"
					color="black"
					class="px-0.5 -mx-0.5"
					size="xs"
				>
					Click to resend
				</UButton>
				<span v-if="otpDisabled" class="ml-1">({{ timer }}s)</span>
			</p>

			<UButton
				to="/auth/login"
				class="mt-8"
				label="← Back to login"
				variant="ghost"
				color="gray"
			/>
		</div>
	</main>
</template>
