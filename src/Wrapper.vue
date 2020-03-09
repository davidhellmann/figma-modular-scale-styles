<template>
  <div class="mss-wrapper">
    <Sidebar :fonts="fonts" :fontCount="fontCount" class="mss-wrapper__sidebar" />
    <Content class="mss-wrapper__content" />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Content from "./Content";
export default {
  name: "App",
  data() {
    return {};
  },
  props: {
    fonts: {
      type: Object,
      default: () => {}
    },
    fontCount: {
      type: Number,
      default: 0
    }
  },
  components: {
    Sidebar,
    Content
  }
};
</script>

<style>
.mss-wrapper {
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray-1);
  font-size: var(--ms-0);
}

.mss-wrapper__sidebar {
  flex: 0 0 300px;
  width: 300px;
  background-color: var(--gray-3);
  padding: 32px 16px;
}

.mss-wrapper__content {
  flex: 1 1 auto;
  width: auto;
  padding: 32px;
}
</style>