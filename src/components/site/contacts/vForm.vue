<template>
  <form action="#" class="mt-32">
    <div class="text-l_black uppercase text-5xl">{{ $t("ЗАДАТЬ ВОПРОС ЭКСПЕРТУ") }}</div>
    <div class="h-[1px] mt-1 max-w-[820px] bg-l_black border-b border"></div>
    <div class="flex justify-center gap-y-16 gap-x-8 flex-wrap mt-16">
      <v-input :placeholder="$t('Ф.И.О')" class="max-w-[678px] w-full" />
      <v-input :placeholder="$t('Email')" class="max-w-[678px] w-full" />
      <v-input :placeholder="$t('Телефон')" class="max-w-[678px] w-full" />
      <v-input :placeholder="$t('Ваш вопрос')" class="max-w-[678px] w-full" />
    </div>
    <div class="flex items-center justify-center mt-10" >
      <input type="checkbox" name="" id="agree" class="mr-2" />
      <label for="agree" class="text-l_black_text"
        >{{ $t("Даю согласие на обработку моих персональных данных") }}</label
      >
    </div>
    <div class="flex justify-center mt-10" >
      <v-button>{{ $t("Обратная связь") }}</v-button>
    </div>
  </form>
</template>

<script>
import vInput from "./ui/vInput.vue";
import vButton from "../ui/vButton.vue";
export default {
  components: { vInput, vButton },
};
</script>

<style lang="scss" scoped></style>
