/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'inner-top-light': 'inset 0px 1px 1px rgba(0, 0, 0, 0.5)', // Light mode shadow
        'inner-top-dark': 'inset 0px 1px 1px rgba(211, 211, 211, 0.5)', // Dark mode shadow
      },
      colors: {
        // Light mode colors
        light: {
          analyticsBg: "#E5EADB",
          navbarBg: "#FFFFFF", // Navbar background color
          buttonBg: "#F6F6F6",
          pageBg: "#F6F6F6", // Main page background color
          headingText: "#000000", // Heading text color
          priceCardBg : "#F4F4F4",
          paragraphText: "#828282", // Paragraph text color
          cardBg: "#FFFFFF", // Cards background color
          primary: "#1E40AF", // Custom primary color (used across modes)
          secondary: "#F59E0B", // Custom secondary color
          accent: "#10B981", // Accent color
          danger: "#EF4444", // Danger color
          customGray: {
            light: "#F3F4F6", // Custom light gray
            DEFAULT: "#9CA3AF", // Custom default gray
            dark: "#4B5563", // Custom dark gray
          },
        },
        // Dark mode colors
        dark: {
          analyticNumberColor : "#33C6AB",
          analyticsBg: "#242424",
          navbarBg: "#0F0F0F", // Navbar background color
          buttonBg: "#1F1F1F",
          priceCardBg : "#161616",
          pageBg: "#1D1C20", // Main page background color
          greenBg: "#171F05",
          lightGreen: "#A3DC2F",
          darkGreen:"#1F7A1F",
          iconsBgColor: "#4B4B4B",
          headingText: "#FFFFFF", // Heading text color
          paragraphText: "#9B9CA1", // Paragraph text color
          cardBg: "#242424", // Cards background color
          primary: "#1E40AF", // Primary color (used across modes)
          secondary: "#F59E0B", // Secondary color
          accent: "#10B981", // Accent color
          danger: "#EF4444", // Danger color
          customGray: {
            light: "#F3F4F6", // Custom light gray
            DEFAULT: "#9CA3AF", // Custom default gray
            dark: "#4B5563", // Custom dark gray
          },
        },
      },
    },
  },
  plugins: [],
};
