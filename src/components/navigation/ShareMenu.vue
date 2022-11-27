<script setup>
import { computed } from "vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon.vue";

import ShareMenuIconLink from "@/components/navigation/ShareMenuIconLink.vue";

import SocialShare from "@/data/social_networks.js";

const facebookShareUrl = computed(() =>
  SocialShare.facebook.share_link.replaceAll("%url", window.location.href)
);

const telegramShareUrl = computed(() =>
  SocialShare.telegram.share_link.replaceAll("%url", window.location.href)
);

const whatsappShareUrl = (isMobile) => {
  if (isMobile) {
    return SocialShare.whatsapp.share_link_mobile.replaceAll(
      "%textMessage",
      window.location.href
    );
  }

  return SocialShare.whatsapp.share_link_desktop.replaceAll(
    "%textMessage",
    window.location.href
  );
};
</script>

<template>
  <ul>
    <li>
      <ShareMenuIconLink :href="facebookShareUrl">
        <template #icon><FacebookIcon /></template>
        <template #text>Compartir en Facebook</template>
      </ShareMenuIconLink>
    </li>

    <li>
      <ShareMenuIconLink :link="whatsappShareUrl(true)" class="hidden md:flex">
        <template #icon><WhatsAppIcon /></template>
        <template #text>Compartir en WhatsApp</template>
      </ShareMenuIconLink>

      <ShareMenuIconLink :link="whatsappShareUrl(true)" class="md:hidden">
        <template #icon><WhatsAppIcon /></template>
        <template #text>Compartir en WhatsApp</template>
      </ShareMenuIconLink>
    </li>

    <li>
      <ShareMenuIconLink :link="telegramShareUrl">
        <template #icon><TelegramIcon /></template>
        <template #text>Compartir en Telegram</template>
      </ShareMenuIconLink>
    </li>
  </ul>
</template>
