<script setup>
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
import HeroWeb from "@/Images/HeroWeb.jpg";
import { onMounted, ref } from "vue";

const mainContainer = ref(null);

onMounted(() => {
  mainContainer.value.style.backgroundImage = `url(${HeroWeb})`;
});
</script>

<template>
  <NavigationComponent />
  <section
    ref="mainContainer"
    class="flex justify-center bg-center bg-cover bg-blend-multiply align-middle flex-col z-0 relative min-h-screen w-full overflow-x-clip pt-16 bg-gradient-to-t from-violet-600 to-purple-900"
  >
    <RouterView />
  </section>
</template>
