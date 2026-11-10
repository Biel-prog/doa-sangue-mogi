/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F8CED6',
          300: '#F2A6B5',
          400: '#E66F86',
          500: '#B3263A', // Highlight Red
          600: '#991B2E',
          700: '#7F1728', // Primary Burgundy
          800: '#681321',
          900: '#53101B',
          950: '#34050D',
        },
        brand: {
          red: '#B3263A',
          burgundy: '#7F1728',
          offwhite: '#FAF8F8',
          charcoal: '#1A1D20',
          muted: '#62666D',
          roseBg: '#FFF5F6',
          border: '#EFE8E9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 10px 30px rgba(127, 23, 40, 0.04)',
        'elevated': '0 10px 40px -10px rgba(127, 23, 40, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 40px -5px rgba(179, 38, 58, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
