module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica','Arial', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        saolDisplay: ['Saol Display', 'serif'],
        notoSerifDisplay: ['Noto Serif Display', 'serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        ebGaramond: ['EB Garamond', 'serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
      spacing: {
        18: '4.5rem' 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
