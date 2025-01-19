/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular'],
        bold: ['Bold'],
        medium: ['Medium'],
      },
      fontSize: {
        xl: [
          '5.5rem',
          {
            lineHeight: '5.5rem',
            letterSpacing: '-0.156rem',
          },
        ],
        lg: [
          '3rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '-0.094rem',
          },
        ],
        medium: [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        regular: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
          },
        ],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        secondaryBackground: {
          DEFAULT: 'hsl(var(--secondary-background))',
        },
      },
    },
  },
  plugins: [
    // ({ addComponents }) => {
    //   addComponents({
    //     '.test-color-red': {
    //       '@apply text-red-900': {},
    //     },
    //   });
    // },
  ],
};
