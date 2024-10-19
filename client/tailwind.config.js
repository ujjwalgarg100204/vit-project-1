import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|card|code|input|kbd|link|navbar|radio|select|snippet|toggle|ripple|spinner|listbox|divider|popover|scroll-shadow).js',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
