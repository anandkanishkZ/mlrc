/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom MLRC Brand Colors
        primary: {
          50: '#f3f8ff',
          100: '#e6f1ff',
          200: '#d9ebff',
          300: '#b8dbff',
          400: '#97cbff',
          500: '#1158a6', // Main brand blue
          600: '#0e4a8f',
          700: '#0b3c78',
          800: '#082e61',
          900: '#05204a',
        },
        secondary: {
          50: '#f0fbf5',
          100: '#e1f7eb',
          200: '#d2f3e1',
          300: '#a5e7c3',
          400: '#78dba5',
          500: '#126dbc', // Main brand teal-blue
          600: '#0f5da1',
          700: '#0c4d86',
          800: '#093d6b',
          900: '#062d50',
        },
        accent: {
          50: '#fef6f6',
          100: '#fdeded',
          200: '#fcdbdb',
          300: '#f8b7b7',
          400: '#f49393',
          500: '#e60e0c', // Main brand red
          600: '#cc0c0a',
          700: '#b30a09',
          800: '#990807',
          900: '#800605',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'Poppins', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}