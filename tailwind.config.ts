import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07111f',
        midnight: '#030712',
        ink: '#152033',
        mist: '#edf6fb',
        panel: 'rgba(255,255,255,0.08)',
        cyan: '#d7b46a',
        teal: '#0f766e',
        blue: '#1e3a5f',
        steel: '#a8b5c7',
        gold: '#d7b46a',
        line: 'rgba(215, 180, 106, 0.24)',
      },
      fontFamily: {
        sans: ['var(--font-lora)', 'ui-serif', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 18% 18%, rgba(215,180,106,0.18), transparent 34%), radial-gradient(circle at 82% 0%, rgba(15,118,110,0.20), transparent 32%), linear-gradient(135deg, #07111f 0%, #030712 100%)',
        grid: 'linear-gradient(rgba(215,180,106,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,180,106,0.08) 1px, transparent 1px)',
        glass: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 23, 40, 0.12)',
        glow: '0 24px 90px rgba(215, 180, 106, 0.24)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
