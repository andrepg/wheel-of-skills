<script setup>
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon.vue";

import ShareMenuIconLink from "@/components/navigation/ShareMenuIconLink.vue";
</script>

<template>
  <ul>
    <li>
      <ShareMenuIconLink link="#">
        <template #icon><FacebookIcon /></template>
        <template #text>Compartir en Facebook</template>
      </ShareMenuIconLink>
    </li>

    <li>
      <ShareMenuIconLink link="#">
        <template #icon><WhatsAppIcon /></template>
        <template #text>Compartir en WhatsApp</template>
      </ShareMenuIconLink>
    </li>

    <li>
      <ShareMenuIconLink link="#">
        <template #icon><TelegramIcon /></template>
        <template #text>Compartir en Telegram</template>
      </ShareMenuIconLink>
    </li>
  </ul>
</template>
