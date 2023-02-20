<template>

  <div class="w-full mt-4 ">
    <label class="flex flex-col" for="input"><slot name="Label"/>
    <input class="input border-[#DBDBDB] border-[1px] w-[80%] h-[55px] pl-2 rounded-[12px] outline-filter_gray"  type="text" name="" value=""
    />
    </label>
    <button type="submit"><slot name="ModalBtn"/></button>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>

</style>