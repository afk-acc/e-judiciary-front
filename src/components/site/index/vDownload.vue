<template>
  <div class="back py-10 mt-28">
    <div class="max-w-container mx-auto flex justify-between px-4 maxlg:flex-wrap" >
      <div class="lg:max-w-2xl w-full py-16 maxlg:order-2" >
        <p class="font-bold text-l_black lg:text-5xl maxlg:text-3xl uppercase" >
          {{ $t('СКАЧИВАЙТЕ НАШЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ') }}
        </p>
        <p class="text-l_black lg:text-3xl maxlg:text-2xl my-10" >
          {{
            $t(`Lorem ipsum dolor sit amet consectetur.Rhoncus egestas enim mattis feugiat rhoncus.Orci sed ut non arcu ipsum sociis risus ut enim.Tellus odio nisl ante pharetra.`)
          }}
        </p>
        <div class="flex justify-between" >
          <div class="w-full cursor-pointer">
            <img src="/img/google_play.svg" alt="" />
          </div>
          <div class="w-full cursor-pointer">
            <img src="/img/app_store.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full lg:max-w-[562px] maxlg:flex justify-center" >
        <img src="/img/phones.png" alt="" class="" />
      </div>
    </div>
  </div>
</template>

<script>
export default { props: { offset: Number } };
</script>

<style scoped>
.back {
  background: radial-gradient(
    71.98% 384.24% at 74.45% 54.63%,
    #f8f8ff 0%,
    #f9f9ff 100%
  );
}
</style>
