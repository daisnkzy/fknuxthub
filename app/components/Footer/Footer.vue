<script setup>
const footerLinks = {
	legal: [
		{ title: "Terms of Service", path: "/legal/terms-of-service" },
		{ title: "Privacy Policy", path: "/legal/privacy-policy" },
	],
	resources: [
		{ title: "Documentation", path: "/#docs" },
		{ title: "API Reference", path: "/#api" },
	],
	company: [
		{ title: "About Us", path: "/#about" },
		{ title: "Blog", path: "/blog" },
	],
	support: [
		{ title: "Help Center", path: "/#help" },
		{ title: "Contact Us", path: "/#contact" },
	],
};

const socialLinks = [
	{ icon: "i-ph-x-logo-bold", url: "https://x.com/daisnkzy1" },
	{ icon: "i-ph-envelope-duotone", url: "mailto:taosir02@163.com" },
];

const companyInfo = {
	name: "Ease",
	slogan: "Build Your First True Meaning SaaS.",
	copyright: "Copyright © 2025 - All rights reserved",
	author: {
		name: "Taosir",
		avatarUrl: "/",
		profileUrl: "https://x.com/daisnkzy1",
	},
};
</script>

<template>
	<footer class="z-50 py-32 space-y-12">
		<UContainer>
			<div class="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2">
				<div
					class="flex items-center justify-between gap-8 px-2 mb-4 font-light md:flex-col md:items-start"
				>
					<div class="space-y-2">
						<h3 class="text-2xl font-medium">{{ companyInfo.name }}</h3>
						<span class="text-base text-cool-700 dark:text-cool-400">
							{{ companyInfo.slogan }}
						</span>
					</div>
					<div class="flex items-center gap-x-2">
						<NuxtLink
							v-for="link in socialLinks"
							:key="link.url"
							:to="link.url"
							rel="noopener noreferrer nofollow"
						>
							<UIcon :name="link.icon" class="size-6"></UIcon>
						</NuxtLink>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4 p-2 lg:grid-cols-4">
					<ul
						v-for="(links, category) in footerLinks"
						:key="category"
						class="flex flex-col gap-2"
					>
						<span class="mb-2 text-base font-medium capitalize">{{
							category
						}}</span>
						<li
							v-for="link in links"
							:key="link.path"
							class="text-sm text-cool-700 hover:underline dark:text-cool-400"
						>
							<ULink :to="link.path">{{ link.title }}</ULink>
						</li>
					</ul>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<ULink
					:to="companyInfo.author.profileUrl"
					class="flex items-center gap-2 hover:underline"
				>
					<UAvatar size="xs" :src="companyInfo.author.avatarUrl" alt="Avatar" />
					<p class="text-sm text-cool-700 dark:text-cool-400">
						Made By {{ companyInfo.author.name }}
					</p>
				</ULink>
				<p class="text-sm text-cool-700 dark:text-cool-400">
					{{ companyInfo.copyright }}
				</p>
			</div>
		</UContainer>
	</footer>
</template>
