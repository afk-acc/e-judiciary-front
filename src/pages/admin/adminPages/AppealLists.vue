<template>
  <div class="appeal-admin ">
    <div class="mt-[30px]">
      <!-- <v-appeal-search/>-->
      <div class="mx-auto px-4 mt-[30px] bg-l_white maxlg:p-4">
        <div class="flex items-center justify-between text-filter_gray shadow-filter maxf:rounded-3xl maxf:flex-col">
          <div
              class="flex items-center w-full h-[72px] maxf:h-auto mx-auto justify-center maxf:justify-center maxf:flex-col">
            <svg class="ml-[13px] maxf:m-auto maxf:cursor-pointer w-4 h-4 maxf:w-[40px] maxf:h-[40px] "
                 viewBox="0 0 15 15"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 @click="isActive=!isActive">
              <path
                  d="M0 0V1.46484L0.149148 1.64062L5.45455 7.71484V15L6.54119 14.2578L9.26847 12.3828L9.54545 12.1875V7.71484L14.8509 1.64062L15 1.46484V0H0ZM1.5554 1.25H13.4446L8.54403 6.875H6.45597L1.5554 1.25ZM6.81818 8.125H8.18182V11.5625L6.81818 12.5V8.125Z"
                  fill="#717171"/>
            </svg>
            <input
                v-model="params.query" @keyup="loadAppealList(params)"
                class="maxf:mt-5 maxf:text-center pl-[13px] maxf:pl-0 w-full outline-none m-auto maxf:h-[40px]"
                :placeholder="$t('Поиск обращения по названию')"
            />
          </div>
          <form class="flex items-center w-full justify-end m-auto maxf:flex-col maxmd:mt-5">
            <select
                @change="loadAppealList(params)"
                class="flex items-center mx-3 cursor-pointer p-2" v-model="params.par"
            >
              <option class="text-center fixed top-[200px] z-10" disabled>
                {{ $t("Сортировать по") }}
              </option>
              <option :value="elem.value" v-for="(elem, index) in dropdownList" class="text-center">
                {{ elem.name }}
              </option>
            </select>
          </form>
        </div>
      </div>

    </div>

    <div class="flex justify-between max my-4 w-full maxmd:items-center maxsm:flex-wrap maxsm:justify-center ">
      <div class="maxsm:mb-5">
        <router-link :to="{name:'add-appeal'}"
                     class="bg-l_primary text-l_white cursor-pointer px-2 py-4 w-[200px] flex items-center justify-center rounded-2xl"
                     v-if="getCurrentUser.role_name!=='lawyer'">
          {{ $t("Добавить обращение") }}
        </router-link>
      </div>
      <div class=" w-max flex justify-center gap-2 flex-wrap ">
        <div class="cursor-pointer px-2 py-4 w-[120px] flex items-center justify-center rounded-2xl"
             :class="{'bg-l_primary text-l_white':params.params==='all'}" @click="changeParams('all')">
          {{ $t("Все") }}
        </div>
        <div class="cursor-pointer px-2 py-4 w-[120px] flex items-center justify-center rounded-2xl"
             :class="{'bg-l_primary text-l_white':params.params==='progress'}" @click="changeParams('progress')">
          {{ $t("В процессе") }}
        </div>
        <div class="cursor-pointer px-2 py-4 w-[120px] flex items-center justify-center rounded-2xl"
             :class="{'bg-l_primary text-l_white':params.params==='ended'}" @click="changeParams('ended')">
          {{ $t("Завершенные") }}
        </div>
        <div class="cursor-pointer px-2 py-4 w-[120px] flex items-center justify-center rounded-2xl"
             v-if="getCurrentUser.role_name==='lawyer' || getCurrentUser.role_name==='admin'"
             :class="{'bg-l_primary text-l_white':params.params==='new'}" @click="changeParams('new')">
          {{ $t("Новые") }}
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center relative">
      <transition-group name="list">
        <v-appeal-item v-for="item in getCurrentAppeal?.data" :item="item" :key="item.id"></v-appeal-item>
      </transition-group>
    </div>
    <div class="flex items-center justify-evenly " v-if="getCurrentAppeal?.data?.length > 0">
      <router-link :to="{name:'appeal-list', params:{page:loadPrev?this.params.page-1:this.params.page||1}}"
                   class="fas fa-chevron-left cursor-pointer text-3xl">
      </router-link>
      <span class="text-xl font-bold">{{ this.params.page }}</span>
      <router-link :to="{name:'appeal-list', params:{page:loadNext?Number(this.params.page)+1:this.params.page}}"
                   class="fas fa-chevron-right cursor-pointer text-3xl"></router-link>
    </div>
    <div class="text-center font-bold text-3xl" v-else>{{ $t("Нет обращений") }}</div>
  </div>

</template>

<script>
import vAppealItem from '../../../components/admin/adminPages/UI/appealUI/vAppealItem.vue';
import vAppealUsers from '../../../components/admin/adminPages/UI/appealUI/vAppealContent.vue';
import {mapActions, mapGetters} from 'vuex'
import {canAccess} from "../../../assets/functions.js";

export default {
  data() {
    return {
      loadPrev: false,
      loadNext: true,
      isActive: false,

      params: {
        params: "all",
        page: 1,
        limit: 16,
        query: '',
        sort: 'desc',
        par: 'num',
      },
      modalActive: false,

    }
  },
  computed: {
    ...mapGetters(['getCurrentAppeal', 'getCurrentUser']),
    dropdownFilter() {
      return [
        {name: this.$t("Сортировать по:"), description: this.$t("Имени")},
      ]
    },
    dropdownList() {
      return [
        {
          name: this.$t("По алфавиту"),
          value: 'alphabet'
        },
        {
          name: this.$t("По номеру"),
          value: 'num'
        }
      ];
    },
  },
  components: {
    vAppealItem,
    vAppealUsers
  },
  methods: {
    ...mapActions(['loadAppealList']),
    changeModalActive() {
      this.modalActive = !this.modalActive;
    },
    changeParams(par) {
      this.params.params = par;
      this.params.page = 1;
      this.params.query = '';
      this.params.sort = 'asc';
      this.params.par = 'num';
      this.loadAppealList(this.params)
    }


  },

  mounted() {
    this.params.page = this.$route.params.page
    this.loadPrev = Number(this.params.page) > 1
    if (this.getCurrentUser.permissions) {
      this.loadAppealList(this.params)

    }
  },
  watch: {
    $route(to, from) {
      if (this.getCurrentAppeal) {

        this.loadNext = Number(this.params.page) !== Number(this.getCurrentAppeal?.meta?.last_page)
        this.loadPrev = Number(this.params.page) > 1
        this.params.page = to.params.page
        if (this.params.page < 1)
          this.params.page = 1;
        this.loadAppealList(this.params)
      }
    },
    getCurrentAppeal(val) {
      if (val) {

        this.loadNext = Number(this.params.page) !== Number(val.meta.last_page)
        this.loadPrev = Number(this.params.page) > 1
      }
    },
    getCurrentUser(val) {
      this.loadAppealList(this.params)
    }
  }
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
  position: relative;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-active{
  position: relative;
}
.list-leave-active{
  position: absolute;
  max-height: 100px;
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
  transition: all 0.5s ease;
}
.list-move:nth-child(2n+1),
.list-move:nth-child(2n+1) {
  transition: all 0.5s linear;
  opacity: 0;
  transform: translateY(25%);
}

.list-move:nth-child(2n),
.list-move:nth-child(2n) {
  transition: all 0.5s linear;
  opacity: 0;
  transform: translateY(-25%);
}
</style>