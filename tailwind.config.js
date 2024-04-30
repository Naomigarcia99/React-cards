/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Some useful comment
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    
    },
  },

  plugins: [require("daisyui")],
};
