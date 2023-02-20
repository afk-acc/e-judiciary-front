<template>
  <div>
    <div class="uppercase font-bold text-l_black text-5xl mt-24 mb-10" >
      <p>{{ $t(`Новости`) }}</p>
    </div>
    <div class="flex lg:justify-between flex-wrap gap-5 maxlg:justify-center" >
      <swiper
        class="swiper"
        :loop="true"
        :autoplay="{ delay: 200, disableOnInteraction: false }"
        :breakpoints="{
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }"
      >
        <swiper-slide class="slide" v-for="(item, index) in list" :key="index">
          <news-item :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import NewsItem from "../ui/NewsItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
export default {
  components: { NewsItem, Swiper, SwiperSlide },
  props: { offset: Number },
  data() {
    return {
      list: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur. A eleifend augue facilisis phasellus cras diam",
          link: "/",
          date: "21.12.2022",
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur. A eleifend augue facilisis phasellus cras diam",
          link: "/",
          date: "21.12.2022",
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur. A eleifend augue facilisis phasellus cras diam",
          link: "/",
          date: "21.12.2022",
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur. A eleifend augue facilisis phasellus cras diam",
          link: "/",
          date: "21.12.2022",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
