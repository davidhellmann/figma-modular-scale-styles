<template>
  <div>
    <img src="./logo.svg" alt="Logo" />
    <h2>Rectangle Creator</h2>
    <!-- <p>
      Count:
      <input type="number" v-model.number="count" value="2" />
    </p>
    <button @click="create">Create</button>-->
    <button @click="cancel">Cancel</button>

    <button @click="createTextStyles">Create Text Styles</button>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      count: 2
    };
  },
  methods: {
    createTextStyles() {
      const styles = [
        {
          fontName: {
            family: "Arial",
            style: "Regular"
          },
          fontSize: 18,
          letterSpacing: {
            unit: "PERCENT",
            value: 150
          },
          lineHeight: {
            unit: "PERCENT",
            value: 150
          }
        },
        {
          fontName: {
            family: "Verdana",
            style: "Regular"
          },
          fontSize: 18,
          letterSpacing: {
            unit: "PERCENT",
            value: 150
          },
          lineHeight: {
            unit: "PERCENT",
            value: 150
          }
        }
      ];
      parent.postMessage(
        { pluginMessage: { type: "create-text-styles", styles } },
        "*"
      );
    },
    /* create: function() {
      const count = parseInt(this.count, 10);
      console.log(count);
      parent.postMessage(
        { pluginMessage: { type: "create-rectangles", count } },
        "*"
      );
    }, */
    cancel() {
      parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
    }
  },
  created() {}
};
</script>

<style></style>