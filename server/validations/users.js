import { z } from "zod";

export const userIdSchema = z.object({
	userId: z.string().min(1).max(255),
});

export const emailVerificationSchema = z.object({
	email: z.string().email(),
});

export const emailCodeVerificationSchema = z.object({
	token: z.string(),
});

export const otpVerificationSchema = z.object({
	email: z
		.string()
		.email()
		.min(1)
		.max(255)
		.transform(v => v.toLowerCase()),
	code: z.string().length(5),
});
