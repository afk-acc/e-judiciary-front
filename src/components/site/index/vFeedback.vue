<template>
  <div class="flex mt-32 justify-between maxxl:flex-wrap ">
    <div class="w-full px-4 flex items-center py-24 flex-wrap xl:max-w-[676px] maxxl:order-2" >
      <p class="uppercase lg:text-6xl maxlg:text-5xl text-l_black mb-10">
        {{ $t(`Заголовок`) }}
      </p>
      <p class="text-l_black text-2xl mb-16">
        {{
          $t(`Lorem ipsum dolor sit amet consectetur.Libero nunc nisi sit nunc  turpis.Neque consequat habitant proin nullam eget velit sit.Duis quis  nunc convallis commodo nec.Ac lobortis dignissim maecenas sed nibh sapien ornare malesuada sit.Velit sagittis nisl fringilla vulputate semper nulla non platea.  `)      }}
      </p>
      <v-button>{{ $t(`Обратная связь`) }}</v-button>
    </div>
    <div class="xl:max-w-[962px] w-full px-4" >
      <img src="/img/feedback.png" alt="" class="w-full" />
    </div>
  </div>
</template>

<script>
import vButton from "../ui/vButton.vue";
export default {
  components: { vButton },
  props: {
    offset: Number,
  },
};
</script>

<style lang="scss" scoped></style>
