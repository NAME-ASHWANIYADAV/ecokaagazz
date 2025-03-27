
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				kaagazz: {
					'cream': '#F8F5F0',
					'parchment': '#F4EBD0',
					'gold': '#D4AF37',
					'bronze': '#CD7F32',
					'dark-brown': '#4A3C31',
					'deep-green': '#2C5545',
					'charcoal': '#333333',
					'soft-white': '#FCFCFC',
					'beige': '#E8DCCA',
					'sage': '#BCB88A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				display: ['Cormorant Garamond', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-from-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'draw-line': {
					'0%': { 'stroke-dashoffset': '100%' },
					'100%': { 'stroke-dashoffset': '0%' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-slow': 'fade-in 0.8s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'slide-from-right': 'slide-from-right 0.5s ease-out forwards',
				'zoom-in': 'zoom-in 0.5s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'draw-line': 'draw-line 2s ease-in-out forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'shimmer': 'shimmer 3s infinite linear'
			},
			backgroundImage: {
				'gradient-gold': 'linear-gradient(135deg, #E8DCCA 0%, #D4AF37 100%)',
				'gradient-earth': 'linear-gradient(135deg, #4A3C31 0%, #2C5545 100%)',
				'gradient-parchment': 'linear-gradient(135deg, #F8F5F0 0%, #F4EBD0 100%)',
				'noise-texture': "url('/public/lovable-uploads/noise-texture.png')",
				'hero-pattern': "url('/public/lovable-uploads/hero-pattern.svg')",
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
			boxShadow: {
				'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
				'medium': '0 8px 24px rgba(0, 0, 0, 0.08)',
				'hard': '0 16px 32px rgba(0, 0, 0, 0.12)',
				'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
				'gold': '0 8px 24px rgba(212, 175, 55, 0.15)',
			},
			width: {
				'screen-90': '90vw',
			},
			height: {
				'screen-90': '90vh',
			},
			maxWidth: {
				'8xl': '90rem',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;