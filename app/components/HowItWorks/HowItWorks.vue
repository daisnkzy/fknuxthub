<script setup>
const heading = "Get started with Ease";
const description = "Start building your SaaS with few easy steps.";

const steps = [
	{
		title: "Download",
		description:
			"Access to our github repository and download the latest version of Ease.",
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
		imageAlt: "image",
	},
	{
		title: "Copywrite",
		description:
			"Quickly add the Landing page kits you like and change the copywrite.",
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
		imageAlt: "image",
	},
	{
		title: "Deploy",
		description:
			"Login to your Nuxthub account and deploy your website with a single click.",
		lightImage: "/images/light-img.png",
		darkImage: "/images/dark-img.png",
		imageAlt: "image",
	},
];
</script>

<template>
	<section class="py-28 border-y-[1.5px] dark:border-y-cool-500">
		<UContainer>
			<div
				class="grid justify-start gap-4 lg:grid-cols-[calc(50%-200px)_calc(50%+200px)]"
			>
				<div class="max-w-[55ch] text-xl mb-6">
					<p
						class="flex items-center px-3 py-2 mb-5 text-sm border border-gray-300 rounded-full bg-grayborder-gray-300 group w-max gap-x-2"
					>
						How it works
					</p>
					<h2 class="mb-5 text-3xl font-semibold lg:text-5xl">
						{{ heading }}
					</h2>
					<div class="text-lg font-light text-cool-600 dark:text-cool-300">
						<p>{{ description }}</p>
					</div>
				</div>

				<div>
					<div
						v-for="(step, index) in steps"
						:key="index"
						class="relative grid grid-cols-[60px_1fr] items-start lg:grid-cols-[200px_1fr]"
					>
						<div class="relative h-full max-md:pl-3">
							<span
								class="border-gray-300 dark:border-gray-700 absolute top-[3px] bg-primary-500 dark:bg-primary-600 z-10 grid h-6 w-6 -translate-x-3 place-items-center rounded-full border text-xs font-medium text-white shadow-[0px_0px_0px_3px_#DBDFE6] dark:shadow-[0px_0px_0px_3px_#4A5568] md:left-1/2"
							>
								{{ index + 1 }}
							</span>

							<div
								class="relative flex items-start h-full overflow-clip md:justify-center"
							>
								<!-- Timeline components remain the same -->
								<div class="flex h-[calc(100%+170px)] flex-col items-center">
									<hr
										class="-mt-[170px] w-[1px] shrink-0 bg-cool-300 dark:bg-cool-500 h-full"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="2"
										height="170"
										fill="none"
									>
										<!-- SVG content remains the same -->
									</svg>
								</div>
							</div>
						</div>

						<div class="pb-12 md:pb-16">
							<h3 class="text-2xl !leading-none mb-4">{{ step.title }}</h3>
							<p
								class="text-cool-600 dark:text-cool-300 font-light mb-6 text-[16px] md:text-lg"
							>
								{{ step.description }}
							</p>
							<div
								class="relative border border-gray-100 shadow-sm dark:border-gray-500 overflow-clip rounded-xl"
							>
								<div class="flex justify-center p-2.5">
									<div>
										<img
											:src="step.lightImage"
											loading="lazy"
											alt="step.imageAlt"
											class="rounded dark:hidden"
										/>
										<img
											:src="step.darkImage"
											alt="step.imageAlt"
											loading="lazy"
											class="hidden rounded dark:block"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UContainer>
	</section>
</template>
