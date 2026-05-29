/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#050708',
        cream: '#f5f2ec',
        orange: '#ff4d00',
        'orange-2': '#ff8c42',
        cyan: '#00aaff',
        green: '#00e87a',
        card: '#0d1117',
        border: '#1c2128',
        muted: '#6e7681',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
