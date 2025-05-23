import { PaymentService } from "./PaymentService";
import { CheckoutOptions, CustomerPortalOptions, Plan } from "./types";

import {
	createCheckout,
	getSubscription,
	lemonSqueezySetup,
	listProducts,
	cancelSubscription as lsCancelSubscription,
	updateSubscription,
} from "@lemonsqueezy/lemonsqueezy.js";

export class LemonSqueezyService implements PaymentService {
	constructor() {
		const apiKey = process.env.LEMONSQUEEZY_API_KEY;
		if (!apiKey) {
			throw new Error("LemonSqueezy API key is missing");
		}

		lemonSqueezySetup({
			apiKey,
			onError: error => console.error("LemonSqueezy Error:", error),
		});
	}

	async getAllPlans(): Promise<Plan[]> {
		const response = await listProducts({
			include: ["store", "variants"],
		});

		const plans: Plan[] =
			response.data?.data?.map((product): Plan => {
				const store = response.data?.included?.find(
					item =>
						item.type === "stores" &&
						Number(product.attributes.store_id) === Number(item.id),
				);
				const currency = (store?.attributes.currency as string) ?? "USD";

				const variants: PlanVariant[] = (response.data?.included ?? [])
					.filter(
						item =>
							item.type === "variants" &&
							item.attributes.is_subscription &&
							Number(item.attributes.product_id) === Number(product.id),
					)
					.map(
						(variant): PlanVariant => ({
							id: variant.id,
							interval: String(variant.attributes.interval),
							interval_count: Number(variant.attributes.interval_count),
							price: Number.parseFloat(String(variant.attributes.price)),
							currency,
						}),
					);

				return {
					id: product.id,
					name: product.attributes.name,
					description: product.attributes.description,
					storeId: String(store?.id),
					variants,
				};
			}) ?? [];

		return plans.filter(plan => plan.variants.length > 0);
	}

	async createCheckoutLink(options: CheckoutOptions): Promise<string> {
		const response = await createCheckout(
			String(process.env.LEMONSQUEEZY_STORE_ID),
			options.variantId,
			{
				productOptions: {
					redirectUrl: options.redirectUrl,
					enabledVariants: [Number.parseInt(options.variantId)],
				},
				checkoutData: {
					email: options.email,
					name: options.name,
					custom: {
						user_id: options.userId,
					},
				},
			},
		);

		const url = response.data?.data.attributes.url;
		if (!url) {
			throw new Error("Failed to create checkout link");
		}

		return url;
	}

	async createCustomerPortalLink(
		options: CustomerPortalOptions,
	): Promise<string> {
		const subscription = await getSubscription(String(options.id));
		let url: string | undefined;

		switch (options.flow) {
			case "update-plan":
				url =
					subscription.data?.data.attributes.urls
						?.customer_portal_update_subscription;
				break;
			case "update-payment-info":
				url = subscription.data?.data.attributes.urls?.update_payment_method;
				break;
			case "cancel":
				url = subscription.data?.data.attributes.urls?.customer_portal;
				break;
			default:
				url = subscription.data?.data.attributes.urls?.customer_portal;
				break;
		}

		if (!url) {
			throw new Error("Failed to create customer portal link");
		}

		return url;
	}

	async cancelSubscription(id: string): Promise<void> {
		await lsCancelSubscription(id);
	}

	async updateSubscription(
		customerId: string,
		newPriceId: string,
	): Promise<void> {
		const subscriptions = await listProducts({
			filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
			include: ["variants"],
		});

		const subscription = subscriptions.data?.data?.find(
			sub => sub.id === customerId,
		);
		if (!subscription) {
			throw new Error("No subscriptions found for the customer");
		}

		await updateSubscription(subscription.id, {
			variantId: parseInt(newPriceId),
		});
	}
}
