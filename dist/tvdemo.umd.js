(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tvdemo"] = factory(require("vue"));
	else
		root["tvdemo"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvDemo.vue?vue&type=template&id=300ab17c

const _hoisted_1 = {
  class: "tv-demo-theme"
};
const _hoisted_2 = {
  class: "tv-demo-case"
};
const _hoisted_3 = {
  class: "tv-demo-case-demo"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = {
  class: "tv-demo-component"
};
const _hoisted_6 = {
  key: 1,
  class: "tv-demo-no-component"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(`${$data.theme}-mode`)
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["tv-demo-body", `${!$props.hideBackground ? $props.invertTheme ? $data.themeInvert : $data.theme : ''}-mode`])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "tv-btn tv-btn-small tv-btn-info tv-btn-rounded tv-btn-outlined",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleTheme && $options.toggleTheme(...args))
  }, " Change Theme ")]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [$props.variants ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
    key: 0
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("select", {
    class: "tv-demo-select",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.selectedVariantIndex = $event)
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.variants, (variant, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("option", {
      class: "tv-demo-option",
      key: variant.title,
      value: index
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(variant.title), 9, _hoisted_4);
  }), 128))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelSelect, $data.selectedVariantIndex]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($props.component), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)($options.variant.propsData)), {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Press me ")]),
    _: 1
  }, 16))])], 64)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("h1", _hoisted_6, " Here are the different variations of the TODOvue components. "))])])], 2)], 2);
}
;// CONCATENATED MODULE: ./src/component/TvDemo.vue?vue&type=template&id=300ab17c

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvDemo.vue?vue&type=script&lang=js
/* harmony default export */ var TvDemovue_type_script_lang_js = ({
  name: "DemoPage",
  props: {
    invertTheme: {
      type: Boolean,
      default: false
    },
    hideBackground: {
      type: Boolean,
      default: false
    },
    component: {
      type: Object,
      default: null
    },
    variants: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      theme: "dark",
      themeInvert: "invert-dark",
      selectedVariantIndex: 0
    };
  },
  methods: {
    toggleTheme() {
      if (this.invertTheme) {
        this.themeInvert = this.themeInvert === "invert-dark" ? "invert-light" : "invert-dark";
      }
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  },
  computed: {
    variant() {
      return this.variants[this.selectedVariantIndex];
    }
  }
});
;// CONCATENATED MODULE: ./src/component/TvDemo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/component/TvDemo.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TvDemovue_type_script_lang_js, [['render',render]])

/* harmony default export */ var TvDemo = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (TvDemo);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tvdemo.umd.js.map