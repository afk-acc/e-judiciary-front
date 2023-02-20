<template>
  <div class="flex flex-col w-full ">
    <label for="" class="text-xl maxf:text-xl text-l_black_text font-medium mb-2" :class="{'label':is_required}">{{ label }}</label>
    <select
        v-if="type==='select'"
        class="bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text text-2xl maxf:text-[13px]"
        name="" id=""
        @change="$emit('update:modelValue', $event.target.value);$emit('changeShow', true)">
      <option disabled selected>{{ label }}</option>
      <option :value="item.label" v-for="(item,index) in get_list">{{ item.label }}</option>
    </select>
    <textarea
        v-else-if="type==='textarea'"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" name="" id=""

        class="resize-none bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text text-2xl maxf:text-[13px]"
        cols="30" rows="10"></textarea>
    <input
        :placeholder="label"
        :required="is_required"
        v-else class="bg-[#F7F8F9] border border-[#DBDBDB] rounded-xl px-5 py-4 outline-none text-l_black_text maxlg:text-base text-2xl maxf:text-[13px]"
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
    is_required: Boolean,
    list: Object
  },
  computed:{
    get_list(){
      let js = JSON.parse(this.list)
      console.log(js['ru'])
      return js[localStorage.getItem('locale')]
    }
  },
}
</script>

<style >
.label{
  padding-right: 10px;
  position: relative;
}
.label::after {
  content:"*";
  position: absolute;
  right: 0;
  top:0;
  color:#3A57E8;
  font-size: 25px;
}

</style>