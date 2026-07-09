import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101828',
        midnight: '#1e2733',
        ink: '#1f2937',
        mist: '#f5f7fa',
        panel: 'rgba(16,24,40,0.04)',
        cyan: '#1d4ed8',
        teal: '#1d4ed8',
        blue: '#1d4ed8',
        steel: '#64748b',
        gold: '#a16207',
        line: 'rgba(16, 24, 40, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 18% 18%, rgba(29,78,216,0.06), transparent 40%), radial-gradient(circle at 82% 0%, rgba(29,78,216,0.05), transparent 36%), linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)',
        grid: 'linear-gradient(rgba(16,24,40,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,40,0.05) 1px, transparent 1px)',
        glass: 'linear-gradient(135deg, rgba(16,24,40,0.03), rgba(16,24,40,0.01))',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(16, 24, 40, 0.08)',
        glow: '0 16px 48px rgba(29, 78, 216, 0.16)',
        glass: '0 20px 60px rgba(16, 24, 40, 0.1)',
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
