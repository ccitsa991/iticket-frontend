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
          <div class="flex flex-col gap-8">
            <h3 class="text-[1.25rem] text-[#FFFFFFDB] font-[700]">
              {{ $t("select_payment_method") }}
            </h3>

            <!-- Custom Payment Method Radio Group -->
            <div class="payment-methods">
              <ul class="flex flex-col gap-5">
                <li v-for="method in paymentMethods" :key="method.id">
                  <label
                    class="flex text-[#F9FAFB] font-[700] justify-between items-center bg-[#141414] rounded-[16px] p-[20px] cursor-pointer transition-all duration-200 hover:bg-[#1a1a1a] relative"
                    :class="{
                      'ring-2 ring-[#8EF251] bg-[#1a1a1a]':
                        selectedPaymentMethod === method.id,
                    }"
                  >
                    <input
                      type="radio"
                      :value="method.id"
                      v-model="selectedPaymentMethod"
                      class="absolute opacity-0 w-0 h-0"
                    />
                    <span class="flex items-center gap-3">
                      <div
                        class="w-4 h-4 bg-transparent m-1 border-[1px] border-solid border-[#374151] rounded-full flex items-center justify-center transition-colors duration-200"
                        :class="
                          selectedPaymentMethod === method.id
                            ? 'border-[#8EF251] bg-[#8EF251]'
                            : ''
                        "
                      >
                        <div
                          v-if="selectedPaymentMethod === method.id"
                          class="w-2 h-2 rounded-full bg-[#8EF251]"
                        ></div>
                      </div>
                      {{ method.name }}
                    </span>
                    <SvgIcon
                      :name="method.icon"
                      size="free"
                      :max-width="method.maxWidth"
                    />
                  </label>
                </li>
              </ul>
            </div>

            <!-- Credit Card Form (shown when credit card is selected) -->
            <div
              v-if="selectedPaymentMethod === 'credit-card'"
              class="credit-card-form"
            >
              <div class="bg-[#141414] rounded-[16px] p-6 space-y-4">
                <h4 class="text-[#F9FAFB] font-[700] text-lg mb-4">
                  Credit Card Details
                </h4>

                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-[#FFFFFFDB] text-sm font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      v-model="creditCardForm.cardNumber"
                      placeholder="1234 5678 9012 3456"
                      class="w-full bg-[#1a1a1a] border border-[#FFFFFF33] rounded-lg px-3 py-2 text-white focus:border-[#8EF251] focus:outline-none"
                      maxlength="19"
                      @input="formatCardNumber"
                    />
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        class="block text-[#FFFFFFDB] text-sm font-medium mb-2"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        v-model="creditCardForm.expiryDate"
                        placeholder="MM/YY"
                        class="w-full bg-[#1a1a1a] border border-[#FFFFFF33] rounded-lg px-3 py-2 text-white focus:border-[#8EF251] focus:outline-none"
                        maxlength="5"
                        @input="formatExpiryDate"
                      />
                    </div>

                    <div>
                      <label
                        class="block text-[#FFFFFFDB] text-sm font-medium mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        v-model="creditCardForm.cvv"
                        placeholder="123"
                        class="w-full bg-[#1a1a1a] border border-[#FFFFFF33] rounded-lg px-3 py-2 text-white focus:border-[#8EF251] focus:outline-none"
                        maxlength="4"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      class="block text-[#FFFFFFDB] text-sm font-medium mb-2"
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      v-model="creditCardForm.cardholderName"
                      placeholder="John Doe"
                      class="w-full bg-[#1a1a1a] border border-[#FFFFFF33] rounded-lg px-3 py-2 text-white focus:border-[#8EF251] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Apple Pay Info (shown when Apple Pay is selected) -->
            <div
              v-if="selectedPaymentMethod === 'apple-pay'"
              class="apple-pay-info"
            >
              <div class="bg-[#141414] rounded-[16px] p-6 text-center">
                <SvgIcon
                  name="apple-pay"
                  size="free"
                  max-width="60"
                  class="mx-auto mb-3"
                />
                <h4 class="text-[#F9FAFB] font-[700] text-lg mb-2">
                  Apple Pay Ready
                </h4>
                <p class="text-[#9CA3AF]">
                  You'll be redirected to complete your payment with Apple Pay
                </p>
              </div>
            </div>

            <!-- Terms and Conditions Checkbox -->
            <div class="bg-[#141414] rounded-[16px] p-4">
              <label class="flex items-start gap-3 cursor-pointer group">
                <!-- Custom Checkbox -->
                <div class="relative mt-1">
                  <input
                    type="checkbox"
                    v-model="acceptTerms"
                    class="absolute opacity-0 w-0 h-0"
                  />
                  <div
                    class="w-[24px] h-[24px] bg-transparent border-[1px] border-solid border-[#374151] rounded-[4px] flex items-center justify-center transition-all duration-200 group-hover:border-[#8EF251]"
                    :class="acceptTerms ? 'border-[#8EF251] !bg-[#8EF251]' : ''"
                  >
                    <!-- Checkmark Icon -->
                    <SvgIcon
                      v-if="acceptTerms"
                      name="check"
                      size="free"
                      max-width="13"
                      class="text-black"
                    />
                  </div>
                </div>
                <span class="text-[#A0AEC0] text-sm leading-relaxed">
                  {{ $t("by_clicking") }}
                  <a href="#" class="text-white hover:underline">{{
                    $t("terms_services")
                  }}</a>
                  {{ $t("and_have_read") }}
                  <a href="#" class="text-white hover:underline">{{
                    $t("privacy_policy")
                  }}</a
                  >. {{ $t("and_agree") }}
                </span>
              </label>
            </div>

            <!-- Pay Now Button -->
            <button
              @click="processPayment"
              :disabled="
                !selectedPaymentMethod || !isPaymentFormValid || !acceptTerms
              "
              class="bg-white text-black font-[700] text-lg py-4 px-8 rounded-[16px] w-full transition-all duration-200 hover:bg-[#7de042] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ $t("pay_now") }}
            </button>
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

const paymentMethods = ref([
  {
    id: "credit-card",
    icon: "credit-card",
    name: "Credit Card",
    maxWidth: "81",
  },
  { id: "apple-pay", icon: "apple-pay", name: "Apple Pay", maxWidth: "40" },
]);

const promoCode = ref("");
const selectedPaymentMethod = ref("");
const acceptTerms = ref(false);

// Credit card form data
const creditCardForm = reactive({
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
});

const applyPromoCode = () => {
  // Logic to apply the promo code
  console.log("Applying promo code:", promoCode.value);
};

// Format card number with spaces
const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  creditCardForm.cardNumber = formattedValue;
};

// Format expiry date as MM/YY
const formatExpiryDate = (event) => {
  let value = event.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }
  creditCardForm.expiryDate = value;
};

// Validate payment form
const isPaymentFormValid = computed(() => {
  if (selectedPaymentMethod.value === "apple-pay") {
    return true;
  }

  if (selectedPaymentMethod.value === "credit-card") {
    return (
      creditCardForm.cardNumber.replace(/\s/g, "").length >= 13 &&
      creditCardForm.expiryDate.length === 5 &&
      creditCardForm.cvv.length >= 3 &&
      creditCardForm.cardholderName.trim().length > 0
    );
  }

  return false;
});

const processPayment = () => {
  if (!selectedPaymentMethod.value) {
    alert("Please select a payment method");
    return;
  }

  if (!acceptTerms.value) {
    alert("Please accept the Terms of Service and Privacy Policy to continue");
    return;
  }

  if (selectedPaymentMethod.value === "credit-card") {
    console.log("Processing credit card payment:", {
      ...creditCardForm,
      promoCode: promoCode.value,
      termsAccepted: acceptTerms.value,
    });
    // Add your credit card payment logic here
    alert("Processing credit card payment...");
  } else if (selectedPaymentMethod.value === "apple-pay") {
    console.log("Processing Apple Pay payment", {
      promoCode: promoCode.value,
      termsAccepted: acceptTerms.value,
    });
    // Add your Apple Pay logic here
    alert("Redirecting to Apple Pay...");
  }
};

// Watch for payment method changes
watch(selectedPaymentMethod, (newMethod) => {
  console.log("Payment method changed to:", newMethod);
  // You can add additional logic here when payment method changes
});
</script>

<style lang="scss" scoped>
.promo {
  :deep(input) {
    padding-inline-end: 2rem;
  }
}

.payment-methods {
  label:hover {
    transform: translateY(-1px);
  }

  input[type="radio"]:checked + * {
    .radio-circle {
      border-color: #8ef251;
      background-color: #8ef251;
    }
  }
}

.credit-card-form input:focus,
.credit-card-form input:hover {
  border-color: #8ef251;
  box-shadow: 0 0 0 1px rgba(142, 242, 81, 0.2);
}
</style>
