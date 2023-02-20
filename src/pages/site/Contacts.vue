<template>
  <div>
    <div class="max-w-container mx-auto px-4">
      <div class="uppercase md:text-8xl maxmd:text-4xl text-l_black mt-28"
      >
        {{$t('КОНТАКТЫ')}}
      </div>
      <div class="h-[1px] mt-1 w-full bg-l_black"></div>
      <div class="mt-24 max-w-[1388px] mx-auto">
        <v-contacts />
        <v-map />
        <v-form />
      </div>
    </div>
  </div>
</template>

<script>
import vMap from "../../components/site/contacts/vMap.vue";
import vContacts from "../../components/site/contacts/vContacts.vue";
import vForm from "../../components/site/contacts/vForm.vue";
export default {
  components: { vMap, vContacts, vForm },
};
</script>

<style lang="scss" scoped></style>
