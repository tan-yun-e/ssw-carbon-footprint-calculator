import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const app = createApp(App);
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{rose.50}',
            100: '{rose.100}',
            200: '{rose.200}',
            300: '{rose.300}',
            400: '{rose.400}',
            500: '{rose.500}',
            600: '{rose.600}',
            700: '{rose.700}',
            800: '{rose.800}',
            900: '{rose.900}',
            950: '{rose.950}'
        },
        formField: {

        },
        colorScheme: {
            dark: {
                formField: {
                    hoverBorderColor: "{primary.color}",
                }
            }
        }
    },
    components: {
        button: {
            paddingX: "0.75rem",
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});

app.use(router)

app.mount('#app')
