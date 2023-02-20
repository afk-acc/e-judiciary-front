<template>
  <div
    class="cursor-pointer p-9 text-l_black hover:text-l_white bg-l_white hover:bg-l_primary rounded-xl max-w-[500px] appeal transition-all duration-300"
    >
    <div class="duration-100 transition-all uppercase text-3xl font-bold">
      {{ item.header }}
    </div>
    <div class="w-full h-[1px] bg-l_black line mt-8 mb-7"></div>
    <div class="duration-100 transition-all text-2xl">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.appeal:hover > .line {
  background-color: #fff;
  transition: all 0.3s ease;
}
</style>
