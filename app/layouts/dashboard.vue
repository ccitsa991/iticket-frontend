<template>
  <LayoutNavbar />
  <main class="">
    <div class="container">
      <div class="min-h-[calc(100vh-65px-100px)] mt-[44px]">
        <UIBreadCrumb />
        <div class="flex gap-[2rem]">
          <aside
            class="border-[1px] w-[327px] rounded-[18px] border-solid border-[#FFFFFF33]"
          >
            <div
              class="flex items-center gap-4 p-[1.5rem] border-b-[1px] border-solid border-[#FFFFFF33]"
            >
              <p
                class="font-[900] text-[12px] w-[40px] h-[40px] bg-[#8EF251] border-[1px] border-solid rounded-full flex justify-center items-center border-[#FFFFFF33]"
              >
                MA
              </p>
              <p class="text-white text-[18px]">{{ name }}</p>
            </div>
            <nav class="flex flex-col p-4 gap-2">
              <NuxtLinkLocale
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                class="flex items-center gap-2 p-[14px] text-[#FFFFFFAD]"
              >
                <SvgIcon :name="link.icon" size="xs" />
                <span class="text-[16px]">{{ $t(link.name) }}</span>
              </NuxtLinkLocale>

              <button class="flex items-center gap-2 text-[#E22726] p-[14px]">
                <SvgIcon name="logout" size="xs" />
                <span class="text-[16px]">{{ $t("logout") }}</span>
              </button>
            </nav>
          </aside>
          <div class="flex-1">
            <section
              class="border-[1px] border-solid border-[#FFFFFF33] rounded-[18px] p-[2rem]"
            >
              <div class="container">
                <div class="flex flex-col gap-[2rem]">
                  <NuxtPage />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
  <LayoutFooter />
</template>

<script setup>
const name = "Mohamed Ali";
const selectedLink = ref("");
const links = ref([
  { name: "my_tickets", to: "/dashboard/my-tickets", icon: "ticket" },
  { name: "my_info", to: "/dashboard/my-info", icon: "profile" },
  {
    name: "change_password",
    to: "/dashboard/change-password",
    icon: "security",
  },
]);
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: #141414;
  color: #fff;
  border-radius: 18px;
}
</style>
