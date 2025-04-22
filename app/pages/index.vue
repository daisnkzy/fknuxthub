<template>
	<div class="z-10">
		<Hero
			title="Jumpstart Your SaaS with Ease Designed for Beginners"
			description="Ease is a SaaS Starter Kit, simplifying the process of building a functional SaaS without worrying about landing pages, payments, SEO, or complex features."
		/>
		<LogoCloud />
		<Feature />
		<HowItWorks />
		<Pricing />
		<TestimonialGrid />
		<FAQ />
		<CTA />
	</div>
	<!-- <UIBackgroundRisingStars /> -->
	<UIBackgroundShadowGrid />
</template>

<script setup>
defineOgImageComponent("NuxtSeo", {
	title: useAppConfig().seo.ogTitle,
	siteName: useAppConfig().seo.ogSiteName,
});

useSeoMeta({
	titleTemplate: "%s",
	title: useAppConfig().seo.title,
	description: useAppConfig().seo.description,
	ogSiteName: useAppConfig().seo.ogSiteName,
});
</script>
