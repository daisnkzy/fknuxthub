<script setup>
const socialLink = "https://twitter.com/taosir02";
const email = "taosir@example.com";

const items = ref([
	{
		label: "What is StartEase?",
		defaultOpen: true,
		content:
			"StartEase is a SaaS Starter Kit – a streamlined codebase designed to help beginners build a fully functional SaaS from scratch, without the hassle of learning landing pages, payment integration, SEO, or other complex features.",
	},
	{
		label: "What do I get Exactly?",
		content:
			"The NuxtJS starter with all the essential boilerplate to launch your online business: payment system, database, login, blog, UI components, and more.",
	},
	{
		label: "What do you mean no need for expertise?",
		content:
			"1/StartEase helps anyone, even those unfamiliar with SaaS, build and monetize their own SaaS projects. 2/With ready-made templates for landing pages, payments, blogs, and more, you can focus on your product without needing complex coding skills.",
	},
	{
		label: "How is it different from other boilerplates?",
		content:
			"StartEase stands out by prioritizing simplicity for beginners. Unlike other boilerplates that can be overwhelming.",
	},
	{
		label: "My tech stack is different, can I still use it?",
		content:
			"1/Yes, as long as you're willing to try Nuxt! Nuxt.js is easy to learn and offers a great developer experience, allowing you to get started in just a few days. 2/After exploring many technologies, I chose Nuxt because it helps me focus on building projects without technical debates.",
	},
	{
		label: "Are there any other costs associated?",
		content:
			"1/ Did you know? StartEase is not only easy to use but also built on Cloudflare, which means you can host your website and database for free. You can launch your first SaaS for $0/month. 2/ If you use Magic Link sign-ups, it costs just $1 per 1,000 users.",
	},
	{
		label: "How often is StartEase updated?",
		content:
			"I'm an indie hacker, and I built StartEase to launch my own SaaS. I feel proud, accomplished, and genuinely happy as I continuously improve it to deliver an excellent DX for everyone using it.",
	},
	{
		label: "Do you offer refunds?",
		content:
			"Unfortunately due to the nature of this product, where you get complete access to the codebase, and I have no way to verify if you have used it, I cannot offer refunds.",
	},
]);
</script>

<template>
	<section class="py-24" id="faq">
		<UContainer>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24">
				<div class="mb-16 text-left">
					<p
						class="flex items-center px-3 py-2 mb-5 text-sm border border-gray-300 rounded-full bg-grayborder-gray-300 group w-max gap-x-2"
					>
						FAQ
					</p>
					<h2
						class="text-3xl md:text-5xl text-[#262626] dark:text-[#dedede] mx-auto font-semibold mb-2"
					>
						Have questions?
					</h2>
					<p class="text-lg font-light text-cool-600 dark:text-cool-300">
						Have another question? Contact me on
						<ULink :to="socialLink" class="underline">Twitter </ULink>or by
						<ULink :to="'mailto:' + email" class="underline"> email </ULink>.
					</p>
				</div>

				<UAccordion
					:items="items"
					variant="link"
					color="black"
					size="xl"
					multiple
				/>
			</div>
		</UContainer>
	</section>
</template>
