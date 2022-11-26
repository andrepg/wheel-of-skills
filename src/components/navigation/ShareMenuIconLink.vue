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
    class="flex flex-row items-center gap-2 px-4 py-4 list-none transition bg-transparent border border-purple-700 rounded-lg shadow-md font-heading md:py-3 group hover:bg-purple-700 hover:shadow-lg"
  >
    <span class="text-3x fill-purple-900 group-hover:fill-purple-50">
      <slot name="icon" />
    </span>

    <span class="sm:inline-flex md:hidden">
      <slot name="text" />
    </span>
  </a>
</template>
