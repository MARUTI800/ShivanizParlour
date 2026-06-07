/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Cabinet Grotesk"', 'sans-serif'],
                body: ['"Switzer"', 'sans-serif'],
            },
            colors: {
                base: '#F5EDE3',
                'base-light': '#FBF7F2',
                ink: '#2C2218',
                'ink-soft': '#8B7E6E',
                dark: '#2C2218',
                card: '#FAF5EF',
                accent: '#C4A882',
                cream: '#F5EDE3',
                'cream-light': '#FBF7F2',
                'cream-dark': '#E8DDD0',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontSize: {
                'massive': ['clamp(4rem, 13vw, 14rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
                'huge': ['clamp(3rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
                'big': ['clamp(2.25rem, 6vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
