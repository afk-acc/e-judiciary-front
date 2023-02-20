<script>
export default {
  mounted() {
    if (!localStorage.getItem('locale'))
      localStorage.setItem('locale', 'ru')
  },
  methods:{

  }
}
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>

body {
  overflow-x: hidden;
}

</style>
