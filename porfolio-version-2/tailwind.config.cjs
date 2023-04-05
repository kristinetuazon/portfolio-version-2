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
      white: "#f8f8f8",
      pink: "#c88e95",
      neutral1: "#e2d9d0",
      neutral2: "#d8ccc0",
      neutral3: "#cebfb0",
      neutral4: "#c4b2a0",
      neutral5: "#baa590",
      neutral6: "#b19981",
      neutral7: "#a78c71",
      neutral8: "#9d7f61",
    },
    fontFamily: {
      title: ['var(--font-krylon)'],
      title2: ['var(--font-amsterdam)'],
      heading: ['var(--font-neutralface)'],
      body: ['var(--font-trap)']

      // title: ['Krylon','serif'],
      // title2:['AmsterdamScript', 'serif'],
      // heading: ['NeutralFaceRegular', 'serif'],
      // headingBold:['NeutralFaceBold', 'serif'],
      // heading2:['MarseilleRegular', 'serif'],
      // bodyMedium: ['TrapMedium', 'serif'],
      // bodyLight: ['TrapLight', 'serif'],
      // bodyRegular: ['TrapRegular', 'serif'],
      // bodyThin: ['Petrona_Thin', 'serif'],
      // bodyBold: ['TrapBold', 'serif'],
      // bodyBlack: ['TrapBlack', 'serif'],
      // bodySemibold: ['TrapBlack', 'serif'],
    },
  },
  plugins: [],
};

module.exports = config;
