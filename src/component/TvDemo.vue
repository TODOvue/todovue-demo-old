<template>
  <div :class="`${theme}-mode`">
    <div class="tv-demo-body" :class="`${!hideBackground ? theme : ''}-mode`">
      <div class="tv-demo-theme">
        <select
          class="tv-demo-select tv-demo-select-theme"
          v-model="selectedTheme"
          @change="toggleTheme"
        >
          <option class="tv-demo-option" disabled value="">Select theme</option>
          <option class="tv-demo-option" value="dark">Dark</option>
          <option class="tv-demo-option" value="light">Light</option>
        </select>
      </div>
      <div class="tv-demo-case">
        <div class="tv-demo-case-demo">
          <template v-if="variants">
            <select
              class="tv-demo-select"
              v-model="selectedVariantIndex"
              v-if="variants.length > 1"
            >
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
              <component :is="component" v-bind="variant.propsData"></component>
            </div>
            <HighCode
              class="code tv-demo-code"
              :codeValue="variant.html"
              :theme="theme"
              langName="vue"
              lang="html"
              codeLines
              :key="variant.title"
              height="auto"
            ></HighCode>
          </template>
          <template v-else>
            <h1 class="tv-demo-no-component">
              Here the different variations of the components will be shown.
            </h1>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HighCode } from "vue-highlight-code";
import useDemo from "@/composable/useDemo";

export default {
  name: "DemoPage",
  props: {
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
  setup(props) {
    const { selectedTheme, selectedVariantIndex, theme, toggleTheme, variant } =
      useDemo(props);

    return {
      selectedTheme,
      selectedVariantIndex,
      theme,
      toggleTheme,
      variant,
    };
  },
  components: {
    HighCode,
  },
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
