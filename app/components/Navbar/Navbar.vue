<script setup>
const { loggedIn } = useUserSession();
defineOgImageComponent("NuxtSeo", {
	title: useAppConfig().seo.ogTitle,
	siteName: useAppConfig().seo.ogSiteName,
});
const open = ref(false);
const navlists = ref([
	{ name: "Faq", path: "/#faq" },
	{ name: "Blog", path: "/blog" },
	{ name: "Pricing", path: "/#pricing" },
	{ name: "Waitlist", path: "/waitlist" },
]);

const closeIcon = "i-ph-x";
const openIcon = "i-solar-hamburger-menu-linear";
</script>

<template>
	<header
		class="sticky top-0 z-50 p-4 -mb-px bg-transparent border-0 border-gray-200 backdrop-blur-2xl dark:border-gray-800 lg:mb-0"
	>
		<UContainer>
			<nav class="flex items-center justify-between max-w-5xl mx-auto">
				<div class="flex items-center md:gap-x-12">
					<NuxtLink to="/" aria-label="Home">
						<span class="text-3xl font-bold">Ease</span>
					</NuxtLink>
				</div>

				<ul class="hidden text-sm font-medium md:flex md:gap-x-8">
					<li v-for="list in navlists" :key="list.name">
						<NuxtLink :to="list.path">
							<UButton color="black" variant="link">
								{{ list.name }}
							</UButton>
						</NuxtLink>
					</li>
				</ul>

				<div class="flex items-center gap-x-4 md:gap-x-8">
					<UIDarkmode />
					<UButton
						v-if="loggedIn"
						size="md"
						color="black"
						target="_blank"
						to="/dashboard"
					>
						Dashboard
					</UButton>
					<UButton v-else size="md" color="black" to="/auth/login">
						SignIn
					</UButton>

					<div className=" md:hidden -mr-1">
						<UPopover v-model:open="open">
							<UButton
								color="gray"
								:icon="open ? closeIcon : openIcon"
								size="xl"
								variant="ghost"
							/>

							<template #panel>
								<div
									class="flex flex-col w-screen px-8 py-4 mt-4 -mx-4 text-lg shadow-xl gap-y-4 text-cool-700 dark:text-cool-400"
								>
									<NuxtLink to="#features">Features</NuxtLink>
									<NuxtLink to="#testimonials">Testimonials</NuxtLink>
									<NuxtLink to="#pricing">Pricing</NuxtLink>
								</div>
							</template>
						</UPopover>
					</div>
				</div>
			</nav>
		</UContainer>
	</header>
</template>
