<template>
  <NuxtLinkLocale
    :to="`/events/${item.id}`"
    class="max-w-[373px] bg-[#141414] p-4 flex flex-col gap-4 rounded-[20px]"
  >
    <div class="rounded-[14px] overflow-hidden">
      <img :src="item.image" :alt="item.name" class="w-full h-auto" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between w-full">
        <div class="flex font-[700] gap-[20px] text-[#8EF251]">
          <p
            class="relative after:content-[''] after:absolute after:top-2 after:end-[-10px] after:inline-block after:w-1 after:h-1 after:rounded-full after:bg-[#8EF251]"
          >
            Mar 29, 2022
          </p>
          <p>10:00 PM</p>
        </div>
        <UIBadge :label="item.type" />
      </div>
      <h3 class="text-[#E2E3E1] text-[1.85rem] leading-[2rem] font-[900]">
        {{ item.name }}
      </h3>
    </div>
    <div class="flex gap-2 items-center text-[#9CA3AF]">
      <SvgIcon name="location" size="sm" />
      <p>{{ item.place }}</p>
    </div>
  </NuxtLinkLocale>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
});
</script>

<style lang="scss" scoped></style>
