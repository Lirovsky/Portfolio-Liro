/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        dark: "var(--bgdark)",
        darkcontato: "var(--darkcontato)",
        darkcontato2: "var(--darkcontato2)",
        light: "var(--bglight)",
        lightcontato: "var(--lightcontato)",
        lightcontato2: "var(--lightcontato2)",
        img1: "var(--img1)",
        img2: "var(--img2)",
        img3: "var(--img3)",
        img4: "var(--img4)",
      },
      fontFamily: {
        roboto: "var(--roboto)",
        bebas: "var(--bebas)",
      },
      boxShadow: {
        cyan: "0 0 10px #06b6d4,0 0 10px #06b6d4,0 0 10px #06b6d4,0 0 10px #06b6d4;",
        orange:
          "0 0 10px #f97316,0 0 10px #f97316,0 0 10px #f97316,0 0 10px #f97316;",
        neutral:
          "0 0 10px #e5e7eb,0 0 10px #e5e7eb,0 0 10px #e5e7eb,0 0 10px #e5e7eb;",
      },
      borderRadius: {
        banner: "48px",
      },
      fontSize: {
        "12xl": "150px",
      },
      lineHeight: {
        11: "65px",
        12: "80px",
        13: "130px",
        14: "180px",
      },
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
      slideinup: {
        "0%": { visibility: "visible", transform: "translate3d(0, 400%, 0)" },
        "100%": { transform: "translate3d(0, 0, 0)" },
      },
      slideindown: {
        "0%": { visibility: "visible", transform: "translate3d(0, -300%, 0)" },
        "100%": { transform: "translate3d(0, 0, 0)" },
      },
      fadein: {
        "0%": { opacity: 0, visibility: "hidden" },
        "100%": { opacity: 1, visibility: "visible" },
      },
      slideinleft: {
        "0%": { visibility: "visible", transform: "translate3d(-100%, 0, 0)" },
        "100%": { transform: "translate3d(0, 0, 0)" },
      },
      slideinright: {
        "0%": { visibility: "visible", transform: "translate3d(200%, 0, 0)" },
        "100%": { transform: "translate3d(0, 0, 0)" },
      },
      fablink: {
        "0%": { opacity: 1, transform: "scale(1.0)" },

        "100%": { opacity: 0.5, transform: "scale(1.1)" },
      },
    },
    animation: {
      typing: "typing 2s steps(20), blink .7s infinite",

      fadein: "fadein 8s ease-in-out",
      fadein2: "fadein 2s ease-in-out",

      slideindown: "slideindown 2s ease-in-out",
      slideindown2: "slideindown 1.5s ease-in-out",

      slideinup: "slideinup 1.5s ease-in-out ",

      slideinleft: "slideinleft 1.2s ease-in-out",
      slideinleft2: "slideinleft 1.6s ease-in-out",
      slideinleft3: "slideinleft 2s ease-in-out",
      slideinleft4: "slideinleft 2.4s ease-in-out",

      slideinright: "slideinright 1.2s ease-in-out",
      slideinright2: "slideinright 1.6s ease-in-out",
      slideinright3: "slideinright 2s ease-in-out",
      slideinright4: "slideinright 2.4s ease-in-out",
      slideinright5: "slideinright 2.8s ease-in-out",
      slideinright6: "slideinright 3s ease-in-out",
      slideinright7: "slideinright 3.4s ease-in-out",
      slideinright8: "slideinright 3.8s ease-in-out",
      slideinright9: "slideinright 4.2s ease-in-out",
      slideinright10: "slideinright 4.6s ease-in-out",

      fablink: "fablink 1s linear alternate infinite",
    },
  },
  plugins: [flowbite.plugin()],
  darkMode: "selector",
};
