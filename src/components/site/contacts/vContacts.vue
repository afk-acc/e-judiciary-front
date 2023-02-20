<template>
  <div class="flex flex-wrap gap-5 " >
    <a class="flex" href="tel:+998 91 000 36 96">
      <div class="mr-1.5 flex items-center justify-center">
        <img src="/img/contact_phone.svg" alt="" class="w-full" />
      </div>
      <div class="">
        <div class="">{{ $t("Есть вопросы ?") }}</div>
        <div class="text-2xl text-l_primary text-bold">+998 91 000 36 96</div>
      </div>
    </a>
    <a class="flex" href="gmail:unreal@outlook.com">
      <div class="mr-1.5 flex items-center justify-center">
        <img src="/img/contact_email.svg" alt="" class="w-full" />
      </div>
      <div class="">
        <div class="">{{ $t("Есть вопросы ?") }}</div>
        <div class="text-2xl text-l_primary text-bold">unreal@outlook.com</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
