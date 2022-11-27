<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "@/components/navigation/NavigationBar.vue";
import HeroWeb from "@/Images/HeroWeb.jpg";
import { onMounted, ref } from "vue";

const mainContainer = ref(null);

onMounted(() => {
  mainContainer.value.style.backgroundImage = `url(${HeroWeb})`;
});
</script>

<template>
  <NavigationBar />
  <section
    ref="mainContainer"
    class="relative z-0 flex flex-col justify-center w-full min-h-screen pt-20 align-middle bg-center bg-cover bg-blend-multiply overflow-x-clip bg-gradient-to-t from-violet-600 to-purple-900"
  >
    <RouterView />
  </section>
</template>
