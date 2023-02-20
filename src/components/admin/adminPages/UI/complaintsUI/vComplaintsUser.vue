<template>
  <div class="cursor-pointer" :class="{'border-l-4 border-l_primary':is_active}">
    <div class="flex mt-4 pl-4">
      <div>
        <img :src="getImage(item.reciver_info.image)" class="w-[40px] h-[40px] rounded-full object-cover" alt="">
      </div>
      <div class="pl-4 pr-4 flex w-full justify-between">
        <div class="">
          <p class="text-sm font-bold">{{ item.reciver_info.name }}</p>
          <p class="text-[12px] text-[#303030]">{{ item.title }}</p>
        </div>
        <p class="text-[12px]">{{ getDate(item.created_at) }}</p>

      </div>
    </div>
    <div class="p-2 text-[12px] pl-4">
      <p>{{ item.description.slice(0, 150) }}...</p>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    item: Object,
    is_active: Boolean
  },
  computed: {
    ...mapGetters(['get_base_url'])
  },
  methods: {
    getDate(date) {
      let options = {day: 'numeric', month: "short", hour: 'numeric', minute: 'numeric'};
      let d = new Date(date);
      return d.toLocaleString("ru", options)
    },
    getImage(image) {
      if (image) {
        return image
      }
      return '/default.png'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>