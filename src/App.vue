<template>
  <div id="themeProvider" :class="colorTheme">
    <div id="teleportRoot"></div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import db from "./firebase"

import Header from "@/views/components/Header.vue"

import "@splidejs/splide/dist/css/themes/splide-default.min.css"

import { ColorThemeTypes } from "./store/modules/colorTheme"

import {
  getDocs,
  collection,
  DocumentData,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
  SetOptions,
} from "firebase/firestore/lite"

class Post {
  constructor(readonly title: string) {}

  toString(): string {
    return this.title + ", by "
  }
}

const converter = {
  toFirestore(post: Post): DocumentData {
    return { title: post.title }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Post {
    const data = snapshot.data()!
    return new Post(data.title)
  },
}

const getTest = async () => {
  const querySnapshot = await getDocs(collection(db, "projects").withConverter(converter))
  querySnapshot.forEach((doc) => {
    // 파이어베이스를 연동할까 말까
    const data = doc.data()
    console.log(doc.id, " => ", data.title)
  })
}

export default defineComponent({
  components: { Header },
  setup() {
    const store = useStore()
    const colorTheme = computed<ColorThemeTypes>(() => store.state.colorThemeModule.colorTheme)
    getTest()

    return { colorTheme }
  },
  methods: {},
  mounted() {
    const RO = new ResizeObserver(() => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
    RO.observe(document.body)
  },
})
</script>

<style lang="scss">
#themeProvider {
  background-color: var(--background-color);
}
#teleportRoot {
  position: relative;
}
</style>
