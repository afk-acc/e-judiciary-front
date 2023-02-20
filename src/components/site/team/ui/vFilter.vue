<template>
  <div class="max-w-container mx-auto px-4 mt-[80px] ">
    <div class="flex items-center justify-between text-filter_gray shadow-filter maxf:w-[20%] maxf:h-[60px] maxf:rounded-3xl  transition-all ease-in duration-75">
      <div class="flex items-center w-7/12 h-[72px] maxf:h-auto m-auto justify-center">
        <svg class="ml-[13px] maxf:m-auto maxf:cursor-pointer w-4 h-4 maxf:w-[40px] maxf:h-[40px] " viewBox="0 0 15 15"
             fill="none" xmlns="http://www.w3.org/2000/svg" @click="changeModalActive">
          <path
              d="M0 0V1.46484L0.149148 1.64062L5.45455 7.71484V15L6.54119 14.2578L9.26847 12.3828L9.54545 12.1875V7.71484L14.8509 1.64062L15 1.46484V0H0ZM1.5554 1.25H13.4446L8.54403 6.875H6.45597L1.5554 1.25ZM6.81818 8.125H8.18182V11.5625L6.81818 12.5V8.125Z"
              fill="#717171"/>
        </svg>
        <input class="pl-[13px] w-full outline-none m-auto maxf:hidden"
               :placeholder="$t('Поиск обращения по названию')">
      </div>
      <form class="flex items-center w-5/12  justify-center m-auto maxf:flex-col maxf:hidden ">
        <select v-for="(item, index) in dropdownFilter" class="flex items-center mx-3 cursor-pointer p-2 ">
          <option  class="text-center fixed top-[200px] z-10" disabled>{{ item.name }} {{ item.description }}</option>
          <option value="1" v-for="(elem, index) in dropdownList" class="text-center"> {{ elem.name }}</option>
        </select>
      </form>
    </div>
    <v-filter-list></v-filter-list>
  </div>
  <v-modal :isActive="modalActive" :changeActive="changeModalActive">
    <template v-slot:title class="flex justify-center text-l_black_text m-0">{{ title }}</template>
    <template v-slot:content>
      <div class="flex flex-wrap">
        <form
            class="flex items-center w-full text-filter_gray bg-l_white justify-center m-auto minf:hidden flex-col rounded-xl px-2 py-2 ">
          <select v-for="(item, index) in dropdownFilter"
                  class="flex maxf:w-full items-center minf:mx-3 cursor-pointer p-6 border-b-[1px] border-opacity-10 border-l_gray_2 outline-none last:border-0">
            <option class="text-center fixed top-[200px] z-10" disabled>{{ item.name }} {{ item.description }}</option>
            <option  value="" v-for="(elem, index) in dropdownList" class="text-center"> {{ elem.name }}</option>
          </select>
        </form>
      </div>
    </template>
  </v-modal>
</template>

<script>
import vModal from './vProjectModal.vue'
import vFilterList from './vFilterList.vue'

export default {
  components: {
    vFilterList,
    vModal
  },
  open: false,
  data() {
    return {
      modalActive: false,
      dropdownFilter: [
        {name: this.$t('Стаж:'), description:'?? ' + this.$t('лет')},
        {name: this.$t('Стаж:'), description:'?? ' + this.$t('лет')},
        {name: this.$t('Город:'), description: this.$t('Все')},
      ],
      dropdownList: [
        {name: this.$t('от 5 до 10 лет'), city: ''},
        {name:'10-20 ' + this.$t('лет'), city: ''},
        {name:'15-30 ' + this.$t('лет'), city: ''},
      ]
    }
  },
  methods: {
    changeModalActive() {
      this.modalActive = !this.modalActive;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>