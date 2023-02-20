<template>
  <teleport to="body">
    <div class="fixed flex items-center justify-center w-full h-full top-0 left-0 z-40">
      <div @click="$emit('show', false)" class="z-40 w-full h-full absolute left-0 top-0 bg-l_black opacity-40">
      </div>
      <div class="z-50 bg-l_white w-full max-w-[595px] h-max max-h-[80%] overflow-auto ">
        <div class="">
          <slot></slot>
        </div>
      </div>

    </div>
  </teleport>
</template>

<script>
export default {
  name: "vModal"
}
</script>

<style scoped>

</style>