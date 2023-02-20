<template>
  <div class="history-item flex w-full h-full">
    <div class="history-icon mr-4 w-[50px] h-[50px] px-[12px] py-[12px]  m-6 z-50 rounded-[32px] bg-l_primary">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7161 16.2234H8.49609"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.7161 12.0369H8.49609"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.2511 7.86011H8.49609"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.908 2.74976C15.908 2.74976 8.231 2.75376 8.219 2.75376C5.459 2.77076 3.75 4.58676 3.75 7.35676V16.5528C3.75 19.3368 5.472 21.1598 8.256 21.1598C8.256 21.1598 15.932 21.1568 15.945 21.1568C18.705 21.1398 20.415 19.3228 20.415 16.5528V7.35676C20.415 4.57276 18.692 2.74976 15.908 2.74976Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="history-text w-full flex border-[1px] border-[#D7E2FF] border-t-0 border-l-0 border-r-0 
     items-center justify-between ">
      <div class="history-left flex items-center w-7/12 maxsm:w-screen maxmd:p-6" >
        <div class="history-desc text-filter_gray">
          <p> {{getDate(elem.date)}} </p>
          <p>
            <span class="font-bold text-l_black break-words break-all">{{ elem.user_name }}</span>
            <span class="block break-all pr-2">{{ elem.description }}</span>
          </p>
        </div>
      </div>
      <div class="history-right flex border-l-[1px] w-5/12 border-[#D7E2FF] h-full pt-10 px-4 maxlg:pt-4">
        <div class="history-date flex items-center mr-[100px] maxlg:mr-[50px] maxlg:text-center maxmd:mr-[10px] maxlg:border-r-[1px] border-[#D7E2FF]">
          <svg class="w-[50px] mr-2" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.0918 9.40421H20.9157" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4429 13.3097H16.4522" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0054 13.3097H12.0147" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.55818 13.3097H7.56744" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4429 17.1962H16.4522" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0054 17.1962H12.0147" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.55818 17.1962H7.56744" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0433 2V5.29078" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.96515 2V5.29078" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#3A57E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="maxsm:pr-4 ">{{ getDate2(elem.date)}}</p>
        </div>
        <div class="history-editing maxsm:pr-6 cursor-pointer flex items-center">

        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
 props: {elem:Object},
  methods:{
   getDate(date){
     let options = {  hour: 'numeric',  minute: 'numeric'};
     let d = new Date(date);
     return d.toLocaleTimeString("ru", options)
   },
    getDate2(date){
      let options = {  year: 'numeric', month: 'short', day: 'numeric' };
      let d = new Date(date);
      return d.toLocaleDateString("ru", options)
      // return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    }
  }
};
</script>

<style >
</style>
