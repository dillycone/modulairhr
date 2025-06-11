/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',      // include traditional `pages/` routes
    './components/**/*.{js,ts,jsx,tsx,mdx}', // shared UI components
    './lib/**/*.{js,ts,jsx,tsx,mdx}',        // utilities & helpers
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}