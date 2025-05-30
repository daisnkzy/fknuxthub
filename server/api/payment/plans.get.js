import { usePayment } from "~~/server/services/payment";
const { paymentProvider } = useRuntimeConfig();

export default defineEventHandler(async event => {
	const plans = await usePayment(paymentProvider).getAllPlans();
	return {
		activeSubscription: null,
		plans,
	};
});
