<script setup>
import { toast } from "vue-sonner";
import { z } from "zod";
const loading = ref(false);
const schema = z.object({
	email: z.string().email("Invalid email"),
});

const state = reactive({
	email: undefined,
});

async function onSubmit(event) {
	try {
		loading.value = true;
		await $fetch("/api/broadcast", {
			method: "POST",
			body: { email: event.data.email },
		});
		toast.success(`Hi, ${event.data.email}`, {
			description:
				"We've added you to our waitlist. We'll let you konw when XXX is ready.",
		});
	} catch (error) {
		console.error(error);
		toast.error(error.data?.statusMessage ?? "An error occurred");
	} finally {
		loading.value = false;
	}
}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="w-full p-8 space-y-4 sm:p-0 sm:w-80"
		@submit="onSubmit"
	>
		<UFormGroup name="email" size="lg">
			<UInput
				v-model="state.email"
				placeholder="Email address..."
				icon="i-solar-letter-linear"
				type="email"
				:ui="{
					color: { white: { outline: 'dark:bg-transparent font-light' } },
				}"
			/>
		</UFormGroup>
		<UButton
			:loading="loading"
			color="primary"
			variant="soft"
			type="submit"
			:disabled="loading"
			size="lg"
			block
			label="Join the Waitlist"
			icon="i-solar-arrow-right-linear"
			trailing
		/>
	</UForm>
</template>
