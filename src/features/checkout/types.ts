export interface CheckoutState {
  step: "shipping" | "payment" | "review";
  isProcessing: boolean;
  error: string | null;
}
