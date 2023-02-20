<template>
  <div>
    <div class="uppercase md:text-5xl maxmd:text-3xl font-bold text-l_black mt-28" >
      {{ $t('НАШ ПОДХОД К РАБОТЕ') }}
    </div>
    <div class="flex gap-5 justify-center flex-wrap my-5" >
      <approach-item
          v-for="(item, index) in list"
          :key="index"
          :num="index + 1"
          :text="item" />
    </div>
  </div>
</template>

<script>
import ApproachItem from "./ui/ApproachItem.vue";

export default {
  data() {
    return {
      list: [
        this.$t("Назначение персонального менеджера для клиента"),
        this.$t("Формирование профессиональной команды под задачу клиента"),
        this.$t("Взаимодействие и регулярная коммуникация"),
        this.$t("Конфидециальность и отсутствие конфликта интересов"),
        this.$t("Подробное планирование проекта. Контроль соблюдения сроков"),
        this.$t("Прозрачность на протяжении всего процесса"),
        this.$t("Оперативная эфффективность"),
      ],
    };
  },
  components: {ApproachItem},
};
</script>

<style lang="scss" scoped></style>
