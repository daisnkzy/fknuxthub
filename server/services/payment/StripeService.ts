import { PaymentService } from "./PaymentService";
import {
	CheckoutOptions,
	CustomerPortalOptions,
	Plan,
	PlanVariant,
} from "./types";

import Stripe from "stripe";

export class StripeService implements PaymentService {
	private stripeClient: Stripe;

	constructor() {
		const apiKey = process.env.STRIPE_SECRET_KEY;
		if (!apiKey) {
			throw new Error("Stripe API key is missing");
		}
		this.stripeClient = new Stripe(apiKey);
	}

	async getAllPlans(): Promise<Plan[]> {
		const response = await this.stripeClient.prices.list({
			active: true,
			expand: ["data.product"],
		});

		const plansMap: Record<string, Plan> = {};

		response.data.forEach(price => {
			const product = price.product as Stripe.Product;

			if (!plansMap[product.id]) {
				plansMap[product.id] = {
					id: product.id,
					name: product.name,
					description: product.description,
					storeId: null,
					variants: [],
				};
			}

			const variant: PlanVariant = {
				id: price.id,
				interval: price.recurring?.interval ?? "year",
				interval_count: price.recurring?.interval_count ?? 0,
				price: price.unit_amount ?? 0,
				currency: price.currency,
			};

			plansMap[product.id].variants.push(variant);
		});

		return Object.values(plansMap).filter(plan => plan.variants.length > 0);
	}

	async createCheckoutLink(options: CheckoutOptions): Promise<string> {
		const session = await this.stripeClient.checkout.sessions.create({
			mode: "subscription",
			success_url: options.redirectUrl ?? "",
			line_items: [
				{
					quantity: 1,
					price: options.variantId,
				},
			],
			customer_email: options.email,
			subscription_data: {
				metadata: {
					user_id: options.userId,
				},
			},
		});

		if (!session.url) {
			throw new Error("Failed to create checkout session");
		}

		return session.url;
	}

	async createCustomerPortalLink(
		options: CustomerPortalOptions,
	): Promise<string> {
		const sessionParams: any = {
			customer: options.customerId,
			return_url: options.redirectUrl ?? "",
		};

		// Add flow_data if provided
		if (options.flowData) {
			sessionParams.flow_data = options.flowData;
		}

		const session =
			await this.stripeClient.billingPortal.sessions.create(sessionParams);

		return session.url;
	}

	async createCustomer(email: string, name: string): Promise<string> {
		const customer = await this.stripeClient.customers.create({
			email,
			name,
		});
		return customer.id;
	}

	async cancelSubscription(id: string): Promise<void> {
		await this.stripeClient.subscriptions.cancel(id);
	}

	async updateSubscription(
		customerId: string,
		newPriceId: string,
	): Promise<void> {
		const subscriptions = await this.stripeClient.subscriptions.list({
			customer: customerId,
		});
		if (!subscriptions.data.length) {
			throw new Error("No subscriptions found for the customer");
		}
		const subscription = subscriptions.data[0];
		const subscriptionItemId = subscription.items.data[0].id;
		await this.stripeClient.subscriptionItems.update(subscriptionItemId, {
			price: newPriceId,
		});
	}
}
