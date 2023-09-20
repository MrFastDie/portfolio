<script setup lang="ts">
import SideNav from "./components/sidenav/SideNav.vue";
</script>

<template>
  <div>
    <SideNav />
    <div class="mx-auto p-10 ml-64">
      <router-view></router-view>
    </div>
  </div>
</template>
