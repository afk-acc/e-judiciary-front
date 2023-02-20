<template>
  <div class="bg-faq_bg">
    <v-faq-title></v-faq-title>
  </div>
  <div>
    <v-faq-category></v-faq-category>
  </div>
  <div class="bg-[#F7F8FA]">
    <v-faq-form></v-faq-form>
  </div>
</template>

<script>
  import vFaqTitle from '../../components/site/FAQ/vFaqTitle.vue'
  import vFaqCategory from '../../components/site/FAQ/vFaqCategory.vue'
  import vFaqForm from '../../components/site/FAQ/vFaqForm.vue'
  export default {
    components: {
      vFaqTitle,
      vFaqCategory,
      vFaqForm
    }
  }
</script>

<style lang="scss" scoped>

</style>