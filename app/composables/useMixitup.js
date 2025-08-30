// composables/useMixitup.js
export const useMixitup = (containerRef, options = {}) => {
  const mixerInstance = ref(null);
  const isInitialized = ref(false);
  const activeFilter = ref("all");

  const defaultOptions = {
    animation: {
      clampHeight: false,
      duration: 350,
    },
    selectors: {
      target: ".mix",
    },
    load: {
      filter: "all",
    },
    ...options,
  };

  const initMixer = async () => {
    // Only run on client side
    if (!process.client) return;

    try {
      // Dynamic import
      const mixitup = (await import("mixitup")).default;

      // Wait for DOM to be ready
      await nextTick();

      const container = unref(containerRef);
      if (!container) {
        console.warn("MixItUp container not found");
        return;
      }

      // Clean up existing instance
      if (mixerInstance.value) {
        mixerInstance.value.destroy();
      }

      // Create new instance
      mixerInstance.value = mixitup(container, defaultOptions);
      isInitialized.value = true;

      return mixerInstance.value;
    } catch (error) {
      console.error("Failed to initialize MixItUp:", error);
      return null;
    }
  };

  const destroyMixer = () => {
    if (mixerInstance.value) {
      try {
        mixerInstance.value.destroy();
      } catch (error) {
        console.error("Failed to destroy MixItUp:", error);
      }
      mixerInstance.value = null;
      isInitialized.value = false;
    }
  };

  const filter = async (selector) => {
    if (mixerInstance.value) {
      try {
        await mixerInstance.value.filter(selector);
        activeFilter.value = selector;
      } catch (error) {
        console.error("Failed to filter MixItUp:", error);
      }
    }
  };

  const sort = async (sortString) => {
    if (mixerInstance.value) {
      try {
        await mixerInstance.value.sort(sortString);
      } catch (error) {
        console.error("Failed to sort MixItUp:", error);
      }
    }
  };

  const insertElements = async (elements) => {
    if (mixerInstance.value) {
      try {
        await mixerInstance.value.insert(elements);
      } catch (error) {
        console.error("Failed to insert elements:", error);
      }
    }
  };

  const removeElements = async (elements) => {
    if (mixerInstance.value) {
      try {
        await mixerInstance.value.remove(elements);
      } catch (error) {
        console.error("Failed to remove elements:", error);
      }
    }
  };

  // Auto cleanup
  onBeforeUnmount(() => {
    destroyMixer();
  });

  return {
    mixerInstance: readonly(mixerInstance),
    isInitialized: readonly(isInitialized),
    activeFilter: readonly(activeFilter),
    initMixer,
    destroyMixer,
    filter,
    sort,
    insertElements,
    removeElements,
  };
};
