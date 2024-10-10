/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // You can add custom theme extensions here if needed
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}