<template>
  
  <div class="">
  
    <div
        class="flex items-center maxmd:flex-wrap justify-between px-6 border-b border-filter_gray border-opacity-50 pb-5 maxsm:justify-end">
      <div class="flex  gap-x-5 items-center maxsm:hidden">
        <div>
          <img class="w-[50px] h-[50px] rounded-full object-cover" :src="getImage(report?.reciver_info?.image)" alt=""/>
        </div>
        <div>
          <h3 class="text-lg font-bold">{{ report?.reciver_info?.name }}</h3>
          <p class="text-sm">
            <span class="text-filter_gray font-normal">От:</span> {{ report?.user_info?.name }}
          </p>
        </div>
        <div v-if="false" class="ico">
          <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M2.5 5H4.16667H17.5"
                stroke="#3A57E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.8337 4.99996V16.6666C15.8337 17.1087 15.6581 17.5326 15.3455 17.8451C15.0329 18.1577 14.609 18.3333 14.167 18.3333H5.83366C5.39163 18.3333 4.96771 18.1577 4.65515 17.8451C4.34259 17.5326 4.16699 17.1087 4.16699 16.6666V4.99996M6.66699 4.99996V3.33329C6.66699 2.89127 6.84259 2.46734 7.15515 2.15478C7.46771 1.84222 7.89163 1.66663 8.33366 1.66663H11.667C12.109 1.66663 12.5329 1.84222 12.8455 2.15478C13.1581 2.46734 13.3337 2.89127 13.3337 3.33329V4.99996"
                stroke="#3A57E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.33301 9.16663V14.1666"
                stroke="#3A57E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11.667 9.16663V14.1666"
                stroke="#3A57E8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p class="text-filter_gray maxsm:ml-10">{{getDate(report?.created_at)}}</p>
      </div>
    </div>
    <div class="px-10 my-10">
      <div class="user-content__title">
        <h3 class="font-bold text-xl">{{ report.title }}</h3>
      </div>
      <div class="user-content__info text-base my-10">
        <p>{{report.description}}</p>
<!--        <vComplaintUserText></vComplaintUserText>-->
      </div>
      <div class="user-content__files ">
        <div class="flex" v-if="report.file">
          <p class="px-4 font-bold">Вложение</p>
          <button class="text-l_primary underline" @click="getPdf(report.file, report.title)" >Скачать</button>
        </div>
<!--        <v-complaints-file class="my-5 w-full"></v-complaints-file>-->
<!--        <v-complaints-file class="my-5 w-full"></v-complaints-file>-->
<!--        <v-complaints-file class="my-5 w-full"></v-complaints-file>-->
      </div>
    </div>
  </div>
</template>

<script>
import vComplaintsFile from './vComplaintsFile.vue';
import vComplaintUserText from './vComplaintsUserText.vue';

export default {
  components: {
    vComplaintsFile,
    vComplaintUserText
  },
  props: {
    report: Object
  },
  methods: {
    openLeft() {
    },
    getDate(date){
      let options = {year:'numeric', month:'short', day:'numeric', hour:'numeric', minute:'numeric'}
      let d = new Date(date)
      return d.toLocaleString('ru', options)
    },
    getPdf(pdf, name){
      const linkSource = pdf;
      const downloadLink = document.createElement("a");
      let ext = '';
      let temp = pdf.split(';')[0]
      ext = temp.split('/')[1]
      const fileName = name+'.'+ext;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    },
    getImage(image){
      if(image)
        return image;
      return '/default.png'
    }

  },
  watch:{
    report(val){
      console.log(val)
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}
</style>
