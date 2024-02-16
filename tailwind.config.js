/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        gradBlueish: "linear-gradient(135deg, #3c7cfc, #59c0e8)",
        gradRedish: "linear-gradient(90deg, #ff4d4d, #f9cb28)",
      },

      colors: {
        // Grey Palette
        cloud: "#fafafa", // Main
        fog: "#f0f0f0", // Lighter
        ash: "#d6d6d6", // Darker
        slate: "#bcbcbc", // Even Darker
        stone: "#a2a2a2", // Dark
        pebble: "#888888", // Very Dark

        // Blue Palette
        azure: "#3c7cfc", // Main
        sky: "#659dff", // Lighter
        ocean: "#1b69da", // Darker
        deepSea: "#1453b0", // Even Darker
        navy: "#0a3d82", // Dark
        midnight: "#022765", // Very Dark

        // Light Blue Palette
        seaFoam: "#59c0e8", // Main
        glacier: "#83d4f2", // Lighter
        wave: "#3da9d9", // Darker
        turquoise: "#2a92bf", // Even Darker
        teal: "#207b9b", // Dark
        deepOcean: "#135f77", // Very Dark

        // Yellow Palette
        sunshine: "#f9cb28", // Main
        lemon: "#fcd748", // Lighter
        gold: "#e6b422", // Darker
        mustard: "#d3a01e", // Even Darker
        amber: "#bf8c1b", // Dark
        bronze: "#a57718", // Very Dark

        // Red Palette
        scarlet: "#ff4d4d", // Main
        blush: "#ff7676", // Lighter
        crimson: "#e43b3b", // Darker
        garnet: "#c82a2a", // Even Darker
        ruby: "#b12222", // Dark
        maroon: "#8b1a1a", // Very Dark
      },
      animation: {
        pulseLiveGRN: "pulseLiveGRN 1.5s infinite",
        pulseLiveYLW: "pulseLiveYLW 1.5s infinite",
      },
      keyframes: {
        pulseLiveGRN: {
          "0%": { boxShadow: "0 0 0 0 rgba(0, 222, 128,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(74, 222, 128,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74, 222, 128,0)" },
        },
        pulseLiveYLW: {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 225, 100,0.8)" },
          "70%": { boxShadow: "0 0 0 10px rgba(74, 222, 128,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74, 222, 128,0)" },
        },
      },
    },
  },
  plugins: [],
};
