<template>
	<NuxtLink :to="blog._path" class="group">
		<article
			class="grid md:grid-cols-[1.75fr_1fr] grid-cols-1 gap-x-12 place-items-stretch"
		>
			<!-- 图片部分 -->
			<div class="overflow-hidden rounded-xl aspect-video">
				<img
					loading="lazy"
					:src="blog.image"
					alt="Featured blog image"
					class="object-cover w-full h-full transition duration-200 ease-in-out hover:scale-110"
				/>
			</div>

			<!-- 文字内容 -->
			<div class="flex flex-col items-start justify-start pt-8">
				<div>
					<div class="text-sm text-[#08090a]/80 dark:text-white/70 mb-4">
						✨ NEW • {{ getReadableDate(blog.published) }}
					</div>
					<h2
						class="mb-2 font-semibold text-3xl leading-8 text-[#08090a] dark:text-gray-100"
					>
						{{ blog.title }}
					</h2>
					<p
						class="mb-6 text-base tracking-normal line-clamp-2 leading-6 text-[#08090a]/80 dark:text-white/70"
					>
						{{ blog.description }}
					</p>
				</div>
				<div class="flex items-center gap-3">
					<UAvatar size="md" :src="blog.avatarUrl" alt="Author's avatar" />
					<div class="text-base text-[#08090a]/80 dark:text-white/70">
						<span class="font-medium">{{ blog.author }}</span>
					</div>
				</div>
			</div>
		</article>
	</NuxtLink>
</template>

<script setup>
defineProps({
	blog: {
		type: Object,
		required: true,
	},
});

const getReadableDate = dateString => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};
</script>
