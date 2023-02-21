<template>
  <tr class="user-item w-full overflow-scroll "
  >
    <td class="text-center flex justify-center items-center px-2  py-2" >
      <img class="object-cover w-[36px] h-[36px] rounded-full " :src="getImage(item.image)" alt="">
    </td>
    <td class="text-center py-2 px-2">
      {{ item.name }}
    </td>
    <td class="user-item_email text-center py-2 maxmd:px-16 text-l_primary">
      {{ item.email || '-' }}
    </td>
    <td class="user-item_city text-center p-2 ">
      {{ item.education_place || '-' }}
    </td>
    <td class="user-item_education text-center p-2 flex gap-x-5 justify-center">
      <button @click="change_request_lawyer({user_id:item.id, value:1})" class="bg-l_primary px-4 py-2 rounded-2xl text-l_white">Принять</button>
      <button @click="change_request_lawyer({user_id:item.id, value:-1})" class="bg-white_red px-4 py-2 rounded-2xl text-l_white">Отклонить</button>
      <button @click="$emit('showInfo', item)" class="bg-l_primary px-4 py-2 rounded-2xl text-l_white">Подробно</button>
    </td>
  </tr>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "requestItem",
  props: {
    item: Object
  },
  methods: {
    ...mapActions(['change_request_lawyer']),

    getImage(image) {
      if (image)
        return image
      return '/default.png'
    },
  }
}
</script>

<style scoped>

</style>