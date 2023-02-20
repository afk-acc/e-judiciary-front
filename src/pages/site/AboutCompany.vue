<template>
  <div>
    <div class="max-w-container mx-auto px-4">
      <v-about />
      <v-feedback offset="0" />
    </div>
    <v-video offset="200" />
    <div class="max-w-container mx-auto px-4">
      <v-approach />
      <v-expirience />
    </div>
    <v-download offset="300" />
    <div class="max-w-container mx-auto px-4">
      <v-news offset="300" />
    </div>
  </div>
</template>

<script>
import vFeedback from "../../components/site/index/vFeedback.vue";
import vVideo from "../../components/site/index/vVideo.vue";
import vDownload from "../../components/site/index/vDownload.vue";
import vNews from "../../components/site/index/vNews.vue";
import vAbout from "../../components/site/aboutCompany/vAbout.vue";
import vApproach from "../../components/site/aboutCompany/vApproach.vue";
import vExpirience from "../../components/site/aboutCompany/vExpirience.vue";
export default {
  components: {
    vFeedback,
    vVideo,
    vDownload,
    vNews,
    vAbout,
    vApproach,
    vExpirience,
  },
};
</script>

<style lang="scss" scoped></style>
