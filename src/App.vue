<script setup>
//import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import {ref} from 'vue';
import Menubar from 'primevue/menubar';
import { menuItems } from './menu-items.js'
import { RouterView } from "vue-router";
const text = ref('')
</script>

<template>
  <Menubar :model="menuItems" />
  
<h1>Hello PrimeVue</h1>

<RouterView/>
</template>

