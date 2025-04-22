export default defineTask({
	meta: {
		name: "db:seed",
		description: "Run database seed task",
	},
	async run() {
		console.log("Running DB seed task...");
		const users = [
			{
				name: "John Doe",
				email: "john@example.com",
				emailVerified: true,
				avatar: "https://example.com/avatar/john.png",
				createdAt: new Date(),
			},
		];
		await useDB().insert(tables.users).values(users);
		return { result: "success" };
	},
});
