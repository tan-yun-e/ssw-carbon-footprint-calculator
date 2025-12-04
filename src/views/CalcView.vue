<script setup>
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue'
const text = ref('')
const message = ref('')
</script>



<template>
  <div class="about">
    <h1>Carbon Footprint Calculator</h1>
  </div>
  <div>
    <FloatLabel variant="on">
      <InputText id="parameters" v-model="parameters" autocomplete="off" />
      <label for="parameters">Parameters</label>
    </FloatLabel>
    <InputText v-model="text" style="margin-right: 1rem;" />
    <Button label="Save"></Button>
    {{ text }}
  </div>
  <p>Message is : {{ message }}</p>
  <input v-model="message" placeholder="wip"></input>
</template>