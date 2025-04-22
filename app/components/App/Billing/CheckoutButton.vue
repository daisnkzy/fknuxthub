<template>
	<UButton
		:label="label"
		color="black"
		block
		size="xl"
		:disabled="isActive || loading"
		:loading="loading"
		@click="createCheckout"
	/>
</template>

<script setup>
const { baseUrl } = useRuntimeConfig().public;
import { toast } from "vue-sonner";
const loading = ref(false);
const { loggedIn } = useUserSession();
const props = defineProps({
	variantId: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
});
const createCheckout = async () => {
	if (!loggedIn.value) {
		toast.message("🌼 Almost there", {
			description: " Please login before starting your journey ",
		});
		// Redirect to login page if not logged in
		await navigateTo("/auth/login");
		return;
	}

	try {
		loading.value = true;
		const data = await $fetch("/api/payment/checkout", {
			method: "POST",
			body: {
				variantId: props.variantId,
				redirectUrl: `${baseUrl}/dashboard`,
			},
		});
		window.location.href = data;
		loading.value = false;
	} catch (error) {
		loading.value = false;
		toast.error("Error creating checkout link");
	}
};
</script>
