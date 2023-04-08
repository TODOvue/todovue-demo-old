import { shallowMount } from "@vue/test-utils";
import TvDemo from "@/component/TvDemo.vue";
import { HighCode } from "vue-highlight-code";

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
          invertTheme: false,
          hideBackground: false,
          component: null,
          variants: null,
        },
        data() {
          return {
            themeInvert: "invert-dark",
            theme: "dark",
            selectedVariantIndex: 0,
          };
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should render button in template", () => {
      expect(wrapper.find("button").text()).toBe("Change Theme");
    });

    it("should be able to click the change theme button", () => {
      wrapper.find("button").trigger("click");
      expect(wrapper.vm.theme).toBe("light");
    });

    it("renders select element with correct number of options", () => {
      const selectElement = wrapper.find(".tv-demo-select");
      expect(selectElement.exists()).toBe(true);
      const options = selectElement.findAll("option");
      expect(options.length).toBe(2);
      expect(options.at(0).text()).toBe("Variant 1");
      expect(options.at(1).text()).toBe("Variant 2");
    });

    it("renders no-component message when variants is falsy", async () => {
      wrapper.setProps({ variants: null });
      await wrapper.vm.$nextTick();
      const noComponentMessage = wrapper.find(".tv-demo-no-component");
      expect(noComponentMessage.exists()).toBe(true);
      expect(noComponentMessage.text()).toBe(
        "Here are the different variations of the TODOvue components."
      );
    });
  });

  describe("Function toggleTheme", () => {
    it("toggles the theme when invertTheme is true", () => {
      const wrapper = shallowMount(TvDemo, {
        props: {
          invertTheme: true,
        },
      });
      wrapper.vm.toggleTheme();

      expect(wrapper.vm.themeInvert).toBe("invert-light");
    });

    it("toggles the theme when invertTheme is false by default", () => {
      const wrapper = shallowMount(TvDemo);

      wrapper.vm.toggleTheme();

      expect(wrapper.vm.themeInvert).toBe("invert-dark");
      expect(wrapper.vm.theme).toBe("light");
    });

    it("toggles the theme when the initial theme is light", () => {
      const wrapper = shallowMount(TvDemo, {
        data() {
          return {
            themeInvert: "invert-dark",
            theme: "light",
          };
        },
      });

      wrapper.vm.toggleTheme();

      expect(wrapper.vm.theme).toBe("dark");
      expect(wrapper.vm.themeInvert).toBe("invert-dark");
    });

    it("toggles the theme when the initial theme is invert-light", () => {
      const wrapper = shallowMount(TvDemo, {
        data() {
          return {
            themeInvert: "invert-light",
            theme: "dark",
          };
        },
        props: {
          invertTheme: false,
        },
      });

      wrapper.vm.toggleTheme();

      expect(wrapper.vm.theme).toBe("light");
      expect(wrapper.vm.themeInvert).toBe("invert-light");
    });
  });

  describe("computed Variant", () => {
    let wrapper;

    beforeEach(() => {
      const variants = [
        { title: "Variant 1", propsData: { color: "red" } },
        { title: "Variant 2", propsData: { color: "blue" } },
      ];
      wrapper = shallowMount(TvDemo, {
        propsData: { variants },
      });
    });

    it("should return the selected variant", () => {
      // Arrange
      wrapper.setData({ selectedVariantIndex: 1 });

      // Act
      const variant = wrapper.vm.variant;

      // Assert
      expect(variant.title).toBe("Variant 2");
      expect(variant.propsData.color).toBe("blue");
    });

    it("should render the select and component when variants exist", () => {
      // Arrange
      const select = wrapper.find(".tv-demo-select");
      const component = wrapper.find(".tv-demo-component");

      // Assert
      expect(select.exists()).toBe(true);
      expect(component.exists()).toBe(true);
    });

    it("should render a message when no variants exist", async () => {
      // Arrange
      await wrapper.setProps({ variants: null });
      const message = wrapper.find(".tv-demo-no-component");

      // Assert
      expect(message.exists()).toBe(true);
      expect(message.text()).toBe(
        "Here are the different variations of the TODOvue components."
      );
    });

    test("computed variant returns the correct value", () => {
      const variants = [
        { id: 1, name: "variant 1" },
        { id: 2, name: "variant 2" },
        { id: 3, name: "variant 3" },
      ];
      const selectedVariantIndex = 0;
      const wrapper = shallowMount(TvDemo, {
        props: { variants, selectedVariantIndex },
      });

      expect(wrapper.vm.variant).toEqual(variants[selectedVariantIndex]);
    });
  });

  describe("HighCode", () => {
    test("registers HighCode component", () => {
      const wrapper = shallowMount(TvDemo, {
        components: {
          HighCode,
        },
      });

      expect(wrapper.vm.$options.components.HighCode).toBeTruthy();
    });
  });
});
