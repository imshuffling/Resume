/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/content-modules/**/*.{js,jsx,ts,tsx}`,
    `./src/sidebar/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        davidblack: "#393531",
        davidblue: "#008CFF",
        davidpink: "#f40088",
        davidDarkPink: "#d4007f",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "960px",
        lg: "1216px",
        xl: "1536px",
      },
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
      fontSize: {
        xs: ".875rem",
        sm: "1rem",
        tiny: "1.125rem",
        base: "1.25rem",
        lg: "1.5rem",
        xl: "1.875rem",
        "2xl": "2.25rem",
        "3xl": "3rem",
        "4xl": "3.75rem",
        "5xl": "4.5rem",
        "6xl": "6rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "65ch", // Default for non-breakpoint views
            a: {
              transitionProperty: "color, text-decoration-color",
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // Tailwind's default easing
              "&:hover": {
                // opacity: "0.8",
                color: theme("colors.davidpink"),
                "text-decoration-color": theme("colors.davidpink"),
              },
              "&:focus": {
                color: theme("colors.davidpink"),
                "text-decoration-color": theme("colors.davidpink"),
              },
            },
          },
        },
        sm: {
          css: {
            maxWidth: "60ch", // Override for small screens
          },
        },
        md: {
          css: {
            maxWidth: "70ch", // Override for medium screens
          },
        },
        lg: {
          css: {
            maxWidth: "90ch", // Override for large screens
          },
        },
        xl: {
          css: {
            maxWidth: "70ch", // Override for extra-large screens
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
