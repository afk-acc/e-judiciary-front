<template>
  <div class="px-4 w-full ">
    <h2 class="text-[40px] uppercase maxlg:text-center mt-[82px]"
    >{{ $t("КАТЕГОРИИ ВОПРОСОВ") }}</h2>
    <ul class="flex gap-x-3 mt-[19px] maxlg:flex-wrap maxlg:justify-center ">
      <li v-for="(category, index) in faqCategories"
          class="bg-[#E9ECEF] py-4 px-5 text-lg maxlg:mt-2 cursor-pointer active:scale-95 transition-all duration-100 select-none rounded-lg"
          :class="category.class"
          @click="set_active_id(category.id)"
          >
        {{ category.name }}
      </li>
    </ul>
  </div>
  <div class="max-w-container mx-auto mt-32 px-4 flex justify-between maxlg:flex-wrap">
    <div class="lg:max-w-[480px] w-full maxlg:mb-5">
      <p class="text-5xl text-l_black my-2">
        {{ $t("Ответы на часто задаваемые вопросы") }}
      </p>
      <p class="text-2xl text-l_black">
        {{
          $t(`Lorem ipsum dolor sit amet consectetur.Semper ultricies sed tellus vestibulum sit.Ut sapien egestas aenean ultrices aenean eu accumsan .Nisl quis adipiscing turpis massa in nulla.`)
        }}
      </p>
    </div>
    <div class="w-full max-w-[1000px]">
      <input
          type="text"
          placeholder="Поиск"
          class="max-w-md w-full py-4 pl-8 pr-5 border-[0.5px] border-l_border search"
      />
      <div class="">
        <faq-item v-for="item in list" :key="item.num" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import vButton from "../ui/vButton.vue";
import FaqItem from "../ui/FaqItem.vue";

export default {
  components: {vButton, FaqItem},
  data() {
    return {

      index: 1

    }
  },
  computed: {
    list() {

      return [
        {
          num: "01",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "02",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "03",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "04",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "05",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "06",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "07",
          text: this.$t("Консультация по рискам"),
        },
        {
          num: "08",
          text: this.$t("Консультация по рискам"),
        },
      ]
    },
    faqCategories() {

      return [
        {
          id: 1,
          name: this.$t('Все'),
          class: 'active'
        },
        {
          id: 2,
          name: this.$t('Налоги'),
          class: ''
        },
        {
          id: 3,
          name: this.$t('Банкротство'),
          class: ''
        },
        {
          id: 4,
          name: this.$t('Трудовое право'),
          class: ''
        },
        {
          id: 5,
          name: this.$t('Недвижимость'),
          class: ''
        },
        {
          id: 6,
          name: this.$t('Строительство'),
          class: ''
        },
      ]
    },
  },
  methods: {
    set_active_id(id) {
      if (this.index === id) return //no need to go further
      this.faqCategories.find(category => category.id === this.index).class = '' //remove the active class from old active li
      this.faqCategories.find(category => category.id === id).class = 'active' //set active class to new li
      this.index = id //store the new active li id
    }
  }
};
</script>

<style>
.active {
  background: #1D19DC !important;
  color: #fff !important;
}
</style>
