<script setup>
import { reactive } from "vue";

import InputLabel from "./InputLabel.vue";
import InputForm from "./InputForm.vue";

const parametros = reactive([
  {
    label: "Formas de renda",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Sabe poupar",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Sabe investir",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Uso consciente do dinheiro",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Círculo social",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Objetivos e metas",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Monitora as finanças",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Pensamentos impulsionadores",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Evita procrastinação",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Agradece e celebra",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
]);
</script>

<template>
  <form
    action=""
    class="flex flex-col mx-auto w-full px-5 md:w-11/12 lg:w-10/12"
  >
    <template :key="parametro.label" v-for="parametro in parametros">
      <InputLabel :for="'item_' + parametro.index" :value="parametro.label" />
      <InputForm
        :id="'item_' + parametro.index"
        v-model="parametro.valor"
        placeholder="5"
        type="number"
        class=""
      />
    </template>
  </form>
</template>
