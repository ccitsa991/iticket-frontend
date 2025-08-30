<template>
  <div
    class="w-full max-w-full md:max-w-[572px] rounded-2xl md:rounded-[20px] bg-black/95 md:bg-[#000000] p-4 md:p-6 lg:p-10 mx-auto backdrop-blur-sm md:backdrop-blur-none"
  >
    <div class="flex flex-col gap-6 md:gap-8 lg:gap-8">
      <!-- Header -->
      <div class="flex flex-col gap-2 md:text-left">
        <h2 class="text-white font-bold text-xl md:text-2xl lg:text-3xl">
          {{ $t("welcome_back") }}
        </h2>
        <p class="text-gray-400 text-sm md:text-base tracking-wide">
          {{ $t("sign_in_to_account") }}
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div class="flex flex-col gap-4 md:gap-6">
          <UIInputText
            :label="$t('email')"
            :required="true"
            icon="message"
            v-model="formData.email"
            :rules="[
              (v) => !!v || $t('field_required', { field: $t('email') }),
              (v) =>
                /.+@.+\..+/.test(v) ||
                $t('field_invalid', { field: $t('email') }),
            ]"
            class="w-full"
          />
          <UIInputPassword
            :label="$t('password')"
            :isShowPassword="true"
            :required="true"
            icon="lock"
            v-model="formData.password"
            :rules="[
              (v) => !!v || $t('field_required', { field: $t('password') }),
            ]"
            class="w-full"
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="flex md:justify-end mt-3 md:mt-4 mb-6 md:mb-10">
          <NuxtLinkLocale
            to="/forgot-password"
            class="text-sm md:text-base font-bold text-white hover:underline transition-all duration-200"
          >
            {{ $t("forgot_password") }}
          </NuxtLinkLocale>
        </div>

        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full bg-white h-12 md:h-14 lg:h-16 rounded-xl md:rounded-2xl text-black font-bold text-sm md:text-base hover:brightness-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          {{ $t("sign_in") }}
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center gap-3 mt-4 md:mt-6" dir="ltr">
        <span class="flex flex-1 h-px linear rotate-180"></span>
        <span class="text-gray-400 text-sm">{{ $t("or") }}</span>
        <span class="flex flex-1 h-px linear"></span>
      </div>

      <!-- Google Sign In -->
      <button
        class="flex items-center justify-center gap-3 md:gap-4 mx-auto bg-gray-800 hover:bg-gray-700 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 w-full md:w-fit text-white text-sm md:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <SvgIcon name="google" size="sm" :transform="false" />
        <span>{{ $t("sign_in_with_google") }}</span>
      </button>

      <!-- Sign Up Link -->
      <div
        class="text-white text-sm md:text-base flex flex-col md:flex-row gap-1 items-center justify-center mt-6 md:mt-10"
      >
        <p class="text-center">{{ $t("dont_have_account") }}</p>
        <button
          class="font-bold hover:underline transition-all duration-200"
          @click="$emit('sign_up')"
        >
          {{ $t("sign_up") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "auth" });

const formData = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  console.log("Submitted:", formData);
};
</script>

<style lang="scss" scoped>
.linear {
  background-image: linear-gradient(
    90deg,
    #1f2937 0.35%,
    rgba(31, 41, 55, 0) 100%
  );
}
</style>
