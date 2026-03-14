module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent: '#06b6d4'
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  },
  plugins: []
};
