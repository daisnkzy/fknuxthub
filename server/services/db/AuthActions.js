import { and, desc, eq } from "drizzle-orm";

class AuthActions {
	async findEmailVerificationCodeByUserId(userId) {
		try {
			const [existingCode] = await useDB()
				.select()
				.from(tables.emailVerificationCodes)
				.where(eq(tables.emailVerificationCodes.userId, userId));
			return existingCode || null;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async deleteEmailVerificationCode(id) {
		try {
			const record = await useDB()
				.delete(tables.emailVerificationCodes)
				.where(eq(tables.emailVerificationCodes.id, id))
				.returning()
				.get();
			return record;
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to delete email verification code: ${error}`);
		}
	}

	async findOneTimePassword(code, identifier) {
		try {
			const [storedOtp] = await useDB()
				.select()
				.from(tables.oneTimePasswords)
				.where(
					and(
						eq(tables.oneTimePasswords.code, code),
						eq(tables.oneTimePasswords.identifier, identifier),
					),
				);
			return storedOtp || null;
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to find one time password: ${error}`);
		}
	}

	async findOneTimePasswordByUserId(userId) {
		try {
			const [storedOtp] = await useDB()
				.select()
				.from(tables.oneTimePasswords)
				.where(eq(tables.oneTimePasswords.userId, userId));
			return storedOtp || null;
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to find one time password: ${error}`);
		}
	}

	async deleteOneTimePassword(id) {
		try {
			const record = await useDB()
				.delete(tables.oneTimePasswords)
				.where(eq(tables.oneTimePasswords.id, id))
				.returning()
				.get();
			return record;
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to delete one time password: ${error}`);
		}
	}

	async findEmailVerificationCode(code) {
		try {
			const [existingCode] = await useDB()
				.select()
				.from(tables.emailVerificationCodes)
				.where(eq(tables.emailVerificationCodes.code, code));
			return existingCode || null;
		} catch (error) {
			console.error(error);
			throw new Error("Failed to find verification code");
		}
	}

	async findLatestOneTimePasswordByEmail(email) {
		try {
			const [latestOtp] = await useDB()
				.select()
				.from(tables.oneTimePasswords)
				.where(and(eq(tables.oneTimePasswords.identifier, email)))
				.orderBy(desc(tables.oneTimePasswords.expiresAt))
				.limit(1);
			return latestOtp || null;
		} catch (error) {
			console.error(error);
			throw new Error(`Failed to find latest one time password: ${error}`);
		}
	}

	async createUserWithEmail(email) {
		try {
			const record = await useDB()
				.insert(tables.users)
				.values(email)
				.onConflictDoNothing()
				.returning()
				.get();
			return record;
		} catch (error) {
			console.error(error);
			throw new Error("Failed to upsert user");
		}
	}
}

export const authActions = new AuthActions();
