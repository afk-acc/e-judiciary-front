<template>
  <div class="max-w-[400px] maxf:max-w-full">
    <v-input v-model:model-value="appeal.title" :label="$t('Заголовок')" type="text"/>
    <v-input v-model:model-value="appeal.description" :label="$t('Описание')" type="textarea"/>
    <v-select @changeShow="$emit('changeShow', true)" v-model:model-value="appeal.appeal_type_id" :label="$t('Выберите тип обращения')" :list="appeal_type_list"/>
  </div>

</template>

<script>
import VInput from "../../../vInput.vue";
import VSelect from "../../../vSelect.vue";

export default {
  name: "AppealData",
  components: {VSelect, VInput},

  props: {
    appeal: Object,
    appeal_type_list: Array,
    show_constructor:Boolean
  },
  methods: {},
}
</script>

<style scoped>

</style>