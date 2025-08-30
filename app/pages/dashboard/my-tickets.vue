<template>
  <h2 class="text-[2rem] text-[#F9FAFB] font-[700]">{{ $t("my_tickets") }}</h2>
  <div class="flex flex-col gap-[2.5rem]">
    <div class="flex flex-col gap-[1.5rem]">
      <h3 class="text-uppercase text-[#FFFFFFDB] font-[700] text-[1.25rem]">
        upcoming events
      </h3>
      <div
        class="flex flex-col justify-center items-center gap-2 w-[356px] max-w-[100%] bg-[#141414] border-[1px] border-solid border-[#FFFFFF33] p-5 rounded-[16px]"
      >
        <h3 class="text-[18px] text-[#fff] font-[500]">
          You don't have any upcoming events
        </h3>
        <p class="text-[#9CA3AF] text-[14px] text-center">
          When you purchase tickets to events, they appear here.
        </p>
        <button
          class="bg-[#FFFFFF] flex justify-center items-center mt-1 font-[700] rounded-[12px] w-full h-[44px]"
        >
          Get Tickets
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <h3 class="text-uppercase text-[#FFFFFFDB] font-[700] text-[1.25rem]">
        past events
      </h3>
      <div class="flex gap-5">
        <TicketHorizontal v-for="i in 2" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

import { useBreadCrumbStore } from "@/stores/breadCrumb";
import TicketHorizontal from "~/components/TicketHorizontal.vue";

const { setBreadcrumbs } = useBreadCrumbStore();
setBreadcrumbs([
  { title: "home", disabled: false, to: "/" },
  { title: "my_tickets", disabled: true, to: "/" },
]);
</script>

<style lang="scss" scoped></style>
