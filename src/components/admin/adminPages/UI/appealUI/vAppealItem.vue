<template>
  <div class="w-[345px] min-h-full flex flex-col justify-between  maxsm:w-[290px] maxsm:h-[300px] bg-l_white rounded-xl p-6 mx-2 my-2">
    <div class="appeal-title flex items-center justify-between">
      <p class="text-[#717171] font-bold">{{ $t('Обращение') }} #{{ item.id }}</p>
      <div class="appeal-dots flex">
        <div class="appeal-dot">
          <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="3" r="2.5" fill="#717171"/>
          </svg>
        </div>
        <div class="appeal-dot px-[6px]">
          <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="3" r="2.5" fill="#717171"/>
          </svg>
        </div>
        <div class="appeal-dot">
          <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="3" r="2.5" fill="#717171"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="appeal-info mt-4">
      <p class="text-filter_gray w-full">{{item.title.slice(0, 30)}}</p>
      <p class="text-filter_gray w-full">{{item.description.slice(0, 25)}}...</p>
    </div>
    
    <div class="appeal-footer flex justify-between items-center mt-9 ">
      <div class="flex gap-x-2  items-center maxsm:flex-wrap maxsm:justify-center maxsm:text-center maxsm:w-full">
      
        <div class="appeal-item_logo bg-[#E9ECEF] flex items-center justify-center rounded-[53px] w-[44px] h-[44px]">
          <p class="text-[#444FBB]">AT</p>
        </div>
        
        <div class="appeal-item_text ">
          <p class="text-l_black text-[14px]">{{item.applicant_info.name}}</p>
        </div>
      </div>
      
      <div class="appeal-item_btn bg-l_primary rounded-md">
        <button class="py-2 px-4 text-l_white" @click="$router.push({name:'appeal-item', params:{id:item.id}})">
          {{ $t('Подробнее') }}</button>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
  }
</script>

<style lang="scss" scoped>

</style>