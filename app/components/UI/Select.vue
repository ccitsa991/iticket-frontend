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
        class="absolute start-5 top-[30px] transform -translate-y-1/2 text-[#9CA3AF] z-10"
      >
        <SvgIcon :name="icon" size="sm" />
      </div>
      <v-select
        v-model="modelValue"
        hide-details="auto"
        :items="options"
        :placeholder="
          placeholder ? placeholder : $t('enter_item', { item: label })
        "
        :required="required"
        :rules="rules"
        :clearable="clearable"
        variant="outlined"
        :class="{
          'with-icon': icon,
          'without-icon': !icon,
        }"
        class="custom-text-field"
      >
        <template #append-inner>
          <SvgIcon name="chevron-down" size="xs" class="text-white min-w-5" />
        </template>
      </v-select>
    </div>
  </div>
</template>

<script setup>
const modelValue = defineModel({ type: String, default: "" });

defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  clearable: Boolean,
  rules: Array,
  options: Array,
  icon: String,
});
</script>

<style lang="scss" scoped>
.custom-text-field {
  :deep(svg) {
    transition: all 0.4s;
  }
  :deep(.v-field[aria-expanded="true"]) {
    .v-field__append-inner {
      svg {
        transform: rotate(180deg) !important;
      }
    }
  }
  :deep(.v-field__append-inner) {
    i {
      display: none;
    }
  }
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
      // padding: 0 !important;
      font-size: 16px !important;

      input {
        color: white !important;

        &::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
      }
    }
  }

  &.with-icon {
    :deep(.v-field__input) {
      padding-inline-start: 56px !important;
    }
  }

  &.without-icon {
    :deep(.v-field__input) {
      padding-inline-start: 20px !important;
    }
  }

  :deep(.v-field__input input) {
    padding-inline-end: 20px !important;
  }

  // Remove default Vuetify styles
  :deep(.v-field__overlay) {
    display: none !important;
  }

  :deep(.v-field__loader) {
    display: none !important;
  }
}
</style>
