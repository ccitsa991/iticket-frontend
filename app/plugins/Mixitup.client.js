export default defineNuxtPlugin(async () => {
  // Only load on client
  if (process.client) {
    const mixitup = (await import("mixitup")).default;

    return {
      provide: {
        mixitup,
      },
    };
  }
});
