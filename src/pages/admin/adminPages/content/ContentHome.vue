<template>
  <div class=" p-4 maxsm:p-0 flex flex-col gap-y-10">
    <div class="content-block ">
      <v-content-elems>
        <template v-slot:contentTitle>Блок № 1</template>
      </v-content-elems>
      <div class="flex maxlg:flex-wrap maxlg:justify-center gap-6 my-10"><vContentGrid class="w-full"></vContentGrid></div>
    </div>

    <div class="content-block ">
      <v-content-elems>
        <template v-slot:contentTitle>Блок №2. Цитата/Слоган</template>
      </v-content-elems>

      <div class="my-10">
        <p class="">Добавьте по желанию слоган или цитату компании</p>
        <textarea class="mt-4 outline-none resize-none pl-4 w-6/12 maxmd:w-full" rows="5" placeholder="Введите описание"></textarea>
      </div>
    </div>
    
    <div class="content-block ">
      <v-content-elems>
        <template v-slot:contentTitle>Блок №3. Кратко о компании</template>
      </v-content-elems>

      <div class="my-10 flex flex-wrap">
        <v-content-about class="">
          <v-content-elems></v-content-elems>
        </v-content-about>
      </div>
    </div>
    
    <div class="content-block">
      <v-content-elems>
        <template v-slot:contentTitle>Блок №4. Видео</template>
      </v-content-elems>
      <div class="w-8/12 h-[400px] my-10 cursor-pointer maxmd:w-full">
      <div class=" flex flex-col items-center justify-center rounded-md border-2 border-dashed border-filter_gray w-full h-full maxmd:h-[300px]">
        <svg class="ml-2" width="90" height="90" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.125 37.7799C11.125 28.9356 18.2947 21.7658 27.139 21.7658V21.7658C28.7632 21.7658 30.3267 21.1489 31.5132 20.0398L32.6333 18.9928C33.9864 17.728 34.663 17.0956 35.412 16.6008C36.651 15.7823 38.0472 15.2313 39.5114 14.9832C40.3964 14.8333 41.3225 14.8333 43.1747 14.8333H44.5H45.8253C47.6775 14.8333 48.6036 14.8333 49.4886 14.9832C50.9528 15.2313 52.349 15.7823 53.588 16.6008C54.337 17.0956 55.0136 17.728 56.3667 18.9928L57.4868 20.0398C58.6733 21.1489 60.2368 21.7658 61.861 21.7658V21.7658C70.7053 21.7658 77.875 28.9356 77.875 37.7799V51.9074C77.875 61.1516 77.875 65.7736 75.8089 69.1766C74.623 71.1299 72.9841 72.7688 71.0309 73.9546C67.6279 76.0208 63.0058 76.0208 53.7617 76.0208H35.2383C25.9942 76.0208 21.3721 76.0208 17.9691 73.9546C16.0159 72.7688 14.377 71.1299 13.1911 69.1766C11.125 65.7736 11.125 61.1516 11.125 51.9075V37.7799Z" stroke="#8A92A6" stroke-width="3"/>
        <circle cx="44.5" cy="51.9167" r="11.125" stroke="#8A92A6" stroke-width="3"/>
        <path d="M59.334 33.3752H63.0423" stroke="#8A92A6" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <p class="text-filter_gray ">Добавить фото</p>
      </div>  
      </div>
      <div class="w-7/12 mt-5 maxmd:w-full maxmd:px-4">
        <p class="font-bold">Описание под видео</p>
        <p class="ml-4 mt-5">Lorem ipsum dolor sit amet consectetur. Amet maecenas venenatis proin lorem etiam nulla tincidunt. Suspendisse phasellus non odio sit pellentesque convallis amet cursus. Sed sit faucibus lacus urna ac mauris pharetra libero. At gravida proin proin erat elementum aliquet dignissim in.</p>
      </div>
    </div>
  </div>
</template>

<script>
import vContentGrid from "../../../../components/admin/adminPages/UI/content/vContentGrid.vue";
import vContentElems from "../../../../components/admin/adminPages/UI/content/vContentElems.vue";
import vContentAbout from '../../../../components/admin/adminPages/UI/content/vContentAbout.vue'
export default {
  components: {
    vContentGrid,
    vContentElems,
    vContentAbout
  },
};
</script>

<style lang="scss" scoped></style>
