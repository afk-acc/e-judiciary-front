<template>
  <div
    class="rounded-md mx-4 cursor-pointer border border-l_black_text max-w-[340px]"
  >
    <div class="h-[238px] bg-l_gray">
      <img src="" alt="" />
    </div>
    <div
      class="border-b border-dashed border-l_black_text text-xl text-l_black_text px-4 py-6"
    >
      {{ item.title }}
    </div>
    <div
      class="text-xl text-l_black_text px-4 py-6 flex justify-between items-center"
    >
      <span>
        {{ item.date }}
      </span>
      <span>
        <img src="/img/arrow.svg" alt="" />
      </span>
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
