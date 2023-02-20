<template>
  <div class="overflow-y-hidden">
    <v-chat-content/>
  </div>
</template>

<script>
  import vChatContent from '../../../components/admin/adminPages/UI/chatUI/vChatContent.vue';
  export default {
    components: {
      vChatContent
    }
  }
</script>

<style lang="scss" scoped>
  * {
  scrollbar-width: thin;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: var(--primary);
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background-color: #3A57E8;
  border-radius: 2px;
}
</style>