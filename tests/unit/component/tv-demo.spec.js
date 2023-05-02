import { shallowMount } from "@vue/test-utils";
import TvDemo from "@/component/TvDemo.vue";

describe("TvDemo Component", () => {
  describe("Test in template", () => {
    // eslint-disable-next-line no-unused-vars
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
  });
});
