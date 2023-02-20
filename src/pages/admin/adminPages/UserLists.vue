<template>
  <v-users-content></v-users-content>
</template>

<script>
  import vUsersContent from '../../../components/admin/adminPages/UI/usersUI/vUsersContent.vue';
  import {mapGetters} from "vuex";
  import {canAccess} from "../../../assets/functions.js";
  export default {
    components: {
      vUsersContent
    },
    computed:{
      ...mapGetters(['getCurrentUser'])
    },
    methods:{

    },
    mounted() {
      if(this.getCurrentUser.id){
        if(!canAccess(this.getCurrentUser, 'users.profile.read')){
          this.$router.go(-1)
        }
      }
    },
    watch:{
      getCurrentUser(val){
        if(!canAccess(val, 'users.profile.read')){
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>