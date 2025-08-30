<template>
  <h2 class="text-[2rem] text-[#F9FAFB] font-[700]">
    {{ $t("change_password") }}
  </h2>

  <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6 mt-6">
    <div class="flex flex-col gap-4 md:gap-6">
      <!-- Current Password Field -->
      <UIInputText
        :label="$t('current_password')"
        :required="true"
        icon="lock"
        type="password"
        v-model="formData.currentPassword"
        :rules="[
          (v) => !!v || $t('field_required', { field: $t('current_password') }),
        ]"
        class="w-full"
      />

      <!-- New Password Field -->
      <UIInputText
        :label="$t('new_password')"
        :required="true"
        icon="lock"
        type="password"
        v-model="formData.password"
        :rules="[
          (v) => !!v || $t('field_required', { field: $t('new_password') }),
          (v) =>
            v.length >= 8 ||
            $t('field_min_length', { field: $t('new_password'), min: 8 }),
          (v) =>
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v) ||
            $t('password_requirements'),
        ]"
        class="w-full"
      />

      <!-- Confirm Password Field -->
      <UIInputText
        :label="$t('confirm_password')"
        :required="true"
        icon="lock"
        type="password"
        v-model="formData.confirmPassword"
        :rules="[
          (v) => !!v || $t('field_required', { field: $t('confirm_password') }),
          (v) => v === formData.password || $t('passwords_do_not_match'),
        ]"
        class="w-full"
      />

      <!-- Password Requirements Info -->
      <div class="text-sm text-gray-300 bg-gray-800/50 p-3 rounded-lg">
        <p class="font-medium mb-2">{{ $t("password_requirements_title") }}:</p>
        <ul class="space-y-1 text-xs">
          <li>• {{ $t("password_min_8_chars") }}</li>
          <li>• {{ $t("password_uppercase_lowercase") }}</li>
          <li>• {{ $t("password_number_required") }}</li>
        </ul>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-4 md:pt-6">
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-white h-12 md:h-14 lg:h-16 rounded-xl md:rounded-2xl text-black font-bold text-sm md:text-base hover:brightness-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isSubmitting">{{ $t("change_password") }}</span>
        <span v-else>{{ $t("changing") }}...</span>
      </button>
    </div>
  </form>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});

import { useBreadCrumbStore } from "@/stores/breadCrumb";

const { setBreadcrumbs } = useBreadCrumbStore();
setBreadcrumbs([
  { title: "home", disabled: false, to: "/" },
  { title: "change_password", disabled: true, to: "/" },
]);

// Reactive form data
const formData = ref({
  currentPassword: "",
  password: "",
  confirmPassword: "",
});

// Form state
const isSubmitting = ref(false);

// Handle form submission
const handleSubmit = async () => {
  try {
    isSubmitting.value = true;

    // Validate passwords match
    if (formData.value.password !== formData.value.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    // Prepare submit data
    const submitData = {
      currentPassword: formData.value.currentPassword,
      newPassword: formData.value.password,
    };

    // Here you would typically submit to API
    console.log("Changing password...", {
      currentPassword: "***",
      newPassword: "***",
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Clear form on success
    formData.value = {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    };

    // Show success message
    console.log("Password changed successfully");
  } catch (error) {
    console.error("Error changing password:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
