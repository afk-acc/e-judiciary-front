<template>
  <div
      class="max-w-container mx-auto flex px-4 justify-between items-center  mxlfaq:flex-col mxlfaq:text-center select-none ">
    <div class="w-[60%] mxlfaq:w-8/12 maxsm:w-full" >
      <div class="" v-for="(faqTitleElem, index) in faqLeft">
        <h1 class="my-5 maxxl:mt-[150px] text-title uppercase leading-[96px] maxsm:text-6xl">{{ faqTitleElem.title }}</h1>
        <p class="my-5 text-filter_gray text-[21px] maxsm:text-base">{{ faqTitleElem.body }}</p>
        <p class="my-5 text-filter_gray text-[21px] maxsm:text-base">{{ faqTitleElem.subBody }}</p>
        <v-button class="my-5 mxlfaq:mx-auto maxsm:w-full">{{ $t(`Оставить обращение`) }}</v-button>
      </div>
    </div>
    <div class="w-[60%] my-[80px] justify-center mxlfaq:w-full">
      <div class=" flex flex-wrap justify-center gap-y-5 gap-x-7">
        <div class="w-[300px] h-[300px] flex flex-col justify-center items-center text-center bg-white rounded-3xl "
             v-for="(stat, index) in statistics">
          <h2 class="font-bold text-faq_stats text-[64px]">{{ stat.name }}</h2>
          <p class="font-medium text-2xl text-l_gray_2 px-4">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vButton from '../ui/vButton.vue'

export default {
  components: {
    vButton
  },
  data() {
    return {
      faqLeft: [
        {
          title: this.$t('ОТВЕТЫ НА ВАШИ ВОПРОСЫ'),
          body: this.$t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.'),
          subBody: this.$t('Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.')
        },
      ],
      statistics: [
        {name: '250+', desc: this.$t('Специалистов')},
        {name: '156+', desc: this.$t('Ответов на вопросы')},
        {name: '50+', desc: this.$t('Большая база данных по юр. вопросам')},
        {name: '24/7', desc: this.$t('Работаем днем и ночью')},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>