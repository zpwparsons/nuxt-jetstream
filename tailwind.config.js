const FormKitVariants = require('@formkit/themes/tailwindcss');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './assets/js/formkit-theme.js'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        FormKitVariants,
    ],
}

