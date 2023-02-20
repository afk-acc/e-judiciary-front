<template>
  <Teleport to="body">
    <div
      class="fixed bottom-0 right-0 left-0 top-0 z-50 w-screen overflow-hidden flex items-center justify-center duration-300 transition-all "
      :class="{ 'opacity-100': isActive, 'opacity-0 -z-10': !isActive }"
    >
      <div
        @click="changeActive"
        class="bg-l_black absolute left-0 top-0 w-screen h-screen opacity-40"
      ></div>
      <Transition name="modal-outer">
        <div
          v-show="isActive"
          class="max-w-[80%] w-full relative z-50 "
        >
          <div class="text-center text-3xl">
            <slot name="title" class=""/>
          </div>
          <Transition name="modal-inner">
            <div v-if="isActive" class="">
              <slot name="content" />
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    changeActive: Function,
  },
};
</script>

<style>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-acitve {
  transition: all 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-innner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-enter-leave-to {
  transform: scale(0.8);
}
</style>