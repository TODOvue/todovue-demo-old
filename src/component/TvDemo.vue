<template>
  <div :class="`${theme}-mode`">
    <div
      class="demo-container"
      :class="`${
        !hideBackground ? (invertTheme ? themeInvert : theme) : ''
      }-mode`"
    >
      <div class="demo-container_theme">
        <tv-button is-rounded @click="toggleTheme">Change Theme</tv-button>
      </div>
      <div class="demo-container_case">
        <div class="demo-container_case-demo">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
export default {
  name: "DemoPage",
  props: {
    invertTheme: {
      type: Boolean,
      default: false,
    },
    hideBackground: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      theme: "dark",
      themeInvert: "invert-dark",
    };
  },
  components: {
    TvButton,
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
};
</script>

<style>
.demo-container {
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
}

.demo-container.dark-mode {
  background-color: var(--color-background-card-dark);
}

.demo-container.light-mode {
  background-color: var(--color-background-card-light);
}

.demo-container.invert-dark-mode {
  background-color: var(--color-background-card-light);
}

.demo-container.invert-light-mode {
  background-color: var(--color-background-card-dark);
}

.demo-container_theme {
  width: 100%;
  min-height: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.demo-container_case {
  padding: 0 20px 20px 20px;
}

.demo-container_case-demo .title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.demo-container_case-demo .demo {
  margin-bottom: 20px;
}

.demo-container_case-demo h2 {
  margin-bottom: 5px;
  font-size: 22px;
}
</style>
