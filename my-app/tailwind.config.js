/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans these files
  theme: {
    extend: {}, // Customize if needed
  },
  plugins: [], // You can add plugins later
};
