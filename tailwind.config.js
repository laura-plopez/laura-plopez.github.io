/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        short: { raw: '(min-width: 1024px) and (max-height: 820px)' },
      },
      colors: {
        canvas: '#fafafa',
        tint: '#f1f1f3',
        line: '#e4e4e7',
        ink: {
          DEFAULT: '#18181b',
          soft: '#3f3f46',
          muted: '#66666f',
          faint: '#b4b4bb',
        },
        accent: {
          DEFAULT: '#2563eb',
          tint: '#eff4ff',
          ring: '#bfd3ff',
        },
        ok: { DEFAULT: '#16a34a', tint: '#f0fdf4' },
        ko: { DEFAULT: '#dc2626', tint: '#fef2f2' },
        warn: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.16, 1, .3, 1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
        shake: {
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
        dot: {
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        rise: 'rise .45s cubic-bezier(.16, 1, .3, 1) both',
        shake: 'shake .42s ease-in-out',
        dot: 'dot 1s ease-in-out infinite',
      },
    },
  },
}
