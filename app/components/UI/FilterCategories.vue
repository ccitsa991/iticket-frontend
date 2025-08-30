<template>
  <section class="position-relative">
    <VContainer>
      <div class="categories-wrapper">
        <ul class="flex categories">
          <li
            v-if="showAllTab"
            class="control text-center sm:!text-[1rem] !text-[0.8rem] px-6"
            :class="{
              'mixitup-control-active': activeFilter === 'all',
            }"
            data-filter="all"
            @click="handleFilter('all')"
          >
            <span class="text-capitalize">
              {{ $t("all") }}
            </span>
          </li>
          <li
            v-for="(type, index) in items"
            :key="index"
            class="control flex gap-[10px] text-center sm:!text-[1rem] !text-[0.8rem]"
            :class="{
              'mixitup-control-active':
                activeFilter === sanitizeTitle(type.name),
            }"
            :data-filter="`.${sanitizeTitle(type.name)}`"
            @click="handleFilter(sanitizeTitle(type.name))"
          >
            <SvgIcon size="xs" :name="type.icon" />
            <span class="text-capitalize">
              {{ type.name }}
            </span>
          </li>
        </ul>
      </div>
    </VContainer>
  </section>
  <section class="grid-gallery w-100 !pb-[20px] !pt-[10px] scroll-reveal">
    <VContainer>
      <v-row ref="itemsContainer" id="items">
        <v-col
          cols="12"
          lg="4"
          md="6"
          v-for="(item, index) in flattenedItems"
          :key="`${item.parentType}-${item.id}-${index}`"
          :class="sanitizeTitle(item.type)"
          class="mix"
        >
          <slot name="item" :item="item"></slot>
        </v-col>
      </v-row>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
    </VContainer>
  </section>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, required: true },
  showAllTab: { type: Boolean, default: true },
});

const itemsContainer = ref(null);

// Use the MixItUp composable
const { isInitialized, activeFilter, initMixer, filter, destroyMixer } =
  useMixitup(itemsContainer, {
    animation: {
      clampHeight: false,
      duration: 350,
    },
    selectors: {
      target: ".mix",
    },
  });

// Computed property to flatten the nested structure
const flattenedItems = computed(() => {
  const items = [];
  props.items.forEach((category) => {
    if (category.children && category.children.length > 0) {
      category.children.forEach((child) => {
        items.push({
          ...child,
          parentType: category.name,
          categoryIcon: category.icon,
        });
      });
    }
  });
  return items;
});

// Computed property to get available types from the items
const availableTypes = computed(() => {
  return props.items.filter(
    (category) => category.children && category.children.length > 0
  );
});

const sanitizeTitle = (str) => {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, "")
    .toLowerCase();
};

const handleFilter = async (filterValue) => {
  const filterSelector = filterValue === "all" ? "all" : `.${filterValue}`;
  await filter(filterSelector);

  // Scroll to clicked category
  const clickedCategory = document.querySelector(
    `[data-filter="${filterValue === "all" ? "all" : `.${filterValue}`}"]`
  );
  if (clickedCategory) {
    clickedCategory.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
};

const initializeWithData = async () => {
  if (flattenedItems.value.length > 0) {
    await initMixer();

    // Set initial filter
    if (availableTypes.value.length > 0) {
      const initialFilter = props.showAllTab
        ? "all"
        : sanitizeTitle(availableTypes.value[0].name);
      await handleFilter(initialFilter);
    }
  }
};

// Watch for changes in items
watch(
  () => props.items,
  async (newItems, oldItems) => {
    if (JSON.stringify(newItems) !== JSON.stringify(oldItems)) {
      destroyMixer();
      await nextTick();
      await initializeWithData();
    }
  },
  { deep: true }
);

// Watch for flattened items changes
watch(flattenedItems, async (newItems) => {
  if (newItems.length > 0 && !isInitialized.value) {
    await initializeWithData();
  } else if (newItems.length === 0 && isInitialized.value) {
    destroyMixer();
  }
});

onMounted(() => {
  if (process.client && flattenedItems.value.length > 0) {
    nextTick(() => {
      initializeWithData();
    });
  }
});
</script>

<style lang="scss" scoped>
/* Same styles as before */
.categories-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.categories {
  background: #ffffff0d;
  border-radius: 93px;
  align-items: center;
  list-style: none;
  white-space: nowrap;
  width: fit-content;
  display: flex;
  gap: 0.5rem;

  li {
    display: flex;
    height: 47px;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    color: #f9fafb;
    border-radius: 12px;
    font-family: var(--font-family);
    background-color: #141414;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    flex-shrink: 0;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    &.mixitup-control-active {
      background-color: #fff;
      color: #04060f;
    }
  }
}
</style>
