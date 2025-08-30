<template>
  <div class="flex flex-col gap-6">
    <section>
      <div class="container">
        <UICarosuel :height="450" :items="bannerList">
          <template #default="{ item }">
            <UIBanner :item="item" />
          </template>
        </UICarosuel>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex gap-5 flex-wrap">
          <StaticsCard
            v-for="item in staticsItems"
            :key="item.id"
            :label="item.label"
            :number="item.number"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="font-[900] text-[3rem] text-[#E2E3E1]">
          {{ $t("all_events") }}
        </h2>
        <UIFilterCategories
          class="scroll-reveal"
          :showAllTab="true"
          v-scroll-reveal="{ threshold: 0.1 }"
          :items="eventList"
        >
          <template #item="{ item }">
            <EventCard :item="item" />
          </template>
        </UIFilterCategories>
        <div class="flex justify-center items-center">
          <button
            class="rounded-[20px] h-[56px] !py-[14px] !px-[24px] !border-[1px] border-solid border-[#FFFFFF] text-[#FFFFFF] !m-auto"
          >
            {{ $t("load_more_events") }}
          </button>
        </div>
      </div>
    </section>

    <section class="mt-[69px]">
      <div class="container">
        <div class="apps py-[40px] flex justify-between rounded-[24px]">
          <div class="flex-1 flex flex-col gap-[2rem] ms-[10%] max-w-[500px]">
            <h2 class="text-[3rem] font-[500] leading-[57px]">
              <strong class="font-[900]">ITicket</strong> is Available For iOS
              and Android
            </h2>
            <div class="flex gap-[23px]">
              <a
                class="rounded-[18px] bg-[#000000] px-[30px] py-[7px] text-[#fff]"
                href=""
                rel="nofollow"
              >
                <SvgIcon name="apple" size="free" max-width="130" />
              </a>
              <a
                class="rounded-[18px] bg-[#000000] px-[30px] py-[7px] text-[#fff]"
                href=""
                rel="nofollow"
              >
                <SvgIcon name="android" size="free" max-width="130" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const staticsItems = ref([
  { id: 1, label: "This week", number: 12 },
  { id: 2, label: "Next week", number: 12 },
  { id: 3, label: "Events in Riyadh", number: 12 },
  { id: 4, label: "Events in Jeddah", number: 12 },
  { id: 5, label: "Events in Riyadh", number: 12 },
  { id: 6, label: "Events in Jeddah", number: 12 },
]);

const bannerList = ref([
  { title: "Banner 1", description: "Description for Banner 1" },
  { title: "Banner 2", description: "Description for Banner 2" },
  { title: "Banner 3", description: "Description for Banner 3" },
]);
const eventList = ref([
  {
    id: 1,
    name: "music",
    icon: "musicnote",
    children: [
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
    ],
  },
  {
    id: 2,
    name: "cinema",
    icon: "play-circle",
    children: [
      {
        id: 1,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "cinema",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
      {
        id: 2,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "cinema",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
    ],
  },
  {
    id: 3,
    name: "Sport",
    icon: "football",
    children: [
      {
        id: 1,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "Sport",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
      {
        id: 2,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "Sport",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
    ],
  },
  {
    id: 4,
    name: "Wrestling",
    icon: "fitness",
    children: [
      {
        id: 1,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "Wrestling",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
      {
        id: 2,
        name: "Unstable Live Night with Ghostly Kisses",
        type: "Wrestling",
        image: "https://placehold.co/600x400",
        create_at: "2023-10-01",
        place: "Riyadh",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.apps {
  background: linear-gradient(
    179.69deg,
    #fff9ee -42.23%,
    #c8ffa7 4.86%,
    #8ef251 51.96%,
    #50d400 99.73%
  );
}
</style>
