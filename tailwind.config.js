const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: isProd,
    content: [ '**/*.html', '**/*.ts' ],
  },
  theme: {
    fontFamily: {
      sasns: [ 'Nunito', ...defaultTheme.fontFamily.sans ],
    },
  },
  variants: {
    opacity: [ 'responsive', 'hover', 'focus', 'disabled' ],
  },
});
