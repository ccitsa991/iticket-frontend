<template>
  <header
    class="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b-[1px] border-b-solid border-[#FFFFFF52]"
  >
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div
        class="flex gap-2 md:gap-4 justify-between items-center min-h-16 md:min-h-20 lg:min-h-[100px]"
      >
        <!-- Logo -->
        <NuxtLinkLocale to="/" class="flex items-center flex-shrink-0">
          <h1 class="text-lg md:text-xl lg:text-2xl font-bold">
            <SvgIcon
              maxWidth="100px"
              class="w-20 md:w-24 lg:w-32 h-auto"
              size="free"
              :transform="false"
              name="logo"
            />
          </h1>
        </NuxtLinkLocale>

        <!-- Actions -->
        <div class="flex items-center gap-2 md:gap-4 lg:gap-6">
          <!-- Language Switch Button -->
          <button
            @click="switchLanguage"
            class="group flex justify-center text-white items-center border border-white/20 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
            :aria-label="$t('switch_language')"
          >
            <SvgIcon
              name="global"
              size="sm"
              class="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-200"
            />
          </button>

          <!-- Separator -->
          <span
            class="bg-gray-700 h-6 md:h-8 w-px"
            role="separator"
            aria-hidden="true"
          ></span>

          <!-- Login Button -->
          <NuxtLinkLocale
            to="/login"
            class="group flex justify-center text-white items-center border border-white/20 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
            :aria-label="$t('login')"
          >
            <SvgIcon
              name="profile"
              size="sm"
              class="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-200"
            />
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const switchLanguage = () => {
  const currentLocale = locale.value;
  const availableLocales = ["en", "ar"];
  const currentIndex = availableLocales.indexOf(currentLocale);
  const nextIndex = (currentIndex + 1) % availableLocales.length;
  const html = document.documentElement;
  html.setAttribute("lang", availableLocales[nextIndex]);
  html.setAttribute(
    "dir",
    availableLocales[nextIndex] === "ar" ? "rtl" : "ltr"
  );
  setLocale(availableLocales[nextIndex]);
};
</script>

<style lang="scss" scoped></style>
