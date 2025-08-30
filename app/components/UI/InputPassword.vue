<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      :for="label?.toLowerCase()"
      class="text-[#9CA3AF] font-[700] text-base"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <div
        v-if="icon"
        class="absolute start-5 top-[28px] transform -translate-y-1/2 text-[#9CA3AF] z-10"
      >
        <SvgIcon :name="icon" size="sm" />
      </div>
      <v-text-field
        v-model="modelValue"
        :id="label?.toLowerCase()"
        hide-details="auto"
        :placeholder="
          placeholder ? placeholder : $t('enter_item', { item: label })
        "
        :required="required"
        :rules="rules"
        :type="isShowPassword && !showPassword ? 'password' : 'text'"
        variant="outlined"
        :class="{
          'with-icon': icon,
          'with-password-toggle': isShowPassword,
          'without-icon': !icon,
        }"
        class="custom-text-field"
      >
        <template v-if="isShowPassword" v-slot:append-inner>
          <div
            @click="togglePasswordVisibility"
            class="cursor-pointer text-[#9CA3AF] hover:text-white transition-colors duration-200 focus:outline-none"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
          >
            <SvgIcon v-if="!showPassword" name="eye" size="sm" />
            <SvgIcon v-else name="eye-off" size="sm" />
          </div>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script setup>
const modelValue = defineModel({ type: String, default: "" });
const showPassword = ref(false);

defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  rules: Array,
  icon: String,
  isShowPassword: Boolean,
});

const togglePasswordVisibility = () =>
  (showPassword.value = !showPassword.value);
</script>

<style lang="scss" scoped>
.custom-text-field {
  :deep(.v-field) {
    background-color: #141414 !important;
    border-radius: 16px !important;
    height: 56px !important;
    border: 1px solid transparent !important;
    transition: all 0.2s ease-in-out !important;

    &:hover {
      border-color: rgba(255, 255, 255, 0.1) !important;
    }

    &.v-field--focused {
      border-color: var(--primary) !important;
      box-shadow: none !important;
    }

    .v-field__outline {
      display: none !important;
    }

    .v-field__input {
      color: white !important;
      padding: 0 20px !important;
      min-height: 56px !important;
      font-size: 16px !important;
      display: flex !important;
      align-items: center !important;

      input {
        color: white !important;
        padding: 0 !important;

        &::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
      }
    }

    .v-field__append-inner {
      align-items: center !important;
      padding-top: 0 !important;
      margin-inline-start: 8px !important;
    }
  }

  &.with-icon {
    :deep(.v-field__input) {
      padding-inline-start: 56px !important;
    }
  }

  &.with-password-toggle {
    :deep(.v-field__input) {
      padding-inline-end: 8px !important;
    }
  }

  &.with-icon.with-password-toggle {
    :deep(.v-field__input) {
      padding-inline-start: 56px !important;
      padding-inline-end: 8px !important;
    }
  }

  // Remove default Vuetify styles
  :deep(.v-field__overlay) {
    display: none !important;
  }

  :deep(.v-field__loader) {
    display: none !important;
  }

  // Ensure proper text color in all states
  :deep(.v-field--variant-outlined .v-field__input) {
    color: white !important;
  }

  :deep(.v-field--variant-outlined input) {
    color: white !important;
  }
}
</style>
