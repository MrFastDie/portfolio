<script setup lang="ts">
import {PropType, ref} from "vue";
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {type: String, required: true},
  placeholder: {type: String, required: true},
  type: {type: String, default: 'text'},
  description: {type: String, default: null},
  validate: {type: Boolean, default: null},
  errText: {type: String, default: null},
  successText: {type: String, default: null},
  icon: {type: Array as PropType<string[]>, default: () => []},
  value: {type: String, default: ""},
});

const emit = defineEmits(['update:value']);

const updateValue = (newValue) => {
  emit('update:value', newValue);
};

const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
</script>

<template>
  <div>
    <label :for="id" class="block text-sm text-left font-medium mb-2 dark:text-white">
      {{ props.label }}
    </label>
    <div class="relative">
      <input
          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          aria-describedby="hs-input-helper-text"
          @input="updateValue($event.target.value)"
          :value="props.value"
          :id="id"
          :type="props.type"
          :placeholder="props.placeholder"
          :label="props.label"
      >
      <font-awesome-icon
          v-if="props.icon?.length > 0"
          class="absolute inset-y-4 right-0 flex items-center pointer-events-none pr-3"
          :icon="props.icon" />
      <div
          v-if="null !== props.validate && !props.validate"
          class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
             aria-hidden="true">
          <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
      <div
          v-if="null !== props.validate && props.validate"
          class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
             fill="currentColor" viewBox="0 0 16 16">
          <path
              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
      </div>
    </div>
    <p
        v-if="null !== props.validate && !props.validate && null !== props.errText"
        class="text-sm text-red-600 mt-2 text-left"
        id="hs-validation-name-error-helper">{{ props.errText }}</p>
    <p
        v-if="null !== props.validate && props.validate && null !== props.successText"
        class="text-sm text-green-600 mt-2 text-left"
        id="hs-validation-name-success-helper">{{ props.successText }}</p>


    <p
        v-if="null !== props.description"
        class="text-sm text-gray-500 mt-2 text-left"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>

</style>