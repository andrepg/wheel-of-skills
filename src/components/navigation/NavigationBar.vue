<script setup>
import { RouterLink } from "vue-router";

import ShareIcon from "@/components/icons/ShareIcon.vue";
import ShareMenu from "@/components/navigation/ShareMenu.vue";

import { reactive } from "vue";

const dataVue = reactive({
  showMobileMenu: false,
});

const toggleMenu = () => (dataVue.showMobileMenu = !dataVue.showMobileMenu);
</script>

<template>
  <nav
    class="fixed top-0 z-10 flex flex-col w-full px-2 py-5 text-purple-900 bg-purple-300 shadow-lg md:px-10"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <!-- Here's our main navigation link, to homepage -->
      <RouterLink
        to="/"
        class="px-2 font-bold text-purple-900 uppercase transition duration-300 w-fit text-md hover:text-pink-800"
      >
        Soy Caro Molina
      </RouterLink>

      <!-- And now our mobile toggle container -->
      <div class="w-fit">
        <button
          type="button"
          @click.prevent="toggleMenu"
          class="md:hidden h-[1.4rem] w-[1.4rem] px-3 box-content"
        >
          <ShareIcon class="w-auto h-full" />
        </button>

        <!-- Desktop menu view -->
        <ShareMenu class="flex-row hidden gap-3 md:flex" />

        <!-- Mobile menu view -->
      </div>
    </div>

    <ShareMenu
      class="flex-col flex-wrap w-full gap-5 py-5 overflow-y-auto justify-evenly md:hidden"
      :class="dataVue.showMobileMenu ? 'hidden' : 'flex'"
    />
  </nav>
</template>
