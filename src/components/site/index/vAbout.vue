<template>
   <div >
    <p class="text-7xl text-l_black uppercase mt-24">{{ $t(`О НАС`) }}</p>
    <div class="w-full h-[1px] bg-l_black"></div>
    <div class="flex lg:justify-between maxlg:justify-center flex-wrap mt-24 gap-5">
      <AboutItem  v-for="item in list" :key="item.index" :item="item" />
    </div>
   </div>
</template>

<script>
import AboutItem from "../ui/AboutItem.vue";
export default {
  components: {AboutItem},
  data() {
    return {
      list: [
        {
          index: 1,
          header: this.$t("Преимущество №1"),
          content:
            this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
        {
          index: 2,
          header: this.$t("Преимущество №2"),
          content:
            this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
        {
          index: 3,
          header: this.$t("Преимущество №3"),
          content:
            this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
