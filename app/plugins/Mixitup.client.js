// plugins/mixitup.client.js
import mixitup from "mixitup";

export default defineNuxtPlugin(() => {
  // Option 1: Provide globally via provide/inject
  return {
    provide: {
      mixitup,
    },
  };

  // Option 2: Add to globalProperties (Vue 3 way)
  // nuxtApp.vueApp.config.globalProperties.$mixitup = mixitup;
});

// Alternative approach - plugins/mixitup.client.ts (TypeScript)
/*
import mixitup from "mixitup";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mixitup
    }
  }
});

// Add type declarations in types/index.d.ts
declare module '#app' {
  interface NuxtApp {
    $mixitup: typeof mixitup
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mixitup: typeof mixitup
  }
}
*/
