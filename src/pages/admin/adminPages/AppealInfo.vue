<template>
  <div class="flex maxlg:flex-wrap maxxl:justify-center">
    <div class="w-9/12 bg-l_white mt-14 p-8 maxxl:w-full">
      <div class="userList-title">
        <h3 class="text-3xl w-[90%] font-bold">
          {{ get_appeal.title }}
        </h3>
        <p class="pt-4">
          <span class="font-bold">Тема обращения :</span> {{ get_appeal.appeal_type_text }}
        </p>
        <div class="">
          <p class="mt-10 font-bold pb-5">Описание</p>
          <p class="w-10/12">
            {{ get_appeal.description }}
          </p>
        </div>
        <div class="flex flex-col gap-y-2" v-if="get_appeal.files?.length > 0">
          <p class="mt-10 font-bold pb-5">Прикрипленные файлы</p>
          <span @click="getPdf(item.file, get_appeal.title)" v-for="item in get_appeal.files" class="text-l_primary">{{$t('Скачать прикрепленный файл')}}</span>
        </div>
      </div>
    </div>
    <div class="w-4/12 ml-4 maxlg:ml-0 h-full  mt-14 p-6  maxxl:w-full " v-if="get_appeal.id">
      <div class="appeal-response USERS bg-l_white rounded-2xl py-2 px-4" v-if="show && lawyers.length !== 0">
        <h3 class="text-[28px] text-center font-bold mb-4 mx-auto pb-5 USERS ">Отклики</h3>
        <vAppealResponse @changeUser="changeUser" :item="item" v-for="item in lawyers"/>
        <div :class="{'block' : open,'hidden' : !open}">
          <div @click="open=!open" class="fixed left-0 top-0 z-40 bg-l_black opacity-60 w-full h-screen cursor-pointer">
          </div>
          <div
              class="px-10 py-8 w-[40%] flex justify-center maxxl:w-[60%] maxmd:w-[90%] -translate-x-1/2 -translate-y-1/2  rounded-xl bg-l_white absolute top-1/2 left-1/2  z-50">
            <div class="max-w-[400px] w-full flex justify-center flex-wrap ">
              <div class="w-[67px] h-[67px] mr-10">
                <img class=" rounded-full object-cover w-full" :src="getImage(changed_user?.image)" alt="">
              </div>
              <div class="flex justify-between items-center ">
                <h3 class="text-2xl font-bold">{{ changed_user?.name }} </h3>
                <div class="relative w-6 h-[1px] bg-filter_gray ml-6">
                </div>
                <p class="relative  text-filter_gray pl-8 text-xl">Юрист</p>

              </div>
              <div class="w-full">
                <p class="font-bold text-xl">Общая информация</p>
                <span class="text-filter_gray">{{ changed_user?.bio }}</span>
              </div>
              <div class="mt-8 flex justify-between w-full">
                <v-button @click="change" class="m-0 px-0 py-0  w-[161px] h-[40px] cursor-pointer">Выбрать</v-button>
                <v-button @click="ignore"
                          class="m-0 px-0 py-0  w-[161px] h-[40px] text-white_red bg-opacity-0 border-white_red border cursor-pointer">
                  Игнорировать
                </v-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" " v-else-if="get_appeal.lawyer_id !== null">
        <div class="appeal-response ADVOCATE  ">
          <div class="bg-l_white rounded-2xl py-2" v-if="get_appeal.applicant_id === getCurrentUser.id">
            <h3 class="text-[28px] text-center font-bold mx-auto pb-5 ADVOCATE ">Выбраный юрист</h3>
            <div class="flex justify-center items-center ">
              <img :src="getImage(get_appeal.lawyer_info?.image)" alt="" class="w-[60px] rounded-full object-cover h-[60px]"/>
            </div>
            <div class="pl-4 flex gap-2 justify-center flex-wrap px-4">
              <p class="text-center font-bold w-full">{{ get_appeal.lawyer_info?.name }}</p>
              <p class="w-full text-justify">{{ get_appeal.lawyer_info?.bio?.slice(0, 100) }}...</p>
            </div>
          </div>
          <div class="bg-l_white rounded-2xl py-2" v-else>
            <h3 class="text-[28px] text-center font-bold mx-auto pb-5 ADVOCATE ">Пользователь</h3>
            <div class="flex justify-center items-center ">
              <img :src="getImage(get_appeal.applicant_info.image)" alt="" class="rounded-full object-cover w-[60px] h-[60px]"/>
            </div>
            <div class="pl-4 flex gap-2 justify-center flex-wrap px-4">
              <p class="text-center font-bold w-full">{{ get_appeal.applicant_info?.name }}</p>
              <p class="w-full text-justify">{{ get_appeal.applicant_info?.bio?.slice(0, 100) }}...</p>
            </div>
          </div>
          <div class="" v-if="Number(get_appeal.status_id) !== 4 && getCurrentUser.role_name === 'lawyer'">
            <label for="file2" class="block cursor-pointer bg-l_white mt-10 rounded-2xl text-l_black">
              <h3 class="text-2xl py-2 text-center font-bold mx-auto ">Загрузить ответ</h3>
              <input type="file" id="file2" @change="file=$event.target.files[0]" class="hidden">
            </label>
            <div class="flex items-center justify-center my-4" v-if="file"  @click="send">
              <button class="bg-l_primary py-2 px-4 rounded-xl text-l_white">Отправить</button>
            </div>
          </div>
          <div class="" v-if="Number(get_appeal.status_id) === 4">
            <p class="mt-10 font-bold pb-5">Прикрипленные файлы</p>
            <div class="flex flex-col gap-y-2">
              <span @click="getPdf(item.file, get_appeal.title +' answer')" v-for="item in get_appeal.lawyer_files"
                 class="text-l_primary">{{ item.name }}</span>
            </div>
            <div class="my-4 w-full flex justify-center"
                 v-if="get_appeal.applicant_id === getCurrentUser.id && get_appeal.score === null">

              <button class="bg-l_primary py-2 px-4 text-l_white rounded-xl" @click="showRating = true">Оценить Юриста
              </button>
              <div :class="{'block' : showRating,'hidden' : !showRating}">
                <div @click="showRating=!showRating"
                     class="fixed left-0 top-0 z-40 bg-l_black opacity-60 w-full h-screen cursor-pointer">
                </div>
                <div
                    class="px-10 py-8 w-[40%] maxxl:w-[60%] maxmd:w-[90%] -translate-x-1/2 -translate-y-1/2  rounded-xl bg-l_white absolute top-1/2 left-1/2  z-50">
                  <div class="text-center flex justify-center flex-wrap gap-y-2">
                    <h3 class="text-3xl font-bold w-full">Оцените Юриста</h3>
                    <p class="relative text-base text-filter_gray pl-8"></p>
                    <star-rating :increment="0.5" active-color="#1D19DC" v-model:rating="rating"/>
                    <div class="w-full mt-10 flex justify-center maxsm:flex-wrap">
                      <v-button @click="showRating=!showRating"
                                class="w-[306px] h-[60px] bg-opacity-0 border border-filter_gray text-filter_gray">
                        Отменить
                      </v-button>
                      <v-button @click="sendRating" class="w-[306px] h-[60px] ml-4 maxsm:ml-0 maxsm:mt-4">Сохранить
                      </v-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="font-bold text-2xl" v-else>
              <div> Результат работы</div>

              <star-rating :increment="0.5" active-color="#1D19DC" read-only="true" v-model:rating="get_appeal.score"/>

            </div>
          </div>

        </div>


      </div>

      <div class="bg-l_white rounded-2xl py-2" v-else-if="show===false">
        <div class="ADVOCATE  border-filter_gray px-4">
          <div class="flex cursor-pointer flex-wrap gap-2 ">
            <div class="flex justify-center items-center w-full ">
              <img :src="getImage(get_appeal.applicant_info.image)" alt="" class="w-[60px] h-[60px] rounded-full object-cover "/>
            </div>
            <div class="w-full">
              <p class="flex justify-center font-bold text-center w-full text-xl">{{
                  get_appeal.applicant_info?.name
                }}</p>
              <p class="text-justify">{{ get_appeal.applicant_info?.bio?.slice(0, 100) }}...</p>
            </div>
          </div>
          <div class="mt-8 flex w-full justify-around ">
            <v-button
                @click="send_response({appeal_id:get_appeal.id})"
                class="w-11/12 cursor-pointer"
                v-if="get_appeal.can_send">
              Оставить отклик
            </v-button>
            <v-button class="w-11/12 cursor-pointer" v-else>
              Вы уже откликнулись
            </v-button>
<!--            <v-modal @show="show_response_modal = false" v-if="show_response_modal">-->
<!--             <form @submit.prevent="sendResponse" class="text-center flex flex-col justify-between px-4 py-5">-->
<!--                  <h3 class="text-3xl font-bold">Отклик на обращение</h3>-->
<!--                  <p class="relative text-base text-filter_gray pl-8"></p>-->
<!--                  <textarea v-model="message" class=" mt-4 w-full resize-none pl-4 pt-4 outline-none rounded-lg border border-[#DBDBDB]"-->
<!--                            rows="6" cols="60" placeholder="Введите сообщение"/>-->
<!--                  <div class="w-full mt-10 flex justify-center maxsm:flex-wrap">-->
<!--                    <v-button @click="show_response_modal=!show_response_modal"-->
<!--                              class="w-[306px] h-[60px] bg-opacity-0 border border-filter_gray text-filter_gray">-->
<!--                      Отменить-->
<!--                    </v-button>-->
<!--                    <v-button type="submit" class="w-[306px] h-[60px] ml-4 maxsm:ml-0 maxsm:mt-4">Сохранить</v-button>-->
<!--                  </div>-->
<!--                </form>-->
<!--            </v-modal>-->
          </div>
          <!--        <div :class="{'block' : open,'hidden' : !open}">-->
          <!--          <div @click="open=!open" class="fixed left-0 top-0 z-40 bg-l_black opacity-60 w-full h-screen cursor-pointer">-->
          <!--          </div>-->
          <!--          <div-->
          <!--              class="px-10 py-8 w-[40%] maxxl:w-[60%] maxmd:w-[90%] -translate-x-1/2 -translate-y-1/2  rounded-xl bg-l_white absolute top-1/2 left-1/2  z-50">-->
          <!--            <form @submit.prevent="submit" class="text-center ">-->
          <!--              <h3 class="text-3xl font-bold">Отклик на обращение</h3>-->
          <!--              <p class="relative text-base text-filter_gray pl-8"></p>-->
          <!--              <textarea class=" mt-4 w-full resize-none pl-4 pt-4 outline-none rounded-lg border border-[#DBDBDB]"-->
          <!--                        rows="6" cols="60" placeholder="Введите сообщение"/>-->
          <!--              <div class="w-full mt-10 flex justify-center maxsm:flex-wrap">-->
          <!--                <v-button @click="open=!open"-->
          <!--                          class="w-[306px] h-[60px] bg-opacity-0 border border-filter_gray text-filter_gray">Отменить-->
          <!--                </v-button>-->
          <!--                <v-button class="w-[306px] h-[60px] ml-4 maxsm:ml-0 maxsm:mt-4">Сохранить</v-button>-->
          <!--              </div>-->
          <!--            </form>-->
          <!--          </div>-->
          <!--        </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vAppealResponse from "../../../components/admin/adminPages/UI/appealUI/vAppealResponse.vue";
import vButton from '../../../components/site/ui/vButton.vue'
import {mapActions, mapGetters, mapMutations} from "vuex";

import StarRating from 'vue-star-rating'
import axios from "axios";
import VModal from "../../../components/admin/vModal.vue";
export default {
  components: {
    VModal,
    vAppealResponse,
    vButton,
    StarRating
  },
  computed: {
    ...mapGetters(['get_appeal', 'get_base_url', 'getCurrentUser']),
    lawyers() {
      return [...this.get_appeal.lawyers]
    },

  },
  data() {
    return {
      open: false,
      changed_user: {},
      show: false,
      show_file:false,
      file: "",
      showRating: false,
      rating: '',
      show_response_modal: false,
      message:""
    }
  },
  methods: {
    ...mapActions(['load_appeal', 'send_response', 'ignore_lawyer', 'change_lawyer', 'send_file', 'send_rating']),
    ...mapMutations(['update_appeal']),
    changeUser(user) {
      this.open = true

      this.changed_user = user
    },
    sendResponse(){

    },
    responseModal() {
      this.open = true
    },
    ignore() {

      this.ignore_lawyer({appeal_id: this.$route.params.id, lawyer_id: this.changed_user.id});
      this.open = false;
    },
    change() {
      this.change_lawyer({appeal_id: this.$route.params.id, lawyer_id: this.changed_user.id});
      this.open = false;
    },
    send() {
      this.send_file({appeal_id: this.$route.params.id, file: this.file})
      this.file = ''

    },
    sendRating() {
      this.send_rating({appeal_id: this.$route.params.id, rating: this.rating})
      this.showRating = false;
    },
    getImage(image){
      if(image !== null){
        return image
      }
      return '/default.png'
    },
    getPdf(pdf, name){
      const linkSource = pdf;
      const downloadLink = document.createElement("a");
      console.log(pdf)
      let ext = pdf.split('/')[1].split(';')[0]
      const fileName = name+"."+ext;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  },
  mounted() {
    this.load_appeal({id: this.$route.params.id})
  },
  watch: {
    get_appeal(val) {
      if (this.getCurrentUser.id !== undefined) {
        console.log(this.getCurrentUser.id)
        this.show = (this.getCurrentUser.id === val.applicant_id && !val.lawyer_id)
      } else {
      }
    },
    getCurrentUser(val) {
      if (this.get_appeal.applicant_id !== undefined) {
        this.show = (val.id === this.get_appeal.applicant_id && !this.get_appeal.lawyer_id)
      }
    },
    $route(old, n) {
      this.update_appeal({})
    },

  },

  props: {}
};
</script>

<style>
.vue-star-rating-rating-text {
  display: none;
}
</style>
