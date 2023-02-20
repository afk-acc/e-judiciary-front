<template>
  <div>
    <div class="uppercase md:text-5xl maxmd:text-3xl font-bold text-l_black mt-28" >
      {{ $t("ОТРАСЛЕВОЙ ОПЫТ") }}
    </div>
    <div class="flex flex-wrap gap-5 mt-4">
      <div
          v-for="(item, index) in list"
          :key="index"
          class="text-l_black_text cursor-pointer text-2xl py-4 px-7 border border-l_black_text"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        this.$t("Банки и финансовые институты"),
        this.$t("Нефтегазовая промышленность"),
        this.$t("IT / TMT / Технологии"),
        this.$t("Инвестиционная деятельность"),
        this.$t("Фармацевтика / Медицина"),
        this.$t("Нефтегазовая промышленность"),
        this.$t("Сельское хозяйство"),
        this.$t("Автомобильная промышленность"),
        this.$t("Банки и финансовые институты"),
        this.$t("Фармацевтика / Медицина"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
