<script setup>
import { computed, onMounted, ref } from "vue";

const planFeatures = {
	Basic: [
		{ id: 1, description: "Up to 3 projects" },
		{ id: 2, description: "Basic components" },
		{ id: 3, description: "Community support" },
		{ id: 4, description: "Community support" },
		{ id: 5, description: "Community support" },
		{ id: 6, description: "Community support" },
	],
	Pro: [
		{ id: 1, description: "Unlimited projects" },
		{ id: 2, description: "Advanced components" },
		{ id: 3, description: "Priority support" },
		{ id: 4, description: "Community support" },
		{ id: 5, description: "Community support" },
		{ id: 6, description: "Community support" },
	],
	Enterprise: [
		{ id: 1, description: "Custom solutions" },
		{ id: 2, description: "Dedicated support" },
		{ id: 3, description: "API access" },
		{ id: 4, description: "Community support" },
		{ id: 5, description: "Community support" },
		{ id: 6, description: "Community support" },
	],
};

// const { data, status } = await useFetch("/api/payment/subscription");
// const { plans, activeSubscription } = data.value;
// const activeVariantId = activeSubscription?.variantId;

const { plans, activeVariantId } = defineProps({
	plans: {
		type: Array,
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
	<!-- <div v-if="status !== 'success'" class="text-xs text-gray-500">
		loading....
	</div> -->
	<div>
		<div class="flex items-center justify-center mb-8">
			<UTabs v-model="selectedInterval" :items="intervals" />
		</div>

		<div
			class="flex flex-col justify-center gap-4 px-3 py-3 md:min-h-[30rem] md:flex-row md:gap-0 md:py-0"
		>
			<div
				v-for="plan in displayedVariants"
				:key="plan.id"
				:class="[
					'text-sm relative flex-1 flex gap-5 flex-col border-t border-l border-r border-b rounded-xl  md:first:rounded-tl-xl md:first:rounded-bl-xl md:last:rounded-tr-xl md:last:rounded-br-xl md:max-w-96 justify-between px-6 pt-6 pb-10 md:pb-6',
					plan.name === 'Pro'
						? 'md:min-h-[20rem] -mt-4 -mb-4 border-primary-600 bg-primary-600 bg-opacity-5'
						: 'border-gray-300 dark:border-gray-600 md:min-h-[30rem]  md:rounded-none md:border-r-0 md:last:border-r',
				]"
			>
				<div class="flex flex-col gap-1">
					<p class="flex items-center gap-2 mb-4 text-2xl font-semibold">
						{{ plan.name }}
						<UBadge
							color="primary"
							variant="outline"
							size="xs"
							v-if="plan.name === 'Pro'"
							>POPULAR</UBadge
						>
					</p>
					<span class="text-4xl font-semibold text-dark dark:text-white"
						>{{ formatPrice(plan.price) }}
						<span class="text-sm font-light text-cool-500"
							>/{{ plan.interval }}</span
						></span
					>
					<p
						class="mt-2 mr-2 text-base font-light text-gray-700 dark:text-gray-300"
					>
						{{ plan.description }}
					</p>
				</div>

				<AppBillingCheckoutButton
					:variant-id="plan.id"
					:label="plan.isActive ? 'Current Plan' : 'Get Started'"
					:is-active="plan.isActive"
				/>

				<ul class="flex flex-col gap-y-4">
					<li
						v-for="feature in planFeatures[plan.name]"
						:key="feature.id"
						class="flex items-center gap-2"
					>
						<Icon name="i-lucide-check" class="" />
						{{ feature.description }}
					</li>
				</ul>
			</div>
		</div>

		<div class="flex items-end justify-center">
			<AppBillingManageSubscription v-if="activeVariantId" />
		</div>
	</div>
</template>
