module.exports = {
  purge: ["./public/**/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "header-image": "url(/img/header.jpg)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen sm': {
          maxWidth: '580px',
        },
        '@screen md': {
          maxWidth: '720px',
        },
        '@screen lg': {
          maxWidth: '900px',
        },
        '@screen xl': {
          maxWidth: '1280px',
        },
      }
    })
  }],
}
