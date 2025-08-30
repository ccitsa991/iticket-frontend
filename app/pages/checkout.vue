<template>
  <UIBreadCrumb />
  <section>
    <div class="container">
      <div class="flex gap-4 justify-between">
        <div class="flex-1 flex flex-col gap-6">
          <div class="flex justify-between gap-4">
            <h2 class="font-[700] text-[#F9FAFB] text-[2rem]">Checkout</h2>
            <div
              class="flex bg-[#141414] text-white gap-2 rounded-[12px] px-[18px] py-[12px]"
            >
              <SvgIcon name="timer-pause" size="sm" />
              <span class="font-[700]">12:12</span>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-[2rem]">
              <form
                @submit.prevent="applyPromoCode"
                class="space-y-4 md:space-y-6 relative promo"
              >
                <div class="flex flex-col gap-4 md:gap-6">
                  <UIInputText
                    :label="$t('promo_code')"
                    icon="voucher"
                    v-model="promoCode"
                    class="w-full"
                  />
                  <button
                    type="submit"
                    class="text-white underline font-[700] text-[14px] text-capitalize absolute bottom-4 end-4"
                  >
                    {{ $t("apply") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-col">
            <h3>Select a payment method</h3>
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

          <div class="flex flex-col gap-3">
            <h3 class="text-[#F9FAFB] font-[700]">Tickets</h3>

            <div
              class="border-[1px] border-solid flex justify-between items-center border-[#FFFFFF33] rounded-[18px] p-5"
            >
              <div class="flex gap-2">
                <SvgIcon name="ticket" size="sm" class="text-[#8EF251]" />
                <p class="text-white font-[500]">Ladies Standard (Ground)</p>
              </div>
              <div class="flex gap-1 text-[#9CA3AF]">
                <span>2</span>
                <span>Tickets</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-[#F9FAFB] font-[700]">Summary</h3>

            <div
              class="border-[1px] border-solid flex justify-between items-center border-[#FFFFFF33] rounded-[18px] p-5"
            >
              <ul class="w-full flex flex-col gap-3">
                <li
                  class="flex justify-between items-center gap-4 text-[#FFFFFFD1]"
                >
                  <span>Subtotal</span>
                  <span class="text-[#8EF251] font-[500]">450 SAR</span>
                </li>
                <li
                  class="flex justify-between items-center gap-4 text-[#FFFFFFD1]"
                >
                  <span>Fees</span>
                  <span class="text-[#8EF251] font-[500]">450 SAR</span>
                </li>
                <hr class="my-2 border-[#FFFFFF33] border-dashed" />
                <li
                  class="flex justify-between items-center gap-4 text-[#FFFFFFD1]"
                >
                  <span>Total</span>
                  <span class="text-[#8EF251] font-[500]">450 SAR</span>
                </li>
              </ul>
            </div>
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
  { title: "checkout", disabled: true, to: "/" },
]);

const promoCode = ref("");

const applyPromoCode = () => {
  // Logic to apply the promo code
};
</script>

<style lang="scss" scoped>
.promo {
  :deep(input) {
    padding-inline-end: 2rem;
  }
}
</style>
