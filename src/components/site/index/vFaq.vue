<template>
  <div class="mt-32 flex justify-between maxlg:flex-wrap">
    <div class="lg:max-w-[400px] w-full flex items-center flex-col maxlg:mb-5" >
      <v-button class="lg:max-w-[200px]">{{ $t(`FAQ`) }}</v-button>
      <p class="text-5xl text-l_black my-2">
        {{ $t(`Ответы на часто задаваемые вопросы`) }}
      </p>
      <p class="text-2xl text-l_black">
        {{
          $t(`Lorem ipsum dolor sit amet consectetur.Semper ultricies sed tellus              vestibulum sit.Ut sapien egestas aenean ultrices aenean eu accumsan              tincidunt.Nisl quis adipiscing turpis massa in nulla.`)
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
    return {};
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
  },
};
</script>

<style></style>
