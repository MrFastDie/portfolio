<script setup lang="ts">
import {PropType, computed} from "vue";
import {defineProps} from 'vue';

const props = defineProps({
  headline: {type: String, required: true},
  date: {type: String, required: true},
  icon: {type: Array as PropType<string[]>, default: () => []},
  iconBackgroundColor: {type: String, default: null},
  iconTextColor: {type: String, default: null},
});

const iconStyles = computed(() => ({
  backgroundColor: props.iconBackgroundColor ?? 'antiquewhite',
  color: props.iconTextColor ?? 'black',
}));
</script>

<template>
  <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

    <!-- Icon -->
    <div
        :style="iconStyles"
        class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      <font-awesome-icon
          :icon="props.icon"/>
    </div>

    <!-- Card -->
    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
      <div class="flex items-center justify-between space-x-2 mb-1">
        <div class="font-bold text-slate-900">{{ props.headline }}</div>
        <time class="font-caveat font-medium text-indigo-500">{{ props.date }}</time>
      </div>
      <div class="text-slate-500">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
