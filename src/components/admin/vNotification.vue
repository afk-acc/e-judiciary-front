<template>
  <div class="flex gap-x-3 maxesm:w-full items-center px-4 border-b border-filter_gray py-2">
    <div class="w-10 h-10">
      <img class="w-full rounded-full object-cover" :src="getImage(item.sender_info , item.sender_info.image)" alt="">
    </div>
    <div class="flex flex-col maxesm:flex-wrap">
      <div class="flex justify-between"><span>{{ item.sender_info.name }}</span><span>{{
          getDate(item.created_at)
        }} </span></div>
      <div class="">{{ item.description }}</div>
    </div>
    <div class="cursor-pointer" @click="remove(item.id)">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.433 12.3255L8.10483 7.00022L13.433 1.7142C13.7 1.40494 13.6855 0.940842 13.3998 0.649038C13.114 0.357233 12.6533 0.336097 12.3424 0.600528L6.99869 5.84734L1.74844 0.561314C1.44461 0.257231 0.953916 0.257231 0.650089 0.561314C0.50262 0.708575 0.419671 0.909032 0.419671 1.11815C0.419671 1.32727 0.50262 1.52773 0.650089 1.67499L5.89255 6.95317L0.564402 12.2313C0.416933 12.3786 0.333984 12.5791 0.333984 12.7882C0.333984 12.9973 0.416933 13.1978 0.564402 13.345C0.711408 13.4918 0.910418 13.5737 1.11747 13.5725C1.32073 13.5737 1.51641 13.4949 1.66275 13.3529L6.99869 8.059L12.3424 13.4391C12.4894 13.5859 12.6884 13.6678 12.8955 13.6666C13.0998 13.6657 13.2957 13.584 13.4408 13.4391C13.5872 13.2908 13.6688 13.0898 13.6673 12.8807C13.6658 12.6715 13.5815 12.4717 13.433 12.3255Z"
            fill="#8A92A6"/>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "vNotification",
  computed: {
    ...mapGetters(['get_base_url'])
  },
  props: {
    item: Object
  },
  methods: {
    ...mapActions(['remove_notification']),
    getImage(user, image) {
      if (image) {
        return image
      }
      return '/default.png'
    },
    getDate(date) {
      let options = {day: 'numeric', month: "short", hour: 'numeric', minute: 'numeric'};
      let d = new Date(date);
      return d.toLocaleString("ru", options)
    },
    remove(id) {
      this.remove_notification(id)
    }
  }

}
</script>

<style scoped>

</style>