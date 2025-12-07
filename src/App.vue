<script setup>
//import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue';
import Menubar from 'primevue/menubar';
//import { menuItems } from './menu-items.js'
import { RouterView } from "vue-router";
import { useRouter } from 'vue-router';

const router = useRouter();

const menuItems = [
  { label: 'Home', 
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    }
  },
  { label: 'Calculator', 
    icon: 'pi pi-info-circle', 
    command: () => {
      router.push('/calculator');
    }
  },
]
const items = ref([
  {
    label: 'Router',
    icon: 'pi pi-palette',
    items: [
      {
        label: 'Styled',
        route: '/theming/styled'
      },
      {
        label: 'Unstyled',
        route: '/theming/unstyled'
      }
    ]
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction');
    }
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        url: 'https://vitejs.dev/'
      }
    ]
  }
]);
</script>

<template>
  <Menubar :model="menuItems">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
  </Menubar>
  <div class="card">

    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </div>
  <RouterView />
</template>

<script setup>

</script>
