<script setup>
const contents = [
	{ id: 1, description: "Beautiful out of the box" },
	{ id: 2, description: "Built-in components library" },
	{ id: 3, description: "Single editor" },
	{ id: 4, description: "Custom domain" },
];

const props = defineProps({
	plan: {
		type: Object,
		required: true,
	},
	activeVariantId: {
		type: String,
		required: false,
	},
});

const formatPrice = price => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formatter.format(price / 100);
};
</script>

<template>
	<UCard>
		<div class="h-[500px] flex flex-col justify-between">
			<div>
				<div class="flex flex-col mb-4">
					<div class="flex flex-col mb-6 gap-y-2">
						<p class="text-2xl text-[#262626] dark:text-[#dedede] text-shadow">
							{{ plan.name }}
						</p>
						<span
							class="text-[#262626] dark:text-[#dedede] text-shadow text-3xl font-semibold"
							>{{ formatPrice(plan.price) }}/{{ plan.interval }}</span
						>
					</div>
					<p class="text-[#262626] dark:text-[#dedede] text-sm">
						{{ plan.description }}
					</p>
				</div>
				<UDivider></UDivider>
				<div class="flex flex-col py-4 gap-y-4">
					<div
						v-for="content in contents"
						:key="content.id"
						class="flex items-center gap-x-1"
					>
						<UIcon
							name="i-ph-check-circle-duotone"
							class="text-green-500 size-5"
						></UIcon>
						<p class="text-[#262626] dark:text-[#dedede] text-sm">
							{{ content.description }}
						</p>
					</div>
				</div>
			</div>

			<AppBillingCheckoutButton
				:variant-id="plan.id"
				:label="plan.isActive ? 'Current Plan' : 'Try for Free'"
				color="white"
				:is-active="plan.isActive"
			/>
		</div>
	</UCard>
</template>
