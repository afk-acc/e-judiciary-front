<template>
  <div class="users-items w-full">
  
  
    <div class="user-item flex items-center justify-between mt-10 w-full maxlg:flex-wrap maxlg:border-[1px] border-filter_gray">
      <div class="user-item_name w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center flex maxlg:items-center mx-auto p-2  items-center">
        <img class="pr-4" src="/img/user-one.png" alt="">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">{{ $t("Имя") }}:</p>
          <v-users-text ><template v-slot:UserName>Amanda</template></v-users-text>
        </div>
      </div>
      <div class="user-item_email w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-auto  p-2 maxlg:px-2">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">E-mail:</p>
          <v-users-text v-users-text ><template v-slot:UserEmail>Amanda@gmail.com</template></v-users-text>
        </div>
      </div>
      <div class="user-item_city w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center text-center mx-auto  p-2 maxlg:px-2">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">Город:</p>
          <v-users-text ><template v-slot:UserCity>Ташкент</template></v-users-text>
        </div>
      </div>
     <div class="user-item_education w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-auto  p-2 maxlg:px-2">
      <div class="maxlg:flex maxlg:flex-col">
        <p class="hidden maxlg:block">Образование:</p>
        <v-users-text ><template v-slot:UserEducation>Юридическое</template></v-users-text>
      </div>
     </div>
     <div class="user-item_roles w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-autor p-2  maxlg:px-2">
      <div class="maxlg:flex maxlg:flex-col">
        <p class="hidden maxlg:block">Роль:</p>
        <v-users-elems><template v-slot:RoleAdvocate>Адвокат</template></v-users-elems>
      </div>
     </div>
      <div class="user-item_editing  flex p-2 mx-auto items-center">
        <v-users-text>
        <template v-slot:UserIcon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.79006 15.2699L8.52006 11.8599C8.62634 11.3861 8.86572 10.9524 9.21006 10.6099L15.8801 3.99993C16.5564 3.3109 17.4748 2.91271 18.4401 2.88993C19.1681 2.8795 19.8701 3.1603 20.3901 3.66993C21.5262 5.01239 21.3796 7.01715 20.0601 8.17993L13.3901 14.8499C13.0476 15.1943 12.6139 15.4337 12.1401 15.5399L8.73006 16.2699H8.54006C8.29077 16.2795 8.05267 16.1661 7.90298 15.9665C7.7533 15.7669 7.71109 15.5066 7.79006 15.2699ZM10.2701 11.6799C10.1299 11.8157 10.0326 11.9895 9.99006 12.1799L9.50006 14.5099L11.8301 14.0099C12.0205 13.9674 12.1943 13.87 12.3301 13.7299L19.0001 7.05993C19.7307 6.47495 19.8757 5.42041 19.3301 4.65993C19.0911 4.43164 18.7704 4.3091 18.4401 4.31993C17.8706 4.34279 17.3325 4.58673 16.9401 4.99993L10.2701 11.6799Z" fill="#3A57E8"/>
          <path d="M19.9101 10.9299C19.4981 10.9353 19.1655 11.2679 19.1601 11.6799V17.3699C19.1735 18.1742 18.8633 18.9501 18.2993 19.5236C17.7352 20.0971 16.9645 20.42 16.1601 20.4199H6.63008C4.96745 20.3873 3.63519 19.0328 3.63008 17.3699V7.87988C3.65738 6.21497 5.01494 4.87966 6.68008 4.87988H12.3701C12.7843 4.87988 13.1201 4.5441 13.1201 4.12988C13.1201 3.71567 12.7843 3.37988 12.3701 3.37988H6.63008C4.13658 3.37973 2.10748 5.38654 2.08008 7.87988V17.3699C2.08008 19.8828 4.11718 21.9199 6.63008 21.9199H16.1201C18.6291 21.9144 20.6601 19.8789 20.6601 17.3699V11.6799C20.6547 11.2679 20.322 10.9353 19.9101 10.9299Z" fill="#3A57E8"/>
        </svg>
        </template>
        </v-users-text>
        <v-users-text><template v-slot:UserEditing>Изменить</template></v-users-text>
      </div>
    </div>
    
    <div class="user-item flex items-center justify-between mt-10 w-full maxlg:flex-wrap maxlg:border-[1px] border-filter_gray">
      <div class="user-item_name w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center flex maxlg:items-center mx-auto p-2  items-center">
        <img class="pr-4" src="/img/user-one.png" alt="">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">Имя:</p>
          <v-users-text ><template v-slot:UserName>Amanda</template></v-users-text>
        </div>
      </div>
      <div class="user-item_email w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-auto  p-2 maxlg:px-2">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">E-mail:</p>
          <v-users-text v-users-text ><template v-slot:UserEmail>Amanda@gmail.com</template></v-users-text>
        </div>
      </div>
      <div class="w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center text-center mx-auto  p-2 maxlg:px-2">
        <div class="maxlg:flex maxlg:flex-col">
          <p class="hidden maxlg:block">Город:</p>
          <v-users-text ><template v-slot:UserCity>Ташкент</template></v-users-text>
        </div>
      </div>
     <div class="user-item_education w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-auto  p-2 maxlg:px-2">
      <div class="maxlg:flex maxlg:flex-col">
        <p class="hidden maxlg:block">Образование:</p>
        <v-users-text ><template v-slot:UserEducation>Юридическое</template></v-users-text>
      </div>
     </div>
     <div class="user-item_roles w-[30%] maxsm:w-7/12 maxsm:mx-auto maxsm:justify-center  text-center mx-autor p-2  maxlg:px-2">
      <div class="maxlg:flex maxlg:flex-col">
        <p class="hidden maxlg:block">Роль:</p>
        <v-users-elems><template v-slot:RoleAdmin>Администратор</template></v-users-elems>
      </div>
     </div>
      <div class="user-item_editing  flex p-2 mx-auto items-center">
        <v-users-text>
        <template v-slot:UserIcon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.79006 15.2699L8.52006 11.8599C8.62634 11.3861 8.86572 10.9524 9.21006 10.6099L15.8801 3.99993C16.5564 3.3109 17.4748 2.91271 18.4401 2.88993C19.1681 2.8795 19.8701 3.1603 20.3901 3.66993C21.5262 5.01239 21.3796 7.01715 20.0601 8.17993L13.3901 14.8499C13.0476 15.1943 12.6139 15.4337 12.1401 15.5399L8.73006 16.2699H8.54006C8.29077 16.2795 8.05267 16.1661 7.90298 15.9665C7.7533 15.7669 7.71109 15.5066 7.79006 15.2699ZM10.2701 11.6799C10.1299 11.8157 10.0326 11.9895 9.99006 12.1799L9.50006 14.5099L11.8301 14.0099C12.0205 13.9674 12.1943 13.87 12.3301 13.7299L19.0001 7.05993C19.7307 6.47495 19.8757 5.42041 19.3301 4.65993C19.0911 4.43164 18.7704 4.3091 18.4401 4.31993C17.8706 4.34279 17.3325 4.58673 16.9401 4.99993L10.2701 11.6799Z" fill="#3A57E8"/>
          <path d="M19.9101 10.9299C19.4981 10.9353 19.1655 11.2679 19.1601 11.6799V17.3699C19.1735 18.1742 18.8633 18.9501 18.2993 19.5236C17.7352 20.0971 16.9645 20.42 16.1601 20.4199H6.63008C4.96745 20.3873 3.63519 19.0328 3.63008 17.3699V7.87988C3.65738 6.21497 5.01494 4.87966 6.68008 4.87988H12.3701C12.7843 4.87988 13.1201 4.5441 13.1201 4.12988C13.1201 3.71567 12.7843 3.37988 12.3701 3.37988H6.63008C4.13658 3.37973 2.10748 5.38654 2.08008 7.87988V17.3699C2.08008 19.8828 4.11718 21.9199 6.63008 21.9199H16.1201C18.6291 21.9144 20.6601 19.8789 20.6601 17.3699V11.6799C20.6547 11.2679 20.322 10.9353 19.9101 10.9299Z" fill="#3A57E8"/>
        </svg>
        </template>
        </v-users-text>
        <v-users-text><template v-slot:UserEditing>Изменить</template></v-users-text>
      </div>
    </div>
  </div>
</template>

<script>
  import vUsersElems from './vUsersElems.vue';
  import vUsersText from './vUsersText.vue';
  
  export default {
    components: {
      vUsersElems,
      vUsersText
    }
  }
</script>

<style lang="scss" scoped>

</style>