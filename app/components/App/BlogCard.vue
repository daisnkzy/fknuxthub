<template>
	<NuxtLink :to="blog._path" class="group">
		<article class="font-light">
			<div class="mb-6 overflow-hidden rounded-xl aspect-video">
				<img
					loading="lazy"
					:src="blog.image"
					alt="img"
					sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 28vw"
					class="object-cover w-full h-full transition duration-200 ease-in-out hover:scale-110"
				/>
			</div>
			<h2
				class="mb-2 font-medium text-xl leading-8 text-[#08090a] dark:text-gray-100"
			>
				{{ blog.title }}
			</h2>
			<p
				class="mb-6 text-sm tracking-normal line-clamp-2 text-[#08090a]/80 dark:text-white/70"
			>
				{{ blog.description }}
			</p>
			<div class="flex items-center justify-start gap-3">
				<UAvatar size="xs" :src="blog.avatarUrl" alt="img" />
				<div
					class="flex items-center gap-1 text-[#08090a]/80 dark:text-white/70 text-sm"
				>
					<div class="font-semibold">
						{{ blog.author }}
					</div>
					<div>•</div>
					<div>{{ getReadableDate(blog.published) }}</div>
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
