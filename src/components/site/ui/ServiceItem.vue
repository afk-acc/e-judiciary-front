<template>
  <div @click="setActive()" class="border border-l_black_text relative max-w-[800px] my-4 py-4 px-7" >
    <div
      class="w-[10px] h-[10px] bg-l_black_text left-[-5px] top-1/2 absolute rounded-full -translate-y-1/2"
    ></div>
    <p class="text-xl text-l_black_text relative">
      {{ item.header }}
      <span
        class="absolute -right-2 top-1/2 -translate-y-1/2 transition-all duration-300"
        :class="{ 'rotate-180': isActive }"
        ><img src="/img/accordion.svg" alt="" class="w-full"
      /></span>
    </p>
    <div
      class="overflow-hidden transition-all duration-500 text-xl mt-2"
      :class="getClass()"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    setActive() {
      this.isActive = !this.isActive;
    },
    getClass() {
      if (this.isActive) return "max-h-screen";
      return "max-h-0";
    },
  },
};
</script>

<style lang="scss" scoped></style>
