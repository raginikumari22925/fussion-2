/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050816',
          bg2: '#0A1022',
          bg3: '#111827',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          glow: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 15s linear infinite',
        'orbit-reverse': 'orbitReverse 12s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(80px) rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 50%, #0A1022 0%, #050816 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        'glow-blue': 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3), 0 0 60px rgba(6,182,212,0.1)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)',
        'card-glow': '0 0 40px rgba(6,182,212,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};
