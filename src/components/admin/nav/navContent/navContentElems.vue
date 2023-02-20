<template>
  <router-link
    :to="{ name: route, params: params}"
    class="px-4 mx-2 rounded-xl maxlg:my-2 maxlg:mx-auto"
    :class="{ ' active-content block': getActive() }"
  >
    <div class="adminNav-items cursor-pointer ">
      <div
        class="adminNav-items flex justify-between items-center w-full text-filter_gray relative"
      >
        <div class="flex p-2">
          <p class="" :class="{ 'text-l_white': getActive() }">
            <slot name="ContentText" />
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { route: String, params: Object },
  methods: {
    getActive() {
      if(this.$route.matched[1].name === this.route)
      return true
      return this.$route.name === this.route
    }
  },
};
</script>

<style lang="scss" >
  .active-content {
    color: white;
    background: #1D19DC;
  }
</style>
