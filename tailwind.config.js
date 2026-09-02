/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        "radar-sweep": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(1turn)" } },
        "radar-ring": { "0%": { transform: "scale(.3)", opacity: "0.8" }, "100%": { transform: "scale(1.2)", opacity: "0" } },
        "float-up": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(-12px)", opacity: "0.7" },
        },
        "draw-circle": { "0%": { strokeDashoffset: "190" }, "100%": { strokeDashoffset: "0" } },
      },
      animation: {
        "radar-sweep": "radar-sweep 2.5s linear infinite",
        "radar-ring": "radar-ring 2s ease-out infinite",
        "radar-ring-delay": "radar-ring 2s ease-out .6s infinite",
        "radar-ring-delay2": "radar-ring 2s ease-out 1.2s infinite",
        "float-1": "float-up 2s ease-in-out infinite",
        "float-2": "float-up 2.5s ease-in-out .4s infinite",
        "float-3": "float-up 1.8s ease-in-out .8s infinite",
        "float-4": "float-up 2.2s ease-in-out 1.2s infinite",
      },
    },
  },
  plugins: [],
};
