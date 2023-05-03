import { computed, onMounted, ref } from "vue";

const useDemo = ({ variants, demoStyle }) => {
  const theme = ref("dark");
  const selectedVariantIndex = ref(0);
  const selectedTheme = ref("");

  onMounted(() => {
    if (localStorage.getItem("theme")) {
      theme.value = localStorage.getItem("theme");
    }
  });

  const toggleTheme = () => {
    theme.value = selectedTheme.value;

    _handleStorageEvent({ key: "theme", newValue: theme.value });
  };

  const _handleStorageEvent = (event) => {
    if (event.key === "theme") {
      localStorage.setItem("theme", event.newValue);
    }
  };

  const variant = computed(() => variants[selectedVariantIndex.value]);

  const customStyle = computed(() => {
    const style = theme.value === "dark" ? demoStyle.dark : demoStyle.light;
    return {
      body: {
        backgroundColor: style?.backgroundBody,
        color: style?.color,
      },
      content: {
        backgroundColor: style?.backgroundContent,
        color: style?.color,
      },
    };
  });

  return {
    selectedTheme,
    selectedVariantIndex,
    theme,
    toggleTheme,
    variant,
    customStyle,
  };
};

export default useDemo;
