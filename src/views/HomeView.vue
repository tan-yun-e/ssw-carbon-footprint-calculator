<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Tag from 'primevue/tag';
</script>

<template>
  <main>
    <h2>Carbon Footprint Calculator</h2>
    <p>
      The calculator is a linear regression model to predict the carbon emissions of an LLM 
      based on its number of parameters , and different performance indicators (on a scale of <strong>1-100</strong>)
      used to measure an LLM's capabilities. 
    </p>
    <h3>About the values</h3>
      <div class="pb-3 pt-3">
        <Tag value="Parameters" style="margin-right: 0.5rem;" />
        The measurable size of a model
      </div>
      <div class="pb-3">
      <Tag value="Math_Lvl5" style="margin-right: 0.5rem;"/>
      Assess the mathematical reasoning and problem-solving abilities of language models at an advanced level (high school/early college)
      </div>
      <div class="pb-3">
        <Tag value="MUSR" style="margin-right: 0.5rem;"/>
      Multi-step Soft Reasoning, the capability of the model to make a series of decisions or deductions, where each step depends on the outcome of the previous one 
      </div>
      <div class="pb-3">
        <Tag value="Generation" style="margin-right: 0.5rem;"/>
      Default value is 1, used only for models with minor updates made to it to improve performance
      </div>

    <span>
      Go to the 
    </span>
      <a href="/ssw-carbon-footprint-calculator/calculator" class="underline hover:text-rose-300">calculator</a>
      <span>
        page to get started
      </span>
      
    <h2>How to use</h2>
    <p>

    </p>
  </main>
</template>
