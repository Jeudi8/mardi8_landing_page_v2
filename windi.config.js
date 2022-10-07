import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  preflight: true,

  darkMode: 'class',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },

  shortcuts: {
    s_h1: 'font-thin text-4xl md:text-7xl lg:text-8xl',
    s_h2: 'font-thin text-3xl md:text-6xl lg:text-7xl',
    s_h3: 'font-thin text-2xl md:text-4xl lg:text-5xl',
    s_sub: 'font-medium text-[12px]',
    s_centered: 'absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]',

    s_h4: 'text-xl font-bold sm:(text-3xl) md:(text-4xl)',
    s_h5: 'text-lg font-bold sm:(text-2xl) md:(text-3xl)',
    s_h6: 'text-md font-bold sm:(text-xl) md:(text-2xl)',
  },
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#bbbab2',
        ternary: 'rgba(255,255,255,0.2)',
      },
    },
  },
});
