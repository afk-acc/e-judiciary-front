<template>
  <div>
    <div class="font-bold text-4xl text-l_black mb-4">
      <p>{{ $t(`Обращение по вопросам:`) }}</p>
    </div>
    <div class="flex flex-wrap gap-5 lg:justify-between maxlg:justify-center" >
      <AppealItem v-for="item in appeals" :item="item" :key="item.index"/>
    </div>
  </div>
</template>

<script>
import AppealItem from "../ui/AppealItem.vue";

export default {
  components: {AppealItem},
  data() {
    return {
      appeals: [
        {
          index: 1,
          header: this.$t("Налоги"),
          content:
              this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
        {
          index: 2,
          header: this.$t("Право"),
          content:
              this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
        {
          index: 3,
          header: this.$t("консультация по рискам"),
          content:
              this.$t("Lorem ipsum dolor sit amet consectetur. Suspendisse eu feugiat non ante id."),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
