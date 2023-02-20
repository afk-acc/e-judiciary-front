<template>
  <div>
    <input
      type="text"
      class="border-b border-b-l_black_text outline-none w-full text-xl"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: { placeholder: String },
};
</script>

<style lang="scss" scoped></style>
