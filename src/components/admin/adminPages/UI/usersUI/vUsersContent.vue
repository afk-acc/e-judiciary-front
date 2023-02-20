<template>
  <div class=" bg-l_white mt-10 rounded-[10px] p-7 w-full  overflow-x-scroll ">
    <div class="flex justify-between items-center maxsm:flex-col">
      <h2 class="text-3xl maxsm:text-xl">{{ $t("Список пользователей") }}</h2>
      <input
          class="placeholder-search_color h-[52px] w-[27%] pl-2 outline-none text-sm"
          type="text"
          name=""
          @keyup="loadUsersList(params)"
          v-model="params.query"
          :placeholder="$t('Поиск...')"
      />
    </div>
    <table class=" table-auto my-16  w-[100%] maxmd:w-[130%]">
      <thead class="">
      <tr class="">
        <th>{{ $t("Имя") }}</th>
        <th>{{ $t("E-mail") }}</th>
        <th>{{ $t("Город") }}</th>
        <th>{{ $t("Образование") }}</th>
        <th>{{ $t("Роли") }}</th>
        <th>{{ $t("Редактирование") }}</th>
      </tr>
      </thead>
      <tbody>
      <user-item v-for="item in getUsersList.data" :item="item" :key="item.id" openModal="openModal">

        <div class="flex items-center" v-if="getCurrentUser.id !== item.id">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.79006 15.2699L8.52006 11.8599C8.62634 11.3861 8.86572 10.9524 9.21006 10.6099L15.8801 3.99993C16.5564 3.3109 17.4748 2.91271 18.4401 2.88993C19.1681 2.8795 19.8701 3.1603 20.3901 3.66993C21.5262 5.01239 21.3796 7.01715 20.0601 8.17993L13.3901 14.8499C13.0476 15.1943 12.6139 15.4337 12.1401 15.5399L8.73006 16.2699H8.54006C8.29077 16.2795 8.05267 16.1661 7.90298 15.9665C7.7533 15.7669 7.71109 15.5066 7.79006 15.2699ZM10.2701 11.6799C10.1299 11.8157 10.0326 11.9895 9.99006 12.1799L9.50006 14.5099L11.8301 14.0099C12.0205 13.9674 12.1943 13.87 12.3301 13.7299L19.0001 7.05993C19.7307 6.47495 19.8757 5.42041 19.3301 4.65993C19.0911 4.43164 18.7704 4.3091 18.4401 4.31993C17.8706 4.34279 17.3325 4.58673 16.9401 4.99993L10.2701 11.6799Z"
                  fill="#3A57E8"/>
            <path
                d="M19.9101 10.9299C19.4981 10.9353 19.1655 11.2679 19.1601 11.6799V17.3699C19.1735 18.1742 18.8633 18.9501 18.2993 19.5236C17.7352 20.0971 16.9645 20.42 16.1601 20.4199H6.63008C4.96745 20.3873 3.63519 19.0328 3.63008 17.3699V7.87988C3.65738 6.21497 5.01494 4.87966 6.68008 4.87988H12.3701C12.7843 4.87988 13.1201 4.5441 13.1201 4.12988C13.1201 3.71567 12.7843 3.37988 12.3701 3.37988H6.63008C4.13658 3.37973 2.10748 5.38654 2.08008 7.87988V17.3699C2.08008 19.8828 4.11718 21.9199 6.63008 21.9199H16.1201C18.6291 21.9144 20.6601 19.8789 20.6601 17.3699V11.6799C20.6547 11.2679 20.322 10.9353 19.9101 10.9299Z"
                fill="#3A57E8"/>
          </svg>
          <p class="text-l_primary" @click="openModal(item)">{{ $t("Изменить") }}</p>
        </div>
      </user-item>
      </tbody>
    </table>
    <div class="flex items-center justify-evenly " v-if="getUsersList.data">
      <router-link :to="{name:'users-list-page', params:{page:loadPrev?this.params.page-1:this.params.page||1}}"
                   class="fas fa-chevron-left cursor-pointer text-3xl">
      </router-link>
      <span class="text-xl font-bold">{{ this.params.page }}</span>
      <router-link :to="{name:'users-list-page', params:{page:loadNext?Number(this.params.page)+1:this.params.page}}"
                   class="fas fa-chevron-right cursor-pointer text-3xl"></router-link>
    </div>
    <div>

      <teleport to="body">
        <div
            v-if="isActive"
            class="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center">

          <div
              :class="{'bg-l_black h-screen w-screen opacity-60 fixed top-0 left-0':isActive, 'bg-none':!isActive}"
              @click="isActive = !isActive"
          >
          </div>
          <div
              class="w-[50%] maxxl:w-[60%] maxmd:w-[90%]    rounded-xl bg-l_white relative z-50 flex flex-col"
          >
            <div class="flex justify-end">

            <i class=" right-0 p-4 cursor-pointer"
               @click="isActive = !isActive"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.7188 14.3906L9.32501 8.00037L15.7188 1.65714C16.0392 1.28603 16.0219 0.729108 15.679 0.378943C15.3361 0.0287773 14.7832 0.00341392 14.4101 0.320731L7.99765 6.6169L1.69734 0.273674C1.33275 -0.0912247 0.743918 -0.0912247 0.379325 0.273674C0.202363 0.450387 0.102824 0.690937 0.102824 0.941878C0.102824 1.19282 0.202363 1.43337 0.379325 1.61008L6.67028 7.9439L0.276501 14.2777C0.0995389 14.4544 0 14.695 0 14.9459C0 15.1969 0.0995389 15.4374 0.276501 15.6141C0.452909 15.7903 0.69172 15.8885 0.940183 15.887C1.18409 15.8885 1.41891 15.794 1.59452 15.6235L7.99765 9.27089L14.4101 15.7271C14.5865 15.9032 14.8253 16.0014 15.0738 16C15.319 15.9989 15.554 15.9009 15.7281 15.7271C15.9039 15.5491 16.0017 15.3078 16 15.0569C15.9982 14.8059 15.897 14.5661 15.7188 14.3906Z"
                    fill="#8A92A6"/>
              </svg>
            </i>
            </div>

            <form
                @submit.prevent="changeUser"
                class="flex items-center gap-4 ">

              <select id="roles" class=" border-[#DBDBDB] border-[1px] mx-10 w-[70%] outline-none   rounded-[12px] p-4"
                      v-model="active_user.role_id" :value="active_user.role_id">
                <option value="" selected disabled class="text-l_black">{{ $t("Выбрать роль") }}</option>
                <option :value="item.id" v-for="item in getRoleList">{{ item.role_name }}</option>

              </select>
              <div class=" flex justify-end mx-10 my-4 maxmd:mx-auto">
                <button type="submit" class="text-l_white rounded-md outline-none bg-l_primary px-10 py-4 "
                  
                >{{ $t("Готово") }}
                </button>
              </div>
            </form>

          </div>
        </div>

      </teleport>

    </div>

  </div>
</template>

<script>
import userItem from "./userItem.vue";
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    userItem,
  },
  data() {
    return {
      loadPrev: false,
      loadNext: true,
      isActive: false,
      active_user: {},
      params: {
        limit: 15,
        locale: localStorage.getItem('locale'),
        query: "",
      },
      usersSorts: [
        {name: "Имя"},
        {email: "E-mail"},
        {city: "Город"},
        {education: "Образование"},
        {role: "Роль"},
        {editing: "Редактирование"},
      ],
    };
  },
  computed: {
    ...mapGetters(['getUsersList', 'getRoleList','getCurrentUser']),

  },
  methods: {
    ...mapActions(['loadUsersList', 'loadRoleList', 'changeUserRole']),
    openModal(item) {
      this.active_user = item
      this.isActive = true
      console.log(item)
    },
     changeUser(){
      this.changeUserRole({user_id:this.active_user.id,role:this.active_user.role_id, page:this.$route.params.page})
       this.isActive = false;
     }
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.loadPrev = Number(this.params.page) > 1
    this.loadUsersList(this.params)
    this.loadRoleList();
  },
  watch: {
    $route(to, from) {
      this.loadNext = Number(this.params.page) !== Number(this.getUsersList?.meta?.last_page)
      this.loadPrev = Number(this.params.page) > 1
      this.params.page = to.params.page
      if (this.params.page < 1)
        this.params.page = 1;
      this.loadUsersList(this.params)
    },
    getUsersList(val) {
      this.loadNext = Number(this.params.page) !== Number(val.meta.last_page)
      this.loadPrev = Number(this.params.page) > 1
    }
  }
};
</script>

<style lang="scss" scoped></style>
