<template>
  <Carousel v-bind="mergedConfig">
    <Slide v-for="(item, index) in items" :key="getSlideKey(item, index)">
      <slot :item="item" :index="index">
        <div class="default-slide">
          {{ item }}
        </div>
      </slot>
    </Slide>

    <template #addons>
      <div class="flex gap-4 navigation" v-if="isNavigation">
        <CarouselNavigation />
      </div>
      <CarouselPagination v-if="isPagination" />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed } from "vue";
import { Pagination as CarouselPagination } from "vue3-carousel";
import { Navigation as CarouselNavigation } from "vue3-carousel";

const props = defineProps({
  items: { type: Array, required: true, default: () => [] },
  keyField: { type: String, default: "id" },
  config: { type: Object, default: () => ({}) },
  gap: { type: Number, default: 30 },
  height: { type: [Number, String], default: 800 },
  itemsToShow: { type: [Number, String], default: 1 },
  snapAlign: { type: String, default: "center" },
  autoplay: { type: Number, default: 0 },
  wrapAround: { type: Boolean, default: false },
  isNavigation: { type: Boolean, default: true },
  isPagination: { type: Boolean, default: true },
  pauseAutoplayOnHover: { type: Boolean, default: true },
});

// Use toRefs for better reactivity control
import { toRefs } from "vue";

const mergedConfig = computed(() => {
  const baseConfig = {
    gap: props.gap,
    height: props.height,
    itemsToShow: props.itemsToShow,
    snapAlign: props.snapAlign,
    autoplay: props.autoplay,
    wrapAround: props.wrapAround,
    pauseAutoplayOnHover: props.pauseAutoplayOnHover,
    breakpoints: {
      768: { itemsToShow: 1, snapAlign: "center" },
      1024: {
        itemsToShow: Math.min(2, props.itemsToShow),
        snapAlign: "center",
      },
      1280: {
        itemsToShow: Math.min(3, props.itemsToShow),
        snapAlign: "center",
      },
    },
  };

  return {
    ...baseConfig,
    ...props.config,
    breakpoints: {
      ...baseConfig.breakpoints,
      ...(props.config.breakpoints || {}),
    },
  };
});

// Helper function to get slide key
const getSlideKey = (item, index) => {
  if (typeof item === "object" && item !== null && props.keyField in item)
    return item[props.keyField];
  return index;
};

// Computed property for height to avoid reactivity issues in CSS
const carouselHeight = computed(() => {
  const height =
    typeof props.height === "number"
      ? props.height
      : parseInt(props.height) || 800;
  return `${height}px`;
});
</script>

<style lang="scss" scoped>
.carousel {
  --vc-carousel-height: v-bind(carouselHeight) !important;
}

.navigation {
  :deep() {
    button {
      background-image: url("@/assets/icons/arrow-right.svg");
      background-repeat: no-repeat;
      background-position: center;

      &.carousel__prev {
        background-image: url("@/assets/icons/arrow-left.svg");
      }
      svg {
        display: none;
      }
    }
  }
}

:deep(.carousel__slide) {
  height: fit-content;
}

:deep() {
  .carousel__pagination {
    gap: 6px;
    &-item {
      color: #fff;
    }
    &-button {
      width: 12px;
      height: 12px;
      background-color: #e1ffb5;
      border-radius: 50%;
      transition: all 0.3s ease;
      &--active {
        width: 31px;
        background-color: var(--primary);
        border-radius: 90px;
      }
    }
  }
}
</style>
