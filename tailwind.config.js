/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "sender" : "url(/src/assets/image/sender.png)",
        "receiver" : "url(/src/assets/image/receiver.png)"
      }
    },
  },
};
