<script setup lang="ts">
import CardImgLeft from "../card/CardImgLeft.vue";
import CardImgRight from "../card/CardImgRight.vue";
</script>

<template>
  <h1 class="text-4xl mt-5 mb-2">Projects</h1>
  <CardImgLeft class="mt-5" title="Digobo" img-desc="Digobo" img-src="/projects/digobo.png" github-url="https://github.com/MrFastDie/Digobo">
    A Discord bot written entirely in go.
  </CardImgLeft>

  <CardImgRight class="mt-5" title="AlphaSign" img-desc="Alpha LED panel" img-src="/projects/alpha.png" github-url="https://github.com/MrFastDie/AlphaSign">
    A tool which uses the Alpha serial API and a custom webinterface to control such panels.
  </CardImgRight>

  <CardImgLeft class="mt-5" title="Interview" img-desc="PHP programing language" img-src="/skills/php.svg" github-url="https://github.com/MrFastDie/Interview">
    A collection of unit tests and questions to use in a PHP coding interview.
  </CardImgLeft>
</template>
