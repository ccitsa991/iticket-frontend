<template>
  <footer class="flex flex-col gap-[35px]">
    <div class="container">
      <div
        class="border-t-[1px] border-t-solid border-[#FFFFFF52] !mt-[40px] !pt-[40px] flex justify-between gap-8 w-full"
      >
        <div class="flex-1 max-w-[420px]">
          <div class="flex flex-col gap-[18px]">
            <NuxtLinkLocale to="/" class="flex items-center flex-shrink-0">
              <h1 class="text-lg md:text-xl lg:text-2xl font-bold">
                <SvgIcon
                  maxWidth="159px"
                  class="w-20 md:w-24 lg:w-32 h-auto"
                  size="free"
                  :transform="false"
                  name="logo"
                />
              </h1>
            </NuxtLinkLocale>
            <p class="text-[#FFFFFFC2] text-[12px] space-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim aliquip ex ea commodo consequat. Duis aute deserunt mollit
              anim id est laborum.
            </p>
            <ul class="flex flex-col gap-[13px]">
              <li>
                <a
                  class="flex items-center gap-4"
                  href="tel:+966234567890"
                  rel="nofollow noopener"
                >
                  <span
                    class="w-[40px] h-[40px] rounded-full bg-[#FFFFFF14] !p-[10px]"
                  >
                    <SvgIcon
                      class="w-10 h-10 text-white"
                      size="free"
                      :transform="false"
                      name="phone"
                    />
                  </span>
                  <p class="text-white text-[14px] text-[#FFFFFFCC]">
                    +966 234 567 890
                  </p>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center gap-4"
                  href="mailto:support24@iticket.com"
                  rel="nofollow noopener"
                >
                  <span
                    class="w-[40px] h-[40px] rounded-full bg-[#FFFFFF14] !p-[10px]"
                  >
                    <SvgIcon
                      class="w-10 h-10 text-white"
                      size="free"
                      :transform="false"
                      name="message"
                    />
                  </span>
                  <p class="text-white text-[14px] text-[#FFFFFFCC]">
                    support24@iticket.com
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex-1 max-w-[460px]">
          <div class="flex flex-col gap-[25px]">
            <h1 class="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Newsletter
              <span class="text-[#55D606]">Signup</span>
            </h1>
            <p class="text-[#FFFFFFC2] text-[12px] space-[0.5px]">
              If you want to receive our all weekly updates about new offers and
              discount, signup below.
            </p>

            <form
              @submit.prevent="subscribe"
              class="flex items-center gap-4 bg-border"
            >
              <UIInputText
                :required="true"
                v-model="email"
                :placeholder="$t('enter_item', { item: $t('email') })"
                :rules="[
                  (v) =>
                    /.+@.+\..+/.test(v) ||
                    $t('field_invalid', { field: $t('email') }),
                ]"
                class="w-full max-h-[36px]"
              />
              <button
                type="submit"
                class="bg-[#FFFFFF] text-[#000] h-[36px] py-1 px-4 font-[700] rounded-[6px]"
              >
                Subscribe
              </button>
            </form>

            <ul class="flex gap-4">
              <li>
                <a
                  class="flex justify-center items-center w-[32px] h-[32px] !p-[10px] rounded-full bg-[#FFFFFF14]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <SvgIcon
                    class="w-[8px] h-[8px] text-white"
                    size="free"
                    max-width="8px"
                    :transform="false"
                    name="facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  class="flex justify-center items-center w-[32px] h-[32px] !p-[10px] rounded-full bg-[#FFFFFF14]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <SvgIcon
                    class="w-[8px] h-[8px] text-white"
                    size="free"
                    :transform="false"
                    name="x"
                  />
                </a>
              </li>
              <li>
                <a
                  class="flex justify-center items-center w-[32px] h-[32px] !p-[10px] rounded-full bg-[#FFFFFF14]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <SvgIcon
                    class="w-[8px] h-[8px] text-white"
                    size="free"
                    :transform="false"
                    name="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="flex items-center justify-between py-[20px] border-t border-[#FFFFFF54]"
      >
        <p class="text-white">{{ $t("copyright") }}</p>
        <ul class="flex gap-[4rem]">
          <li>
            <NuxtLinkLocale class="text-white" to="/" exact>
              {{ $t("contact") }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale class="text-white" to="/privacy" exact>
              {{ $t("privacy") }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale class="text-white" to="/team" exact>
              {{ $t("team") }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const email = ref("");

const subscribe = () => {
  // Add your subscription logic here
  console.log("Subscribing with email:", email.value);
};
</script>

<style lang="scss" scoped>
form {
  :deep(.custom-text-field) {
    .v-field,
    .v-field__field,
    .v-field__input {
      height: 36px !important;
      min-height: unset;
      border-radius: 6px !important;
    }
  }
}
</style>
