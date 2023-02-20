<template>
  <div class="relative min-h-[400px] flex bg-l_primary items-center">
    <div class="absolute right-10 top-5">
      <slot></slot>
    </div>
    <div class="max-w-[615px] text-l_white text-3xl px-10">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: { name: String, text: String },
};
</script>

<style lang="scss" scoped></style>
