<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === "ar" ? "rtl" : "ltr",
  },
});
</script>
