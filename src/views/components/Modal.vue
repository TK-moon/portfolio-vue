<template>
  <teleport to="#teleportRoot" v-if="is_mounted">
    <transition name="modal">
      <div class="modal-backdrop" @click.self="close" v-if="modelValue">
        <div class="modal-contents">
          <button class="close-button" @click="close">
            <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
          </button>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data: function () {
    return {
      is_mounted: false,
    }
  },
  mounted: function () {
    /**
     * Vue3 teleport가 내부적으로 to (target) 엘리먼트가 렌더링 되었는지 확인하지 않음.
     * 엘리먼트가 mounted 되었는지 수동으로 확인하여 teleport.
     */
    this.is_mounted = true
  },
  watch: {
    modelValue(nv: boolean) {
      document.body.style.overflow = nv ? "hidden" : "unset"
    },
  },
  methods: {
    close(): void {
      this.$emit("update:modelValue", false)
    },
  },
})
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 100ms ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0 !important;
}

.modal-backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: var(--modal-backdrop-color);
  backdrop-filter: blur(3px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  color: var(--color-primary-text);
}

.modal-contents {
  position: relative;
  width: 100px;
  height: auto;
  min-width: 320px;
  max-height: 90vh;
  padding: 20px;
  background-color: var(--modal-background-color);
  border-radius: 10px;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 10px;
  color: var(--color-primary-text);
}
</style>
