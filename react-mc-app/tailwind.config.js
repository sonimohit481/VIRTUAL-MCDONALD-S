/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        cold: "url(/public/cursor.png), default",
      },
    },
  },
  plugins: [],
};
