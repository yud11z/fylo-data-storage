/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'mobile': {'max': '375px'},
      'desktop': '1440px',
    },
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent1: 'hsl(var(--color-accent1) / <alpha-value>)',
        accent2: 'hsl(var(--color-accent2) / <alpha-value>)',
      },
      fontFamily: {
        raleways: ['Raleway'],
      },
      backgroundImage: {
        'bg-mobile': "url('/images/bg-mobile.png')",
        'bg-desktop': "url('/images/bg-desktop.png')",
      },
      padding: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '400px': '400px',
      },
      borderRadius: {
        'large': '100px',
      }, 
      inset: {
        '335px': '335px',
        '400px': '400px',
      }
    },
  },
  plugins: [require("daisyui")],
}
