import { customAlphabet, nanoid } from "nanoid";

/**
 * Generates a new email verification code for a user and stores it in the database.
 *
 * @param {SelectUser} userId - The user object containing user details.
 * @param {number} [expiresIn=10800000] - The time in milliseconds until the verification code expires. Defaults to 3 hours.
 * @returns {Promise<String>} - A promise that resolves to the generated email verification code.
 */

export const generateEmailVerificationCode = async (
	userId: String,
	expiresIn: number = 1000 * 60 * 60 * 3, // 3 hours default
): Promise<String> => {
	const code = nanoid(32);
	await useDB()
		.insert(tables.emailVerificationCodes)
		.values({
			userId: userId,
			code,
			expiresAt: new Date(new Date().getTime() + expiresIn),
		});
	return code;
};

/**
 * Generates a new one time password for a user and stores it in the database.
 * @param {String} userId - The user id.
 * @param {number} [expiresIn=1000 * 60 * 60 * 3] - The time in milliseconds until the one time password expires. Defaults to 3 hours.
 * @param {String} [identifier] - An identifier for the one time password. Mostly used for email verification.
 * @returns {Promise<String>} - A promise that resolves to the generated one time password.
 */

export const generateOneTimePassword = async (
	userId: string,
	identifier: string,
	expiresIn: number = 1000 * 60 * 60 * 3, // 3 hours default
): Promise<string> => {
	const code = customAlphabet("0123456789", 5)();
	await useDB()
		.insert(tables.oneTimePasswords)
		.values({
			userId: userId,
			code,
			identifier,
			expiresAt: new Date(new Date().getTime() + expiresIn),
		});
	return code;
};
