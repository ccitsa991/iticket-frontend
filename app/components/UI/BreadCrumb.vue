<template>
  <section class="breadcrumb-section flex flex-col gap-[30px] relative z-9">
    <div
      class="container flex flex-col gap-[30px] justify-end items-start w-100 px-4 md:px-0"
    >
      <nav
        v-if="BreadcrumbItems.length > 1"
        aria-label="Breadcrumb navigation"
        class="breadcrumb-nav"
      >
        <v-breadcrumbs
          density="compact"
          :items="BreadcrumbItems"
          class="px-0 py-1 text-white"
        >
          <template v-slot:title="{ item }">
            <span
              class="text-capitalize"
              :aria-current="item.disabled ? 'page' : undefined"
            >
              {{ $t(item.title) }}
            </span>
          </template>
        </v-breadcrumbs>
      </nav>
      <slot name="header"></slot>
    </div>

    <div class="content-slot">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";

// Props with better typing
const props = defineProps({
  description: {
    type: String,
    default: "",
  },
});

const breadCrumbStore = useBreadCrumbStore();
const BreadcrumbItems = computed(() => breadCrumbStore.breadCrumb);

// Add structured data for SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() => {
        if (BreadcrumbItems.value.length <= 1) return "";

        return JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: BreadcrumbItems.value.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            item: item.to,
          })),
        });
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  color: rgba(var(--v-theme-invert_text), 1);
  font-weight: 500;
  font-family: "ClashDisplay", system-ui, -apple-system, sans-serif;
  line-height: 1;
  font-display: swap;

  // Remove unnecessary pseudo-element
  // The original ::before was creating an invisible overlay
}

.page-description {
  color: #f4f4f4d9;
  font-family: "ClashDisplay", system-ui, -apple-system, sans-serif;
  max-width: 496px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
}

.breadcrumb-nav {
  .v-breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    &__item {
      font-size: 12px;
    }
  }

  :deep(.v-breadcrumbs-item) {
    color: rgba(var(--v-theme-text), 0.3) !important;
    > a,
    > span {
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    // Better focus states for accessibility
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  :deep(.v-breadcrumbs-divider) {
    color: rgba(var(--v-theme-text), 0.3) !important;
  }

  :deep(.v-breadcrumbs-item--disabled) {
    opacity: 1;
    color: rgba(var(--v-theme-text), 1) !important;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

// Responsive design with container queries
@container (max-width: 768px) {
  .breadcrumb-container {
    height: 250px;
    gap: 20px;
  }

  .page-title {
    font-size: 2rem !important;
  }

  .page-description {
    font-size: 1.2rem !important;
  }
}

@container (max-width: 480px) {
  .breadcrumb-container {
    height: 200px;
  }

  .page-description {
    font-size: 1rem !important;
  }
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
