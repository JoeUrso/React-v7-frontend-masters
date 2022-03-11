module.exports = {
    mode: "jit",
    content: ["./Int-React-v4-Tailwinds-CSS/*.{html,js}"],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require("@tailwindcss/forms")],
};
