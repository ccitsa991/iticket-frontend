<template>
  <section>
    <div class="container">
      <div class="flex flex-col gap-[2rem]">
        <div class="flex flex-col gap-[2rem] justify-center items-center">
          <SvgIcon
            size="free"
            max-width="94"
            name="check-circle"
            class="text-[#22C55E]"
          />
          <h2 class="text-[#F9FAFB] font-[700] text-[2rem]">
            Your Booking Complete
          </h2>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <h3 class="text-[#FFFFFFDB] font-[700] text-[1.25rem]">
              Your Tickets
            </h3>
          </div>

          <UICarosuel
            :isPagination="false"
            itemsToShow="auto"
            :gap="20"
            :height="550"
            :items="bannerList"
          >
            <div
              class="bg-[#141414] rounded-[32px] p-[20px] w-fit shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-6"
            >
              <Ticket />

              <button
                class="bg-[#FFFFFF] rounded-[16px] p-4 w-full h-[56px] text-capitalize"
              >
                download ticket
              </button>
            </div>
          </UICarosuel>
        </div>
        <button
          class="text-capitalize border-[1px] border-solid border-[#fff] rounded-[20px] h-[56px] text-[#fff] w-fit px-[2rem] mx-auto"
        >
          Discover more events
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const bannerList = ref([{}, {}, {}, {}]);
</script>

<style lang="scss" scoped>
:deep(.carousel) {
  position: relative;

  .navigation {
    position: absolute;
    top: -60px;
    inset-inline-end: 0px;
    height: 48px;
    width: calc(2 * 48px + 16px);

    > button {
      background-color: #8ef251;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      &.carousel__prev--disabled {
        background-color: #141414;
        color: #fff;
        opacity: 1;
      }
    }
  }
}
</style>
