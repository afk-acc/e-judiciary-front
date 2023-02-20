<template>
  <div class="flex flex-col w-full">
    <label for="" class="text-xl maxf:text-xl text-l_black_text font-medium mb-2">{{ label }}</label>
    <select class="bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text maxf:text-lg"
            name="" id=""  @change="$emit('update:modelValue', $event.target.value);$emit('changeShow', true)">
      <option disabled selected>{{label}}</option>
      <option :value="item.id" v-for="(item,index) in list">{{item.title || item.name}}</option>

    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    list:Array
  },
}
</script>

<style scoped>

</style>