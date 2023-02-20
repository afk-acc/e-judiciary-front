<template>
  <div class="w-full flex flex-col justify-between h-full">

    <div class="w-full flex flex-col justify-between" v-if="Object.entries(report).length > 0">
      <div class="my-5 ">
        <v-complaints-user-content :report="report" @show2="$emit('show')"></v-complaints-user-content>
      </div>
      <div>

      </div>
      <div class="flex  items-center">
        <div class="flex flex-col-reverse w-full">
          <QuillEditor v-model:content="message.data" contentType="html" id="rich" class="snow" theme="snow"
                       :toolbar="['bold', 'italic', 'link',{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'color': [] }, { 'background': [] }, { 'align': [] }, 'clean']"
                       placeholder="Введите сообщение...">
          </QuillEditor>
        </div>

      </div>
      <div class="flex justify-center items-center mt-4">

        <button class="bg-l_primary h-[50px]  px-16 rounded-xl text-l_white active:scale-95 transition-all"
                @click="showData">Отправить
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import {QuillEditor} from '@vueup/vue-quill';
import vComplaintsUserContent from './users-content/vComplaintsUserContent.vue';
import vButton from '../../../../site/ui/vButton.vue';
import {mapActions} from "vuex";

export default {
  data() {
    return {
      message: {
        data: '',
      },
    }
  },
  components: {QuillEditor, vComplaintsUserContent, vButton},
  props: {
    report: Object
  },
  methods: {
    ...mapActions(['send_response_report']),
    showData() {
      this.send_response_report({id: this.report.id, data: this.message.data})
    }
  }
}
</script>

<style lang="scss">
.ql-toolbar {
  border: 0px !important;
}

.snow {
  border: 0px !important;
  border-bottom: 1px solid rgba($color: #000000, $alpha: .1) !important;
}
</style>