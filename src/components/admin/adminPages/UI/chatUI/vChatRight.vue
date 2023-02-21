<template>
  <div class="w-9/12 flex h-full maxlg:w-full maxlg:mx-auto">
    <div class="w-9/12 maxlg:w-full border-r-[1px] maxlg:border-none border-[#DBDDE2] h-full pb-16 maxsm:h-[90%]">
      <div>
        <div v-if="chat"
             class="chat-left_title  flex justify-between items-center border-b-[1px] py-[10px] px-12 border-[#DBDDE2]">
          <div
              class="flex maxsm:flex-col maxsm:text-center maxsm:items-center maxlg:mx-auto cursor-pointer select-none">
            <div>
              <img class="w-[45px] h-[45px] object-cover rounded-full" :src="getImage(reciver.image)" alt="">
            </div>
            <div class="pl-4">
              <p>{{ reciver.name }}</p>
              <p>{{ reciver.role }}</p>
            </div>
          </div>
          <div class="cursor-pointer "
               @click="modalRight =!modalRight"
          >
            <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#8A92A6"/>
              <circle cx="15" cy="3" r="3" fill="#8A92A6"/>
              <circle cx="27" cy="3" r="3" fill="#8A92A6"/>
            </svg>
          </div>
        </div>
      </div>
      <div class=" h-full  flex flex-col justify-between ">
        <div class="h-full  flex flex-col justify-between" v-if="chat">
          <div class="px-4 overflow-y-scroll py-4" ref="messages_block" id="messages_block" @scroll="onScroll">
            <v-message @updateDate="updateDate" :dates="dates" v-for="item in messages" :ket="item.id" :message="item"
                       :from_me="getCurrentUser.id === item.sender_id"/>
          </div>
          <form @submit.prevent="send" enctype="multipart/form-data"
                class="flex pb-2 w-full relative justify-between  ">
            <div class="relative z-10 items-center flex px-4">
              <label for="file">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_268_3047" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="8"
                        width="20"
                        height="15">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.79395H21.9996V22.5379H2V8.79395Z"
                          fill="white"/>
                  </mask>
                  <g mask="url(#mask0_268_3047)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.565 22.5379H6.435C3.99 22.5379 2 20.5489 2 18.1029V13.2279C2 10.7829 3.99 8.79395 6.435 8.79395H7.368C7.782 8.79395 8.118 9.12995 8.118 9.54395C8.118 9.95795 7.782 10.2939 7.368 10.2939H6.435C4.816 10.2939 3.5 11.6099 3.5 13.2279V18.1029C3.5 19.7219 4.816 21.0379 6.435 21.0379H17.565C19.183 21.0379 20.5 19.7219 20.5 18.1029V13.2189C20.5 11.6059 19.188 10.2939 17.576 10.2939H16.633C16.219 10.2939 15.883 9.95795 15.883 9.54395C15.883 9.12995 16.219 8.79395 16.633 8.79395H17.576C20.015 8.79395 22 10.7789 22 13.2189V18.1029C22 20.5489 20.01 22.5379 17.565 22.5379Z"
                          fill="#8A92A6"/>
                  </g>
                  <mask id="mask1_268_3047" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="2"
                        width="2"
                        height="14">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 2H12.75V15.5409H11.25V2Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_268_3047)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 15.541C11.586 15.541 11.25 15.205 11.25 14.791V2.75C11.25 2.336 11.586 2 12 2C12.414 2 12.75 2.336 12.75 2.75V14.791C12.75 15.205 12.414 15.541 12 15.541Z"
                          fill="#8A92A6"/>
                  </g>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.08374 6.42853C8.89274 6.42853 8.70074 6.35553 8.55474 6.20953C8.26174 5.91753 8.25974 5.44353 8.55274 5.14953L11.4677 2.22153C11.7487 1.93853 12.2487 1.93853 12.5297 2.22153L15.4457 5.14953C15.7377 5.44353 15.7367 5.91753 15.4437 6.20953C15.1497 6.50153 14.6757 6.50153 14.3837 6.20753L11.9987 3.81353L9.61474 6.20753C9.46874 6.35553 9.27574 6.42853 9.08374 6.42853Z"
                        fill="#8A92A6"/>
                </svg>
              </label>
              <input type="file" id="file" accept="image/*"
                     @change="message.file = $event.target.files[0];message.data='\'выбрано фото\''" class="hidden">
            </div>
            <input
                v-model="message.data"
                type="text"
                class="resize-none w-full pl-12 pr-24 h-full  bg-[#E9EFFF] absolute px-4 outline-none py-2"/>
            <button type="submit"
                    class="w-[75px] relative z-10 h-[60px] bg-l_primary rounded-xl flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.6742 1.22411C22.1082 0.643284 21.2707 0.426897 20.4897 0.654672L2.27851 5.95046C1.45454 6.17937 0.870511 6.83651 0.713186 7.67131C0.552466 8.52091 1.11386 9.59943 1.84728 10.0504L7.54154 13.5502C8.12557 13.9089 8.87937 13.819 9.36266 13.3315L15.8832 6.77045C16.2114 6.42879 16.7547 6.42879 17.0829 6.77045C17.4111 7.10073 17.4111 7.636 17.0829 7.97766L10.5511 14.5399C10.0667 15.0262 9.97612 15.7835 10.3326 16.3712L13.8119 22.1225C14.2194 22.8059 14.9211 23.1931 15.6907 23.1931C15.7813 23.1931 15.8832 23.1931 15.9737 23.1817C16.8565 23.0678 17.5583 22.4642 17.8186 21.61L23.2174 3.42215C23.4551 2.64771 23.2401 1.80494 22.6742 1.22411"
                    fill="white"/>
              </svg>
            </button>
          </form>
        </div>
        <div class="" v-else></div>


      </div>
    </div>
    <div
        v-if="chat"
        class="w-3/12 maxmd:w-4/12 maxsm:w-9/12 maxlg:absolute  maxlg:bg-l_white maxlg:border-l-[1px] maxlg:border-[#DBDDE2] transition-all duration-300 z-10"
        :class="{'maxlg:-right-[500px]':!modalRight, 'maxlg:right-0  h-full' : modalRight}"
    >
      <div class="p-[20px] border-b-[1px] border-[#DBDDE2] maxlg:text-center">
        <p class="text-xl" v-if="reciver.role_name === 'lawyer'"> {{ $t("О юристе") }}</p>
        <p class="text-xl" v-else> {{ $t("О пользователе") }}</p>
        <i class="ml-4 absolute top-6 left-0 hidden maxlg:flex cursor-pointer"
           @click="modalRight = !modalRight"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z"
                fill="#8A92A6"/>
          </svg>
        </i>
      </div>
      <div class="overflow-y-scroll h-full pb-20">
        <div class="p-6 text-center">
          <img class=" mx-auto w-[120px] h-[120px] rounded-full object-cover" :src="getImage(reciver.image)" alt="">
          <h3 class="text-xl font-bold pt-4">{{ reciver.name }}</h3>
          <p class="text-base text-filter_gray">{{ reciver.phone }}</p>
        </div>
        <div class="px-4">
          <div class="py-4">
            <h3 class="text-[#333437] font-bold text-lg">{{ $t("О себе") }}</h3>
            <p class="text-[#333437]">{{ reciver.bio }}</p>
          </div>
          <div class="py-4 " v-if="reciver.education_place">
            <h3 class="text-[#333437] font-bold text-lg">{{ $t("Образование") }}</h3>
            <p class="text-[#333437]">{{ reciver.education_place }}</p>
          </div>
        </div>
        <div class="flex flex-col justify-center text-center m-4">
          <!--        <button class="text-[#1D19DC] border-[1px] border-[#1D19DC] rounded-md px-4 py-2">Сменить юриста</button>     -->
          <p @click="report_modal_show = true" class="text-[#EB5757] text-lg mt-8 cursor-pointer">{{
              $t("Пожаловаться")
            }}</p>
          <v-modal v-if="report_modal_show" @show="report_modal_show= !report_modal_show">
            <form class="p-5 " @submit.prevent="send_report(reciver.id)">
              <p class="text-center font-bold text-xl">{{ $t('Отправить жалобу ') }}</p>
              <v-input :is_required="true" v-model:model-value="report.title" :label="$t('Заголовок')" type="text"/>
              <v-input :is_required="true" v-model:model-value="report.description" :label="$t('Описание')"
                       type="textarea"/>
              <p class="font-bold text-xl ">{{ $t('Выберите файл') }}</p>
              <label for="report_file" class="flex justify-center my-4 cursor-pointer">
                <svg class="ml-2" width="90" height="90" viewBox="0 0 89 89" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11.125 37.7799C11.125 28.9356 18.2947 21.7658 27.139 21.7658V21.7658C28.7632 21.7658 30.3267 21.1489 31.5132 20.0398L32.6333 18.9928C33.9864 17.728 34.663 17.0956 35.412 16.6008C36.651 15.7823 38.0472 15.2313 39.5114 14.9832C40.3964 14.8333 41.3225 14.8333 43.1747 14.8333H44.5H45.8253C47.6775 14.8333 48.6036 14.8333 49.4886 14.9832C50.9528 15.2313 52.349 15.7823 53.588 16.6008C54.337 17.0956 55.0136 17.728 56.3667 18.9928L57.4868 20.0398C58.6733 21.1489 60.2368 21.7658 61.861 21.7658V21.7658C70.7053 21.7658 77.875 28.9356 77.875 37.7799V51.9074C77.875 61.1516 77.875 65.7736 75.8089 69.1766C74.623 71.1299 72.9841 72.7688 71.0309 73.9546C67.6279 76.0208 63.0058 76.0208 53.7617 76.0208H35.2383C25.9942 76.0208 21.3721 76.0208 17.9691 73.9546C16.0159 72.7688 14.377 71.1299 13.1911 69.1766C11.125 65.7736 11.125 61.1516 11.125 51.9075V37.7799Z"
                      stroke="#8A92A6" stroke-width="3"/>
                  <circle cx="44.5" cy="51.9167" r="11.125" stroke="#8A92A6" stroke-width="3"/>
                  <path d="M59.334 33.3752H63.0423" stroke="#8A92A6" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </label>
              <input type="file" class="hidden" id="report_file" @change="report.file = $event.target.files[0]">
              <v-button type="submit">{{ $t("отправить") }}</v-button>
            </form>
          </v-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vChatTitle from './vChatTitle.vue'
import {mapActions, mapGetters} from "vuex";
import VMessage from "./vMessage.vue";
import VModal from "../../../vModal.vue";
import vInput from '../../../vInput.vue'
import VButton from "../../../../site/ui/vButton.vue";

export default {
  components: {
    VButton,
    vInput,
    VModal,
    VMessage,
    vChatTitle
  },
  data() {
    return {
      modalRight: false,
      report_modal_show: false,
      message: {
        data: '',
        file: ''
      },
      params: {
        page: 1,

      },
      dates: [],
      sended: {},
      report: {
        title: "",
        description: "",
        file: "",
        reciver_id: ""
      },
    }
  },
  props: {
    reciver: Object,
    chat: Number,

  },
  methods: {
    ...mapActions(['load_messages', 'recive_message', 'send_message', 'read_message', 'sendReport']),
    send() {
      if (this.message.file) {
        let fd = new FormData();
        fd.set('file', this.message.file)
        this.send_message({chat_id: this.chat, message: fd})
        this.message.file = ''
      } else {
        this.send_message({chat_id: this.chat, message: {message:this.message.data}})
      }
      this.message.data = ''
    },
    send_report(id) {
      let fd = new FormData();
      fd.set('reciver_id', id);
      fd.set('title', this.report.title)
      fd.set('description', this.report.description);
      fd.set('file', this.report.file)
      this.sendReport(fd)
    },
    updateDate(date) {
      this.dates.push(date)
    },
    onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop === 0) {
        if (this.get_messages?.meta?.last_page !== this.params.page) {
          this.params.page = Number(this.params.page) + 1;
          this.load_messages(this.params)
        }
      }
    },
    getImage(image) {
      if (image === null)
        return '/default.png'
      return image
    }
  },
  computed: {
    ...mapGetters(['get_messages', 'getCurrentUser', 'get_base_url', 'get_sended']),
    messages() {
      return this.get_messages.data?.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
    }
  },
  mounted() {

  },
  watch: {
    chat(val) {
      this.params.room_id = val
      this.params.page = 1
      this.load_messages(this.params)
      console.log(1)
      // window.Echo.private('chat.' + this.params.room_id)
      //     .listen('SendMessage', message=>{
      //       console.log(1)
      //       this.recive_message(message)
      //     })
      // this.read_message({chat_id: val})
      let channel = this.$pusher.subscribe('private-chat.' + this.params.room_id);
      channel.bind('SendMessage', message => {
        console.log(1)
        this.recive_message(message)
      })
      this.read_message({chat_id: val})

    },
    get_sended(val) {
      if (val === true) {
        this.report_modal_show = false;
        this.report.title = ''
        this.report.description = '';
        this.report.file = '';
        this.report.reciver_id = ''
      }
    },
    get_messages(val){
      console.log(this.$refs.messages_block.scrollHeight)
      setTimeout(()=>{
        const element = document.getElementById('messages_block');
        element.scrollTop = element.scrollHeight;
      }, 1)



    }


  }
}
</script>

<style lang="scss">

</style>