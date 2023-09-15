import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
      colors: {
        'pry-blue': '#2c7ef8',
        'pry-green': '#59ae43',
        'pry-red': '#f82c2c',
        'pry-gray': '#4d5254',
        'sec-blue': '#5bb59a',
        'adv-blue': '#edf3fd',
        'main-blue': '#252f3d',
      }
    },
  },
  plugins: [],
}
export default config
