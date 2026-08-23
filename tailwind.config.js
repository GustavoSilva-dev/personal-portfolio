
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#690005",
                "outline-variant": "#544342",
                "surface-dim": "#131313",
                "on-surface-variant": "#d9c1c0",
                "secondary-fixed": "#e2e2e2",
                "tertiary": "#d6d4d3",
                "tertiary-fixed-dim": "#c8c6c5",
                "primary-container": "#ff5a5a",
                "surface-container-low": "#1c1b1b",
                "surface-container-lowest": "#0e0e0e",
                "on-secondary-fixed-variant": "#454747",
                "on-tertiary-fixed-variant": "#474746",
                "tertiary-fixed": "#e5e2e1",
                "surface-container-high": "#2a2a2a",
                "on-tertiary": "#313030",
                "on-tertiary-container": "#494949",
                "inverse-primary": "#944748",
                "on-background": "#e5e2e1",
                "on-primary": "#5a1a1e",
                "on-error-container": "#ffdad6",
                "on-primary-fixed": "#3d050b",
                "on-surface": "#e5e2e1",
                "primary-fixed": "#ffb7b5",
                "surface-container": "#201f1f",
                "primary": "#ffc6c5",
                "primary-fixed-dim": "#ffb3b2",
                "secondary-fixed-dim": "#c6c6c7",
                "surface-container-highest": "#353534",
                "surface-variant": "#353534",
                "secondary-container": "#454747",
                "error": "#ffb4ab",
                "surface-bright": "#3a3939",
                "surface": "#131313",
                "on-primary-container": "#793235",
                "outline": "#a18c8b",
                "inverse-surface": "#e5e2e1",
                "on-primary-fixed-variant": "#763032",
                "on-secondary": "#2f3131",
                "tertiary-container": "#bab8b8",
                "inverse-on-surface": "#313030",
                "secondary": "#c6c6c7",
                "on-secondary-fixed": "#1a1c1c",
                "on-tertiary-fixed": "#1c1b1b",
                "surface-tint": "#ffb3b2",
                "error-container": "#93000a",
                "on-secondary-container": "#b4b5b5",
                "background": "#131313"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "container-max": "1280px",
                "margin-desktop": "64px",
                "margin-mobile": "16px",
                "unit": "4px",
                "gutter": "24px"
            },
            "fontFamily": {
                "display-lg": ["Montserrat"],
                "headline-lg-mobile": ["Montserrat"],
                "body-md": ["Geist"],
                "headline-lg": ["Montserrat"],
                "code-sm": ["JetBrains Mono"],
                "body-lg": ["Geist"],
                "label-caps": ["JetBrains Mono"],
                "headline-md": ["Montserrat"]
            },
            "fontSize": {
                "display-lg": ["80px", { "lineHeight": "1.0"}],
                "headline-lg-mobile": ["32px", { "lineHeight": "1.1", "fontWeight": "800" }],
                "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "headline-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                "code-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "700" }]
            }
        },
        plugins: [],
    }
}