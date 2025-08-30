<template>
  <UIBreadCrumb />
  <section>
    <div class="container">
      <div class="flex gap-4 justify-between">
        <div class="flex-1 flex flex-col gap-6">
          <div class="flex justify-between gap-4">
            <div class="flex flex-col">
              <h2 class="font-[700] text-[#F9FAFB] text-[2rem]">
                {{ $t("select_ticket") }}
              </h2>
              <p class="text-[#9CA3AF]">(max tickets: 12)</p>
            </div>
            <div
              class="flex bg-[#141414] text-white gap-2 rounded-[12px] px-[18px] py-[12px]"
            >
              <SvgIcon name="timer-pause" size="sm" />
              <span class="font-[700]">12:12</span>
            </div>
          </div>

          <div class="flex flex-col gap-7">
            <div class="flex flex-col gap-5">
              <h3 class="text-[#FFFFFFDB] font-[700] text-[1.125rem]">
                Mar 29 - GA
              </h3>
              <ul class="flex flex-col gap-5">
                <li
                  v-for="i in 2"
                  :key="i"
                  class="flex justify-between items-center border-[1px] border-solid border-[#FFFFFF33] p-4 rounded-[18px]"
                >
                  <div class="flex flex-col gap-1">
                    <h3 class="text-white font-[500]">
                      Ladies Standard (Ground)
                    </h3>
                    <p class="text-[#8EF251] font-[700] text-[1.125rem]">
                      450 SAR
                    </p>
                  </div>
                  <div class="flex">
                    <button
                      class="w-[2rem] h-[2rem] rounded-[8px] bg-[#141414] text-[#FFFFFF]"
                    >
                      +
                    </button>
                    <p
                      class="h-[2rem] min-w-[2rem] text-[#FFFFFF] flex justify-center items-center"
                    >
                      0
                    </p>
                    <button
                      class="w-[2rem] h-[2rem] rounded-[8px] bg-[#141414] text-[#FFFFFF]"
                    >
                      -
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-5">
              <h3 class="text-[#FFFFFFDB] font-[700] text-[1.125rem]">
                Mar 29 - GA
              </h3>
              <ul class="flex flex-col gap-5">
                <li
                  v-for="i in 2"
                  :key="i"
                  class="flex justify-between items-center border-[1px] border-solid border-[#FFFFFF33] p-4 rounded-[18px]"
                >
                  <div class="flex flex-col gap-1">
                    <h3 class="text-white font-[500]">
                      Ladies Standard (Ground)
                    </h3>
                    <p class="text-[#8EF251] font-[700] text-[1.125rem]">
                      450 SAR
                    </p>
                  </div>
                  <div class="flex">
                    <p
                      class="text-white font-[500] bg-[#141414] rounded-[8px] px-[14px] py-[5px]"
                    >
                      {{ $t("sold_out") }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="flex-1 flex flex-col gap-4 max-w-[490px] rounded-[20px] bg-[#141414] p-[23px]"
        >
          <div class="flex items-center justify-between gap-5">
            <div class="min-w-[170px] h-[146px] rounded-[12px] overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Product Image"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h3
                class="text-[#E2E3E1] text-[1.25rem] leading-[2rem] font-[900]"
              >
                Unstable Live Night with Ghostly Kisses
              </h3>
              <div class="flex items-center justify-between w-full">
                <div class="flex font-[700] gap-[20px] text-[#8EF251]">
                  <p
                    class="relative after:content-[''] after:absolute after:top-[0.6rem] after:end-[-13px] after:inline-block after:w-1 after:h-1 after:rounded-full after:bg-[#8EF251]"
                  >
                    Mar 29, 2022
                  </p>
                  <p>10:00 PM</p>
                </div>
              </div>
              <div class="flex gap-2 items-center text-[#9CA3AF]">
                <SvgIcon name="location" size="sm" />
                <p>Riyadh</p>
              </div>
            </div>
          </div>
          <hr class="my-2 border-[#FFFFFF33] border-dashed" />

          <div class="flex gap-4 !p-4 w-full justify-between">
            <div class="flex flex-col items-center">
              <p class="text-base text-[#9CA3AF]">Price From</p>
              <p class="text-[#8EF251] text-[1.5rem] font-[700]">450 SAR</p>
            </div>
            <button
              class="!p-4 rounded-[16px] h-[56px] w-[236px] bg-white text-black fomt-[700]"
            >
              {{ $t("checkout") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBreadCrumbStore } from "@/stores/breadCrumb";
const { setBreadcrumbs } = useBreadCrumbStore();
setBreadcrumbs([
  { title: "home", disabled: false, to: "/" },
  { title: "select_ticket", disabled: true, to: "/" },
]);
</script>

<style lang="scss" scoped></style>
