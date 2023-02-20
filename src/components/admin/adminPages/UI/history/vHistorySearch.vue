<template>
   <div class="bg-l_white w-full px-10 pt-14 pb-20 rounded-lg maxmd:py-4 relative z-100">
    <p class="font-bold text-[40px]">{{ $t("История изменений") }}</p>
    <div class="flex maxlg:flex-wrap mt-[72px] maxlg:mt-10 ">
      <input class="bg-profile_bg w-full rounded-xl px-4 py-4 text-sm text-[#9DA3CF] outline-none" @keyup="loadHistoryLists({...params, query:$event.target.value})" type="text" name="" value="" :placeholder="$t('Поиск изменений')">
      <button class="text-sm maxlg:w-full maxlg:px-0 maxlg:mt-4 bg-profile_bg ml-10 maxlg:m-0 px-6 py-4 rounded-xl outline-none"
      type="submit"
      @click="openModal = !openModal"
      >{{ $t("Фильтр") }}</button>
     
    </div>
      <div class="w-[394px] maxsm:w-[90%] shadow-admin_nav border-[1px] border-filter_gray bg-l_white absolute right-10 maxsm:right-4 mt-2 z-50 p-4"
        :class="{'block  bg-l_white border-filter_gray' : openModal, 'hidden': !openModal}"
      >
        <div class="filter-title flex relative">
          <p class="text-2xl font-bold">{{ $t("Фильтры") }}</p>
          <i class="absolute right-0 cursor-pointer"
            @click="openModal = !openModal"
          ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7188 14.3906L9.32501 8.00037L15.7188 1.65714C16.0392 1.28603 16.0219 0.729108 15.679 0.378943C15.3361 0.0287773 14.7832 0.00341392 14.4101 0.320731L7.99765 6.6169L1.69734 0.273674C1.33275 -0.0912247 0.743918 -0.0912247 0.379325 0.273674C0.202363 0.450387 0.102824 0.690937 0.102824 0.941878C0.102824 1.19282 0.202363 1.43337 0.379325 1.61008L6.67028 7.9439L0.276501 14.2777C0.0995389 14.4544 0 14.695 0 14.9459C0 15.1969 0.0995389 15.4374 0.276501 15.6141C0.452909 15.7903 0.69172 15.8885 0.940183 15.887C1.18409 15.8885 1.41891 15.794 1.59452 15.6235L7.99765 9.27089L14.4101 15.7271C14.5865 15.9032 14.8253 16.0014 15.0738 16C15.319 15.9989 15.554 15.9009 15.7281 15.7271C15.9039 15.5491 16.0017 15.3078 16 15.0569C15.9982 14.8059 15.897 14.5661 15.7188 14.3906Z" fill="#8A92A6"/>
            </svg>
          </i>
        </div>
        <div class="filter-body mt-5">
          <div>
            <p class="text-filter_gray">{{ $t("Категория:") }}</p>
            <ul class="text-base text-filter_gray flex justify-around mx-auto text-center mt-[6px]">
              <li class="w-6/12 py-2 rounded-xl " @click="par.category = 'all'" :class="{'bg-l_primary text-l_white ':par.category === 'all'}">
                {{ $t("Все") }}</li>
              <li class="w-6/12 py-2 ml-4 rounded-xl" @click="par.category = 'login'" :class="{'bg-l_primary text-l_white ':par.category === 'login'}">
                {{ $t("Авторизация") }}</li>
            </ul>
            <ul class="text-base text-filter_gray flex justify-around mx-auto text-center mt-5">
              <li class="w-6/12 py-2 rounded-xl" @click="par.category = 'add'" :class="{'bg-l_primary text-l_white ':par.category === 'add'}">
                {{ $t("Изменение") }}</li>
              <li class="w-6/12 py-2 ml-4 rounded-xl" @click="par.category = 'delete'" :class="{'bg-l_primary text-l_white ':par.category === 'delete'}">
                {{ $t("Удаления") }}</li>
            </ul>
          </div>
          <div class="mt-8">
            <p class="text-filter_gray">{{ $t("Сортировать по") }}:</p>
            <ul class="text-base text-filter_gray flex items-center justify-around mx-auto text-center mt-[6px]">
              <li class="w-6/12 py-2 rounded-xl" @click="par.sort='asc'" :class="{'bg-l_primary text-l_white ':par.sort === 'asc'}">
                {{ $t("Возрастанию") }}</li>
              <li class="w-6/12 py-2 ml-4 rounded-xl" @click="par.sort='desc'" :class="{'bg-l_primary text-l_white ':par.sort === 'desc'}">
                {{ $t("Убыванию") }}</li>
            </ul>
            <p class="text-filter_gray mt-5">{{ $t("Дата:") }}</p>
            <ul class="text-base text-filter_gray mt-[6px]">
              <input v-model="par.date" type="date" class="w-6/12 py-2 ml-4 rounded-xl text-center outline-none border-[#E9ECEF] border-[1px] "
              placeholder="дд.мм.гг">
            </ul>
            <div class="flex w-full my-2 justify-center">
              <button class="rounded-2xl bg-l_primary text-l_white px-4 py-2 w-9/12" @click="loadHistoryLists({...params, ...par})" >
                {{ $t("Применить") }}</button>

            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
   data() {
    return {
      openModal: false,
      par:{
        category:"all",
        sort:"desc",
        date:""
      }

    }
   },
    mounted() {

    },
    props:{
     params:Object
    },
  methods:{
     ...mapActions(['loadHistoryLists'])
  }
  }
</script>

<style lang="scss" scoped>
  li {
    cursor: pointer;
    border: 1px solid #E9ECEF;
  }
</style>