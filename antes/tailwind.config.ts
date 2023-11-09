import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--clr-primary) / <alpha-value>)',
      secondary: 'rgb(var(--clr-secondary) / <alpha-value>)',
      callToAction: 'rgb(var(--clr-callToAction) / <alpha-value>)',
      font1: 'rgb(var(--clr-font-1) / <alpha-value>)',
      font2: 'rgb(var(--clr-font-2) / <alpha-value>)',
      background: 'rgb(var(--clr-background) / <alpha-value>)',
      section: 'rgb(var(--clr-section) / <alpha-value>)',
      icon: 'rgb(var(--clr-icon) / <alpha-value>)',
      extra: 'rgb(var(--clr-extra) / <alpha-value>)',
      hyperlink: 'rgb(var(--clr-hyperlink) / <alpha-value>)',
      inputBorder: 'rgb(var(--clr-input-border) / <alpha-value>)'
    },
    extend: {
      boxShadow: {
        'cbs': '0px 10px 15px -3px rgb(var(--clr-box-shadow) / 0.1), 0px -10px 15px -3px rgb(var(--clr-box-shadow) / 0.1)',
        'cbs-sm': '0px 2px 8px 0px rgb(var(--clr-box-shadow) / 0.1)'
      },
      fontFamily: {
        'font1': ['Montserrat', 'sans-serif'],
        'font2': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'title': "var(--bg-title)",
        'info': "var(--bg-info)",
        'login': "var(--bg-login)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
export default config
