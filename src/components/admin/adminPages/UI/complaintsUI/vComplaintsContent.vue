<template>
  <div class="bg-l_white mt-10 flex relative h-screen " >
    <div class="hidden maxlg:block p-4" @click="open=!open">
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
    </div>
    <v-complaints-left @reportChange="changeReport" :report="report" :open="open"></v-complaints-left>
    <v-complaints-right  @show="openModal" :report="report" ></v-complaints-right>
  </div>
</template>

<script>
import vComplaintsLeft from './vComplaintsLeft.vue';
import vComplaintsRight from './vComplaintsRight.vue';
  export default {
    components: {
      vComplaintsLeft,
      vComplaintsRight
    },
    data(){
      return {
        open:false,
        report:{}
      }
    },
    methods: {
      openModal(){
        this.open = !this.open
      },
      changeReport(item){
        this.report = item
      }
    },
    
  }
</script>

<style lang="scss" scoped>
</style>