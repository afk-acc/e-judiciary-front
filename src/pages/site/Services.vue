<template>
  <div>
    <div class="max-w-container mx-auto px-4">
      <div
          class="uppercase md:text-8xl maxmd:text-4xl text-l_black mt-28 relative -z-10"
      >
        {{ $t('Услуги') }}
      </div>
      <div class="h-[1px] mt-1 w-full bg-l_black"></div>
      <div class="flex flex-wrap gap-4 mt-32 maxxl:justify-between maxmd:justify-center relative z-10 justify-center">
        <service-item v-for="(item, index) in list" :item="item" :key="index"/>
      </div>
      <div class="">
        <div class="flex flex-wrap maxmd:flex-col maxlg:items-center">
          <p class=" mt-10 w-full text-center font-bold text-2xl text-l_black_text my-4">
            {{ $t('Создание нового обращения') }}</p>
          <div class="w-[35%] maxf:w-full">
            <appeal-data @changeShow="show=true" :appeal="appeal" :appeal_type_list="get_appeal_type"/>
            <div class="" v-if="show">
              <v-select :label="$t('Выберите документ')" v-model:model-value="document.id" :list="get_document_list"
                        @changeShow="loadFields"/>
            </div>
          </div>
          <div class="w-[60%] ml-5 maxf:w-full maxf:ml-0" v-if="get_fields.name">
            <p class=" text-center font-bold text-2xl text-l_black_text my-4 w-full">{{ get_fields.name }}</p>
            <div class="flex flex-col gap-y-4">
              <form @submit.prevent="showPreview">

                <v-input :list="item.options" v-model:model-value="doc_fields[item.key]"
                         :is_required="Number(item.is_required)===1" :label="item.label" :type="item.type"
                         v-for="item in get_fields.doc_fields"/>
                <div class="w-full flex justify-center my-10 flex-col  items-center">
                  <v-button type="submit" @click="preview=true" class="w-[200px] mt-10">{{ $t("Просмотр") }}</v-button>
                  <v-button type="submit" @click="preview=false" class="w-[200px] mt-10">{{
                      $t("Создать обращение")
                    }}
                  </v-button>

                </div>

              </form>

            </div>
          </div>

          <v-modal class="" v-if="show_preview" @show="show_preview = !show_preview">
            <div class="" id="show_html">

            </div>
          </v-modal>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ServiceItem from "../../components/site/services/ui/ServiceItem.vue";
import AppealData from "../../components/admin/adminPages/UI/appealUI/AppealData.vue";
import VSelect from "../../components/admin/vSelect.vue";
import VInput from "../../components/admin/constructor/vInput.vue";
import VButton from "../../components/admin/vButton.vue";
import VModal from "../../components/admin/vModal.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components: {VModal, VButton, VInput, VSelect, AppealData, ServiceItem},
  mounted() {
    this.load_appeal_type_list({})
  },
  data() {
    return {
      preview: '',
      appeal: {
        title: "",
        description: "",
        appeal_type_id: "",
      },
      document: {
        id: '',
        name: ''
      },
      doc_fields: {},
      show: false,
      show_preview: false,
    };
  },
  methods: {
    ...mapActions(['load_appeal_type_list', 'load_document_list', 'load_fields', 'load_preview', 'add_new_appeal']),
    ...mapMutations(['update_is_created', 'update_fields','update_send_appeal']),
    loadFields() {
      this.load_fields({id: this.document.id})
    },
    showPreview() {
      if (this.preview) {
        this.show_preview = true
        this.load_preview({document: this.document, fields: this.doc_fields})
      } else {
        if (localStorage.getItem('token')) {
          this.add_new_appeal({
            appeal: this.appeal, doc: {
              doc: this.document.name,
              fields: this.doc_fields
            }
          })
          this.update_fields([])
        }else{
          this.$router.push({name:'sign-in'})
          this.update_send_appeal({
            appeal: this.appeal, doc: {
              doc: this.document.name,
              fields: this.doc_fields
            }
          });
        }

      }

    },
    show_html(text) {
      if (text) {
        document.querySelector('#show_html').innerHTML = text
      }
    }
  },
  watch: {
    appeal: {
      handler(old, val) {
        if (val.appeal_type_id) {
          this.load_document_list({appeal_type_id: val.appeal_type_id})
        }
      },
      deep: true
    },
    get_fields(val) {
      this.document.name = val.doc_name
    },
    get_preview(val) {
      this.show_html(val)
    },
    show_preview(val) {
      if (val === true && this.get_preview !== null && this.get_preview !== undefined) {
        this.show_html(this.get_preview)
      }
    },

  },
  computed: {
    ...mapGetters(['get_appeal_type', 'get_document_list', 'get_fields', 'get_preview', 'get_is_created']),
    list() {
      return [
        {
          title: this.$t("Налоги"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решенияasdasd..."),
        },

        {
          title: this.$t("Банкротство"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решенasdasdия..."),
        },
        {
          title: this.$t("Трудовое право"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решениasdasdя..."),
        },
        {
          title: this.$t("Недвижимость/Строительство"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения.asdasd.."),
        },
        {
          title: this.$t("Услуги частным клиентам"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Трудовое право"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Трудовое право"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Недвижимость/Строительство"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Услуги частным клиентам"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Международные судебные разбирате-льства и арбитраж"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
        {
          title: this.$t("Трудовое право"),
          text: this.$t("Консалтинг, урегулирование споров, цифровые решения..."),
        },
      ];
    }
  }
};
</script>

<style lang="scss" scoped></style>
