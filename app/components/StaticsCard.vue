<template>
  <div
    class="max-w-[177px] bg-[#141414] flex flex-col gap-4 !p-5 rounded-[14px] p-4"
  >
    <h3 class="text-[#fff] max-w-[90%] text-[20px] font-[900] uppercase">
      {{ label }}
    </h3>
    <UIBadge :label="number" :color="color" :bgColor="bgColor" />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  number: { type: Number, default: 0 },
  color: { type: String, default: "bg-[#8EF251]" },
  bgColor: { type: String, default: "text-[#070C0F]" },
});
</script>

<style lang="scss" scoped></style>
