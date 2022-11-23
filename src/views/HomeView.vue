<script setup>
import FormGenerator from "@/components/FormGenerator.vue";
import CardGlass from "@/components/CardGlass.vue";
</script>

<template>
  <CardGlass>
    <h1 class="mb-5 text-3xl text-white">
      Para empezar...
      <small class="block text-xl"
        >necesitamos que nos conteste algunas preguntas.</small
      >
    </h1>

    <FormGenerator />
  </CardGlass>
</template>
