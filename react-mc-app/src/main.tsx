import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { auth } from "./config/firebase";

// Check if Firebase is initialized correctly
auth.app.options.apiKey === import.meta.env.VITE_FIREBASE_API_KEY ||
  console.error(
    "Firebase initialization failed. Check your environment variables."
  );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
