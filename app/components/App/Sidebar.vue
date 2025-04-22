<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanLg = breakpoints.smaller("lg");
const mobileSidebar = useState("mobileSidebar", () => false);

const links = [
	{
		label: "Home",
		to: "/dashboard",
		icon: "i-solar-home-2-linear",
		exact: true,
		click: () => (mobileSidebar.value = false),
	},
	{
		label: "Posts",
		to: "/dashboard/posts",
		icon: "i-solar-pen-new-square-linear",
		exact: true,
		click: () => (mobileSidebar.value = false),
	},
];

const navigationUiClasses = {
	padding: "px-2 py-2.5",
	rounded: "rounded-lg",
	base: "gap-3",
};
</script>

<template>
	<div
		class="relative flex-col items-stretch flex-shrink-0 hidden w-full border-b border-gray-200 lg:border-b-0 lg:border-r dark:border-white/10 lg:w-64 lg:flex"
	>
		<div class="flex h-12 px-6">
			<NuxtLink to="/dashboard" class="flex items-center gap-2 font-semibold">
				<!-- <img src="/logo.png" class="w-auto h-6" /> -->
				<span class="">Ease</span>
			</NuxtLink>
		</div>
		<div class="relative flex flex-col flex-1 w-full overflow-hidden">
			<div class="flex flex-col flex-grow min-h-0 py-2 gap-y-2">
				<div class="flex flex-col flex-1 px-4 overflow-y-auto gap-y-2">
					<UVerticalNavigation :links="links" :ui="navigationUiClasses" />
				</div>
			</div>
			<div class="p-2">
				<AuthState v-slot="{ loggedIn }">
					<AppBillingModal />
					<AppUserDropdown v-if="loggedIn" />
				</AuthState>
			</div>
		</div>
	</div>

	<ClientOnly>
		<USlideover
			v-if="smallerThanLg"
			v-model="mobileSidebar"
			side="left"
			class="lg:hidden"
		>
			<div
				class="relative flex flex-col items-stretch w-full h-screen border-gray-200 dark:border-white/10"
			>
				<div class="flex items-center justify-between h-12 px-4 mt-4">
					<UButton
						icon="i-solar-list-line-duotone"
						square
						color="gray"
						variant="ghost"
						size="xl"
						@click="mobileSidebar = false"
					/>

					<NuxtLink
						to="/dashboard"
						class="flex items-center gap-2 font-semibold"
					>
						<!-- <img src="/logo.png" class="w-auto h-6" /> -->
						<span class="text-2xl">Ease</span>
					</NuxtLink>
				</div>
				<div class="relative flex flex-col flex-1 w-full overflow-hidden">
					<div class="flex flex-col flex-grow min-h-0 py-2 gap-y-2">
						<div class="flex flex-col flex-1 px-2 overflow-y-auto gap-y-2">
							<UVerticalNavigation :links="links" :ui="navigationUiClasses" />
						</div>
					</div>
					<div class="p-2">
						<AuthState v-slot="{ loggedIn }">
							<AppBillingModal />
							<AppUserDropdown v-if="loggedIn" />
						</AuthState>
					</div>
				</div>
			</div>
		</USlideover>
	</ClientOnly>
</template>
