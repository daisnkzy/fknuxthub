<script setup>
const contents = [
	{
		id: 1,
		comment:
			"This starter kit is everything I needed to kickstart my SaaS! 🔥 ",
		name: "John Smith",
		position: "Full Stack Developer",
		avatarUrl: "https://i.pravatar.cc/150?img=52",
	},
	{
		id: 2,
		comment:
			"Incredible time-saver! The integration with payments and authentication is seamless, making the build process so much faster.",
		name: "Emily Johnson",
		position: "Frontend Engineer",
		avatarUrl: "https://i.pravatar.cc/150?img=53",
	},
	{
		id: 3,
		comment:
			"The starter kit's architecture is solid and clean. I had zero issues setting it up with Nuxt3. It made SaaS building easy and efficient!",
		name: "Michael Williams",
		position: "Software Architect",
		avatarUrl: "https://i.pravatar.cc/150?img=54",
	},
	{
		id: 4,
		comment:
			"Honestly, this is a must-have for anyone building a SaaS. It's fast, easy, and everything works like a charm. Huge time-saver!",
		name: "Sarah Davis",
		position: "Backend Developer",
		avatarUrl: "https://i.pravatar.cc/150?img=55",
	},
	{
		id: 5,
		comment:
			"So happy with how smooth everything went! This boilerplate has everything I need to get started without the usual hassle.",
		name: "David Brown",
		position: "DevOps Engineer",
		avatarUrl: "https://i.pravatar.cc/150?img=56",
	},
	{
		id: 6,
		comment:
			"Super easy to use. All the features are bundled together with great docs. I got my project off the ground in no time.Super easy setup and no complicated configurations. Highly recommend!Finally, something that doesn't make me fight bugs for hours. The pre-tested code is a complete lifesaver! I've spent too much time in the past dealing with broken features and debugging issues, but this kit made everything so simple. I feel confident that everything will work as expected, which is huge for me. The code is solid, well-structured, and everything just runs smoothly. I'm so glad I found this!",
		name: "Jessica Wilson",
		position: "System Engineer",
		avatarUrl: "https://i.pravatar.cc/150?img=57",
	},
	{
		id: 7,
		comment:
			"Absolutely love working with this template! It's intuitive, well-documented, and has everything I need to start building my project.",
		name: "Robert Taylor",
		position: "Developer",
	},
];
</script>

<template>
	<section class="px-12 py-32 bg-cool-50 dark:bg-cool-950 rounded-3xl">
		<UContainer>
			<div
				class="flex flex-col items-center justify-between mb-16 gap-y-4 md:flex-row"
			>
				<h2
					class="text-3xl md:text-5xl text-[#262626] dark:text-[#dedede] max-w-lg font-semibold"
				>
					What our customers say about us
				</h2>
				<p
					class="max-w-lg text-base font-light md:text-lg text-cool-600 dark:text-cool-300"
				>
					I know you're wondering if it's really as good as it sounds. Rest
					assured, we care just as much, and we keep it real.
				</p>
			</div>

			<div
				class="gap-4 space-y-4 column-1 md:columns-2 lg:columns-3 xl:columns-4"
			>
				<TestimonialCardNormal
					v-for="content in contents"
					:key="content.id"
					:comment="content.comment"
					:name="content.name"
					:position="content.position"
					:avatarUrl="content.avatarUrl"
				/>
			</div>
		</UContainer>
	</section>
</template>
