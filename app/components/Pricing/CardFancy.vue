<script setup>
const tag = "best value";
const contents = [
	{ id: 1, description: "Beautiful out of the box2" },
	{ id: 2, description: "Built-in components library2" },
	{ id: 3, description: "Single editor2" },
	{ id: 4, description: "Custom domain2" },
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
	<UCard
		class="flex flex-col shadow-box shadow-blue-500/30 dark:from-blue-600 bg-gradient-to-b from-blue-500 to-primary-600 dark:to-primary-700"
	>
		<div class="h-[500px] flex flex-col justify-between">
			<div class="relative font-light">
				<UBadge
					color="white"
					variant="solid"
					class="absolute top-0 right-0 uppercase"
					>{{ tag }}</UBadge
				>
				<div class="flex flex-col mb-4">
					<div class="flex flex-col mb-6 gap-y-2">
						<p class="text-2xl font-medium text-white text-shadow">
							{{ plan.name }}
						</p>
						<span class="text-3xl font-semibold text-white text-shadow"
							>{{ formatPrice(plan.price) }}/{{ plan.interval }}</span
						>
					</div>
					<p class="text-sm text-gray-200 dark:text-gray-300">
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
							class="text-green-400 size-5"
						></UIcon>
						<p class="text-sm text-white">{{ content.description }}</p>
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
