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
          class="tv-btn tv-btn-small tv-btn-info tv-btn-rounded"
          @click="toggleTheme"
        >
          Change Theme
        </button>
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
              theme="dark"
              lang="html"
              codeLines
              :key="variant.title"
              height="auto"
            ></HighCode>
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
import { ref, computed, onMounted } from "vue";
import { HighCode } from "vue-highlight-code";

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
  setup(props) {
    const theme = ref("dark");
    const themeInvert = ref("invert-dark");
    const selectedVariantIndex = ref(0);

    onMounted(() => {
      if (localStorage.getItem("theme")) {
        theme.value = localStorage.getItem("theme");
      }
    });

    const toggleTheme = () => {
      if (themeInvert.value) {
        themeInvert.value =
          themeInvert.value === "invert-dark" ? "invert-light" : "invert-dark";
      }
      theme.value = theme.value === "dark" ? "light" : "dark";

      _handleStorageEvent({ key: "theme", newValue: theme.value });
    };

    const _handleStorageEvent = (event) => {
      if (event.key === "theme") {
        localStorage.setItem("theme", event.newValue);
      }
    };

    const variant = computed(() => props.variants[selectedVariantIndex.value]);

    return {
      theme,
      themeInvert,
      selectedVariantIndex,
      toggleTheme,
      variant,
    };
  },
  components: {
    HighCode,
  },
};
</script>

<style scoped></style>
