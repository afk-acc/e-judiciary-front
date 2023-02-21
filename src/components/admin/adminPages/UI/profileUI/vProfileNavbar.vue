<template>
  <div
      class="flex maxxl:flex-wrap maxlg:justify-center items-center w-full justify-between bg-l_white h-[100px] maxxl:h-[30%] maxlg:w-full maxxl:py-4 maxmd:mt-[50px] rounded-lg ">
    <div class="flex items-center pl-4 mb-2 maxsm:flex-wrap maxsm:justify-center maxsm:flex-col">
      <div class="flex justify-between maxsm:flex-col maxsm:text-center">
        <h3 class="text-2xl ">{{ getCurrentUser.name }}</h3>
        <p class="text-l_gray_2 my-2 px-4">{{ getCurrentUser.role }}</p>
        <button class="mx-2 text-base py-2 px-4 bg-filter_gray outline-none rounded-[50px] text-l_white" type="submit"
                @click="reciveData">
          <slot name="profileBtn"/>
          {{ $t('Редактировать') }}
        </button>
        <button v-if="getCurrentUser.role_name === 'user' " class="bg-l_primary text-l_white px-4 py-2 rounded-2xl" @click="send_request_lawyer(getCurrentUser.id)">{{$t('стать юристом')}}</button>
      </div>
    </div>

    <div class="flex maxxl:flex-wrap mb-2 maxsm:justify-center">
      <v-profile-navigation class="maxsm:py-4" route="profile-page">
        <template v-slot:profileLi>{{ $t('Профиль') }}</template>
      </v-profile-navigation>

      <v-profile-navigation class="maxsm:py-4" route="appeal-list" :params="{page: 1}">
        <template v-slot:profileLi>{{ $t('Обращения') }}</template>
      </v-profile-navigation>

      <!-- <v-profile-navigation class="maxsm:py-4" route="user-list" :params="{page: 1}"
                            v-if="can( getCurrentUser,'users.read')">
        <template v-slot:profileLi>{{ $t('Пользователи') }}</template>
      </v-profile-navigation> -->

      <!--      <v-profile-navigation class="maxsm:py-4" route="">-->
      <!--        <template v-slot:profileLi>{{ $t('Адвокаты') }}</template>-->
      <!--      </v-profile-navigation>-->
    </div>
  </div>

  <div>
    <div
        :class="{'bg-l_black h-screen w-screen opacity-60 fixed top-0 left-0 ':isActive, 'bg-none':!isActive}"
        @click="isActive = !isActive"
    >
    </div>

    <form
        @submit.prevent="editProfile"
        enctype="multipart/form-data"
        class="w-[50%] maxxl:w-[70%] maxlg:w-[80%] maxsm:w-[90%] pb-10 rounded-xl bg-l_white absolute top-[100px] left-[350px] flex flex-col maxxl:left-[150px] maxlg:left-[100px] maxsm:left-4"
        :class="{'block':isActive, 'hidden':!isActive}"
    >
      <i class="absolute right-0 p-4 cursor-pointer"
         @click="isActive = !isActive"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15.7188 14.3906L9.32501 8.00037L15.7188 1.65714C16.0392 1.28603 16.0219 0.729108 15.679 0.378943C15.3361 0.0287773 14.7832 0.00341392 14.4101 0.320731L7.99765 6.6169L1.69734 0.273674C1.33275 -0.0912247 0.743918 -0.0912247 0.379325 0.273674C0.202363 0.450387 0.102824 0.690937 0.102824 0.941878C0.102824 1.19282 0.202363 1.43337 0.379325 1.61008L6.67028 7.9439L0.276501 14.2777C0.0995389 14.4544 0 14.695 0 14.9459C0 15.1969 0.0995389 15.4374 0.276501 15.6141C0.452909 15.7903 0.69172 15.8885 0.940183 15.887C1.18409 15.8885 1.41891 15.794 1.59452 15.6235L7.99765 9.27089L14.4101 15.7271C14.5865 15.9032 14.8253 16.0014 15.0738 16C15.319 15.9989 15.554 15.9009 15.7281 15.7271C15.9039 15.5491 16.0017 15.3078 16 15.0569C15.9982 14.8059 15.897 14.5661 15.7188 14.3906Z"
              fill="#8A92A6"/>
        </svg>
      </i>
      <p class="mx-auto mt-10 text-3xl maxmd:text-2xl maxmd:text-center ">{{$t('Редактирование пользователя')}}</p>
      <div class="px-10">
        <p class="text-2xl font-medium maxsm:my-10 mt-4">{{ $t('Образование') }}</p>
        <v-input class="mb-10" v-model:model-value="edit.education_place" :label="$t('Учебное учреждение')" type="text"/>
        <label for="" class="text-xl text-l_black_text ">{{$t('Дата обучения')}}</label>
        <div class="flex justify-between maxsm:flex-col gap-x-4">
          <div class="w-full flex gap-x-2  items-center">
            <label for="">{{ $t('от') }}</label>
            <input
                :placeholder="$t('от')"
                type="date"
                v-model="edit.education_start"
                class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-4 font-medium">
          </div>
          <div class="w-full flex gap-x-2 maxsm:py-4 items-center">
            <label for="">{{ $t("до") }}</label>
            <input
                :placeholder="$t('до')"
                type="date"
                v-model="edit.education_end"
                class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-4 font-medium">
          </div>

        </div>
        <p class="text-2xl font-medium mt-10">{{ $t('Описание о себе') }}</p>
        <v-input v-model:model-value="edit.description"
                 label="Описание" type="textarea"/>
        <p class="text-2xl font-medium mt-4 maxsm:text-center maxsm:mb-5">{{ $t('Фотография профиля') }}</p>
        <div class="flex justify-center my-2" v-if="edit.image">

          <img class="rounded-full w-[200px] h-[200px] object-cover " :src="edit.image" alt="" >
        </div>
        <div class="flex justify-center my-4">
          <label for="file">
            <svg class="ml-2" width="90" height="90" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.125 37.7799C11.125 28.9356 18.2947 21.7658 27.139 21.7658V21.7658C28.7632 21.7658 30.3267 21.1489 31.5132 20.0398L32.6333 18.9928C33.9864 17.728 34.663 17.0956 35.412 16.6008C36.651 15.7823 38.0472 15.2313 39.5114 14.9832C40.3964 14.8333 41.3225 14.8333 43.1747 14.8333H44.5H45.8253C47.6775 14.8333 48.6036 14.8333 49.4886 14.9832C50.9528 15.2313 52.349 15.7823 53.588 16.6008C54.337 17.0956 55.0136 17.728 56.3667 18.9928L57.4868 20.0398C58.6733 21.1489 60.2368 21.7658 61.861 21.7658V21.7658C70.7053 21.7658 77.875 28.9356 77.875 37.7799V51.9074C77.875 61.1516 77.875 65.7736 75.8089 69.1766C74.623 71.1299 72.9841 72.7688 71.0309 73.9546C67.6279 76.0208 63.0058 76.0208 53.7617 76.0208H35.2383C25.9942 76.0208 21.3721 76.0208 17.9691 73.9546C16.0159 72.7688 14.377 71.1299 13.1911 69.1766C11.125 65.7736 11.125 61.1516 11.125 51.9075V37.7799Z"
                  stroke="#8A92A6" stroke-width="3"/>
              <circle cx="44.5" cy="51.9167" r="11.125" stroke="#8A92A6" stroke-width="3"/>
              <path d="M59.334 33.3752H63.0423" stroke="#8A92A6" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </label>
          <input type="file" id="file" @change="edit.new_image = $event.target.files[0]" class="hidden">
        </div>
        <v-button type="submit" class="h-[50px]">{{ $t('Сохранить') }}</v-button>
      </div>
    </form>
  </div>
</template>

<script>
import vProfileNavigation from "./vProfileNavigation.vue";
import vModal from "../vModal.vue";
import {mapActions, mapGetters} from 'vuex'
import {canAccess} from "../../../../../assets/functions.js";
import VInput from "./vInput.vue";
import VButton from "../../../vButton.vue";

export default {
  computed: {
    ...mapGetters(['getCurrentUser', 'get_base_url'])
  },
  components: {
    VButton,
    VInput,
    vProfileNavigation,
    vModal
  },
  methods: {
    ...mapActions(['update_user']),
    ...mapActions(['send_request_lawyer']),
    can(user, item) {
      if (user.permissions)
        return canAccess(user, item)
    },
    editProfile() {
      this.update_user(this.edit)
      this.isActive = false
    },
    reciveData() {
      this.isActive = true
      this.edit.user_id = this.getCurrentUser.id
      this.edit.education_place = this.getCurrentUser.education_place;
      this.edit.image = this.getCurrentUser.image;
      this.edit.education_start = this.getCurrentUser.education_start;
      this.edit.education_end = this.getCurrentUser.education_end;
      this.edit.description = this.getCurrentUser.bio
    }
  },
  data() {
    return {
      isActive: false,
      edit: {
        user_id:'',
        education_place: '',
        education_start: '',
        education_end: '',
        description: '',
        image: "",
        new_image:''
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>
