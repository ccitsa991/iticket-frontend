<template>
  <LayoutNavbar />
  <main
    class="min-h-[calc(100vh-65px-100px)] md:min-h-[calc(100vh-65px-100px)] sm:min-h-[calc(100vh-60px-80px)] flex justify-center items-center py-4 md:py-6 px-4"
  >
    <div class="container max-w-7xl mx-auto">
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12"
      >
        <!-- Left Section - Logo and Title -->
        <div
          class="flex flex-col gap-6 md:gap-8 lg:gap-12 flex-1 lg:text-left max-w-md lg:max-w-none"
        >
          <div class="flex md:justify-center justify-start">
            <SvgIcon
              maxWidth="200px"
              class="w-40 md:w-48 lg:w-64 h-auto"
              size="free"
              :transform="false"
              name="logo"
            />
          </div>

          <h1
            class="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[4rem] text-white max-w-full lg:max-w-[523px] leading-tight lg:leading-[120%]"
          >
            {{ $t("best_place") }}
          </h1>
        </div>

        <!-- Right Section - Auth Form -->
        <div class="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <NuxtPage @sign_in="goTo('login')" @sign_up="goTo('register')" />
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="container">
      <div
        class="flex items-center justify-between py-[20px] border-t border-[#2A2A2A]"
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
const goTo = (page) => {
  // Logic to navigate to the specified page
  navigateTo(page);
};
</script>

<style lang="scss" scoped>
main {
  background: url("~/assets/images/bg.jpeg") no-repeat center center fixed;
  background-size: cover;

  // Fallback for mobile devices that don't support fixed background
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
}
</style>
