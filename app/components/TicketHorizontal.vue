<template>
  <div
    class="ticket relative flex flex-col gap-2 justify-between overflow-hidden w-[358px] h-[189px] bg-[#141414] rounded-[20px] p-4"
  >
    <div class="flex gap-2 justify-between items-center">
      <div class="flex-1 flex flex-col gap-1">
        <h3 class="w-[250px] truncate text-[#F9FAFB] text-[1.25rem] font-[700]">
          2000s Hip Hop Night 2000s Hip Hop Night
        </h3>
        <p class="text-[#8EF251] font-[500]">Mar 29, 2022</p>
      </div>
      <div
        class="bg-[#8EF251] w-[52px] h-[52px] rounded-[16px] flex justify-center items-center"
      >
        <SvgIcon name="ticket" />
      </div>
    </div>
    <hr
      class="my-2 border-[#FFFFFF33] w-full border-dashed absolute top-[87px]"
    />

    <div class="flex items-center justify-between">
      <div class="flex gap-5">
        <div class="flex flex-col">
          <p class="text-[#9CA3AF] text-[12px]">Time</p>
          <p class="text-[#F9FAFB]">09:00 PM</p>
        </div>
        <div class="flex flex-col">
          <p class="text-[#9CA3AF] text-[12px]">Seat</p>
          <p class="text-[#F9FAFB]">34 H</p>
        </div>
      </div>

      <UIBadge
        label="VIP ticket x1"
        class="h-fit !text-[14px] !rounded-[8px]"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ticket {
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
  }
  &::before {
    inset-inline-end: -15px;
  }
  &::after {
    inset-inline-start: -15px;
  }
}
</style>
