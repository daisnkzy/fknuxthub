<script setup>
import { computed, onMounted, ref } from "vue";

// Default data, if the API request fails, this data will be used
let plans = [
	{
		id: "1",
		name: "Basic",
		variants: [
			{ id: "1", interval: "month", price: 1000 },
			{ id: "2", interval: "year", price: 10000 },
		],
	},
	{
		id: "2",
		name: "Pro",
		variants: [
			{ id: "3", interval: "month", price: 2000 },
			{ id: "4", interval: "year", price: 20000 },
		],
	},
	{
		id: "3",
		name: "Enterprise",
		variants: [
			{ id: "3", interval: "month", price: 20000 },
			{ id: "4", interval: "year", price: 200000 },
		],
	},
];
let activeSubscription = null;

try {
	const { data } = await useFetch("/api/payment/plans");
	plans = data.value.plans;
	activeSubscription = data.value.activeSubscription;
} catch {
	console.error("Failed to fetch payment plans");
}

const activeVariantId = activeSubscription?.variantId;

const selectedInterval = ref(0);
const intervals = [{ label: "Monthly" }, { label: "Yearly" }];

const computeVariants = interval => {
	return plans
		.map(plan => {
			const variant = plan.variants.find(v => v.interval === interval);
			return {
				...plan,
				...variant,
				isActive: activeVariantId ? variant.id === activeVariantId : false,
			};
		})
		.sort((a, b) => a.price - b.price);
};

const monthlyVariants = computed(() => computeVariants("month"));
const yearlyVariants = computed(() => computeVariants("year"));

const displayedVariants = computed(() => {
	return selectedInterval.value === 0
		? monthlyVariants.value
		: yearlyVariants.value;
});

onMounted(() => {
	if (activeVariantId) {
		const activeVariant = plans
			.flatMap(plan => plan.variants)
			.find(variant => variant.id === activeVariantId);

		if (activeVariant) {
			selectedInterval.value = activeVariant.interval === "year" ? 1 : 0;
		}
	}
});
</script>

<template>
	<section class="py-16">
		<UContainer>
			<div class="mb-16 text-center" id="pricing">
				<p
					class="px-3 py-2 mx-auto mb-2 text-sm text-center border rounded-full border-cool-300 group w-max"
				>
					Pricing
				</p>
				<h2 class="max-w-lg mx-auto mb-2 text-3xl font-semibold md:text-5xl">
					Pricing on your terms
				</h2>
				<p class="text-lg font-light text-cool-600 dark:text-cool-300">
					Get started for free. Upgrade as you grow.
				</p>
			</div>
			<UTabs
				v-model="selectedInterval"
				:items="intervals"
				class="max-w-xs mx-auto mb-4"
			/>
			<div
				class="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3"
			>
				<div v-for="plan in displayedVariants" :key="plan.id">
					<PricingCardNormal
						v-if="plan.name === 'Basic'"
						:plan="plan"
						:active-variant-id="activeVariantId"
					/>
					<PricingCardFancy
						v-if="plan.name === 'Pro'"
						:plan="plan"
						:active-variant-id="activeVariantId"
					/>
					<PricingCardAdvanced
						v-if="plan.name === 'Enterprise'"
						:plan="plan"
						:active-variant-id="activeVariantId"
					/>
				</div>
			</div>
		</UContainer>
	</section>
</template>
