<template>
  <button :type="type" class="bg-l_primary px-4 py-2 flex justify-center items-center text-l_white rounded-xl w-full">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "vButton",
  props:{
    type:String
  }
}
</script>

<style scoped>

</style>