import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  colors: {
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		card: {
		  DEFAULT: 'hsl(var(--card))',
		  foreground: 'hsl(var(--card-foreground))'
		},
		popover: {
		  DEFAULT: 'hsl(var(--popover))',
		  foreground: 'hsl(var(--popover-foreground))'
		},
		primary: {
		  DEFAULT: 'hsl(var(--primary))',
		  foreground: 'hsl(var(--primary-foreground))'
		},
		secondary: {
		  DEFAULT: 'hsl(var(--secondary))',
		  foreground: 'hsl(var(--secondary-foreground))'
		},
		muted: {
		  DEFAULT: 'hsl(var(--muted))',
		  foreground: 'hsl(var(--muted-foreground))'
		},
		accent: {
		  DEFAULT: 'hsl(var(--accent))',
		  foreground: 'hsl(var(--accent-foreground))'
		},
		destructive: {
		  DEFAULT: 'hsl(var(--destructive))',
		  foreground: 'hsl(var(--destructive-foreground))'
		},
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		ring: 'hsl(var(--ring))',
		// Professional color palette
		neutral: {
		  50: 'hsl(220, 20%, 98%)',
		  100: 'hsl(220, 16%, 96%)',
		  200: 'hsl(220, 14%, 91%)',
		  300: 'hsl(220, 13%, 86%)',
		  400: 'hsl(220, 12%, 70%)',
		  500: 'hsl(220, 11%, 52%)',
		  600: 'hsl(220, 10%, 38%)',
		  700: 'hsl(220, 9%, 31%)',
		  800: 'hsl(220, 8%, 24%)',
		  900: 'hsl(220, 7%, 17%)'
		},
		navy: {
		  50: 'hsl(215, 30%, 95%)',
		  100: 'hsl(215, 26%, 90%)',
		  200: 'hsl(215, 24%, 80%)',
		  300: 'hsl(215, 22%, 70%)',
		  400: 'hsl(215, 20%, 60%)',
		  500: 'hsl(215, 25%, 50%)',
		  600: 'hsl(215, 30%, 40%)',
		  700: 'hsl(215, 35%, 30%)',
		  800: 'hsl(215, 40%, 20%)',
		  900: 'hsl(215, 45%, 12%)'
		},
		slate: {
		  50: 'hsl(210, 20%, 98%)',
		  100: 'hsl(210, 16%, 93%)',
		  200: 'hsl(210, 14%, 89%)',
		  300: 'hsl(210, 12%, 83%)',
		  400: 'hsl(210, 10%, 62%)',
		  500: 'hsl(210, 9%, 45%)',
		  600: 'hsl(210, 10%, 35%)',
		  700: 'hsl(210, 11%, 29%)',
		  800: 'hsl(210, 12%, 23%)',
		  900: 'hsl(210, 13%, 16%)'
		},
		beige: {
		  50: 'hsl(40, 30%, 96%)',
		  100: 'hsl(40, 28%, 92%)',
		  200: 'hsl(40, 26%, 86%)',
		  300: 'hsl(40, 24%, 80%)',
		  400: 'hsl(40, 22%, 70%)',
		  500: 'hsl(40, 20%, 60%)',
		  600: 'hsl(40, 18%, 50%)',
		  700: 'hsl(40, 16%, 40%)',
		  800: 'hsl(40, 14%, 30%)',
		  900: 'hsl(40, 12%, 20%)'
		},
		chart: {
		  '1': 'hsl(205, 70%, 50%)',
		  '2': 'hsl(230, 55%, 60%)',
		  '3': 'hsl(260, 40%, 55%)',
		  '4': 'hsl(300, 35%, 58%)',
		  '5': 'hsl(340, 50%, 55%)'
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
		}
	  },
	  borderRadius: {
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)'
	  },
	  fontFamily: {
		sans: ['Inter var', 'sans-serif'],
		serif: ['Georgia', 'serif'],
		mono: ['JetBrains Mono', 'monospace']
	  },
	  fontSize: {
		xs: ['0.75rem', { lineHeight: '1rem' }],
		sm: ['0.875rem', { lineHeight: '1.25rem' }],
		base: ['1rem', { lineHeight: '1.5rem' }],
		lg: ['1.125rem', { lineHeight: '1.75rem' }],
		xl: ['1.25rem', { lineHeight: '1.75rem' }],
		'2xl': ['1.5rem', { lineHeight: '2rem' }],
		'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
		'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
		'5xl': ['3rem', { lineHeight: '1' }],
		'6xl': ['3.75rem', { lineHeight: '1' }],
	  },
	  boxShadow: {
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: 'none',
	  },
	  spacing: {
		px: '1px',
		0: '0',
		0.5: '0.125rem',
		1: '0.25rem',
		1.5: '0.375rem',
		2: '0.5rem',
		2.5: '0.625rem',
		3: '0.75rem',
		3.5: '0.875rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		11: '2.75rem',
		12: '3rem',
		14: '3.5rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		28: '7rem',
		32: '8rem',
		36: '9rem',
		40: '10rem',
		44: '11rem',
		48: '12rem',
		52: '13rem',
		56: '14rem',
		60: '15rem',
		64: '16rem',
		72: '18rem',
		80: '20rem',
		96: '24rem',
	  },
	  keyframes: {
		'accordion-down': {
		  from: {
			height: '0'
		  },
		  to: {
			height: 'var(--radix-accordion-content-height)'
		  }
		},
		'accordion-up': {
		  from: {
			height: 'var(--radix-accordion-content-height)'
		  },
		  to: {
			height: '0'
		  }
		},
		'fade-in': {
		  '0%': { opacity: '0' },
		  '100%': { opacity: '1' }
		},
		'fade-out': {
		  '0%': { opacity: '1' },
		  '100%': { opacity: '0' }
		}
	  },
	  animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
		'fade-in': 'fade-in 0.3s ease-out',
		'fade-out': 'fade-out 0.3s ease-out'
	  }
	}
  },
  plugins: [require("tailwindcss-animate")],
  


} satisfies Config;

