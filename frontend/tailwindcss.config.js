/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Add your custom themes and colors here
            colors: {
                primary: "#A294F9", // Example: a custom purple
                sec1: "#CDC1FF",
                sec2: "#E5D9F2",
                sec3: "#F5EFFF",
            },
        },
    },
    plugins: [],
}
