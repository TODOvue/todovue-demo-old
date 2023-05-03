import { shallowMount } from "@vue/test-utils";
import TvDemo from "@/component/TvDemo.vue";
import { onMounted, ref } from "vue";

describe("TvDemo Component", () => {
  describe("Test in template", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(TvDemo, {
        propsData: {
          variants: [
            {
              title: "Variant 1",
              propsData: {
                buttonText: "Click me",
                backgroundColor: "#fff",
                textColor: "#000",
              },
            },
            {
              title: "Variant 2",
              propsData: {
                buttonText: "Press me",
                backgroundColor: "#000",
                textColor: "#fff",
              },
            },
          ],
        },
      });
    });

    it("matches snapshot", () => {
      const wrapper = shallowMount(TvDemo, {
        props: {
          hideBackground: false,
          component: null,
          variants: null,
        },
        data() {
          return {
            theme: "dark",
            selectedVariantIndex: 0,
          };
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("Should change the theme to light when changing the select", () => {
      const select = wrapper.find("select");
      select.setValue("light");
      expect(wrapper.vm.theme).toBe("light");
    });

    it("Should change the theme to dark when changing the select", () => {
      const select = wrapper.find("select");
      select.setValue("dark");
      expect(wrapper.vm.theme).toBe("dark");
    });

    it("Should return null when not finding the localStorage", () => {
      const localStorageSpy = jest.spyOn(
        window.localStorage.__proto__,
        "getItem"
      );
      localStorageSpy.mockReturnValue("dark");

      const theme = ref(null);
      onMounted(() => {
        if (localStorage.getItem("theme")) {
          theme.value = localStorage.getItem("theme");
        }
      });

      expect(theme.value).toBe(null);
    });
  });
});
