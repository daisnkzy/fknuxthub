<script setup>
const heading = {
	title: "One Stop SaaS Solution ",
	description:
		"With ready-made templates for landing pages, payments, blogs, and more, you can focus on your product without needing complex coding skills.",
};

const content = [
	{
		id: 1,
		subIcon: "i-solar-database-bold-duotone",
		subTitle: "Design",
		title: "Well Designed Page Kits",
		description:
			"Build your website hassle-free with built in Landing page Kits, Change the copywrite, and its done.",
		features: [
			{
				icon: "i-solar-pallete-2-line-duotone",
				text: "Beautiful and fully customizable",
			},
			{
				icon: "i-solar-moon-linear",
				text: "All components are ready for dark mode",
			},
		],
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
	},
	{
		id: 2,
		subIcon: "i-solar-slider-horizontal-bold-duotone",
		subTitle: "Blog",
		title: "Add & Manage Blog Posts",
		description:
			"Ease simplifies creating and managing blog posts. Write, edit, and publish effortlessly with a sleek, intuitive interface—complete with auto-optimized SEO, OG images.",
		features: [
			{
				icon: "i-solar-graph-linear",
				text: "Boost SEO with auto-optimized blog structures and OG images.",
			},
			{
				icon: "i-solar-soundwave-square-linear",
				text: "Keep readers engaged with end-of-post blog recommendations.",
			},
		],
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
	},
	{
		id: 3,
		subIcon: "i-solar-bolt-circle-bold-duotone",
		subTitle: "Fast",
		title: "Ship SaaS in less than 1 hour",
		description:
			"Focus on building your MVP, not the setup—no database, deployment, or payment headaches. Enjoy 100% tested features and a solid foundation with stable, trusted libraries.",
		features: [
			{
				icon: "i-solar-verified-check-linear",
				text: "Every feature is backed by 100% tested code.",
			},
			{
				icon: "i-solar-library-outline",
				text: "Built with reliable and stable libraries.",
			},
		],
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
	},
];
</script>

<template>
	<section class="py-28">
		<UContainer>
			<div class="mb-20 text-center">
				<p
					class="px-3 py-2 mx-auto mb-2 text-sm text-center border rounded-full border-cool-300 group w-max"
				>
					Features
				</p>
				<h2
					class="max-w-2xl mx-auto mb-4 text-3xl font-semibold text-cool-900 sm:text-4xl md:text-5xl dark:text-white"
				>
					{{ heading.title }}
				</h2>
				<p class="text-lg font-light text-cool-600 dark:text-cool-300">
					{{ heading.description }}
				</p>
			</div>

			<div
				v-for="(item, index) in content"
				:key="item.id"
				class="grid grid-cols-1 gap-12 mb-32 lg:grid-cols-2 md:items-start"
			>
				<div
					:class="[
						'flex flex-col items-start justify-between',
						index % 2 === 1 && 'lg:order-last',
					]"
				>
					<div class="flex items-center mb-4 gap-x-2">
						<UIcon
							:name="item.subIcon"
							class="text-base font-semibold size-6 text-primary"
						/>
						<span class="text-sm uppercase text-cool-500 dark:text-cool-400">
							{{ item.subTitle }}
						</span>
					</div>

					<h2
						class="mb-4 text-xl font-medium text-cool-900 sm:text-2xl md:text-4xl dark:text-cool-100"
					>
						{{ item.title }}
					</h2>
					<p class="mb-4 text-base font-light text-cool-600 dark:text-cool-400">
						{{ item.description }}
					</p>

					<div
						class="flex w-1/4 mb-4 border-t border-cool-300 dark:border-cool-800"
					></div>

					<div class="text-cool-600 dark:text-cool-400">
						<div
							v-for="feature in item.features"
							:key="feature.text"
							class="flex items-center mb-2 gap-x-2"
						>
							<UIcon :name="feature.icon" class="size-5" />
							<span>{{ feature.text }}</span>
						</div>
					</div>
				</div>

				<div
					class="relative border border-gray-100 shadow-sm dark:border-gray-500 overflow-clip rounded-xl"
				>
					<div class="flex justify-center p-2.5">
						<img
							:src="item.lightImage"
							loading="lazy"
							alt="image"
							class="rounded dark:hidden"
						/>
						<img
							:src="item.darkImage"
							alt="image"
							loading="lazy"
							class="hidden rounded dark:block"
						/>
					</div>
				</div>
			</div>
		</UContainer>
	</section>
</template>
