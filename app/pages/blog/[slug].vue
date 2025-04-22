<script setup>
const route = useRoute();
const { slug } = route.params;
useHead({
	link: [
		{
			rel: "canonical",
			href: `https://yourwebsite.com/blogs/${slug}`,
		},
	],
});

defineOgImageComponent("NuxtSeo", {
	siteName: useAppConfig().seo.ogSiteName,
});

const getReadableDate = dateString => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

const navigation = await queryContent("blog")
	.only(["_path", "title", "description"])
	.sort({ published: 1 })
	.find();

const currentIndex = navigation.findIndex(page => page._path === route.path);
const prev = currentIndex > 0 ? navigation[currentIndex - 1] : null;
const next =
	currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null;
</script>

<template>
	<main class="min-h-screen">
		<div
			class="max-w-2xl p-4 mx-auto prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
		>
			<ContentDoc v-slot="{ doc }" tag="article" head>
				<article
					class="relative mt-20 space-y-12 font-light text-cool-700 dark:text-cool-300"
				>
					<NuxtLink to="/blog" class="lg:fixed lg:left-40 lg:top-40">
						<UButton
							size="sm"
							color="gray"
							variant="link"
							icon="i-solar-arrow-left-outline"
							>All Blogs</UButton
						>
					</NuxtLink>
					<h1
						class="font-medium text-4xl md:text-5xl text-[#08090a] dark:text-gray-100"
					>
						{{ doc.title }}
					</h1>
					<div class="flex items-center gap-3">
						<UAvatar size="md" :src="doc.avatarUrl" alt="Author's avatar" />
						<div class="text-base text-[#08090a]/80 dark:text-white/70">
							<span class="font-medium">{{ doc.author }}</span>
						</div>
						<div>•</div>
						<span> {{ getReadableDate(doc.published) }}</span>
					</div>
					<div class="mb-6 overflow-hidden rounded-xl aspect-video">
						<img
							:src="doc.image"
							alt="img"
							sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 28vw"
						/>
					</div>
					<ContentRenderer :value="doc" />
				</article>
			</ContentDoc>
		</div>

		<hr class="mt-32" />

		<div
			class="grid max-w-3xl grid-cols-1 gap-8 p-2 mx-auto mt-20 mb-10 md:grid-cols-2"
		>
			<NuxtLink
				v-if="prev"
				:to="prev._path"
				class="p-4 space-y-2 no-underline border rounded-lg dark:border-cool-500 hover:bg-gray-50 dark:hover:bg-gray-800"
			>
				<div class="text-sm text-cool-500">Prev</div>
				<div
					class="font-medium text-lg leading-6 text-[#08090a] dark:text-gray-100"
				>
					{{ prev.title }}
				</div>
				<div
					class="text-sm tracking-normal line-clamp-2 text-cool-700 dark:text-white/70"
				>
					{{ prev.description }}
				</div>
			</NuxtLink>
			<div v-else class="md:col-start-2"></div>

			<NuxtLink
				v-if="next"
				:to="next._path"
				class="p-4 space-y-2 no-underline border rounded-lg dark:border-cool-500 text-end hover:bg-gray-50 dark:hover:bg-gray-800 md:col-start-2"
			>
				<div class="text-sm text-cool-500">Next</div>

				<div
					class="font-medium text-lg leading-6 text-[#08090a] dark:text-gray-100"
				>
					{{ next.title }}
				</div>
				<div
					class="text-sm tracking-normal line-clamp-2 text-cool-700 dark:text-white/70"
				>
					{{ next.description }}
				</div>
			</NuxtLink>
		</div>
	</main>
</template>

<style>
.prose h2 a,
.prose h3 a {
	@apply no-underline;
}
</style>
