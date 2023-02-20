<script setup>
import vHeader from "../../components/site/vHeader.vue";
import vFooter from "../../components/site/vFooter.vue";
</script>
<template>
  <div class="page-wrap">
    <v-header xyz="fade small stagger ease-out-back"/>
    <router-view  class="mt-[150px]" v-slot="{ Component }">
      <XyzTransition appear xyz="fade in-skew-4 out-skew-4 " >
          <component :is="Component" />
        </XyzTransition>
    </router-view>
    <v-footer />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>
