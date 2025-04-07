// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Dark mode colors as default
        background: "#171717",
        foreground: "#f5f5f5",
        card: "#262626",
        primary: "#ff5000",
        "primary-foreground": "#ffffff",
        secondary: "#404040",
        "secondary-foreground": "#f5f5f5",
        muted: "#262626",
        "muted-foreground": "#a3a3a3",
        accent: "#7c2d12",
        "accent-foreground": "#fef3c7",
        border: "#404040",

        // Light mode colors
        "light-background": "#f5f5f5",
        "light-foreground": "#171717",
        "light-card": "#ffffff",
        "light-primary": "#ff5000",
        "light-primary-foreground": "#ffffff",
        "light-secondary": "#262626",
        "light-secondary-foreground": "#f5f5f5",
        "light-muted": "#e5e5e5",
        "light-muted-foreground": "#737373",
        "light-accent": "#fef3c7",
        "light-accent-foreground": "#7c2d12",
        "light-border": "#d4d4d4",
      },
    },
  },
  plugins: [],
};
