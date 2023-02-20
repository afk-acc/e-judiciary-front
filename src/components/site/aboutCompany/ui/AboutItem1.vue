<template>
  <div
    class="relative min-h-[400px] flex bg-no-repeat bg-cover items-center maxsm:flex-wrap maxsm:py-2"
    :class="{ 'justify-end pr-14 pl-2': !left, 'pl-14 pr-2': left }"
    :style="`background-image:url('/img/${name}')`"
  >
    <div
      class="absolute right-10 top-5 maxsm:static maxsm:w-full flex justify-end my-2 mx-2"
    >
      <slot></slot>
    </div>
    <div class="max-w-[615px] text-l_white xl:text-3xl maxxl:text-2xl">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: { name: String, text: String, left: Boolean },
};
</script>

<style lang="scss" scoped></style>
