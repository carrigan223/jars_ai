import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        pill: "132px",
        column: "83px",
        'ran-col': '208px',
      },
      height: {
        pill: "49px",
        column: "354px",
        'ran-col': '80px',
      },
      borderRadius: {
        pill: "24.5px",
        column: "30px",
      },
      colors: {
        pill: "#D9D9D9",
        'ran-col': '#F5F5F3'
      },
      padding: {
        title: "28px",
      },
      



      fontSize: {
        title: ["64px", "77.45px"],
        header: ["20px", "24.2px"],
        'col-num': ['15px', '18.15px'],
       
      },
    },
  },
  plugins: [],
};
export default config;
