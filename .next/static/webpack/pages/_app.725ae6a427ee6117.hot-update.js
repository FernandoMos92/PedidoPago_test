"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/DetailsCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/DetailsCard/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DetailsCard\": function() { return /* binding */ DetailsCard; }\n/* harmony export */ });\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/DetailsCard/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _OrganizationalData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OrganizationalData */ \"./src/components/OrganizationalData/index.tsx\");\n/* harmony import */ var _api_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/connection */ \"./src/api/connection/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailsCard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), employerDetails = ref[0], setEmployerDetails = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var details;\n            return _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_api_connection__WEBPACK_IMPORTED_MODULE_4__.employerDatails)();\n                    case 2:\n                        details = _ctx.sent.data.agent;\n                        setEmployerDetails(details);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerCardDetails),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerPerfil),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: employerDetails && employerDetails.image,\n                        alt: _api_connection__WEBPACK_IMPORTED_MODULE_4__.employerDatails.name\n                    }, void 0, false, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().namePerfil)\n                    }, void 0, false, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Informa\\xe7\\xf5es pessoais\"\n            }, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_OrganizationalData__WEBPACK_IMPORTED_MODULE_3__.OrganizationalData, {}, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(DetailsCard, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = DetailsCard;\nvar _c;\n$RefreshReg$(_c, \"DetailsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxzQ2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVIO0FBQ2tCO0FBQ0o7O0FBdUJoRCxTQUFTSyxXQUFXLEdBQUc7O0lBQzVCLElBQThDTCxHQUFrQixHQUFsQkEsK0NBQVEsRUFBVSxFQTVCbEUsZUE0QndCLEdBQXdCQSxHQUFrQixHQUExQyxFQTVCeEIsa0JBNEI0QyxHQUFJQSxHQUFrQixHQUF0QjtJQUUxQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2IsOExBQVk7Z0JBQ0xPLE9BQU87Ozs7OytCQUFVSixnRUFBZSxFQUFFOzt3QkFBbENJLE9BQU8sR0FBRyxVQUEwQkMsSUFBSSxDQUFDQyxLQUFLO3dCQUNwREgsa0JBQWtCLENBQUNDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7U0FDN0IsSUFBRztLQUNMLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUVWLGdGQUEyQjs7MEJBQ3pDLDhEQUFDUyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLDJFQUFzQjs7a0NBQ3BDLDhEQUFDYSxLQUFHO3dCQUFDQyxHQUFHLEVBQUUsZUFBZ0IsSUFBR1YsZUFBZSxDQUFDVyxLQUFLO3dCQUFFQyxHQUFHLEVBQUVkLGlFQUFvQjs7Ozs7NEJBQUk7a0NBQ2pGLDhEQUFDTyxLQUFHO3dCQUFDQyxTQUFTLEVBQUVWLHNFQUFpQjs7Ozs7NEJBRzNCOzs7Ozs7b0JBQ0Y7MEJBRU4sOERBQUNtQixJQUFFOzBCQUFDLDRCQUFvQjs7Ozs7b0JBQUs7MEJBTzdCLDhEQUFDbEIsbUVBQWtCOzs7O29CQUFHOzs7Ozs7WUFDbEIsQ0FDTjtDQUNIO0dBOUJlRSxXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsc0NhcmQvaW5kZXgudHN4PzhhZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IE9yZ2FuaXphdGlvbmFsRGF0YSB9IGZyb20gXCIuLi9Pcmdhbml6YXRpb25hbERhdGFcIjtcbmltcG9ydCB7IGVtcGxveWVyRGF0YWlscyB9IGZyb20gXCIuLi8uLi9hcGkvY29ubmVjdGlvblwiO1xuXG50eXBlIERldGFpbCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZToge1xuICAgIGRkZDogc3RyaW5nO1xuICAgIGRkaTogc3RyaW5nO1xuICAgIG51bWJlcjogc3RyaW5nO1xuICB9O1xuICBkb2N1bWVudDoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgfTtcbiAgYmlydGhfZGF0ZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBkZXBhcnRtZW50OiBzdHJpbmc7XG4gIGJyYW5jaDogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERldGFpbHNDYXJkKCkge1xuICBjb25zdCBbZW1wbG95ZXJEZXRhaWxzLCBzZXRFbXBsb3llckRldGFpbHNdID0gdXNlU3RhdGU8RGV0YWlsPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSAoYXdhaXQgZW1wbG95ZXJEYXRhaWxzKCkpLmRhdGEuYWdlbnQ7XG4gICAgICBzZXRFbXBsb3llckRldGFpbHMoZGV0YWlscyk7XG4gICAgfSkoKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckNhcmREZXRhaWxzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUGVyZmlsfT5cbiAgICAgICAgPGltZyBzcmM9eyhlbXBsb3llckRldGFpbHMpJiZlbXBsb3llckRldGFpbHMuaW1hZ2V9IGFsdD17ZW1wbG95ZXJEYXRhaWxzLm5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVBlcmZpbH0+XG4gICAgICAgICAgey8qIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgIDxwPntlbWFpbH08L3A+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+SW5mb3JtYcOnw7VlcyBwZXNzb2FpczwvaDI+XG4gICAgICB7LyogPElucHV0Q29tcG9uZW50XG4gICAgICAgIGNwZj17ZG9jdW1lbnQubnVtYmVyfVxuICAgICAgICB0ZWw9e3VzZXJQaG9uZX1cbiAgICAgICAgYmlydGhEYXRlPXtiaXJ0aERhdGV9XG4gICAgICAvPiAqL31cblxuICAgICAgPE9yZ2FuaXphdGlvbmFsRGF0YSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiT3JnYW5pemF0aW9uYWxEYXRhIiwiZW1wbG95ZXJEYXRhaWxzIiwiRGV0YWlsc0NhcmQiLCJlbXBsb3llckRldGFpbHMiLCJzZXRFbXBsb3llckRldGFpbHMiLCJkZXRhaWxzIiwiZGF0YSIsImFnZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2FyZERldGFpbHMiLCJjb250YWluZXJQZXJmaWwiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJuYW1lUGVyZmlsIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DetailsCard/index.tsx\n");

/***/ })

});