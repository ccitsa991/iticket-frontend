<template>
  <h2 class="text-[2rem] text-[#F9FAFB] font-[700]">{{ $t("my_info") }}</h2>

  <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6 mt-6">
    <div class="flex flex-col gap-4 md:gap-6">
      <!-- Name Fields Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <UIInputText
          :label="$t('first_name')"
          :required="true"
          icon="profile"
          v-model="formData.firstName"
          :rules="[
            (v) => !!v || $t('field_required', { field: $t('first_name') }),
            (v) =>
              v.length >= 2 ||
              $t('field_min_length', { field: $t('first_name'), min: 2 }),
          ]"
          class="w-full"
        />

        <UIInputText
          :label="$t('last_name')"
          :required="true"
          icon="profile"
          v-model="formData.lastName"
          :rules="[
            (v) => !!v || $t('field_required', { field: $t('last_name') }),
            (v) =>
              v.length >= 2 ||
              $t('field_min_length', { field: $t('last_name'), min: 2 }),
          ]"
          class="w-full"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Email Field -->
        <UIInputText
          :label="$t('email')"
          :required="true"
          icon="message"
          type="email"
          v-model="formData.email"
          :rules="[
            (v) => !!v || $t('field_required', { field: $t('email') }),
            (v) =>
              /.+@.+\..+/.test(v) ||
              $t('field_invalid', { field: $t('email') }),
          ]"
          class="w-full"
        />

        <!-- Phone Field -->
        <UIInputText
          :label="$t('phone')"
          :required="true"
          icon="phone"
          type="tel"
          v-model="formData.phone"
          :rules="[
            (v) => !!v || $t('field_required', { field: $t('phone') }),
            (v) =>
              /^[\+]?[1-9][\d]{0,15}$/.test(v.replace(/\s/g, '')) ||
              $t('field_invalid', { field: $t('phone') }),
          ]"
          class="w-full"
        />
      </div>

      <!-- Birth Date Fields -->
      <div class="space-y-2">
        <label class="block text-sm md:text-base font-medium text-[#F9FAFB]">
          {{ $t("birth_date") }} <span class="text-red-400">*</span>
        </label>

        <div class="grid grid-cols-3 gap-3 md:gap-4">
          <!-- Day Select -->
          <UISelect
            v-model="formData.birthDay"
            :options="days"
            :clearable="true"
            :placeholder="$t('select_item', { item: 'day' })"
          />
          <UISelect
            v-model="formData.birthMonth"
            :options="months"
            :clearable="true"
            :placeholder="$t('select_item', { item: 'month' })"
          />
          <UISelect
            v-model="formData.birthYear"
            :options="years"
            :clearable="true"
            :placeholder="$t('select_item', { item: 'year' })"
          />
        </div>

        <!-- Birth Date Error Message -->
        <div v-if="birthDateError" class="text-red-400 text-sm mt-1">
          {{ birthDateError }}
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-4 md:pt-6">
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-white h-12 md:h-14 lg:h-16 rounded-xl md:rounded-2xl text-black font-bold text-sm md:text-base hover:brightness-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isSubmitting">{{ $t("save_changes") }}</span>
        <span v-else>{{ $t("saving") }}...</span>
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
  { title: "my_info", disabled: true, to: "/" },
]);

// Reactive form data
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDay: null,
  birthMonth: null,
  birthYear: null,
});

// Form state
const isSubmitting = ref(false);
const birthDateError = ref("");

// Generate days (1-31)
const days = computed(() => {
  return Array.from({ length: 31 }, (_, i) => i + 1);
});

// Generate months
const months = computed(() => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
});

// Generate years (from current year - 100 to current year - 13)
const years = computed(() => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const endYear = currentYear - 13; // Minimum age of 13

  return Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i);
});

// Validate birth date
const validateBirthDate = () => {
  birthDateError.value = "";

  if (
    !formData.value.birthDay ||
    !formData.value.birthMonth ||
    !formData.value.birthYear
  ) {
    birthDateError.value = $t("field_required", { field: $t("birth_date") });
    return false;
  }

  // Check if the date is valid
  const day = parseInt(formData.value.birthDay);
  const month = parseInt(formData.value.birthMonth);
  const year = parseInt(formData.value.birthYear);

  const date = new Date(year, month - 1, day);

  if (
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) {
    birthDateError.value = $t("invalid_date");
    return false;
  }

  // Check if user is at least 13 years old
  const today = new Date();
  const age = today.getFullYear() - year;
  const monthDiff = today.getMonth() - (month - 1);
  const dayDiff = today.getDate() - day;

  if (
    age < 13 ||
    (age === 13 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
  ) {
    birthDateError.value = $t("minimum_age_required", { age: 13 });
    return false;
  }

  return true;
};

// Handle form submission
const handleSubmit = async () => {
  try {
    isSubmitting.value = true;

    // Validate birth date
    if (!validateBirthDate()) {
      return;
    }

    // Here you would typically validate other fields and submit to API
    console.log("Form Data:", formData.value);

    // Format birth date
    const birthDate = new Date(
      parseInt(formData.value.birthYear),
      parseInt(formData.value.birthMonth) - 1,
      parseInt(formData.value.birthDay)
    );

    const submitData = {
      firstName: formData.value.firstName.trim(),
      lastName: formData.value.lastName.trim(),
      email: formData.value.email.trim(),
      phone: formData.value.phone.trim(),
      birthDate: birthDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    console.log("User info updated successfully:", submitData);
  } catch (error) {
    console.error("Error updating user info:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// Watch for changes in birth date fields to clear error
watch(
  [
    () => formData.value.birthDay,
    () => formData.value.birthMonth,
    () => formData.value.birthYear,
  ],
  () => {
    if (birthDateError.value) {
      birthDateError.value = "";
    }
  }
);
</script>

<style lang="scss" scoped></style>
