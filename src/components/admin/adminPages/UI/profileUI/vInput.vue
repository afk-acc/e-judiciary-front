<template>
  <div class="mt-4 flex flex-col">
    <label for="" class="text-xl text-l_black_text">{{ label }}</label>
    <textarea
        v-if="type==='textarea'"
        :placeholder="label"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="" id=""
        class="resize-none bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text text-2xl" cols="30" rows="10" ></textarea>
    <input
        v-else
        :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        type="text"  class="bg-[#F7F8F9] rounded-xl border border-[#DBDBDB] outline-none px-5 py-4 font-medium">
  </div>
</template>

<script>
export default {
  name: "vInput",
  props: {
    modelValue: String,
    type: String,
    label: String
  },
}
</script>

<style scoped>

</style>