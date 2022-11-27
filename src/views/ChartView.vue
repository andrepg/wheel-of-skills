<template>
  <CardGlass>
    <h1 class="mb-3.5 text-3xl text-left text-white">
      <span class="font-bold">Acá está tu resultado</span>
      <small class="block text-sm text-normal"
        >Preparamos un gráfico especial para usted. Mientras lo analizas no te
        olvides compartir este enlace con tus amigos y conocidos.</small
      >
    </h1>

    <div class="relative w-full h-1 my-4 bg-purple-300 rounded-lg"></div>

    <ChartGenerator :dataset="chartHistoryData" />
  </CardGlass>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";

import CardGlass from "@/components/CardGlass.vue";
import ChartGenerator from "@/components/ChartGenerator.vue";

const routerProvider = useRouter();

const fnDecryptChartData = (chartData, password) =>
  CryptoJS.AES.decrypt(chartData, password).toString(CryptoJS.enc.Utf8);

const chartHistoryData = JSON.parse(
  fnDecryptChartData(window.history.state.chart, "SoyCaroMolina")
).filter((element) => element.type !== "FlowFormSectionBreakType");

onMounted(() => {
  if (!chartHistoryData || chartHistoryData == "")
    routerProvider.replace("home");
});
</script>
