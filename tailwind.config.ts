import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  daisyui: {
    themes: ['night'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bittersweet: '#F97C5C',
        amaranth: '#EA2A4F',
        midnightBlue: '#0E2453',
        lochmara: '#2E6A9D',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui'), nextui()],
};
export default config;
