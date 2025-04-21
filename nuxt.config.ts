import {MyPresetTheme} from "./theme/app-theme";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr: true,
    modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      '@primevue/nuxt-module',
      '@vee-validate/nuxt',
      '@nuxt/icon'
    ],
    css: ["primeicons/primeicons.css"],
    primevue: {
        autoImport: true,
        usePrimeVue: true,
        options: {
            theme: {
                preset: MyPresetTheme,
                // cssLayer: false,
                options: {
                    darkModeSelector: '.dark',
                    cssLayer: {
                        name: 'primevue',
                        order: 'tailwind-base, primevue, tailwind-utilities'
                    }
                },
            },
            ripple: true,
        },
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:5001',
        },
    }
})