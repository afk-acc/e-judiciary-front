<template>
  <div class="USERS  py-4 border-t last:border-b border-filter_gray" @click="$emit('changeUser', item)">
    <div class="flex cursor-pointer">
      <div>
        <img :src="getImage(item.image)" class="w-[50px] h-[50px] rounded-full object-cover" alt="" />
      </div>
      <div class="pl-4">
        <p class="flex justify-between font-bold">{{ item?.name }}</p>
        <p>{{ item.bio?.slice(0,30) }}...</p>
      </div>
    </div>
    <div class="mt-8 flex justify-around w-full">
      <v-button class="m-0 px-0 py-0  w-9/12 h-[40px] cursor-pointer">Подробно</v-button>
<!--      <v-button class="m-0 px-0 py-0  w-[161px] h-[40px] text-white_red bg-opacity-0 border-white_red border cursor-pointer">Игнорировать</v-button>-->
    </div>
  </div>
</template>

<script>
import vButton from "../../../../site/ui/vButton.vue";
export default {

  components: {
    vButton,
  },

  props:{
    item:Object,
    strings: '',
  },
  mounted() {
    console.log(this.item)
  },
  methods:{
    getImage(image){
      if(image)
        return image;
      return '/default.png'
    }

  }
};
</script>

<style lang="scss" scoped></style>
