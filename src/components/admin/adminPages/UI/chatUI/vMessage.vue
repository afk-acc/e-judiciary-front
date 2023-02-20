<template>
  <div class="flex flex-wrap">
    <div class="flex flex-wrap w-full" :class="{'justify-end ':from_me , }">
      <div v-if="Number(message.message_type_id)===1" class="py-4 px-5 my-2 rounded-xl"
           :class="{'bg-l_primary text-l_white':from_me,'bg-[#E9EFFF]':!from_me }">
        <span id="data" v-html="message.data">
        </span>

      </div>
      <div class="w-7/12 cursor-pointer" @click="show=true" v-else>
        <img :src="message.data" class="w-full" alt="">
      </div>
      <div class="w-full flex text-filter_gray text-sm" :class="{'justify-end ':from_me , }">
        {{ getTime(message.date) }}
      </div>
    </div>
    <div class="modal" v-if="show" @click.stop="show=false">
      <div @click.stop class="modal__content">
        <button @click="show=false" class="modal__icon btn__reset">
          <span class="modal-icon__span"></span>
        </button>
        <img :src="message.data" class="w-full" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "vMessage",
  data() {
    return {
      show: false
    }
  },
  props: {
    message: Object,
    from_me: Boolean,
    dates: Array
  },
  computed: {
    ...mapGetters(['get_base_url'])
  },
  methods: {
    getTime(time) {
      let options = {day: 'numeric', month: "short", hour: 'numeric', minute: 'numeric'};
      let d = new Date(time);
      return d.toLocaleString("ru", options)
    },

  }
}
</script>

<style scoped>

.modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal__content {
  position: relative;
  max-width: 90vw;
  width: 100%;
  max-height: 90vh;
  height: 100%;
  margin: auto;
  padding: 30px;
  overflow: auto;
  border-radius: 4px;
  background: #FFFFFF;
  z-index: 1001;
}

.modal__icon {
  position: relative;
  display: block;
  margin-left: auto;
  --icon-width: 30px;
  --icon-height: 20px;
  --icon-line-height: 2px;
  width: var(--icon-width);
  height: var(--icon-height);
  color: #2A254B;
  transition: 0.3s ease-in-out;
  z-index: 101;
}

.modal__icon:hover {
  --icon-width: 35px;
}

.modal__icon::before,
.modal__icon::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: var(--icon-line-height);
  background-color: currentColor;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}

.modal__icon::before {
  transform: rotate(45deg);
  top: 50%;
}

.modal__icon::after {
  transform: rotate(-45deg);
  top: 50%;
}

.modal-icon__span {
  position: absolute;
  right: 0;
  top: 50%;
  transform: scale(0);
  width: 100%;
  height: var(--icon-line-height);
  background-color: currentColor;
  transition: transform 0.3s ease-in-out;
}

.modal__img {
  display: block;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 700px) {
  .modal__content {
    padding: 30px;
  }
}
</style>