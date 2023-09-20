<script setup lang="ts">
import {computed, defineProps} from 'vue';

const props = defineProps({
  cols: {type: Number, default: 3},
  gap: {type: Number, default: 4},
});

const gridClasses = computed(() => `grid-cols-${props.cols} gap-${props.gap}`);
</script>

<template>
  <div :class="gridClasses" class="grid shadow-sm overflow-hidden">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>