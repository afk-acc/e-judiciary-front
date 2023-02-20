<template>
  <div class="bg-l_white p-4 rounded-2xl">
    <div class="">
      <table class=" table-auto  w-[100%] maxmd:w-[130%] ">
        <thead class="">
        <tr class="w-full">
          <th>{{ $t("Фото") }}</th>
          <th>{{ $t("Имя") }}</th>
          <th>{{ $t("E-mail") }}</th>
          <th>{{ $t("Образование") }}</th>
          <th>{{ $t("Действия") }}</th>
        </tr>
        </thead>
        <tbody class="w-full">
        <request-item @showInfo="(el)=>{show_info = true;info=el}" :item="item.user_info"
                      v-for="(item, index) in get_request_list.data" :ket="index"/>
        </tbody>
      </table>
    </div>

    <div class="flex items-center justify-evenly mt-10" v-if="get_request_list?.data?.length>0">
      <router-link :to="{name:'requests', params:{page:loadPrev?this.params.page-1:this.params.page||1}}"
                   class="fas fa-chevron-left cursor-pointer text-3xl">
      </router-link>
      <span class="text-xl font-bold">{{ this.params.page }}</span>
      <router-link :to="{name:'requests', params:{page:loadNext?Number(this.params.page)+1:this.params.page}}"
                   class="fas fa-chevron-right cursor-pointer text-3xl"></router-link>
    </div>
    <v-modal @show="show_info = false" v-if="show_info">
      <div class="p-4">

        <p class="mx-auto mt-10 text-3xl maxmd:text-2xl font-bold  text-center ">{{ $t('О пользователе') }}</p>
        <div class="">
          <p class="text-2xl font-bold ">{{ $t('Образование') }}</p>
          <p><span class=" ">{{ $t('Учебное учреждение') }} </span>: {{ info.education_place || '-' }}</p>
          <label for="" class="text-xl  ">{{ $t('Дата обучения') }}</label>
          <div class="flex justify-between gap-x-4">
            <div class="w-full flex gap-x-2 items-center">
              <label for="" class=" ">{{ $t('от') }}</label>
              <input
                  disabled
                  :placeholder="$t('от')"
                  type="date"
                  class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-4 font-medium">
            </div>
            <div class="w-full flex gap-x-2 items-center">
              <label for="" class=" ">{{ $t("до") }}</label>
              <input
                  disabled
                  :placeholder="$t('до')"
                  type="date"
                  class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-4 font-medium">
            </div>

          </div>
          <p class="text-2xl font-bold ">{{ $t('Описание о себе') }}</p>
          <p>
            {{ info.description || '-' }}
          </p>
          <p class="text-2xl font-medium mt-4 text-center">{{ $t('Фотография профиля') }}</p>
          <div class="flex justify-center my-2" v-if="info.image">
            <img class="rounded-full w-[200px] h-[200px] object-cover " :src="info.image" alt="">
          </div>
          <div class="flex justify-center my-4">
            <button @click="show_info = false" class="h-[50px] bg-l_primary px-4 py-2 rounded-2xl text-l_white" >{{ $t('Закрыть') }}</button>
          </div>
        </div>
      </div>

    </v-modal>
  </div>
</template>

<script>
import requestItem from "../../../components/admin/requestItem.vue";
import {mapActions, mapGetters} from "vuex";
import VModal from "../../../components/admin/vModal.vue";
import vInput from "../../../components/admin/vInput.vue";
import {canAccess} from "../../../assets/functions.js";

export default {
  name: "RequestList",
  components: {
    VModal,
    requestItem,
    vInput
  },

  data() {
    return {
      loadPrev: false,
      loadNext: true,
      isActive: false,
      active_user: {},
      show_info: false,
      info: {},
      params: {
        page: 1,
        limit: 15,
        locale: localStorage.getItem('locale'),
        query: "",
      },
    }
  },
  methods: {
    ...mapActions(['load_request_list'])
  },
  computed: {
    ...mapGetters(['get_request_list', 'getCurrentUser'])
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.loadPrev = Number(this.params.page) > 1
    this.load_request_list(this.params)
    if(this.getCurrentUser.id){
      if(!canAccess(this.getCurrentUser, 'request.read')){
        this.$router.go(-1)
      }
    }
  },
  watch:{
    $route(to, from) {
      this.loadNext = Number(this.params.page) !== Number(this.get_request_list?.meta?.last_page)
      this.loadPrev = Number(this.params.page) > 1
      this.params.page = to.params.page
      if (this.params.page < 1)
        this.params.page = 1;
      this.load_request_list(this.params)
    },
    get_request_list(val) {
      this.loadNext = Number(this.params.page) !== Number(val.meta?.last_page)
      this.loadPrev = Number(this.params.page) > 1
    },
    getCurrentUser(val){
      if(!canAccess(val, 'request.read')){
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>

</style>