<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Tag from 'primevue/tag';
</script>

<template>
  <main>
    <h2>Carbon Footprint Calculator</h2>
    <p>
      In our DTP project, we created a model to predict the carbon emissions of an LLM 
      based on its number of parameters, and different performance indicators used to 
      measure an LLM's capabilities. 
    </p>
    <h3>About the values</h3>
    <div>
      
    </div>
    <p>
      <Tag value="Parameters" style="margin-right: 0.5rem;"/>
      The measurable size of a model
      <br/><br/>
      <Tag value="Math_Lvl5" style="margin-right: 0.5rem;"/>
      Assess the mathematical reasoning and problem-solving abilities of language models at an advanced level (high school/early college)
      <br/><br/>
      <Tag value="MUSR" style="margin-right: 0.5rem;"/>
      Multi-step Soft Reasoning, the capability of the model to make a series of decisions or deductions, where each step depends on the outcome of the previous one. 
      <br/><br/>
      <Tag value="Generation" style="margin-right: 0.5rem;"/>
      Default value is 1, used only for models with minor updates made to it to improve performance
      <br/>
    </p>
    <p>
      Go to the <a href="/calculator">calculator</a>
      page to get started
    </p>
    <h2>How to use</h2>
    <p>

    </p>
  </main>
</template>
