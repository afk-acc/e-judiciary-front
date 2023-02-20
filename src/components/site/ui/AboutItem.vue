<template>
  <div class="max-w-[400px] w-full h-full flex items-center justify-center flex-wrap">
    <div
      class="rounded-full bg-l_secondary flex items-center justify-center w-[131px] h-[131px]"
    >
      <img src="/img/Star.svg" alt="" />
    </div>
    <div
      class="uppercase sm:text-4xl maxsm:text-2xl font-bold text-l_title mt-12">
      {{ item.header }}
    </div>
    <div class="text-l_gray_2 sm:text-2xl maxsm:text-xl text-center mt-3">
      {{ item.content }}
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

<style scoped></style>
