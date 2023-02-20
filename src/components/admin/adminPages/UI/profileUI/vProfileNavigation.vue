<template>
    <ul class="px-2">
     <router-link :to="{name: route, params:params}"
   :class="{'active block' : this.$route.name === route}"
     >
        <li class="p-2 cursor-pointer rounded-[50px]">
          <slot name="profileLi"></slot>
        </li>
     </router-link>
    </ul>
</template>

<script>
  export default {
    props: { route: String, params:Object },
    data() {
      return {
        
      };
    },
  }
</script>

<style lang="scss" scoped>
.active {
  border-radius: 24px;
}
</style>