<script setup>
const { data } = await useFetch("/api/payment/subscription");
const isOpen = ref(false);
</script>

<template>
	<div class="p-4 mb-8 text-xs text-cool-500" v-if="!data">
		Add your payment key to enable payments
	</div>
	<div v-if="data">
		<div
			class="flex items-center gap-2 p-2 mb-4 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 group"
			@click="isOpen = true"
		>
			<UIcon
				name="i-solar-stars-bold-duotone"
				class="transition-transform duration-200 group-hover:text-amber-400 text-amber-200 size-6 group-hover:scale-125"
			></UIcon>

			<div class="flex flex-col">
				<span class="text-sm text-gray-900 dark:text-gray-100">{{
					data.activeSubscription ? "You're upgraded ✨" : "Upgrade your plan"
				}}</span>

				<span class="text-xs text-gray-600 line-clamp-1 dark:text-gray-400">
					{{
						data.activeSubscription ? " " : "More access to the best features"
					}}
				</span>
			</div>
		</div>

		<UModal
			v-model="isOpen"
			fullscreen
			:ui="{ fullscreen: 'min-h-screen md:h-screen h-full' }"
		>
			<UCard
				:ui="{
					base: 'h-full flex flex-col',
					rounded: '',
					divide: 'divide-y divide-gray-100 dark:divide-gray-800',
					body: {
						base: 'grow ',
					},
				}"
			>
				<template #header>
					<div class="flex items-center justify-between">
						<h3
							class="text-3xl font-semibold leading-6 text-gray-900 dark:text-white"
						>
							Upgrade your plan
						</h3>
						<UButton
							color="gray"
							variant="ghost"
							icon="i-lucide-x"
							class="-my-1"
							size="xl"
							@click="isOpen = false"
						/>
					</div>
				</template>

				<div class="w-full">
					<AppBillingPlanSelector
						:plans="data.plans"
						:active-variant-id="data.activeSubscription?.variantId"
					/>
				</div>
			</UCard>
		</UModal>
	</div>
</template>
