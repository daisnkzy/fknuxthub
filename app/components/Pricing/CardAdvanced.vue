<script setup>
const tag = "popular";
const contents = [
	{ id: 1, description: "Beautiful out of the box3" },
	{ id: 2, description: "Built-in components library3" },
	{ id: 3, description: "Single editor3" },
	{ id: 4, description: "Custom domain3" },
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
		class="bg-gradient-to-br from-[#ececec] via-[#f8f8f8] to-white dark:via-[#1a1a1a] dark:from-[#333333] dark:to-[#000000]"
	>
		<div class="h-[500px] flex flex-col justify-between">
			<div class="relative">
				<UBadge
					color="black"
					variant="solid"
					class="absolute top-0 right-0 uppercase"
					>{{ tag }}</UBadge
				>
				<div class="flex flex-col mb-4">
					<div class="flex flex-col mb-6 gap-y-2">
						<p class="text-[#262626] dark:text-[#dedede] text-2xl text-shadow">
							{{ plan.name }}
						</p>
						<span
							class="text-[#262626] dark:text-[#dedede] font-semibold text-shadow text-3xl"
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
							class="text-green-400 size-5"
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
				:is-active="plan.isActive"
			/>
		</div>
	</UCard>
</template>
