<script setup>
useSeoMeta({
	titleTemplate: "%s",
	title: useAppConfig().seo.blogTitle,
	description: useAppConfig().seo.description,
});

defineOgImageComponent("NuxtSeo", {
	title: useAppConfig().seo.ogBlogTitle,
	description: useAppConfig().seo.ogBlogDescription,
	siteName: useAppConfig().seo.ogSiteName,
});

const { data: blogs } = await useAsyncData("all-blogs", () =>
	queryContent("/blog").sort({ published: -1 }).find(),
);
</script>

<template>
	<main class="min-h-screen">
		<div class="max-w-5xl p-4 mx-auto">
			<div class="pt-20 pb-10">
				<AppFeaturedBlogCard :blog="blogs[0]" />
			</div>
			<ul
				class="grid grid-cols-1 py-12 gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
			>
				<li v-for="(blog, id) in blogs.slice(1)" :key="id">
					<AppBlogCard :blog="blog" />
				</li>
			</ul>
		</div>
	</main>
</template>
