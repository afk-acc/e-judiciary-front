<template>
  <div>
    <div class="text-center mt-[68px]">
      <h2 class="text-[40px] uppercase pt-[70px]">{{ $t(`НЕ НАШЛИ ОТВЕТА НА ВОПРОС ?`) }}</h2>
      <p class="text-filter_gray text-2xl">{{ $t(`Заполните форму и наши специалисты свяжуться с Вами.`) }}</p>
    </div>
    
    <div class="flex w-full justify-center mx-auto mt-[138px] pb-[303px] maxmd:flex-col maxmd:p-4"  >
      <div class=" w-4/12 maxlg:w-6/12 maxmd:w-full">
          <img class='rounded-l-3xl w-full h-full flex items-center maxmd:rounded-t-3xl maxmd:rounded-l-none maxmd:rounded-tl-3xl' src="/public/img/faqbg.png" alt="">
      </div>
      <form class=" w-[43%] flex flex-col px-9 bg-l_white rounded-r-3xl maxmd:w-full maxmd:rounded-none maxmd:rounded-b-3xl">
        <div class="pt-12 pb-5">
          <h3 class="text-[34px] text-[#1A384C]">{{ $t(`Форма заполнения`) }}</h3>
          <p class="text-2xl text-[#6F6C90]">{{ $t(`Заполните форму`) }}</p>
        </div>
        <div class="flex flex-col">
          <input class="outline-none  h-[80px] border-[1px] rounded-xl my-3 px-7 shadow-input border-[#EFF0F7]" type="text" name="" value="" :placeholder="$t('Ф.И.О')">
          <input class="outline-none  h-[80px] border-[1px] rounded-xl my-3 px-7 shadow-input border-[#EFF0F7]" type="email" name="" value="" :placeholder="$t('Введите свой Email')">
          <input class="outline-none  h-[80px] border-[1px] rounded-xl my-3 px-7 shadow-input border-[#EFF0F7]" type="text" name="" value="" :placeholder="$t('Телефон')">
          <textarea rows="5" cols="40" class="resize-none outline-none  border-[1px] rounded-xl my-3 px-7 shadow-input border-[#EFF0F7] pt-3" :placeholder="$t('Опишите Ваш вопрос')"
          ></textarea>
          
        </div>
        <v-button class="w-max mx-auto text-center mt-[21px] mb-[76px]">{{ $t(`Отправить`) }}</v-button>
      </form>
    </div>
    
  </div>
</template>

<script>
  import vButton from '../ui/vButton.vue'
  export default {
    components: {
      vButton
    }
  }
</script>

<style lang="scss" scoped>

</style>