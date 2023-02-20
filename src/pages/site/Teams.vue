<template>
  <div class="bg-l_secondary pt-[100px]">
    <TeamTitle ></TeamTitle>
  </div>
  <div>
    <TeamInfo></TeamInfo>
    <v-filter></v-filter>
  </div>
</template>

<script>
import TeamTitle from '../../components/site/team/TeamTitle.vue'
import TeamInfo from '../../components/site/team/TeamInfo.vue'
import vFilter from '../../components/site/team/ui/vFilter.vue'
  export default {
  components: { TeamTitle, vFilter, TeamInfo}
  }
</script>

<style lang="scss" scoped>

</style>