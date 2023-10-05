import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      callToAction: 'rgb(var(--color-callToAction) / <alpha-value>)',
      font1: 'rgb(var(--color-font-1) / <alpha-value>)',
      font2: 'rgb(var(--color-font-2) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      icon: 'rgb(var(--color-icon) / <alpha-value>)',
      extra: 'rgb(var(--color-extra) / <alpha-value>)',
      hyperlink: 'rgb(var(--color-hyperlink) / <alpha-value>)',
      inputBorder: 'rgb(var(--color-input-border) / <alpha-value>)'
    },
    extend: {},
  },
  plugins: [],
}
export default config
