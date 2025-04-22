<script setup>
import { reactive, ref } from "vue";
import { toast } from "vue-sonner";
import { z } from "zod";
definePageMeta({
	layout: "dashboard",
});

const magicLinkSchema = z.object({
	email: z.string().email("Invalid email"),
});

const state = reactive({
	email: undefined,
});

const loading = ref(false);

async function onSubmit(event) {
	try {
		loading.value = true;
		const email = event.data.email;
		console.log(email);
		await $fetch("/api/auth/login-with-otp", {
			method: "POST",
			body: event.data,
		});
		loading.value = false;
		navigateTo(`/auth/verify-otp?email=${encodeURIComponent(email)}`);
		toast.success("OTP sent to your email");
	} catch (error) {
		loading.value = false;
		toast.error(error.data.statusMessage);
	}
}
</script>

<template>
	<section class="relative flex flex-col items-center">
		<NuxtLink to="/" class="absolute p-8 text-3xl font-medium top-2 left-40"
			>Ease</NuxtLink
		>
		<div class="w-full max-w-sm mx-auto mt-32 space-y-16">
			<div class="ml-8">
				<p class="text-4xl font-medium tracking-tight">Do and Scale it.</p>
				<span class="text-2xl tracking-tight text-gray-400">
					Log in to your Ease account
				</span>
			</div>

			<UForm
				:schema="magicLinkSchema"
				:state="state"
				class="max-w-xs mx-auto space-y-2"
				@submit="onSubmit"
			>
				<AuthSocialLogin />
				<UDivider
					label="OR"
					:ui="{ label: 'text-zinc-950/50 dark:text-white/30 text-[11px]' }"
				/>
				<UFormGroup label="Email" name="email" size="lg">
					<UInput
						v-model="state.email"
						placeholder="you@example.com"
						icon="i-solar-letter-linear"
						:ui="{
							color: { white: { outline: 'dark:bg-transparent font-light' } },
						}"
					/>
				</UFormGroup>
				<UButton
					:loading="loading"
					color="primary"
					type="submit"
					:disabled="loading"
					size="lg"
					block
				>
					Continue
				</UButton>
			</UForm>

			<div
				class="text-xs font-light text-zinc-950/50 dark:text-white/50 decoration-zinc-950/30 dark:decoration-white/30 underline-offset-[3px] mt-8 ml-8"
			>
				By signing up, you agree to the
				<NuxtLink
					to="/legal/terms-of-service"
					target="_blank"
					class="underline"
				>
					Terms of Service
				</NuxtLink>
				<br />
				and
				<NuxtLink to="/legal/privacy-policy" target="_blank" class="underline"
					>Privacy Policy</NuxtLink
				>.
			</div>
		</div>
	</section>
</template>
