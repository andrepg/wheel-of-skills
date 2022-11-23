<script setup>
import { onMounted, ref } from "vue";

defineProps({
  modelValue: [String, Number],
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <input
    ref="input"
    :value="modelValue"
    class="form-input rounded border-0 bg-purple-200 focus:bg-purple-50 transition duration-250 ease-linear focus:outline-none focus:ring focus:ring-purple-900 text-purple-900"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
