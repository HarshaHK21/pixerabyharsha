/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
        'neon-purple': '#b624ff',
        'neon-blue': '#00d9ff',
        'neon-gold': '#ffd700',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(182, 36, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 217, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
