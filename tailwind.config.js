module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1280px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      borderColor: {
        gray: {
          DEFAULT: "#e4e2e0",
          400: "#f6f6f6",
          500: "#ECECEC",
        },
        primary: {
          400: "#2557a7",
          500: "#085ff7",
        },
      },
      textColor: {
        dark: "#2d2d2d",
        primary: {
          400: "#2557a7",
          500: "#085ff7",
        },
      },
      backgroundColor: {
        primary: {
          100: "#9bb1f0",
          300: "#164081",
          400: "#2557a7",
        },
        blue: {
          400: "#E8F3FC",
        },
        gray: {
          400: "#e4e2e0",
          500: "#d4d2d0",
          600: "#f3f2f1 ",
          700: "#eff2f6",
          800: "#595959",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
