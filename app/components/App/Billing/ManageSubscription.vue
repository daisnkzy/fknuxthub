<script setup>
async function manageSubscription(flow) {
	try {
		const billingPortalLink = await $fetch("/api/payment/billing-portal-link", {
			query: { flow },
		});
		window.location.href = billingPortalLink;
	} catch (error) {
		toast.error("Error creating billing portal link");
	}
}
</script>

<template>
	<div
		class="flex pt-20 text-xs font-light underline cursor-pointer gap-x-2 text-cool-500"
	>
		<!--create configuration at https://dashboard.stripe.com/test/settings/billing/portal. -->
		<p @click="manageSubscription('update-plan')">update billing</p>
		<p @click="manageSubscription('update-payment-info')">payment info</p>
		<p @click="manageSubscription('cancel')">cancel subscription</p>
	</div>
</template>
