/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hole: "#10141E",
        bluehole: "#161D2F",
        greyblue: "#5A698F",
        monkired: "#FC4747",
      },
      spacing: {
        bigg: "420px",
      },
      width: {
        forimage: "240px",
      },
    },
  },
  plugins: [],
};
