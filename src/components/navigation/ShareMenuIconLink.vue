<script setup>
const propsVue = defineProps({
  link: {
    default: "#",
    type: String,
  },
});
</script>

<template>
  <a
    :href="propsVue.link"
    target="_blank"
    class="flex flex-row items-center gap-2 px-4 py-4 list-none transition bg-transparent border border-purple-700 rounded-lg shadow-md font-heading md:py-3 group hover:bg-purple-700 hover:shadow-lg"
  >
    <span
      class="text-2xl transition delay-100 fill-purple-900 group-hover:fill-purple-50"
    >
      <slot name="icon" />
    </span>

    <span
      class="transition delay-100 sm:inline-flex md:hidden group-hover:text-purple-50"
    >
      <slot name="text" />
    </span>
  </a>
</template>
