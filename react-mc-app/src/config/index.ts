export const config = {
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID,
    keySecret: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
  },
  api: {
    baseUrl: `${
      (import.meta.env.VITE_PORT as string) || "http://localhost:8080"
    }/mc/api`,
  },
  appwrite: {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  },
  google: {
    googleRedirectUrl: import.meta.env.VITE_GOOGLE_REDIRECT_URL as string,
    googleCallbackUrl: import.meta.env.VITE_GOOGLE_CALLBACK_URL as string,
  },
  // Add other configuration here
} as const;
