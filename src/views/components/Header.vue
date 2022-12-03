<template>
  <header>
    <nav>
      <router-link id="logo" :to="{ hash: '#main' }">TK</router-link>
      <ol>
        <li><router-link :to="{ hash: '#about' }">About</router-link></li>
        <li><router-link :to="{ hash: '#career' }">Career</router-link></li>
        <li><router-link :to="{ hash: '#projects' }">Projects</router-link></li>
        <li><router-link :to="{ hash: '#contacts' }">Contacts</router-link></li>
        <li>
          <button @click="modalVisible = true" aria-label="Theme modal button" class="modal-button">
            <font-awesome-icon :icon="['fas', 'cog']" size="lg" />
          </button>
        </li>
      </ol>
    </nav>
  </header>
  <Modal v-model="modalVisible">
    <ThemeModalView />
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Modal from "@/views/components/Modal.vue"
import ThemeModalView from "@/views/components/ThemeModalView.vue"

export default defineComponent({
  components: {
    Modal,
    ThemeModalView,
  },
  data: function () {
    return {
      modalVisible: false,
    }
  },
})
</script>

<style lang="scss" scoped>
a,
button {
  appearance: none;
  text-decoration: none;
  color: var(--color-primary-text);
}

header {
  position: sticky;
  top: 0;
  width: 100%;
  height: $header-height;
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 0 20px;
  backdrop-filter: blur(10px);
  background-color: var(--header-background-color);
  z-index: 800;
  @include mobile {
    height: 60px;
  }
}

#logo {
  font-size: 32px;
  font-weight: 900;
}

nav {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ol {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    gap: 25px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    @include mobile {
      font-size: 14px;
      gap: 10px;
    }
    li {
      position: relative;
      color: var(--color-primary-text);
      :is(a, button) {
        display: flex;
        place-items: center;
        height: 100%;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-primary-text);
        transition: transform ease-in-out 100ms;
        transform: scaleX(0);
      }
      &:hover:before {
        transform: scaleX(1);
      }
    }
  }
}

.modal-button {
  padding: 0;
}
</style>
