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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DetailsCard\": function() { return /* binding */ DetailsCard; }\n/* harmony export */ });\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/DetailsCard/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _OrganizationalData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OrganizationalData */ \"./src/components/OrganizationalData/index.tsx\");\n/* harmony import */ var _api_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/connection */ \"./src/api/connection/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailsCard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), employerDetails = ref[0], setEmployerDetails = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var details;\n            return _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_api_connection__WEBPACK_IMPORTED_MODULE_4__.employerDatails)();\n                    case 2:\n                        details = _ctx.sent.data.agent;\n                        setEmployerDetails(details);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    console.log(employerDetails);\n    // const userPhone = `+${phone.ddd} ${phone.ddi} ${phone.number}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerCardDetails),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerPerfil),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://picsum.photos/200\",\n                        alt: \"Foto do usu\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().namePerfil)\n                    }, void 0, false, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Informa\\xe7\\xf5es pessoais\"\n            }, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_OrganizationalData__WEBPACK_IMPORTED_MODULE_3__.OrganizationalData, {}, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(DetailsCard, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = DetailsCard;\nvar _c;\n$RefreshReg$(_c, \"DetailsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxzQ2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVIO0FBQ2tCO0FBQ0o7O0FBdUJoRCxTQUFTSyxXQUFXLEdBQUc7O0lBQzVCLElBQThDTCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUE1QjFELGVBNEJ3QixHQUF3QkEsR0FBVSxHQUFsQyxFQTVCeEIsa0JBNEI0QyxHQUFJQSxHQUFVLEdBQWQ7SUFFMUNDLGdEQUFTLENBQUMsV0FBTTtRQUNiLDhMQUFZO2dCQUNMTyxPQUFPOzs7OzsrQkFBVUosZ0VBQWUsRUFBRTs7d0JBQWxDSSxPQUFPLEdBQUcsVUFBMEJDLElBQUksQ0FBQ0MsS0FBSzt3QkFDcERILGtCQUFrQixDQUFDQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O1NBQzdCLElBQUc7S0FDTCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixlQUFlLENBQUM7SUFDNUIsa0VBQWtFO0lBQ2xFLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBRVosZ0ZBQTJCOzswQkFDekMsOERBQUNXLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVosMkVBQXNCOztrQ0FDcEMsOERBQUNlLEtBQUc7d0JBQUNDLEdBQUcsRUFBQywyQkFBMkI7d0JBQUNDLEdBQUcsRUFBQyxvQkFBaUI7Ozs7OzRCQUFJO2tDQUM3RCw4REFBQU4sS0FBRzt3QkFBQ0MsU0FBUyxFQUFFWixzRUFBaUI7Ozs7OzRCQUczQjs7Ozs7O29CQUNGOzBCQUVOLDhEQUFDbUIsSUFBRTswQkFBQyw0QkFBb0I7Ozs7O29CQUFLOzBCQU83Qiw4REFBQ2xCLG1FQUFrQjs7OztvQkFBRzs7Ozs7O1lBQ2xCLENBQ047Q0FDSDtHQWhDZUUsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RldGFpbHNDYXJkL2luZGV4LnRzeD84YWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL0lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBPcmdhbml6YXRpb25hbERhdGEgfSBmcm9tIFwiLi4vT3JnYW5pemF0aW9uYWxEYXRhXCI7XG5pbXBvcnQgeyBlbXBsb3llckRhdGFpbHMgfSBmcm9tIFwiLi4vLi4vYXBpL2Nvbm5lY3Rpb25cIjtcblxudHlwZSBEZXRhaWwgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHtcbiAgICBkZGQ6IHN0cmluZztcbiAgICBkZGk6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgfTtcbiAgZG9jdW1lbnQ6IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgbnVtYmVyOiBzdHJpbmc7XG4gIH07XG4gIGJpcnRoX2RhdGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBicmFuY2g6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXRhaWxzQ2FyZCgpIHtcbiAgY29uc3QgW2VtcGxveWVyRGV0YWlscywgc2V0RW1wbG95ZXJEZXRhaWxzXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGV0YWlscyA9IChhd2FpdCBlbXBsb3llckRhdGFpbHMoKSkuZGF0YS5hZ2VudDtcbiAgICAgIHNldEVtcGxveWVyRGV0YWlscyhkZXRhaWxzKTtcbiAgICB9KSgpXG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhlbXBsb3llckRldGFpbHMpXG4gIC8vIGNvbnN0IHVzZXJQaG9uZSA9IGArJHtwaG9uZS5kZGR9ICR7cGhvbmUuZGRpfSAke3Bob25lLm51bWJlcn1gO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ2FyZERldGFpbHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQZXJmaWx9PlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDBcIiBhbHQ9XCJGb3RvIGRvIHVzdcOhcmlvXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lUGVyZmlsfT5cbiAgICAgICAgICB7LyogPGgyPntuYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2VtYWlsfTwvcD4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5JbmZvcm1hw6fDtWVzIHBlc3NvYWlzPC9oMj5cbiAgICAgIHsvKiA8SW5wdXRDb21wb25lbnRcbiAgICAgICAgY3BmPXtkb2N1bWVudC5udW1iZXJ9XG4gICAgICAgIHRlbD17dXNlclBob25lfVxuICAgICAgICBiaXJ0aERhdGU9e2JpcnRoRGF0ZX1cbiAgICAgIC8+ICovfVxuXG4gICAgICA8T3JnYW5pemF0aW9uYWxEYXRhIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJPcmdhbml6YXRpb25hbERhdGEiLCJlbXBsb3llckRhdGFpbHMiLCJEZXRhaWxzQ2FyZCIsImVtcGxveWVyRGV0YWlscyIsInNldEVtcGxveWVyRGV0YWlscyIsImRldGFpbHMiLCJkYXRhIiwiYWdlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2FyZERldGFpbHMiLCJjb250YWluZXJQZXJmaWwiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lUGVyZmlsIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DetailsCard/index.tsx\n");

/***/ })

});