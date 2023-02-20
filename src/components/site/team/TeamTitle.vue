<template>
    <div>
      <div class="max-w-container mx-auto px-4 pt-[49px] flex relative justify-between maxlg:flex-col maxlg:items-center">
       <div class="pt-[114px] maxmd:pt-0 maxmd:w-full lg:w-6/12 maxlg:text-center  maxmd:mx-auto">
        <div class="text-[80px] maxmd:text-[40px] maxsm:text-[27px] maxxl:text-[60px] maxxl:w-full maxmd:text-center  text-l_white font-normal uppercase lg:leading-[96px]">
          {{ $t(`КОМАНДА КВАЛИВИЦИРОВАННЫХ СПЕЦИАЛИСТОВ`) }}

        </div>
        
         <div class="text-xl text-l_white font-normal mt-11 maxmd:w-full maxsm:text-sm">
           {{
             $t(`Наша команда высококвалифицированных специалистов в сфере юридических консультаций готова помочь в решении ваших вопросов.Оставьте обращение, и мы ответим вам в скорейшее время.`)
           }}
        </div>
        
        <div class="text-xl text-l_white font-normal mt-[50.33px] maxlg:mb-[150px] maxmd:mb-[50px] maxsm:mb-[50px] maxmd:flex maxmd:justify-center maxlg:flex maxlg:justify-center">
        <v-button>{{ $t('Оставить обращение') }}</v-button>
        </div>
       </div>
        <div class="w-[655px] maxsm:w-8/12 maxlg:w-8/12">
          <img class="w-full" src="/img/projects-img.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import vButton from '../ui/vButton.vue'
  export default {
    components: {vButton}
  }
</script>

<style lang="scss" scoped>

</style>