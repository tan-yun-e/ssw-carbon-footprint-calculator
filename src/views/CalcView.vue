<script setup>
import {ref} from 'vue'

const message = ref('')
</script>



<template>
    <div class="about">
      <h1>This is the calculations page</h1>
    </div>
    <p>Message is : {{ message }}</p>
    <input v-model="message" placeholder="wip"></input>
  </template>