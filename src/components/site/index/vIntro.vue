<template>
  <div class="flex justify-between my-16 maxlg:flex-wrap">
    <div class="flex w-full flex-wrap justify-end lg:pr-8 maxlg:order-2  ">
      <div
        class="lg:text-7xl maxlg:text-4xl maxlg:mt-4 maxlg:text-center text-l_black lg:max-w-[745px] lg:pr-16 flex items-center uppercase"
      >
        {{ $t(`МЫ ПОМОЖЕМ ВАМ ПО ЮРИДИЧЕСКИМ ВОПРОСАМ`) }}
      </div>
      <div class="h-[1px] bg-l_black w-full lg:max-w-[745px] maxlg:my-4"></div>
      <div class="lg:text-3xl maxlg:text-2xl lg:max-w-[745px] lg:pr-16 w-full my-4">
        {{
          $t(
            `Lorem ipsum dolor sit amet consectetur.Faucibus felis aliquet amet  posuere vulputate consectetur volutpat mauris volutpat.Montes in cursus arcu consectetur lacus enim.`
          )
        }}
      </div>
      <div class="w-full lg:max-w-[745px] maxlg:mt-4">
        <v-button>{{ $t(`Обратная связь`) }}</v-button>
      </div>
    </div>
    <div class="lg:max-w-[678px] w-full relative -z-10">
      <div class="">
        <img src="/img/intro.png" alt="" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import vButton from "../ui/vButton.vue";

export default {
  methods: {},
  components: { vButton },
};
</script>

<style lang="scss" scoped></style>
