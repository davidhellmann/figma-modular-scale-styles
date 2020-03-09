<template>
  <div class="mss-app">
    <Wrapper :fonts="fontList" :fontCount="fontCount" />
  </div>
</template>

<script>
import Wrapper from "./Wrapper";
export default {
  name: "App",
  data() {
    return {
      fontList: {}
    };
  },
  components: {
    Wrapper
  },
  methods: {
    getFontList() {
      onmessage = event => {
        this.fontList = event.data.pluginMessage.fontList.list;
      };
    }
  },
  computed: {
    fontCount() {
      return Object.keys(this.fontList).length;
    }
  },
  mounted() {
    this.getFontList();
  },
  created() {}
};
</script>

<style>
:root {
  --gray-1: #2b2d42;
  --gray-2: #8d99ae;
  --gray-3: #edf2f4;
  --red-1: #d90429;
  --red-2: #ef233c;
  --ms-0: 13px;
  --ms-1: 17px;
  --ms-2: 22px;
  --ms-3: 28px;
  --ms-4: 36px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

body {
  background-color: white;
  padding: 0;
  margin: 0;
}

.mss-app {
  width: 100%;
  height: 100%;
}
</style>