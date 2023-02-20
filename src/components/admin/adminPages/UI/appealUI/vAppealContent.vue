<template>
  <div class="flex maxlg:flex-wrap maxxl:justify-center">
    <div class="w-9/12 bg-l_white mt-14 p-8 maxxl:w-full">
      <div class="userList-title">
        <h3 class="text-3xl w-[90%] font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p class="text-[28px]">Подзаголовок</p>
        <p class="pt-8">
          <span class="font-bold">Тема обращения :</span> Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <p class="mt-20 font-bold">Lorem ipsum dolor:</p>
        <ul class="list-disc pl-8 pt-5">
          <li class="">Lorem ipsum dolor sit amet consectetur.</li>
          <li class="py-5">Lorem ipsum dolor sit amet consectetur.</li>
          <li class="">Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <div class="">
          <p class="mt-20 font-bold pb-5">{{ $t('Описание') }}</p>
          <p class="w-10/12">
            Lorem ipsum dolor sit amet consectetur. Nisl non ultrices mi viverra pretium
            odio praesent nisl fames. Neque consequat in consequat nulla nunc scelerisque
            convallis. Nullam lobortis mi ut vitae tristique eu. Duis feugiat libero nunc
            egestas nam tortor natoque eget mattis. Vitae blandit mauris leo pharetra sit.
            Pharetra amet dignissim tortor enim tincidunt imperdiet. Neque sodales arcu
            integer ullamcorper sed morbi feugiat. Pellentesque pulvinar id ac eleifend
            mattis massa augue metus. Adipiscing lorem donec nulla tortor et elit mi. In
            libero mauris consequat vulputate. Sed amet ac at risus risus augue aenean in.
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/12 ml-4 maxlg:ml-0 h-full bg-l_white mt-14 p-6  maxxl:w-full">
      <div class="appeal-response USERS hidden">
        <h3 class="text-[28px] text-center font-bold mb-4 mx-auto pb-5 USERS ">Отклики</h3>
        <vAppealResponse @changeUser = "changeUser" :item="{}" />
        <vAppealResponse @changeUser = "changeUser" :item="{}" />
        <vAppealResponse @changeUser = "changeUser" :item="{}" />
        <div :class="{'block' : open,'hidden' : !open}">
          <div @click="open=!open" class="fixed left-0 top-0 z-40 bg-l_black opacity-60 w-full h-screen cursor-pointer" >
          </div>
          <div class="px-10 py-8 w-[40%] maxxl:w-[60%] maxmd:w-[90%] -translate-x-1/2 -translate-y-1/2  rounded-xl bg-l_white absolute top-1/2 left-1/2  z-50">
            <div class="flex items-center justify-center">
              <div class="w-[67px] h-[67px] mr-10">
                <img class=" rounded-full" src="/public/img/avatar-modal.png" alt="">
              </div>
              <div class="flex justify-between ">
                <h3 class="">{{ user }}</h3>
                <div class="relative w-6 h-[1px] bg-filter_gray -right-4 top-3">
                  
                </div>
                <p class="relative text-base text-filter_gray pl-8">{{ user }}</p>
              </div>
            </div>
          </div>
       </div>
      </div>
      <div class="appeal-response ADVOCATE ">
        <h3 class="text-[28px] text-center font-bold mx-auto pb-5 ADVOCATE ">{{ $t('Оставить отклик') }}</h3>
        <vAppealResponse @responseModal = "responseModal" :strings="{}"/>
        <div :class="{'block' : open,'hidden' : !open}">
          <div @click="open=!open" class="fixed left-0 top-0 z-40 bg-l_black opacity-60 w-full h-screen cursor-pointer" >
          </div>
          <div class="px-10 py-8 w-[40%] maxxl:w-[60%] maxmd:w-[90%] -translate-x-1/2 -translate-y-1/2  rounded-xl bg-l_white absolute top-1/2 left-1/2  z-50">
            <form @submit.prevent="submit" class="text-center ">
              <h3 class="text-3xl font-bold">{{ $t('Отклик на обращение') }}</h3>
              <p class="relative text-base text-filter_gray pl-8"></p>
              <textarea class=" mt-4 w-full resize-none pl-4 pt-4 outline-none rounded-lg border border-[#DBDBDB]" rows="6" cols="60" placeholder="Введите сообщение"/>
              <div class="w-full mt-10 flex justify-center maxsm:flex-wrap">
                <v-button @click="open=!open" class="w-[306px] h-[60px] bg-opacity-0 border border-filter_gray text-filter_gray">Отменить</v-button>
                <v-button class="w-[306px] h-[60px] ml-4 maxsm:ml-0 maxsm:mt-4">{{ $t('Сохранить') }}</v-button>
              </div>
            </form>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import vAppealResponse from "./vAppealResponse.vue";
import vButton from '../../../../site/ui/vButton.vue'
export default {
  components: {
    vAppealResponse,
    vButton
  },
  computed: {
  },
  data() {
    return {
      open: false,
      changed_user:{},
    }
  },
  methods: {
    changeUser(user){
      this.open = true
      this.changed_user = user
    },
    responseModal() {
      this.open = true
    }
  },
  props:{
  }
};
</script>

<style lang="scss" scoped></style>
