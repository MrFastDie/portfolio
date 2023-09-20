<script setup lang="ts">
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const route = useRoute();
const currentPath = computed(() => route.path);

const classActive = "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white";
const classNormal = "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300";

</script>

<template>
  <div id="docs-sidebar"
       class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <div class="px-6">
      <router-link class="flex-none text-xl font-semibold dark:text-white" aria-label="Brand" to="/">Daniel Hackbarth
      </router-link>
    </div>

    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul class="space-y-1.5">
        <li>
          <router-link
              to="/contact"
              :class="currentPath === '/contact' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['far', 'id-card']"/>
            {{ $t('menu.contact') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/work_experience"
              :class="currentPath === '/work_experience' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'toolbox']"/>
            {{ $t('menu.work_experience') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/projects"
              :class="currentPath === '/projects' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'trowel']" />
            {{ $t('menu.projects') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/volunteer"
              :class="currentPath === '/volunteer' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'handshake-angle']"/>
            {{ $t('menu.volunteer') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/education"
              :class="currentPath === '/education' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fa', 'user-graduate']"/>
            {{ $t('menu.education') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/skills"
              :class="currentPath === '/skills' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'trophy']"/>
            {{ $t('menu.skills') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/hobbies"
              :class="currentPath === '/hobbies' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'campground']"/>
            {{ $t('menu.hobbies') }}
          </router-link>
        </li>

        <li>
          <router-link
              to="/blog"
              :class="currentPath === '/blog' ? classActive : classNormal"
          >
            <font-awesome-icon :icon="['fas', 'rss']" />
            {{ $t('menu.blog') }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>