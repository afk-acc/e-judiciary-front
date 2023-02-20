<template>
  <div
    class="approach cursor-pointer hover:bg-l_primary rounded-xl py-5 px-7 max-w-sm hover:text-l_white min-h-[325px] text-l_black transition-all duration-300"
  >
    <div class="font-bold text-5xl">#{{ num }}</div>
    <div class="w-full h-[1px] bg-l_black line mt-8 mb-7"></div>

    <div class="text-2xl">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: { num: Number, text: String },
};
</script>

<style scoped>
.approach:hover > .line {
  background-color: #fff;
  transition: all 0.3s ease;
}
</style>
