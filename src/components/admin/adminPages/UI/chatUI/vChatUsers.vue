<template>
  <div class="flex cursor-pointer relative w-full p-4 gap-x-2">
    <div class="w-[48px] h-[48px]">
      <img class="w-[48px] h-[48px] rounded-full max-w-sm object-cover" :src="getImage(reciver?.image)" alt=""/>
    </div>
    <div class="chat-user_text w-9/12">
      <p class="font-bold text-lg">{{ reciver?.name }}</p>
      <p v-html="item?.message?.data?.slice(0, 120)"> </p>
    </div>
    <div
        class="chat-user_time flex items-center absolute maxlg:static maxlg:items-start maxmd:items-center  right-4  text-filter_gray">
      <div class="flex relative justify-end" v-if="item.message.is_read === 1 ">
        <div class="chat-path relative">
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.1657 7.4578L1.16577 7.45772C0.671425 7.00665 0.610585 6.23148 1.02268 5.70296C1.43993 5.16783 2.19509 5.07428 2.72183 5.50113L2.72747 5.5057L2.7274 5.50578L4.80113 7.28844L11.1009 1.19428C11.4058 0.823734 11.8918 0.664235 12.3515 0.795157C12.8148 0.92714 13.1542 1.32612 13.2328 1.80764C13.3102 2.28226 13.1229 2.7659 12.7425 3.05076L5.68567 9.90615C5.68547 9.90635 5.68526 9.90656 5.68506 9.90676C5.46037 10.1276 5.16121 10.2518 4.84849 10.25M1.1657 7.4578L4.84992 9.99998M1.1657 7.4578L1.17122 7.46255L4.07171 9.95822M1.1657 7.4578L4.07171 9.95822M4.84849 10.25L4.84992 9.99998M4.84849 10.25C4.84891 10.25 4.84932 10.25 4.84974 10.25L4.84992 9.99998M4.84849 10.25C4.56353 10.2495 4.28921 10.1455 4.07179 9.95828L4.23484 9.76877M4.84992 9.99998C4.62562 9.99983 4.4083 9.91813 4.23484 9.76877M4.23484 9.76877L4.07171 9.95822M4.23484 9.76877L4.07171 9.95822"
                fill="#3A57E8" stroke="#fff" stroke-width="0.5"/>
          </svg>
        </div>
        <div class="chat-path_checked relative right-[5px] top-[2px]">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.84992 8.99998C3.62562 8.99983 3.4083 8.91813 3.23484 8.76877L0.334282 6.27305C-0.0623334 5.91116 -0.113042 5.2836 0.219834 4.85668C0.552711 4.42976 1.14847 4.35829 1.56443 4.69536L3.81107 6.62666L10.2855 0.363541C10.5289 0.0596148 10.9181 -0.0683403 11.283 0.0355947C11.6479 0.13953 11.9222 0.456459 11.986 0.84788C12.0499 1.2393 11.8916 1.63405 11.5804 1.85962L4.51031 8.72797C4.33142 8.90404 4.09507 9.00139 3.84992 8.99998Z"
                fill="#3A57E8"/>
          </svg>
        </div>
      </div>
      <div class="chat-user_item" :class="{'text-l_white':active}">
        <span>{{ getDate(item.message.date) }}</span>
      </div>
    </div>
    <div
        class="absolute bg-l_primary px-2 text-l_white rounded-[50px] bottom-4 maxmd:bottom-2 maxsm:bottom-4 right-10 text-end ">
      <p v-if="item.message.is_read === 0">?</p>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      reciver: ""
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_base_url'])
  },
  props: {
    item: Object,
    active: Boolean
  },
  mounted() {
    console.log(this.item.sender_info)
    if (this.item.reciver_id === this.getCurrentUser.id) {
      this.reciver = this.item.sender_info
    } else this.reciver = this.item.reciver_info
  },
  methods: {
    getDate(date) {
      let options = {hour: 'numeric', minute: 'numeric'};
      let d = new Date(date);
      let temp = d.toLocaleString("ru", options);
      if (temp === "Invalid Date") {
        return ''
      }
      return temp
    },
    getImage(image) {
      if (image === null)
        return '/default.png'
      return image
    }
  },
  watch: {
    getCurrentUser(val) {
      if (this.item.reciver_id === val.id) {
        this.reciver = this.item.sender_info
      } else this.reciver = this.item.reciver_info
    }
  }

};
</script>

<style>


</style>
