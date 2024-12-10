export const config = {
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID,
    keySecret: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  },
  // Add other configuration here
} as const;

// Type guard to ensure all environment variables are set
Object.entries(config.razorpay).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing configuration for razorpay.${key}`);
  }
});

export default config;
