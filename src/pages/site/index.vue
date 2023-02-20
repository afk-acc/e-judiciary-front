<template>
    <div class="page-wrap">
      <div class="page-hero max-w-container mx-auto px-4" >
        <v-intro />
        <v-appeal />
        <v-about />
        <v-company />
        <v-feedback/>
      </div>
      <v-video  />
      <div class="max-w-container mx-auto px-4">
        <v-faq />
        <v-service />
      </div>
      <v-download  />
      <div class="max-w-container mx-auto px-4">
        <v-news  />
      </div>
    </div>
</template>

<script setup>
import vIntro from "../../components/site/index/vIntro.vue";
import vAppeal from "../../components/site/index/vAppeal.vue";
import vAbout from "../../components/site/index/vAbout.vue";
import vCompany from "../../components/site/index/vCompany.vue";
import vFeedback from "../../components/site/index/vFeedback.vue";
import vVideo from "../../components/site/index/vVideo.vue";
import vFaq from "../../components/site/index/vFaq.vue";
import vService from "../../components/site/index/vService.vue";
import vDownload from "../../components/site/index/vDownload.vue";
import vNews from "../../components/site/index/vNews.vue";
</script>

<style lang="scss" scoped></style>
