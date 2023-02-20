<template>
  <div class="flex justify-center gap-y-5 gap-x-3 flex-wrap my-8 w-full">
    <div v-for="(elem, index) in filterList" class=" hover:scale-105 transition-all ease-in">
        <div class="w-[394px] h-[592px] maxf:w-auto maxf:h-auto">
          <img class="w-full " :src="elem.img" alt="">
          <div class="w-fullbg-l_white shadow-filter px-5 py-5">
            <h3 class="text-2xl font-bold">{{ elem.name }}</h3>
            <p class="text-xl text-l_gray_2 mt-2">{{ elem.feature }}</p>
            <p class="text-base text-l_gray_2 mt-3">{{ elem.desc }}</p>
            <v-button class="mx-auto mt-[40px] w-[90%] text-center">{{ $t('Написать обращение') }}</v-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import vButton from '../../ui/vButton.vue'
  export default {
    components: {
      vButton
    },
    data() {
      return {
       
      }
    },
    computed: {
      filterList(){
        return [
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
          { name: "Gustavo Herwitz", 
            feature: this.$t('Юрист')+ ', ' + this.$t('стаж') + ' 10 ' + this.$t('лет'), 
            desc: 'Lorem ipsum dolor sit amet consectetur. Est cras pellentesque ut enim eu in dictum.',
            img: '/img/avatar-one.png'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>