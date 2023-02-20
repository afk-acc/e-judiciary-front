<template>
  <tr class="user-item w-full overflow-scroll"

  >
    <td class="user-item_name flex maxlg:items-center p-4 maxsm:p-6  items-center gap-x-2">
      <img class="object-cover w-[36px] h-[36px] rounded-full " :src="getImage(item.image)" alt="">
      <p>{{ item.name }}</p>
    </td>
    <td class="user-item_email text-center p-4 maxsm:p-6 ">
      <p class="text-l_primary">{{ item.email }}</p>
    </td>
    <td class="user-item_city text-center p-4 maxsm:p-6">
      <p class="">Ташкент</p>
    </td>
    <td class="user-item_education text-center p-4 maxsm:p-6">
      <p class="">{{ item.education_place }}</p>
    </td>
    <td class="user-item_roles text-center maxsm:p-6 " v-if="item.role_name === 'admin'">
      <p class="text-roles_cyan bg-roles_cyanBg">{{ item.role_locale }}</p>
    </td>
    <td class="user-item_roles text-center maxsm:p-6 " v-else-if="item.role_name === 'lawyer'">
      <p class="text-roles_orange bg-roles_orangeBg">{{ item.role_locale }}</p>
    </td>
    <td class="user-item_roles text-center maxsm:p-6 " v-else-if="item.role_name === 'user'">
      <p class="text-filter_gray">{{ item.role_locale }}</p>
    </td>
    <td class=" user-item_roles text-center maxsm:p-6 " v-else-if="item.role_name === 'moderator'">
      <p class="text-roles_purple bg-roles_purpleBg">{{ item.role_locale }}</p>
    </td>
    <td class="user-item_editing flex  maxsm:p-6 items-center justify-center cursor-pointer">
      <slot></slot>
    </td>
  </tr>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      isActive: false
    }
  },
  props: {item: Object},
  computed:{...mapGetters(['get_base_url'])},
  methods: {
    getImage(image) {
      if (image === null)
        return '/default.png'
      return image
    }
  }
}
</script>

<style lang="scss" scoped>

</style>