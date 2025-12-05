<script setup>
import Button from "primevue/button";
import FloatLabel from 'primevue/floatlabel';
import { Form } from '@primevue/forms';
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import InputNumber from 'primevue/inputnumber';


const toast = useToast();

let total = ref('');
const parameters = ref('');
const mathlvl5 = ref('');
const musr = ref('');
const generation = ref('');
const initialValues = ref({
  parameters: '',
  generation: 1
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.parameters) {
    errors.parameters = [{ message: 'Parameters is required (in billions)' }];
  }

  if (!values.mathlvl5) {
    errors.mathlvl5 = [{ message: 'Math Lvl5 score is required (1-100)' }];
  }

  if (!values.musr) {
    errors.musr = [{ message: 'MUSR score is required (1-100)' }];
  }

  if (!values.generation) {
    errors.generation = [{ message: 'Enter as 1 if not applicable' }];
  }

  return {
    errors
  };
};

const onFormSubmit = ({ valid }) => {
  if (!valid) return;

  total.value = (7.04163367 + 12.33223018 * Number(parameters.value) -
                 0.25993187 * Number(musr.value) + 0.35981478 * Number(mathlvl5.value) -
                 0.56329501 * Number(generation.value))

  toast.add({
    severity: "success",
    summary: "Calculation successful 🌈",
    life: 3000
  });
};
</script>



<template>
  <div class="about">
    <h1 class="pt-6">Carbon Footprint Calculator</h1>
  </div>
  <div class="card flex justify-center">
    <Toast />
    <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true"
      @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
      <FloatLabel variant="on" class="w-full">
        <InputNumber name="parameters" v-model="parameters" autocomplete="off" class="w-full" :min="0" />
        <label for="parameters">Parameters</label>
      </FloatLabel>
      <Message v-if="$form.parameters?.invalid" severity="error" size="small" variant="simple">{{
        $form.parameters.error.message }}</Message>

      <FloatLabel variant="on">
        <InputNumber name="mathlvl5" v-model="mathlvl5" autocomplete="off" class="w-full" :min="1" :max="100" />
        <label for="mathlvl5">MathLvl5 Score</label>
      </FloatLabel>
      <Message v-if="$form.mathlvl5?.invalid" severity="error" size="small" variant="simple">{{
        $form.mathlvl5.error.message }}</Message>

      <FloatLabel variant="on">
        <InputNumber name="musr" v-model="musr" autocomplete="off" class="w-full" :min="1" :max="100" />
        <label for="musr">MUSR Score</label>
      </FloatLabel>
      <Message v-if="$form.musr?.invalid" severity="error" size="small" variant="simple">{{
        $form.musr.error.message }}</Message>

      <FloatLabel variant="on">
        <InputNumber name="generation" v-model="generation" autocomplete="off" class="w-full" :min="1" :max="100" />
        <label for="generation">Generation</label>
      </FloatLabel>
      <Message v-if="$form.generation?.invalid" severity="error" size="small" variant="simple">{{
        $form.generation.error.message }}</Message>


      <Button type="submit" severity="secondary" label="Submit" class=" sm:w-56" />
    </Form>



  </div>
  <p class="mt-4 text-lg font-semibold">
  Total CO₂ generated (kg): {{ total }}
</p>

</template>