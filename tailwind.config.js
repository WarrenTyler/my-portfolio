/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Set dark mode to 'class'
  theme: {
    extend: {
      colors: {
        // Define light mode colors
        body: "#FFFFFF",
        "selected-text": "#007BFF",
        theme: "#1976D2",
        nav: "#F0F0F0",
        secondary: "#DDDDDD",
        badge: "#C0C0C0",
        "input-border": "#CCCCCC",
        input: "#F0F0F0",

        // Define dark mode variants
        "body-dark": "#17171F",
        "selected-text-dark": "#A3A3FF",
        "theme-dark": "#3F3FFF",
        "nav-dark": "#404053",
        "secondary-dark": "#9191A4",
        "badge-dark": "#3F3F51",
        "input-border-dark": "#565666",
        "input-dark": "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
