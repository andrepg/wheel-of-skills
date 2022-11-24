<template>
  <h1>Olá, {{ props.hash }}</h1>
</template>

<script setup>
import { onMounted, computed } from "vue";
import CryptoJS from "crypto-js";

const props = defineProps({
  hash: String,
});

const decryptedData = computed(() =>
  CryptoJS.AES.decrypt(props.hash, "SoyCaroMolina")
).toString(CryptoJS.enc.Utf8);

onMounted(() => console.log(decryptedData.toString()));
</script>
