<template>
  <div
    class="border border-dashed border-faq_border rounded-lg py-6 px-8 flex justify-between items-center my-6"
  >
    <div class="w-11/12 flex">
      <div class="text-lg text-faq_num mr-7 flex items-center justify-center">
        {{ item.num }}
      </div>
      <div class="text-faq_text text-lg">{{ item.text }}</div>
    </div>
    <div class="w-8 h-8 cursor-pointer flex items-center justify-center">
      <img src="/img/InfoCircle.svg" alt="" class="w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped></style>
