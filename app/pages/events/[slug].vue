<template>
  <UIBreadCrumb />
  <section class="mb-[2.5rem]">
    <UIBanner :item="item" />
  </section>
  <section class="mb-[33px]">
    <div class="container">
      <div class="flex justify-between items-start gap-4">
        <div class="flex-1 flex flex-col gap-3">
          <h2 class="text-[2rem] text-[#F9FAFB] font-[700]">
            Unstable Live Night with Ghostly Kisses
          </h2>
          <div class="flex font-[700] gap-[30px] text-[#8EF251]">
            <div class="flex gap-2 items-center">
              <SvgIcon size="sm" name="calendar" />
              <p>{{ item.date.from }} - {{ item.date.to }}</p>
            </div>
            <div class="flex gap-2 items-center">
              <SvgIcon size="sm" name="time-square" />
              <p>{{ item.time.from }} - {{ item.time.to }}</p>
            </div>
          </div>

          <div class="flex gap-2 text-[#8EF251]">
            <p>{{ $t("last_entry") }}</p>
            <p>{{ item.last_entry }}</p>
          </div>
          <div
            class="flex gap-2 !pb-4 items-center text-[#9CA3AF] border-b-[1px] border-b-solid border-[#27303F]"
          >
            <SvgIcon name="location" size="sm" />
            <p>{{ item.place }}</p>
          </div>
          <div class="flex flex-col gap-[1.375rem]">
            <div class="flex flex-col gap-[1rem]">
              <h3 class="text-[20px] font-[700] text-white">About</h3>
              <p class="text-[#FFFFFFC2] text-base font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim aliquip ex ea commodo consequat. Duis aute deserunt mollit
                anim id est laborum.
              </p>
            </div>

            <div class="flex flex-col gap-[1rem]">
              <h3 class="text-[20px] font-[700] text-white">More Info</h3>
              <ul class="flex flex-col gap-2 list-disc ms-[20px]">
                <li class="text-[#9CA3AF]">
                  We're celebrating our edition of the California.
                </li>
                <li class="text-[#9CA3AF]">
                  We're celebrating our edition of the California.
                </li>
                <li class="text-[#9CA3AF]">
                  We're celebrating our edition of the California.
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-[1rem]">
              <h3 class="text-[20px] font-[700] text-white">Dress Code</h3>
              <p class="text-[#FFFFFFC2] text-base font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim aliquip ex ea commodo consequat. Duis aute deserunt mollit
                anim id est laborum.
              </p>
            </div>
            <div class="flex flex-col gap-[1rem]">
              <h3 class="text-[20px] font-[700] text-white">More Info</h3>
              <ul class="flex flex-col gap-2 list-disc ms-[20px]">
                <li class="text-[#9CA3AF]">
                  We're celebrating our edition of the California.
                </li>
                <li class="text-[#9CA3AF]">
                  We're celebrating our edition of the California.
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-[1rem]">
              <h3 class="text-[20px] font-[700] text-white">Location</h3>
              <p class="text-[#FFFFFFC2] text-base font-[400] flex gap-2">
                <SvgIcon name="location" />
                <span>Al Dariyah Al Jadidah, Riyadh, 13732, Ksa</span>
              </p>
              <a
                href=""
                rel="noopener noreferrer"
                class="text-white underline font-[700]"
                target="_blank"
                >Get Directions</a
              >
            </div>
            <NuxtLinkLocale
              to="/"
              class="text-white flex gap-4 justify-between items-center bg-[#141414] rounded-[20px] p-[18px]"
            >
              <div class="flex items-center gap-4">
                <SvgIcon size="sm" name="message-question" />
                <span class="font-[500]">Contact Us For Help</span>
              </div>
              <SvgIcon size="sm" name="chevron-left" />
            </NuxtLinkLocale>
          </div>
        </div>
        <div class="flex-1 flex bg-[#141414] rounded-[20px]">
          <div class="flex gap-4 !p-4 w-full justify-between">
            <div class="flex flex-col items-center">
              <p class="text-base text-[#9CA3AF]">Price From</p>
              <p class="text-[#8EF251] text-[1.5rem] font-[700]">450 SAR</p>
            </div>
            <button
              class="!p-4 rounded-[16px] h-[56px] w-[236px] bg-white text-black fomt-[700]"
              @click="isShowModal = true"
            >
              Get a Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="flex flex-col gap-6">
        <h2 class="text-capitalize text-[2rem] text-[#F9FAFB] font-[700]">
          events you might like
        </h2>
        <v-row>
          <v-col
            v-for="event in relatedEvents"
            :key="event.id"
            cols="12"
            sm="6"
            md="4"
          >
            <EventCard :item="event" />
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
  <UIModal v-model="isShowModal" :persistent="false" width="572">
    <template #content>
      <LoginForm v-if="!isRegister" @sign_up="isRegister = true" />
      <Register v-if="isRegister" @sign_in="isRegister = false" />
    </template>
  </UIModal>
</template>

<script setup>
import LoginForm from "../login.vue";
import Register from "../register.vue";

const isRegister = ref(false);
const isShowModal = ref(false);
import { useBreadCrumbStore } from "@/stores/breadCrumb";
const { setBreadcrumbs } = useBreadCrumbStore();
const item = ref({
  title: "Banner 1",
  description: "Description for Banner 1",
  date: { from: "Mar 28", to: "Mar 30" },
  time: { from: "10:00 PM", to: "11:00 PM" },
  last_entry: "09:00 PM",
  place: "Main Stage",
});
setBreadcrumbs([
  { title: "home", disabled: false, to: "/" },
  { title: item.value.title, disabled: true, to: "/" },
]);

const relatedEvents = ref([
  {
    id: 1,
    name: "Unstable Live Night with Ghostly Kisses",
    type: "music",
    image: "https://placehold.co/600x400",
    create_at: "2023-10-01",
    place: "Riyadh",
  },
  {
    id: 2,
    name: "Unstable Live Night with Ghostly Kisses",
    type: "music",
    image: "https://placehold.co/600x400",
    create_at: "2023-10-01",
    place: "Riyadh",
  },
  {
    id: 3,
    name: "Unstable Live Night with Ghostly Kisses",
    type: "music",
    image: "https://placehold.co/600x400",
    create_at: "2023-10-01",
    place: "Riyadh",
  },
]);
</script>

<style lang="scss" scoped></style>
