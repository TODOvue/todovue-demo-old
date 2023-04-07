<template>
  <div :class="`${theme}-mode`">
    <div
      class="tv-demo-body"
      :class="`${
        !hideBackground ? (invertTheme ? themeInvert : theme) : ''
      }-mode`"
    >
      <div class="tv-demo-theme">
        <button
          class="tv-btn tv-btn-small tv-btn-info tv-btn-rounded tv-btn-outlined"
          @click="toggleTheme"
        >
          Change Theme
        </button>
      </div>
      <div class="tv-demo-case">
        <div class="tv-demo-case-demo">
          <template v-if="variants">
            <select class="tv-demo-select" v-model="selectedVariantIndex">
              <option
                class="tv-demo-option"
                v-for="(variant, index) in variants"
                :key="variant.title"
                :value="index"
              >
                {{ variant.title }}
              </option>
            </select>
            <div class="tv-demo-component">
              <component :is="component" v-bind="variant.propsData">
                Press me
              </component>
            </div>
          </template>
          <template v-else>
            <h1 class="tv-demo-no-component">
              Here are the different variations of the TODOvue components.
            </h1>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoPage",
  props: {
    invertTheme: {
      type: Boolean,
      default: false,
    },
    hideBackground: {
      type: Boolean,
      default: false,
    },
    component: {
      type: Object,
      default: null,
    },
    variants: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      theme: "dark",
      themeInvert: "invert-dark",
      selectedVariantIndex: 0,
    };
  },
  methods: {
    toggleTheme() {
      if (this.invertTheme) {
        this.themeInvert =
          this.themeInvert === "invert-dark" ? "invert-light" : "invert-dark";
      }
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
  computed: {
    variant() {
      return this.variants[this.selectedVariantIndex];
    },
  },
};
</script>

<style scoped></style>
