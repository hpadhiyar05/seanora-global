/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1B1D1E',
        'surface': '#F4F4F4',
        'white': '#FFFFFF',
        'black-60': 'rgba(27,29,30,0.6)',
        'black-40': 'rgba(27,29,30,0.4)',
        'black-10': 'rgba(27,29,30,0.1)',
        'black-5': 'rgba(27,29,30,0.05)',
        'accent-blue': 'var(--accent-blue)',
        'accent-green': 'var(--accent-green)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-purple': 'var(--accent-purple)',
        'accent-pink': 'var(--accent-pink)',
        'accent-orange': 'var(--accent-orange)',
        'accent-indigo': 'var(--accent-indigo)',
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
        '96px': '96px',
        'section': '96px',
      },
      borderRadius: {
        'radius-sm': '8px',
        'radius-md': '12px',
        'radius-lg': '16px',
        'radius-pill': '999px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'pill': '999px',
      },
      fontFamily: {
        // Match the app's actual loaded fonts (see src/index.css)
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['128px', '1.2'],
        'h2': ['48px', '1.2'],
        'h3': ['24px', '1.2'],
        'h4': ['20px', '1.2'],
        'body': ['16px', '1.4'],
        'small': ['14px', '1.4'],
      },
      keyframes: {
        marquee: {
        '0%':   { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
}
