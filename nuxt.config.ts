// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apoUrl: process.env.APP_URL,
            apiUrl: process.env.API_URL,
        }
    },

    modules: [
        '@formkit/nuxt',
        '@pinia/nuxt',
    ],

    devtools: {
        enabled: true,
    },

    css: [
        '~/assets/css/app.css',
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    formkit: {
        autoImport: true,
    },
})
