import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export enum SubscriptionStatus {
	TRIALING = "TRIALING",
	ACTIVE = "ACTIVE",
	PAUSED = "PAUSED",
	CANCELED = "CANCELED",
	PAST_DUE = "PAST_DUE",
	UNPAID = "UNPAID",
	INCOMPLETE = "INCOMPLETE",
	EXPIRED = "EXPIRED",
}

export const users = sqliteTable("users", {
	id: text("id")
		.primaryKey()
		.$default(() => nanoid()),
	email: text("email").notNull().unique(),
	emailVerified: integer("emailVerified", { mode: "boolean" })
		.notNull()
		.default(false),
	name: text("name"),
	avatarUrl: text("avatarUrl"),
	createdAt: integer("created_at", { mode: "timestamp" }).$default(
		() => new Date(),
	),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
	lastActive: integer("last_active", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
});

export const subscriptions = sqliteTable("subscriptions", {
	id: text("id")
		.primaryKey()
		.$default(() => nanoid()),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	customerId: text("customerId").notNull(),
	status: text("status").notNull().default(SubscriptionStatus.TRIALING),
	planId: text("planId").notNull(),
	variantId: text("variantId").notNull(),
	paymentProvider: text("paymentProvider").notNull(),
	nextPaymentDate: integer("nextPaymentDate", { mode: "timestamp" }).notNull(),
});

export const emailVerificationCodes = sqliteTable("email_verification_codes", {
	id: integer("id").primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	code: integer("code").notNull(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export const oneTimePasswords = sqliteTable("one_time_passwords", {
	id: text("id")
		.primaryKey()
		.$default(() => nanoid()),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	identifier: text("identifier").notNull(),
	code: text("code").notNull(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectSubscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;
export type SelectEmailVerificationCode =
	typeof emailVerificationCodes.$inferSelect;
export type InsertEmailVerificationCode =
	typeof emailVerificationCodes.$inferInsert;
export type SelectOneTimePassword = typeof oneTimePasswords.$inferSelect;
export type InsertOneTimePassword = typeof oneTimePasswords.$inferInsert;
