/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        wide: '840px',
      },
      colors: {
        main: '#161616',
        surface: {
          DEFAULT: '#f4f2ec',
          hover: '#e4e1d9',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#3a3936',
          subtle: '#4a4945',
          muted: '#6b6a66',
        },
        line: {
          DEFAULT: '#e6e3db',
          strong: '#cfccc4',
        },
        accent: {
          DEFAULT: '#b6f36b',
          teal: '#0f5c55',
        },
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(52px, 7.6vw, 136px)', { lineHeight: '.92', letterSpacing: '-0.045em' }],
        title: ['clamp(56px, 7vw, 112px)', { lineHeight: '.9', letterSpacing: '-0.045em' }],
        subtitle: ['clamp(24px, 2.2vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        row: ['clamp(22px, 2vw, 28px)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        display: '-0.045em',
        heading: '-0.03em',
        snug: '-0.02em',
      },
      borderRadius: {
        image: '10px',
        nav: '12px',
        row: '14px',
        card: '16px',
        panel: '20px',
      },
      backgroundImage: {
        stripes: 'repeating-linear-gradient(135deg, #dedad1 0 10px, #ebe8e1 10px 20px)',
        'stripes-dark': 'repeating-linear-gradient(135deg, rgba(255, 255, 255, .12) 0 10px, rgba(255, 255, 255, .04) 10px 20px)',
        dots: 'radial-gradient(rgba(255, 255, 255, .08) 1px, transparent 1px)',
        pixels: 'repeating-conic-gradient(rgba(182, 243, 107, .16) 0 25%, transparent 0 50%)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'blur-in': {
          from: { opacity: '0', filter: 'blur(4px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
        draw: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(182, 243, 107, .65)' },
          '70%': { boxShadow: '0 0 0 9px rgba(182, 243, 107, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(182, 243, 107, 0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'menu-drop': {
          from: { clipPath: 'inset(0 0 100% 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        rise: 'rise .55s cubic-bezier(.2, .7, .2, 1) both',
        fade: 'fade 1.1s ease both',
        'blur-in': 'blur-in 1.8s cubic-bezier(.33, 0, .2, 1) both',
        draw: 'draw .5s ease-out both',
        'pulse-ring': 'pulse-ring 2.2s ease-out infinite',
        blink: 'blink 1s step-end infinite',
        'menu-drop': 'menu-drop .45s cubic-bezier(.2, .7, .2, 1) both',
      },
    },
  },
}
