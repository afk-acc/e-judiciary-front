<template>
  <div>
    <p class="font-bold lg:text-5xl maxlg:text-3xl text-l_black uppercase mt-24 mb-10" >
      {{ $t(`Услуги которые мы предоставляем`) }}
    </p>
    <div class="flex flex-wrap justify-center gap-5">
      <service-item v-for="(item, index) in list" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import ServiceItem from "../ui/ServiceItem.vue";

export default {
  components: {ServiceItem},
  data() {
    return {
      list: [
        {
          header: this.$t("Консультирование по рискам"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header:
              this.$t("Составление претензии / отзыва на претензию ответчика / истца"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Абонентское обслуживание юридических лиц (за 1 мес)"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Cудебное представительство;"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Помощь в составлении различных документов"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Консультирование по различным отраслям права"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Абонентское обслуживание юридических лиц (за 1 мес)"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
        {
          header: this.$t("Правовая поддержка предпринимателей и компаний"),
          content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sunt at ducimus doloremque repellat quos necessitatibus! Assumenda, exercitationem quam.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
