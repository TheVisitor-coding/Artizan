const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            50: '#faf6f2',
            100: '#f3ebe1',
            200: '#e6d5c2',
            300: '#d7b89a',
            400: '#c79975',
            500: '#b97d56',
            600: '#ac6b4a',
            700: '#8f553f',
            800: '#744638',
            900: '#5e3b30',
            950: '#321e18',
            foreground: '#FFFFFF',
            DEFAULT: '#b97d56'
          }
        }
      },
      dark: {
        colors: {
          primary: {
            whiskey: {
              50: '#faf6f2',
              100: '#f3ebe1',
              200: '#e6d5c2',
              300: '#d7b89a',
              400: '#c79975',
              500: '#b97d56',
              600: '#ac6b4a',
              700: '#8f553f',
              800: '#744638',
              900: '#5e3b30',
              950: '#321e18'
            }
          }
        }
      }
    }
  })]
}
