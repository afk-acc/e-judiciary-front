<template>
  <div class="maxmd:mt-20 z-50 maxsm:w-full">
    <v-history-search v-model="params" :params="params"></v-history-search>
    <div class="bg-l_white mt-7 maxlg:overflow-x-scroll rounded-[24px] z-0 ">
      <div class="history-items relative z-0 maxlg:w-full ">
        <v-history-line class="top-0 left-[47px]"/>
        <transition-group name="list">
          <v-history-content v-for="(elem, index) in getCurrentHistory.data" :elem="elem" :key="index"/>
        </transition-group>
      </div>
    </div>
    <div class="flex items-center justify-evenly" v-if="getCurrentHistory?.data?.length > 0">
      <router-link :to="{name: 'history', params:{page:loadBack?this.params.page-1:this.params.page || 1}}"
                   class="fas fa-chevron-left cursor-pointer text-3xl"></router-link>
      <span class="text-xl font-bold">{{ this.params.page }}</span>
      <router-link :to="{name:'history', params:{page:loadNext?Number(this.params.page)+1:this.params.page}}"
                   class="fas fa-chevron-right cursor-pointer text-3xl"></router-link>
    </div>
    <div class="text-center font-bold text-2xl text-l_primary" v-else>Пусто</div>
  </div>
</template>

<script>
import vHistorySearch from "../../../components/admin/adminPages/UI/history/vHistorySearch.vue";
import vHistoryContent from "../../../components/admin/adminPages/UI/history/vHistoryContent.vue";
import vHistoryLine from '../../../components/admin/adminPages/UI/history/vHistoryLine.vue'

import {mapActions, mapGetters} from 'vuex'
import {canAccess} from "../../../assets/functions.js";

export default {
  name: "history-item",

  components: {
    vHistorySearch,
    vHistoryContent,
    vHistoryLine
  },
  data() {
    return {
      loadBack: false,
      loadNext: true,
      params: {
        limit: 15,
        locale: localStorage.getItem('locale'),
        query: "",
        sort: "desc",
        date: "",
        category: "all"
      }
    }
  },
  computed: {
    ...mapGetters(['getCurrentHistory', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['loadHistoryLists']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item)
      }
      return false
    }
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.loadBack = Number(this.params.page) > 1
    this.loadHistoryLists(this.params)
    if(this.getCurrentUser.id){
      if(!canAccess(this.getCurrentUser, 'logs.read')){
        this.$router.go(-1)
      }
    }
  },
  watch: {
    $route(to, from) {
      this.loadNext = Number(this.params.page) !== Number(this.getCurrentHistory.last_page)
      this.loadBack = Number(this.params.page) > 1
      this.params.page = to.params.page
      if (this.params.page < 1)
        this.params.page = 1
      this.loadHistoryLists(this.params)
    },
    getCurrentHistory(value) {
      this.loadNext = Number(this.params.page) !== Number(value.last_page)
      this.loadBack = Number(this.params.page) > 1
    },
    getCurrentUser(val){
      if(!canAccess(val, 'logs.read')){
        this.$router.go(-1)
      }
    }
  }
};
</script>

<style >
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from:nth-child(2n),
.list-leave-to:nth-child(2n) {
  opacity: 0;
  transform: translateX(-100%);
}

.list-enter-from:nth-child(2n+1),
.list-leave-to:nth-child(2n+1) {
  opacity: 0;
  transform: translateX(100%);
}
.list-move {
  transition: all 0.6s ease;
}
.list-move:nth-child(2n+1),
.list-move:nth-child(2n+1) {
  transition: all 0.6s linear;
  opacity: 0;
  transform: translateY(25%);
}

.list-move:nth-child(2n),
.list-move:nth-child(2n) {
  transition: all 0.6s linear;
  opacity: 0;
  transform: translateY(-25%);
}

</style>
