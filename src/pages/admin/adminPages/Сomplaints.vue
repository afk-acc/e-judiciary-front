<template>
  <div>
    <v-complaints-content></v-complaints-content>
  </div>
</template>

<script>
import vComplaintsContent from '../../../components/admin/adminPages/UI/complaintsUI/vComplaintsContent.vue';
import {mapGetters} from "vuex";
import {canAccess} from "../../../assets/functions.js";
  export default {
    components: {
      vComplaintsContent
    },
    computed:{

      ...mapGetters(['getCurrentUser'])
    },
    mounted() {
      if(this.getCurrentUser.id){
        if(!canAccess(this.getCurrentUser, 'report.read')){
          this.$router.go(-1)
        }
      }
    },
    watch:{
      getCurrentUser(val){
        if(!canAccess(val, 'report.read')){
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>