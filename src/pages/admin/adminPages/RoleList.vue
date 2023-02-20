<template>
  <div class="bg-l_white px-12 py-7 rounded-xl">
    <div class="text-[#333437] text-3xl font-medium flex justify-between">
      <p>
        {{ $t('Список ролей') }}
      </p>
      <button
          v-if="can(getCurrentUser, 'role.create')"
          @click="show_add = true"
          class="bg-l_primary rounded-xl border border-[#DBDBDB] text-l_white text-xl py-2 px-4">{{
          $t('Добавить роль')
        }}
      </button>
    </div>
    <div class="overflow-x-auto flex justify-between flex-wrap items-center py-4  text-l_title font-bold text-xl">
      <div class="">
        <p class="">{{ $t("Роли") }}</p>
      </div>
      <div class="flex flex gap-x-6 ">
        <p class="" v-if="can(getCurrentUser, 'role.permission.edit')">{{ $t("Редактирование") }}</p>
        <p class="" v-if="can(getCurrentUser, 'role.delete')">{{ $t("Удаление") }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-y-6">
      <role-item v-for="(item, index) in get_roles" :key="index" :item="item"
                 @changeCurrentRole="(el)=>{ current_role = el; show_info=true; load_permission(item.id)}"
                 @del="(el)=>{ current_role = el; show_del=true;}"
      />
    </div>
    <v-modal v-if="show_info" @show="show_info = !show_info">
      <div class="px-4 py-4 rounded-2xl">
        <div class="text-center font-bold uppercase my-4 text-3xl">{{ current_role.role_name }}</div>
        <p>{{ $t('Права доступа') }}</p>
        <div class="flex flex-col">
          <label v-for="item in get_permissions">
            <input type="checkbox" :checked="Number(item.value) === 1" @change="item.value = $event.target.checked?1:0">
            {{ item.permission_name }}
          </label>
        </div>
        <div class="flex gap-x-4 mt-4">
          <button @click="show_info = false"
                  class="bg-[#F7F8F9] rounded-xl border border-[#DBDBDB] text-[#8A92A6] text-2xl py-2 px-16">
            {{ $t('Отменить') }}
          </button>
          <button @click="update_permission({role_id:current_role.id, permissions:get_permissions});show_info = false"
                  class="bg-l_primary rounded-xl border border-[#DBDBDB] text-l_white text-2xl py-2 px-16">
            {{ $t('Сохранить') }}
          </button>
        </div>
      </div>
    </v-modal>
    <v-modal v-if="show_del" @show="show_del = !show_del">
      <div class="px-4 py-4 rounded-2xl">
        <div class="text-center font-bold uppercase my-4 text-3xl">{{ current_role.role_name }}</div>
        <p class="text-center text-bold text-xl">{{ $t('Вы дейстивительно хотите удалить роль?') }}</p>
        <div class="flex gap-x-4 mt-4">
          <button @click="show_del = false"
                  class="bg-[#F7F8F9] rounded-xl border border-[#DBDBDB] text-[#8A92A6] text-2xl py-2 px-16">
            {{ $t('Отменить') }}
          </button>
          <button @click="del_role({role_id:current_role.id});show_del = false"
                  class="bg-white_red rounded-xl border border-[#DBDBDB] text-l_white text-2xl py-2 px-16">
            {{ $t('Удалить') }}
          </button>
        </div>
      </div>
    </v-modal>
    <v-modal v-if="show_add" @show="show_add = !show_add">
      <div class="px-4 py-4 rounded-2xl">
        <div class="text-center font-bold uppercase my-4 text-3xl">{{ $t('Добавить роль') }}</div>
        <div class="flex flex-col gap-y-4">
          <input required type="text" v-model="name.name_ru"
                 class="w-full px-4 py-2 text-2xl text-l_title outline-none border border-filter_gray rounded-xl"
                 :placeholder="$t('Название роли (на русском)')">
          <input required type="text" v-model="name.name_uz_l"
                 class="w-full px-4 py-2 text-2xl text-l_title outline-none border border-filter_gray rounded-xl"
                 :placeholder="$t('Название роли (на узбекском латиница)')">
          <input required type="text" v-model="name.name_uz_c"
                 class="w-full px-4 py-2 text-2xl text-l_title outline-none border border-filter_gray rounded-xl"
                 :placeholder="$t('Название роли (на узбекском кириллица)')">
        </div>
        <div class="flex gap-x-4 mt-4">
          <button @click="show_add = false"
                  class="bg-[#F7F8F9] rounded-xl border border-[#DBDBDB] text-[#8A92A6] text-2xl py-2 px-16">
            {{ $t('Отменить') }}
          </button>
          <button @click="add_role({...name});show_add = false"
                  class="bg-l_primary rounded-xl border border-[#DBDBDB] text-l_white text-2xl py-2 px-16">
            {{ $t('Добавить') }}
          </button>
        </div>
      </div>
    </v-modal>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import roleItem from "../../../components/admin/RoleItem.vue";
import VModal from "../../../components/admin/vModal.vue";
import {canAccess} from "../../../assets/functions.js";

export default {
  name: "RoleList",
  components: {
    VModal,
    roleItem
  },
  data() {
    return {
      show_add: false,
      name: {
        name_ru: '',
        name_uz_l: '',
        name_uz_c: '',
      }, show_info: false,
      show_del: false,
      current_role: {}
    }
  },

  computed: {
    ...mapGetters(['get_roles', 'get_permissions', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['load_roles', 'load_permission', 'update_permission', 'del_role', 'add_role']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item)
      }
      return false
    }
  },
  mounted() {
    this.load_roles()
    if(this.getCurrentUser.id){
      if(!canAccess(this.getCurrentUser, 'role.read')){
        this.$router.go(-1)
      }
    }
  },
  watch:{
    getCurrentUser(val){
      if(!canAccess(val, 'role.read')){
        this.$router.go(-1)
      }
    }
  }
}

</script>

<style scoped>

</style>