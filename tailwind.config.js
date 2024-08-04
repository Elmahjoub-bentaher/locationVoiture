import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        screens: {
            x_s: { max: "639px" },
            s_i: { min: "640px" },
            s_a: { max: "640px" },
            m_i: { min: "768px" },
            m_a: { max: "768px" },
            l_i: { min: "1024px" },
            l_a: { max: "1024px" },
            x_l_i: { min: "1280px" },
            x_l_a: { max: "1280px" },
            xx_l_i: { min: "1536px" },
            xx_l_a: { max: "1536px" },
            tablet: { max: "1024px", min: "768px" },
        },
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "third-color": "var(--third-color)",
                "black-color": "var(--black-color)",
            },
            backgroundColor: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "third-color": "var(--third-color)",
                "black-color": "var(--black-color)",
                "white-color": "var(--white)",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
