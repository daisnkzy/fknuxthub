import { CheckoutOptions, CustomerPortalOptions, Plan } from "./types";

export interface PaymentService {
	getAllPlans(): Promise<Plan[]>;
	createCheckoutLink(options: CheckoutOptions): Promise<string>;
	createCustomerPortalLink(options: CustomerPortalOptions): Promise<string>;
	cancelSubscription(id: string): Promise<void>;
	updateSubscription(customerId: string, newPriceId: string): Promise<void>;
}
