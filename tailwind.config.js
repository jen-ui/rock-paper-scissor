/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
      },
      colors: {
        headerOutline: "hsl(217, 16%, 45%)",
        scoreText: "hsl(229, 64%, 46%)",
        darkText: "hsl(229, 25%, 31%)",
      },
      backgroundImage: {
        backgroundColor:
          "radial-gradient(circle at top,hsl(214, 47%, 23%), hsl(237, 49%, 15%)) ",
        scissorGradient:
          "radial-gradient(Circle,hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
        paperGradient:
          "radial-gradient(Circle,hsl(230, 89%, 62%) , hsl(230, 89%, 65%))",
        rockGradient:
          "radial-gradient(Circle,hsl(349, 71%, 52%) , hsl(349, 70%, 56%))",
        cyanGradient: "radial-gradient(Circle,hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },

      dropShadow: {
        scissor: "0 8px 0 hsl(40, 84%, 47%)",
        paper: "0 8px 0 hsl(230, 89%, 60%)",
        rock: "0 8px 0 hsl(349, 70%, 50%)",
      },
      boxShadow: {
        inner: "inset 0 6px 0 #D3D3D3",
        rulesShadow: "0px 0px 1000px 20px #000000",
      },
    },
  },
  plugins: [],
};

