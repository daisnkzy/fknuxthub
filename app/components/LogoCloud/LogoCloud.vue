<script setup>
import CloudflareLogo from "/logos/cloudflare.svg";
import GithubLogo from "/logos/github.svg";
import NuxtLogo from "/logos/nuxt.svg";
import OpenaiLogo from "/logos/openai.svg";
import StripeLogo from "/logos/stripe.svg";
import TailwindcssLogo from "/logos/tailwindcss.svg";

const companies = [
	[
		{
			name: "Github",
			logo: GithubLogo,
		},

		{
			name: "OpenAI",
			logo: OpenaiLogo,
		},
		{
			name: "TailwindCSS",
			logo: TailwindcssLogo,
		},
	],
	[
		{
			name: "Stripe",
			logo: StripeLogo,
		},

		{
			name: "Nuxt",
			logo: NuxtLogo,
		},
		{
			name: "Cloudflare",
			logo: CloudflareLogo,
		},
	],
];
</script>

<template>
	<section class="pb-20 -pt-12">
		<p class="text-lg font-medium text-center text-cool-700 dark:text-cool-300">
			Trusted by
		</p>
		<ul
			class="flex items-center justify-center mt-4 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
		>
			<li v-for="(group, groupIndex) in companies" :key="groupIndex">
				<ul
					class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
				>
					<li v-for="company in group" :key="company.name" class="flex">
						<img
							:src="company.logo"
							class="h-10 px-2 w-28 brightness-0 dark:invert"
							:alt="company.name"
						/>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</template>
