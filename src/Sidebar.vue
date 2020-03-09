<template>
  <div class="mss-sidebar">
    <h3 class="mss-sidebar__headline">Font Settings</h3>
    <div class="mss-sidebar__row">
      <div class="mss-sidebar__label">Font Family ({{ fontCount }})</div>
      <div class="mss-sidebar__content">
        <select id="fontFamily" @change="changeFont($event)">
          <option disabled selected>Please select</option>
          <option v-for="(key, value, index) in fonts" :key="index" :value="value">{{ value }}</option>
        </select>
      </div>
    </div>

    <div class="mss-sidebar__row" v-if="currentStyles">
      <div class="mss-sidebar__label">Font Style ({{ currentStyles.length }})</div>
      <div class="mss-sidebar__content">
        <select id="fontStyle">
          <option v-for="item in currentStyles" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>

    <div class="mss-sidebar__row">
      <div class="mss-sidebar__label">Base Size</div>
      <div class="mss-sidebar__content">
        <input type="number" id="baseSize" value="18" />
      </div>
    </div>

    <div class="mss-sidebar__row">
      <div class="mss-sidebar__label">Ratio</div>
      <div class="mss-sidebar__content">
        <select id="fontRatio">
          <option value="1.067">1.067 — Minor Second</option>
          <option value="1.125">1.125 — Major Second</option>
          <option value="1.200" selected>1.200 — Minor Third</option>
          <option value="1.250">1.250 — Major Third</option>
          <option value="1.333">1.333 — Perfect Fourth</option>
          <option value="1.414">1.414 — Augmented Fourth</option>
          <option value="1.500">1.500 — Perfect Fifth</option>
          <option value="1.618">1.618 — Golden Ratio</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      currentFont: "ss",
      currentStyles: null
    };
  },
  props: {
    fonts: {
      type: Object,
      default: () => {}
    },
    fontCount: {
      type: Number
    }
  },
  methods: {
    changeFont(event) {
      this.currentFont = event.target.value;
      this.currentStyles = this.fonts[this.currentFont].styles;
    }
  },
  mounted() {}
};
</script>

<style>
.mss-sidebar {
}

.mss-sidebar__headline {
  font-size: var(--ms-0);
  font-weight: 600;
  border-bottom: 1px dotted var(--gray-2);
}

.mss-sidebar__row {
  display: flex;
  flex-flow: column wrap;
  padding-top: 16px;
}

.mss-sidebar__label {
  flex: 1 1 auto;
  margin-bottom: 4px;
}

.mss-sidebar__content {
  flex: 1 1 auto;
  font-size: var(--ms-0);
  font-weight: 700;
}

select {
  -webkit-appearance: none;
  display: flex;
  padding: 8px 32px 8px 8px;
  width: 100%;
  color: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 3px;
}

input {
  -webkit-appearance: none;
  display: flex;
  padding: 8px;
  width: 100%;
  color: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 3px;
}
</style>