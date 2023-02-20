<template>
   <router-link 
   :to="{name: route, params:params}"
   :class="{'active block ' : getActive()}"
  >
    <div class="adminNav-items cursor-pointer">
        <div class="adminNav-items flex justify-between items-center px-8 py-2 w-full text-filter_gray relative">
          <div class="flex">
            <slot name="icon"/>
            <p class="px-4"
            :class="{'text-l_white' : getActive()}"
            ><slot name="text"/></p>
          </div>
        </div>
      </div>
    </router-link>
    
</template>

<script>
  export default {
    props: {route:String, params:Object},
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      getActive(){
        if(this.$route.matched[1].name === this.route)
          return true;
        return this.$route.name === this.route
      }
    },
    mounted() {
    },

  }
</script>

<style lang="scss" >
.active svg path{
  fill: white
  ;
}
</style>