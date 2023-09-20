<script setup lang="ts">
import Grid from "../grid/Grid.vue";
import CardImgTop from "../card/CardImgTop.vue";
</script>

<template>
  <h1 class="text-4xl mt-5 mb-2">Programing languages</h1>
  <Grid>
    <CardImgTop title="go" img-desc="go programing language" img-src="/skills/go.svg">
      When it comes to favorite languages, go is the winner!
    </CardImgTop>

    <CardImgTop title="Java" img-desc="java programing language" img-src="/skills/java.svg">
      As of my current work, Java is the tool of choice.
    </CardImgTop>

    <CardImgTop title="PHP" img-desc="php programing language" img-src="/skills/php.svg">
      When it comes to my work as a freelancer, or future works, I did a lot of PHP.
    </CardImgTop>

    <CardImgTop title="JavaScript" img-desc="javascript programing language" img-src="/skills/javascript.svg">
      When it comes down to frontends - its JavaScript I trust.
    </CardImgTop>

    <CardImgTop title="Python" img-desc="python programing language" img-src="/skills/python.svg">
      For small tools, or converting data I prefer python.
    </CardImgTop>

    <CardImgTop title="Lua" img-desc="lua programing language" img-src="/skills/lua.svg">
      For all the times I need a lightweight script language, lua is on its way.
    </CardImgTop>
  </Grid>

  <p>&nbsp;</p>

  <h1 class="text-4xl mt-5 mb-2">Frameworks</h1>
  <ul class="list-disc list-inside">
    <li>VueJS</li>
    <li>Angular</li>
    <li>SpringBoot</li>
  </ul>

  <p>&nbsp;</p>

  <h1 class="text-4xl mt-5 mb-2">Databases</h1>
  <ul class="list-disc list-inside">
    <li>PostgreSQL</li>
    <li>MySQL</li>
    <li>MSSQL</li>
    <li>Redis</li>
    <li>RabbitMQ</li>
    <li>Kafka</li>
  </ul>

  <p>&nbsp;</p>

  <h1 class="text-4xl mt-5 mb-2">Operating Systems</h1>
  <ul class="list-disc list-inside">
    <li>Windows</li>
    <li>Windows Server</li>
    <li>Debian</li>
    <li>CentOS</li>
    <li>FreeBSD</li>
    <li>MacOS</li>
  </ul>

  <p>&nbsp;</p>

  <h1 class="text-4xl mt-5 mb-2">CI/CD</h1>
  <ul class="list-disc list-inside">
    <li>Jenkins</li>
    <li>Gitlab CI</li>
    <li>Helm</li>
    <li>Docker</li>
    <li>OpenShift</li>
    <li>Kubernetes</li>
  </ul>
</template>
