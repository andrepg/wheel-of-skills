<script setup>
import { reactive } from "vue";

import InputLabel from "./InputLabel.vue";
import InputForm from "./InputForm.vue";

import GraphIcon from "./icons/GraphIcon.vue";

const parametros = reactive([
  {
    label: "Diversificación de renta",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "¿Sabes ahorrar?",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "¿Sabes invertir?",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "¿Sabes usar su dinero de forma consciente?",
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
    label: "Monitora sus finanzas",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Pensamientos de impulsión",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Evitas procrastinación",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
  {
    label: "Agradece y celebra",
    descricao:
      "Uma breve descrição sobre este ponto para esclarecer ao usuário.",
    valor: 10,
  },
]);
</script>

<template>
  <form>
    <div class="w-full mb-3 md:columns-2 md:gap-8">
      <div
        class="flex flex-col gap-1 mb-3"
        :key="parametro.label"
        v-for="parametro in parametros"
      >
        <InputLabel :for="'item_' + parametro.index" :value="parametro.label" />
        <InputForm
          :id="'item_' + parametro.index"
          v-model="parametro.valor"
          placeholder="5"
          type="number"
          class="w-full"
        />
      </div>
    </div>

    <div class="w-full">
      <button
        class="inline-flex items-center justify-center w-full gap-4 px-10 py-5 font-bold uppercase rounded shadow-md group bg-gradient-to-br text-purple-50 from-purple-600 to-purple-800 via-violet-600 grow"
      >
        <GraphIcon
          class="w-10 stroke-purple-300 group-hover:animate-pulse"
        />
        <span class="text-xl text-left">QUIERO MI RESULTADO</span>
      </button>
    </div>
  </form>
</template>
