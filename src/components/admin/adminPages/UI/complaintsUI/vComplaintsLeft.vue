<template>
  <div class="w-5/12 border-r-[1px] top-0 border-[#C9C9C9] maxlg:absolute maxmd:w-full h-full  bg-l_white z-10 transition-all"
       :class="{'left-0' : open, 'left-[-1000px]' : !open }">
    <div class=" justify-end p-4 hidden maxlg:flex" >
      <svg class="cursor-pointer" @click="open=!open" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.7188 14.3906L9.32501 8.00037L15.7188 1.65714C16.0392 1.28603 16.0219 0.729108 15.679 0.378943C15.3361 0.0287773 14.7832 0.00341392 14.4101 0.320731L7.99765 6.6169L1.69734 0.273674C1.33275 -0.0912247 0.743918 -0.0912247 0.379325 0.273674C0.202363 0.450387 0.102824 0.690937 0.102824 0.941878C0.102824 1.19282 0.202363 1.43337 0.379325 1.61008L6.67028 7.9439L0.276501 14.2777C0.0995389 14.4544 0 14.695 0 14.9459C0 15.1969 0.0995389 15.4374 0.276501 15.6141C0.452909 15.7903 0.69172 15.8885 0.940183 15.887C1.18409 15.8885 1.41891 15.794 1.59452 15.6235L7.99765 9.27089L14.4101 15.7271C14.5865 15.9032 14.8253 16.0014 15.0738 16C15.319 15.9989 15.554 15.9009 15.7281 15.7271C15.9039 15.5491 16.0017 15.3078 16 15.0569C15.9982 14.8059 15.897 14.5661 15.7188 14.3906Z"
            fill="#8A92A6"></path>
      </svg>
    </div>
    <div class="complaint-title maxlg:flex maxlg:flex-col p-4">
      <h3 class="text-2xl maxlg:text-center font-bold">{{$t('Жалобы')}}</h3>
      <div class="flex maxlg:flex-col maxlg:items-center maxlg:gap-y-2 items-center mt-4 text-[#888888]">
        <p>{{get_reports?.meta?.total}} {{$t('жалоб')}}</p>
        <div class="px-4">
        </div>
      </div>
      <div class="flex w-full items-center my-6 ">
        <i>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 17.5L13.875 13.875" stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </i>
        <input class="w-full outline-none ml-4 text-sm" v-model="params.query" @input="load_report(params)" type="text" name="" :placeholder="$t('Поиск')">
      </div>

    </div>
    <div class="complaint-body border-b-[1px] p-4 border-[#C9C9C9]">
      <ul class="text-sm flex maxsm:flex-wrap maxsm:justify-around justify-between ">
        <li
            @click="params.type='all'"
            :class="{'border-b-[3px] border-l_primary ':params.type==='all'}"
            class="pb-2 maxsm:px-2"
        >{{ $t('Все жалобы') }}
        </li>
        <li
            @click="params.type='delivered'"
            class="pb-2 maxsm:px-2"
            :class="{'border-b-[3px] border-l_primary ':params.type==='delivered'}"
        >{{ $t('Прочитано') }}
        </li>
        <li
            @click="params.type='unread'"
            class="pb-2 maxsm:px-2"
            :class="{'border-b-[3px] border-l_primary ':params.type==='unread'}"
        >{{ $t('Непрочитано') }}
        </li>
      </ul>
    </div>
    <div class="complaint-user h-screen overflow-y-scroll " @scroll="onScroll">
      <v-complaints-user @click="read_report(item.id); $emit('reportChange', item)" :is_active="item.id === report.id" :item="item" :key="index" v-for="(item,index) in get_reports.data"/>
    </div>
  </div>
</template>

<script>
import vComplaintsUser from './vComplaintsUser.vue';
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    vComplaintsUser
  },
  data() {
    return {
      params: {
        query: "",
        type: 'all',
        page: 1,
        limit: 15
      }
    }
  },
  props: {
    open: Boolean,
    report:Object
  },
  computed: {
    ...mapGetters(['get_reports'])
  },
  methods: {
    ...mapActions(['load_report', 'read_report']),
    onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
      // console.log(`scroll top - ${scrollTop}`)
      // console.log(`clientHeight - ${clientHeight}`)
      // console.log(`scrollHeight - ${scrollHeight}`)
      if (Number(scrollTop) + Number(clientHeight) >= Number(scrollHeight) - 100) {
        if (this.get_reports?.meta?.last_page !== this.params.page) {
          this.params.page = Number(this.params.page) + 1;
          this.load_report(this.params)
          // this.params.page = Number(this.params.page) + 1;
          // this.load_messages(this.params)
        }
      }
    },
  },
  mounted() {
    this.load_report(this.params)
  },
  watch: {
    params: {
      handler(val) {
        this.params.page = 1;
        this.load_report(this.params)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>