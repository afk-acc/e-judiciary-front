<template>
  <button
    :type="type"
    class="bg-l_primary w-full text-l_white rounded-md  px-10 py-4 cursor-pointer "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {},
  props:{
    type:String
  }
};
</script>

<style lang="scss" scoped></style>
