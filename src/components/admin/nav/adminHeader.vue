<template>
  <div class="flex maxsm:flex-col maxsm:w-full maxsm:justify-center"
       :class="{'hidden' : this.$route.name === 'chat'}"
  >
    <div class="cursor-pointer uppercase flex flex-col  ">
      <select
          v-model="lang"
          class="outline-none appearance-none w-12 h-12 text-l_white bg-filter_gray text-center rounded-[34px] text-sm">
        <option value="uz_l">Uz</option>
        <option value="uz_c">Уз(к)</option>
        <option value="ru">
          Ру
        </option>
      </select>
    </div>
    <div class="header-icons flex maxsm:flex-col items-center ">
      <div class="notification flex">
        <div class="relative">
          <div class="relative">
            <div @click="show_notification=!show_notification" class="cursor-pointer">

              <svg class="mx-4 cursor-pointer" width="18" height="20"
                   viewBox="0 0 18 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.7695 9.64534C16.039 8.79229 15.7071 8.05305 15.7071 6.79716V6.37013C15.7071 4.73354 15.3304 3.67907 14.5115 2.62459C13.2493 0.986993 11.1244 0 9.04423 0H8.95577C6.91935 0 4.86106 0.941671 3.577 2.5128C2.71333 3.58842 2.29293 4.68822 2.29293 6.37013V6.79716C2.29293 8.05305 1.98284 8.79229 1.23049 9.64534C0.676907 10.2738 0.5 11.0815 0.5 11.9557C0.5 12.8309 0.787226 13.6598 1.36367 14.3336C2.11602 15.1413 3.17846 15.6569 4.26375 15.7466C5.83505 15.9258 7.40634 15.9933 9.0005 15.9933C10.5937 15.9933 12.165 15.8805 13.7372 15.7466C14.8215 15.6569 15.884 15.1413 16.6363 14.3336C17.2118 13.6598 17.5 12.8309 17.5 11.9557C17.5 11.0815 17.3231 10.2738 16.7695 9.64534Z"
                    fill="#3A57E8"/>
                <path opacity="0.7"
                      d="M11.0088 17.2285C10.5088 17.1217 7.46266 17.1217 6.96275 17.2285C6.53539 17.3272 6.07324 17.5568 6.07324 18.0604C6.09809 18.5408 6.37935 18.9648 6.76895 19.2337L6.76795 19.2347C7.27184 19.6275 7.86319 19.8773 8.48236 19.9669C8.81232 20.0122 9.14825 20.0102 9.49014 19.9669C10.1083 19.8773 10.6997 19.6275 11.2036 19.2347L11.2026 19.2337C11.5922 18.9648 11.8734 18.5408 11.8983 18.0604C11.8983 17.5568 11.4361 17.3272 11.0088 17.2285Z"
                      fill="#3A57E8"/>
              </svg>
              <span class=" absolute -bottom-1 right-2" v-if="Number(this.get_notifications.length) > 0">
              <span class="flex h-4 w-4 relative">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white_red opacity-75"></span>
                <span
                    class="relative text-[10px] items-center justify-center text-l_white inline-flex rounded-full h-3 w-3 bg-white_red">
                    {{ this.get_notifications.length }}</span>
              </span>
               </span>
            </div>

          </div>

          <div
              v-if="show_notification && get_notifications.length > 0"
              class="absolute top-10 z-40 -left-[200px] max-h-[400px] overflow-scroll max-w-[400px] w-screen rounded-2xl bg-l_white py-5 flex flex-col gap-y-4">
            <v-notification :item="item" v-for="(item,index) in get_notifications" :key="index"/>
          </div>
        </div>
        <router-link :to="{name:'chat'}" @click="mes=0" class="relative">
          <div class="relative">
            <svg class="mx-4 cursor-pointer" width="20" height="18" viewBox="0 0 20 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7"
                    d="M20 12.94C20 15.73 17.76 17.99 14.97 18H14.96H5.05C2.27 18 0 15.75 0 12.96V12.95C0 12.95 0.006 8.524 0.014 6.298C0.015 5.88 0.495 5.646 0.822 5.906C3.198 7.791 7.447 11.228 7.5 11.273C8.21 11.842 9.11 12.163 10.03 12.163C10.95 12.163 11.85 11.842 12.56 11.262C12.613 11.227 16.767 7.893 19.179 5.977C19.507 5.716 19.989 5.95 19.99 6.367C20 8.576 20 12.94 20 12.94Z"
                    fill="#3A57E8"/>
              <path
                  d="M19.4759 2.67351C18.6099 1.04151 16.9059 -0.000488281 15.0299 -0.000488281H5.04988C3.17388 -0.000488281 1.46988 1.04151 0.603884 2.67351C0.409884 3.03851 0.501884 3.49351 0.824884 3.75151L8.24988 9.69051C8.76988 10.1105 9.39988 10.3195 10.0299 10.3195C10.0339 10.3195 10.0369 10.3195 10.0399 10.3195C10.0429 10.3195 10.0469 10.3195 10.0499 10.3195C10.6799 10.3195 11.3099 10.1105 11.8299 9.69051L19.2549 3.75151C19.5779 3.49351 19.6699 3.03851 19.4759 2.67351Z"
                  fill="#3A57E8"/>
            </svg>
          </div>
          <span class=" absolute -bottom-1 right-2" v-if="Number(mes) > 0">
              <span class="flex h-4 w-4 relative">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white_red opacity-75"></span>
                <span
                    class="relative text-[10px] items-center justify-center text-l_white inline-flex rounded-full h-3 w-3 bg-white_red">
                  {{ mes }}</span>
              </span>
          </span>

          <!--          <span-->
          <!--              class="w-[8px] animate-ping h-[8px] absolute bottom-0 right-2 z-10 text-[8px] bg-l_secondary rounded-full flex items-center justify-center text-l_white">-->
          <!--          {{ this.mes }}-->
          <!--        </span>-->

        </router-link>


      </div>

      <router-link :to="{name: 'profile-page'}" class="header-avatar flex items-center cursor-pointer gap-x-2">
        <img class="w-[45px] h-[45px] rounded-full object-cover" :src="getCurrentUser.image" alt="">
        <div class="header-info">
          <h3 class="text-base text-[#141414] font-bold">{{ getCurrentUser.name }}</h3>
          <p class="text-sm text-filter_gray">{{ getCurrentUser.role }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import vNotification from '../vNotification.vue'
import {useI18n} from "vue-i18n";

export default {
  components: {
    vNotification
  },


  data() {
    return {
      mes: 0,
      show_notification: false,
      lang: '',
      image: ''
    }

  },
  setup() {
    const {locale, t} = useI18n({useScope: "global"});
    localStorage.setItem("locale", "" + locale.value);
    return {
      switchLanguage: () => {
        locale.value = localStorage.getItem('locale')
      },
    };
  },
  methods: {
    ...mapActions(['load_notifications']),
    ...mapMutations(['add_notification', 'remove_notification']),


  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_base_url', 'get_notifications']),

  },
  mounted() {
    this.mes = this.getCurrentUser.notify
    this.lang = localStorage.getItem('locale', 'ru')

  },
  watch: {
    getCurrentUser(val) {
      this.mes = this.getCurrentUser.notify
      if(this.mes === undefined)
        this.mes = 0;
      console.log(this.mes)
      let channel = this.$pusher.subscribe('private-notification.' + val.id)
      channel.bind('notify', notify => {
        console.log('notify')
        this.mes = Number(this.mes) + 1
      })
      this.load_notifications()
      channel.bind('notification', notify => {
        console.log('notification')
        console.log(notify)
        this.add_notification(notify.notification)
      })
    },
    lang(val) {
      localStorage.setItem('locale', val)
      this.switchLanguage()
    }

  }

}
</script>

<style lang="scss" scoped>

</style>