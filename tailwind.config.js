/** @type {import('tailwindcss').Config} */
import("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'gray-light': '#ececec',
        "titles": "#B2A4FF",
      }
    },
  },
  plugins: [],
}