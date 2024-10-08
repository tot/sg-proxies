/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      colors: {
        primary: "#b94dff",
        "primary-light": "#c05eff",
        "dark-background": "#1C1D20",
        "light-background": "#2e3033",
        "nav-border": "rgba(64, 66, 74, 0.5)",
        footer: "#271d2e",
        "footer-link": "#8a978f",
        paragraph: "#8d8e8f",
        "card-description": "#8c8d8f",
        "card-header": "#b6b7b8",
        "card-title": "#d5d6d6",
        "card-subtext": "#626466",
        "card-label": "#969799",
        "dashboard-heading": "#c6c6c7",
        cancel: "#b94041",
        "table-header": "#b0b0b1",
        "table-entry": "#7b7c7d",
        "table-background": "#232427",
        "table-border": "#323336",
        "empty-title": "#d2d2d2",
        "modal-background": "rgba(0,0,0,0.4);",
        "input-background": "#393b3d",
        "input-border": "#4c4e50",
        "error-background": "#4b3436",
        "success-background": "#31404d",
        "inactive-plan": "#b94dff1A",
        "input-text": "#7f8184",
      },
      maxWidth: {
        "8xl": "96rem",
      },
      maxHeight: {
        dropdown: "16rem",
      },
      height: {
        "2px": "2px",
      },
      inset: {
        "-5": "-5rem",
      },
      width: {
        faq: "48rem",
      },
    },
  },
  plugins: [],
}

