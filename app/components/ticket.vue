<template>
  <div
    class="ticket relative overflow-hidden w-[235px] h-[424px] bg-[#000] rounded-[20px] p-4"
  >
    <UIBadge label="VIP" class="!text-[12px] mb-2" />
    <h3 class="text-[14px] font-[700] text-[#fff] mb-[14px]">
      California Art Festival: 2022 Dana Point 29-30
    </h3>

    <div class="flex flex-col gap-4">
      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <h3 class="text-[#9CA3AF] text-[12px]">Date</h3>
          <p class="text-[#FFFFFF] text-[12px] font-[500]">March 29, 2022</p>
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="text-[#9CA3AF] text-[12px]">Time</h3>
          <p class="text-[#FFFFFF] text-[12px] font-[500]">10:00 PM</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col gap-1">
          <h3 class="text-[#9CA3AF] text-[12px]">Deadline for entry</h3>
          <p class="text-[#FFFFFF] text-[12px] font-[500]">09:00 PM</p>
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="text-[#9CA3AF] text-[12px]">Seat</h3>
          <p class="text-[#FFFFFF] text-[12px] font-[500]">No seat</p>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-[20px] flex justify-center items-center w-full start-0"
    >
      <SvgIcon size="free" max-width="152" name="qr-code" class="text-[#fff]" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ticket {
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #141414;
    top: 50%;
    inset-inline-end: -15px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #141414;
    top: 50%;
    inset-inline-start: -15px;
  }
}
</style>
