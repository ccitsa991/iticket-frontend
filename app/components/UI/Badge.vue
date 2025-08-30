<template>
  <div
    :class="`rounded-[19px] w-fit text-base font-[500] px-4 py-1 ${bgColor} ${color}`"
  >
    {{ label }}
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  color: { type: String, default: "text-[#FFFFFF]" },
  bgColor: { type: String, default: "bg-[#FFFFFF14]" },
});
</script>

<style lang="scss" scoped></style>
