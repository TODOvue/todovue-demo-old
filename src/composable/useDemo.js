import { computed, onMounted, ref } from "vue";

const useDemo = ({ variants }) => {
  const theme = ref("dark");
  const selectedVariantIndex = ref(0);
  const selectedTheme = ref("");

  onMounted(() => {
    if (localStorage.getItem("theme")) {
      theme.value = localStorage.getItem("theme");
    }
  });

  const toggleTheme = () => {
    theme.value = selectedTheme.value.toLowerCase();

    _handleStorageEvent({ key: "theme", newValue: theme.value });
  };

  const _handleStorageEvent = (event) => {
    if (event.key === "theme") {
      localStorage.setItem("theme", event.newValue);
    }
  };

  const variant = computed(() => variants[selectedVariantIndex.value]);

  return {
    selectedTheme,
    selectedVariantIndex,
    theme,
    toggleTheme,
    variant,
  };
};

export default useDemo;
