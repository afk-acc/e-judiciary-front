<template>
   <div class="maxsm:mt-10">
    <v-content-nav/>
    <div class="mt-4 p-2  bg-l_white">
      <router-view ></router-view>
    </div>
   </div>
</template>

<script>
import vContentNav from '../../../components/admin/adminPages/UI/content/vContentNav.vue';
  export default {
    components: {
      vContentNav,
      
    }
  }
</script>

<style lang="scss" scoped>

</style>