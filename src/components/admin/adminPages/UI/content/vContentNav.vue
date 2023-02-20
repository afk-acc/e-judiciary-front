<template>
  <nav class="flex flex-wrap maxlg:justify-center items-center bg-l_white p-8 justify-between">
    <h2 class="text-xl ">Изменение контентной части</h2>
    <ul class="flex maxlg:flex-wrap ">
      <nav-content-elems route="content-home">
        <template v-slot:ContentText>Главная</template>
      </nav-content-elems>
      <nav-content-elems >
        <template v-slot:ContentText>О компании</template>
      </nav-content-elems>
      <nav-content-elems >
        <template v-slot:ContentText>Команда</template>
      </nav-content-elems>
      <nav-content-elems >
        <template v-slot:ContentText>Услуги</template>
      </nav-content-elems>
      <nav-content-elems >
        <template v-slot:ContentText>FAQ</template>
      </nav-content-elems>
      <nav-content-elems >
        <template v-slot:ContentText>Контакты</template>
      </nav-content-elems>
    </ul>
  </nav>
 
</template>

<script>
import navContentElems from '../../../nav/navContent/navContentElems.vue';
export default {
 components: {
  navContentElems
 }
};
</script>

<style lang="scss" scoped></style>
