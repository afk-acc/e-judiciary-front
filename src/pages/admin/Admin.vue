<template>
  <div class="bg-profile_bg transition-all "
  >
    <div class="flex ">
      <admin-header
          class=" absolute p-4 flex items-center right-0">
      </admin-header>
      <div class="flex relative maxlg:absolute transition-all ease-in duration-300">
        <XyzTransition xyz="fade left-5">
          <admin-navbar
              class="z-50 h-screen square"
              v-if="isActive"
          >
          </admin-navbar>
        </XyzTransition>
        <div class="bars absolute top-5 cursor-pointer -right-8  z-50" @click="isActive = !isActive">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
          </svg>
        </div>
      </div>
      <div class="w-full h-full px-5 my-[120px]  z-10 transition-all ease-in duration-300 "
           :class="{' my-[100px]': this.$route.name !== 'chat'}">
        <router-view class="">

        </router-view>
      </div>


    </div>

    <v-footer class="mt-0" v-if="this.$route.name !== 'chat'"></v-footer>

  </div>

</template>

<script>
import adminNavbar from '../../components/admin/nav/adminNavbar.vue'
import adminHeader from '../../components/admin/nav/adminHeader.vue'
import vFooter from '../../components/site/vFooter.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    adminNavbar,
    adminHeader,
    vFooter,
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['get_chat_user_list', 'getCurrentUser', 'getIsAuth', 'get_send_appeal'])
  },
  methods: {
    ...mapActions(['loadCurrentUser', 'load_chat_user_list' ,'add_new_appeal'])
  },
  mounted() {

    this.load_chat_user_list({})
      this.loadCurrentUser()
  },
  created() {

  },
  watch: {
    getIsAuth(val) {
      if (val === false)
        this.$router.push('/')
    },
    getCurrentUser(val){
      if(val.id){
        if(this.get_send_appeal){
          this.add_new_appeal(this.get_send_appeal)
        }
      }
    }
  }
}
</script>

<style lang="scss">
* {
  scrollbar-width: thin;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: var(--primary);
}

*::-webkit-scrollbar-thumb {
  background-color: #3A57E8;
  border-radius: 2px;
}
</style>