/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStopPositions: {
        70: "70%",
      },
      gradientColorStops: theme => ({
        'custom': `var(--gradient-color-1, #f00) 0%, var(--gradient-color-2, #00f) 100%`,
      }),
    },
  },
  plugins: [],
}
