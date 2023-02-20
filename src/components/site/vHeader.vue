<template>
  <div class="w-full top-0 z-50 fixed" >
    <div class="bg-l_primary">
      <div class="max-w-container flex justify-between mx-auto py-8 px-4 relative">
        <div class="font-gilroy text-xl h-10 text-l_white flex items-center justify-center relative z-50">
          <router-link class="absolute left-0" :to="{ name: 'index' }">
            <svg class="w-[150px] maxlg:w-[100px]" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M114.307 377.017C120.696 377.017 126.4 374.419 129.975 369.987L126.78 366.701C123.89 369.834 119.631 371.515 114.992 371.515C107.386 371.515 101.073 367.083 100.085 358.754H132.637C134.234 343.013 123.738 335.754 113.699 335.754C103.735 335.754 94 343.013 94 356.385C94 369.605 103.659 377.017 114.307 377.017ZM100.085 353.864C101.073 345.535 107.234 341.332 113.775 341.332C120.392 341.332 126.552 345.688 127.008 353.864H100.085Z" fill="white"/>
              <path d="M128.613 391H130.515C140.478 391 146.487 387.332 146.487 375.336V336.518H140.098V374.877C140.098 383.206 136.219 385.04 130.363 385.04H128.613V391ZM140.098 327.96H146.487V322H140.098V327.96Z" fill="white"/>
              <path d="M190.531 336.518H184.142V358.983C184.142 367.007 179.199 371.133 172.886 371.133C166.573 371.133 161.858 367.007 161.858 358.983V336.518H155.469V359.9C155.469 371.821 162.618 377.017 170.908 377.017C177.753 377.017 182.089 373.578 184.142 369.757V376.252H190.531V336.518Z" fill="white"/>
              <path d="M238.454 376.252V322H232.065V344.007H231.837C229.936 339.804 224.384 335.754 217.006 335.754C207.423 335.754 197.612 342.784 197.612 356.385C197.612 369.987 207.423 377.017 217.006 377.017C224.384 377.017 229.936 372.967 231.837 368.764H232.065V376.252H238.454ZM204.001 356.385C204.001 346.528 211.074 341.638 218.071 341.638C225.22 341.638 232.294 346.605 232.294 356.385C232.294 366.166 225.22 371.133 218.071 371.133C211.074 371.133 204.001 366.243 204.001 356.385Z" fill="white"/>
              <path d="M247.42 376.252H253.809V336.518H247.42V376.252ZM247.42 327.96H253.809V322H247.42V327.96Z" fill="white"/>
              <path d="M281.428 377.017C288.273 377.017 294.738 373.654 298.313 367.236L293.445 364.332C290.935 368.611 286.448 371.133 281.504 371.133C274.355 371.133 267.282 365.784 267.282 356.385C267.282 346.987 274.355 341.638 281.504 341.638C286.448 341.638 290.935 344.159 293.445 348.439L298.313 345.535C294.738 339.04 288.273 335.754 281.428 335.754C271.161 335.754 260.893 343.09 260.893 356.385C260.893 369.681 271.161 377.017 281.428 377.017Z" fill="white"/>
              <path d="M322.252 377.017C329.63 377.017 335.182 372.967 337.083 368.764H337.311V376.252H343.7V336.518H337.311V344.007H337.083C335.182 339.804 329.63 335.754 322.252 335.754C312.669 335.754 302.858 342.784 302.858 356.385C302.858 369.987 312.669 377.017 322.252 377.017ZM309.247 356.385C309.247 346.528 316.32 341.638 323.317 341.638C330.466 341.638 337.54 346.605 337.54 356.385C337.54 366.166 330.466 371.133 323.317 371.133C316.32 371.133 309.247 366.243 309.247 356.385Z" fill="white"/>
              <path d="M352.666 376.252H359.055V356.309C359.055 347.445 364.455 341.867 371.832 341.867C372.745 341.867 373.353 341.944 374.038 342.096V336.06C373.429 335.831 372.669 335.754 371.756 335.754C364.455 335.754 360.5 340.645 359.055 346.375V336.518H352.666V376.252Z" fill="white"/>
              <path d="M388.566 390.771H394.879L401.192 376.252L418 336.518H411.383L398.225 368.306L385.068 336.518H378.451L395.107 375.87L388.566 390.771Z" fill="white"/>
              <path d="M254.892 208.291C255.609 208.703 256.492 208.705 257.211 208.297L327.518 168.409C329.07 167.528 331 168.642 331 170.419L330.932 206.305C330.932 207.124 330.497 207.881 329.788 208.297L256.105 251.802C255.383 252.227 254.487 252.232 253.76 251.816L226.732 235.666C226.009 235.253 225.564 234.488 225.564 233.66V196.774C225.564 194.992 227.505 193.879 229.057 194.771L254.892 208.291Z" fill="white"/>
              <path d="M223.141 180.297C222.417 180.712 221.524 180.71 220.802 180.29L188.944 161.774C187.391 160.871 187.411 158.633 188.98 157.758L254.357 121.296C255.065 120.901 255.928 120.901 256.636 121.296L322.037 157.77C323.611 158.648 323.625 160.895 322.062 161.792L290.01 180.203C289.291 180.616 288.405 180.617 287.685 180.206L256.576 162.44C255.856 162.029 254.971 162.03 254.252 162.442L223.141 180.297Z" fill="white"/>
              <path d="M216.603 187.744C217.323 188.157 217.767 188.921 217.767 189.748V239.439C217.767 240.256 218.201 241.013 218.908 241.43L254.317 262.287C255.045 262.716 255.949 262.718 256.68 262.294L327.496 221.665C329.048 220.762 331 221.875 331 223.662V260.471C331 261.317 330.535 262.096 329.788 262.502L256.613 301.717C255.917 302.094 255.076 302.094 254.38 301.717L182.212 262.526C181.465 262.12 181 261.341 181 260.495V171.316C181 169.535 182.94 168.421 184.492 169.312L216.603 187.744Z" fill="white"/>
            </svg>

          </router-link>
        </div>
        <nav class="flex items-center maxxl:pl-20">
          <ul
              class="flex justify-between maxlg:h-screen maxlg:pb-[110px] duration-300 transition-all items-center maxlg:bg-l_primary maxlg:w-full maxlg:flex-col left-0 "
              :class="{
              'top-[90px] max-h-screen maxlg:fixed': open,
              '-top-full maxlg:-translate-y-full maxlg:absolute': !open,
            }"
          >
            <li
                class="text-l_white text-sm font-gilroy lg:mr-10 cursor-pointer"
            >
              <router-link :to="{ name: 'about-company' }">
                {{ $t('О компании') }}
              </router-link>
            </li>
            <li
                class="text-l_white text-sm font-gilroy lg:mr-10 cursor-pointer"
            >
              <router-link :to="{name: 'teams'}">
                {{ $t('Команда') }}
              </router-link>
            </li>
            <li
                class="text-l_white text-sm font-gilroy lg:mr-10 cursor-pointer"
            >
              <router-link :to="{ name: 'services' }">

                {{ $t('Услуги') }}

              </router-link>
            </li>

            <li
                class="text-l_white text-sm font-gilroy lg:mr-10 cursor-pointer"
            >
              {{ $t('Новости') }}

            </li>
            <li
                class="text-l_white text-sm font-gilroy lg:mr-10 cursor-pointer"
            >
              <router-link :to="{name: 'faq'}">
                {{ $t('FAQ') }}
              </router-link>
            </li>
            <li class="text-l_white text-sm font-gilroy cursor-pointer">
              <a href="contacts">
                {{ $t('Контакты') }}
                </a>
            </li>
            <li class="hidden maxlg:block bg-l_white text-l_title text-xs font-gilroy py-4 px-9 cursor-pointer rounded-md ">
              <router-link :to="{name: 'sign-in'}">
                {{ $t('Вход') }}
                </router-link>
            </li>
            <select
                class="lg:hidden w-[50px] outline-none mr-4 text-l_black text-sm font-gilroy px-9 cursor-pointer rounded-md font-bold"
                v-model="lang"
            >
              <option value="uz_l">Uz</option>
              <option value="uz_c">Уз (кирилица)</option>
              <option value="ru">
                Ру
              </option>
            </select>
           
          </ul>
        </nav>
        <div class="flex maxlg:hidden">
          <select
              class=" outline-none text-center mr-4 text-l_black  font-gilroy px-2 cursor-pointer rounded-md font-bold"
              v-model="lang"
          >
            <option value="uz_l">Uz</option>
            <option value="uz_c">Уз(к)</option>
            <option value="ru">
              Ру
            </option>
          </select>
          <router-link :to="{name: 'sign-in'}" class="bg-l_white text-l_title text-xs font-gilroy py-4 px-9 cursor-pointer rounded-md">
            <div>
              {{ $t('Вход') }}
            </div>
          </router-link>
        </div>
        <div
            @click="open = !open"
            class="cursor-pointer block w-5 absolute right-6 top-1/2 transform -translate-y-1/2 lg:hidden">
          <span
              aria-hidden="true"
              class="block absolute h-0.5 w-6 bg-l_white transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
          ></span>
          <span
              aria-hidden="true"
              class="block absolute h-0.5 w-6 bg-l_white transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': open }"
          ></span>
          <span
              aria-hidden="true"
              class="block absolute h-0.5 w-6 bg-l_white transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  data() {
    return {
      open: false,
      lang: ''
    };
  },
  setup() {
    const {locale, t} = useI18n({useScope: "global"});
    localStorage.setItem("locale", "" + locale.value);
    return {
      switchLanguage: () => {

        locale.value = localStorage.getItem('locale')
      },
    };
  },
  mounted() {
    this.lang = localStorage.getItem('locale', 'ru')
  },
  watch: {
    lang(val) {
      localStorage.setItem('locale', val)
      this.switchLanguage()
    }
  }
};
</script>

<style lang="scss" scoped></style>
