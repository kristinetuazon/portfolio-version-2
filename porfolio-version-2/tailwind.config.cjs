/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      orange: "#DD8E58",
      mint: "#708A81",
      creme: "#E5D1B8",
      coffee: "#C2956E",
      charcoal: "#2B2129",
      white: "#F6FBF4",
      pink: "#c88e95",
      neutral1: "#AA9183",
      neutral2: "#BA9785",
      neutral3: "#C4A494",
      neutral4: "#D789AA",
      neutral5: "#E5CEC1",
      neutral6: "#E6D700",
    },
  },
  plugins: [],
};

module.exports = config;
