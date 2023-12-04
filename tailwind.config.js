// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      screens: {
        DEFAULT: '375px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1200px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
