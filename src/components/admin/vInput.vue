<template>
  <div class="flex flex-col w-full">
    <label for="" class="text-xl text-l_black_text font-medium mb-2">{{ label }}</label>
    <textarea
        :required="is_required"
        :placeholder="label"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="" id=""
              class="resize-none bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text text-2xl maxf:text-lg " cols="30" rows="10" v-if="type==='textarea'"></textarea>
    <input
        :required="is_required"
        :placeholder="label"
        v-else class="bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text text-2xl maxf:text-lg "
           :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "vInput",
  props: {
    modelValue: String,
    type: String,
    label: String,
    is_required:Boolean
  },
}
</script>

<style scoped>

</style>