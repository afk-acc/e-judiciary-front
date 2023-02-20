<template>
  <v-profile-navbar ></v-profile-navbar>
  <router-view >
  </router-view>
</template>

<script>
import vProfileNavbar from '../../../components/admin/adminPages/UI/profileUI/vProfileNavbar.vue'
import vProfileContent from '../../../components/admin/adminPages/UI/profileUI/vProfileContent.vue'

  export default {
    components: {
      vProfileNavbar,
      vProfileContent
    }
  }
</script>

<style lang="scss" scoped>

</style>