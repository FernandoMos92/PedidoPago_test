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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DetailsCard\": function() { return /* binding */ DetailsCard; }\n/* harmony export */ });\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputComponent */ \"./src/components/InputComponent/index.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/DetailsCard/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _OrganizationalData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OrganizationalData */ \"./src/components/OrganizationalData/index.tsx\");\n/* harmony import */ var _api_connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/connection */ \"./src/api/connection/index.ts\");\n/* harmony import */ var _hook_UseWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hook/UseWindowSize */ \"./src/hook/UseWindowSize.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DetailsCard = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), employerDetails = ref[0], setEmployerDetails = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function resultResponse() {\n            return _resultResponse.apply(this, arguments);\n        }\n        function _resultResponse() {\n            _resultResponse = _asyncToGenerator(_home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, result;\n                return _home_mos_Documentos_Projetos_PedidoPago_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_api_connection__WEBPACK_IMPORTED_MODULE_5__.employerDatails)();\n                        case 2:\n                            response = _ctx.sent;\n                            result = response.data.agent;\n                            setEmployerDetails(result);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _resultResponse.apply(this, arguments);\n        }\n        resultResponse();\n    }, []);\n    var size = (0,_hook_UseWindowSize__WEBPACK_IMPORTED_MODULE_6__.useWindowSize)();\n    var image = employerDetails.image, name = employerDetails.name, email = employerDetails.email, document = employerDetails.document, phone = employerDetails.phone, birth_date = employerDetails.birth_date, id = employerDetails.id, department = employerDetails.department, role = employerDetails.role, status = employerDetails.status;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().containerCardDetails),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().containerPerfil),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: name\n                    }, void 0, false, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().namePerfil),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: email\n                            }, void 0, false, {\n                                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Informa\\xe7\\xf5es pessoais\"\n            }, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_InputComponent__WEBPACK_IMPORTED_MODULE_3__.InputComponent, {\n                cpf: document.number,\n                tel: phone,\n                birthDate: birth_date\n            }, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_OrganizationalData__WEBPACK_IMPORTED_MODULE_4__.OrganizationalData, {\n                id: id,\n                department: department,\n                role: role,\n                status: status\n            }, void 0, false, {\n                fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mos/Documentos/Projetos/PedidoPago_test/src/components/DetailsCard/index.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(DetailsCard, \"0LD8y2XnbGcBW3unV0n/ZvYiWi0=\", false, function() {\n    return [\n        _hook_UseWindowSize__WEBPACK_IMPORTED_MODULE_6__.useWindowSize\n    ];\n});\n_c = DetailsCard;\nvar _c;\n$RefreshReg$(_c, \"DetailsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxzQ2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNPO0FBQ1Y7QUFDa0I7QUFDSjtBQUNFOztBQXVCbEQsSUFBTU8sV0FBVyxHQUFHLFdBQU07O0lBQy9CLElBQThDUCxHQUFrQixHQUFsQkEsK0NBQVEsRUFBVSxFQTdCbEUsZUE2QndCLEdBQXdCQSxHQUFrQixHQUExQyxFQTdCeEIsa0JBNkI0QyxHQUFJQSxHQUFrQixHQUF0QjtJQUUxQ0MsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNDUyxjQUFjO21CQUFkQSxlQUFjOztpQkFBZEEsZUFBYztZQUFkQSxlQUFjLEdBQTdCLDhMQUFnQztvQkFDeEJDLFFBQVEsRUFDUkMsTUFBTTs7Ozs7bUNBRFdQLGdFQUFlLEVBQUU7OzRCQUFsQ00sUUFBUSxZQUEwQjs0QkFDbENDLE1BQU0sR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQzs0QkFDbkNMLGtCQUFrQixDQUFDRyxNQUFNLENBQUMsQ0FBQzs7Ozs7O2FBQzVCO21CQUpjRixlQUFjOztRQUs3QkEsY0FBYyxFQUFFLENBQUM7S0FDbEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1LLElBQUksR0FBR1Qsa0VBQWEsRUFBRTtJQUU1QixJQUNFVSxLQUFLLEdBVUhSLGVBQWUsQ0FWakJRLEtBQUssRUFDTEMsSUFBSSxHQVNGVCxlQUFlLENBVGpCUyxJQUFJLEVBQ0pDLEtBQUssR0FRSFYsZUFBZSxDQVJqQlUsS0FBSyxFQUNMQyxRQUFRLEdBT05YLGVBQWUsQ0FQakJXLFFBQVEsRUFDUkMsS0FBSyxHQU1IWixlQUFlLENBTmpCWSxLQUFLLEVBQ0xDLFVBQVUsR0FLUmIsZUFBZSxDQUxqQmEsVUFBVSxFQUNWQyxFQUFFLEdBSUFkLGVBQWUsQ0FKakJjLEVBQUUsRUFDRkMsVUFBVSxHQUdSZixlQUFlLENBSGpCZSxVQUFVLEVBQ1ZDLElBQUksR0FFRmhCLGVBQWUsQ0FGakJnQixJQUFJLEVBQ0pDLE1BQU0sR0FDSmpCLGVBQWUsQ0FEakJpQixNQUFNO0lBRVIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFeEIsZ0ZBQTJCOzswQkFDekMsOERBQUN1QixLQUFHO2dCQUFDQyxTQUFTLEVBQUV4QiwyRUFBc0I7O2tDQUNwQyw4REFBQzJCLEtBQUc7d0JBQUNDLEdBQUcsRUFBRWYsS0FBSzt3QkFBRWdCLEdBQUcsRUFBRWYsSUFBSTs7Ozs7NkJBQUk7a0NBQzlCLDhEQUFDUyxLQUFHO3dCQUFDQyxTQUFTLEVBQUV4QixzRUFBaUI7OzBDQUMvQiw4REFBQytCLElBQUU7MENBQUVqQixJQUFJOzs7OztxQ0FBTTswQ0FDZiw4REFBQ2tCLEdBQUM7MENBQUVqQixLQUFLOzs7OztxQ0FBSzs7Ozs7OzZCQUNWOzs7Ozs7cUJBQ0Y7MEJBRU4sOERBQUNnQixJQUFFOzBCQUFDLDRCQUFvQjs7Ozs7cUJBQUs7MEJBQzdCLDhEQUFDaEMsMkRBQWM7Z0JBQ2JrQyxHQUFHLEVBQUVqQixRQUFRLENBQUNrQixNQUFNO2dCQUNwQkMsR0FBRyxFQUFFbEIsS0FBSztnQkFDVm1CLFNBQVMsRUFBRWxCLFVBQVU7Ozs7O3FCQUNyQjswQkFFRiw4REFBQ2pCLG1FQUFrQjtnQkFDakJrQixFQUFFLEVBQUVBLEVBQUU7Z0JBQ05DLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJDLElBQUksRUFBRUEsSUFBSTtnQkFDVkMsTUFBTSxFQUFFQSxNQUFNOzs7OztxQkFDZDs7Ozs7O2FBQ0UsQ0FDTjtDQUNILENBQUM7R0FuRFdsQixXQUFXOztRQVlURCw4REFBYTs7O0FBWmZDLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsc0NhcmQvaW5kZXgudHN4PzhhZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IE9yZ2FuaXphdGlvbmFsRGF0YSB9IGZyb20gXCIuLi9Pcmdhbml6YXRpb25hbERhdGFcIjtcbmltcG9ydCB7IGVtcGxveWVyRGF0YWlscyB9IGZyb20gXCIuLi8uLi9hcGkvY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rL1VzZVdpbmRvd1NpemVcIjtcblxudHlwZSBEZXRhaWwgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHtcbiAgICBkZGQ6IHN0cmluZztcbiAgICBkZGk6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgfTtcbiAgZG9jdW1lbnQ6IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgbnVtYmVyOiBzdHJpbmc7XG4gIH07XG4gIGJpcnRoX2RhdGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBicmFuY2g6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxzQ2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW2VtcGxveWVyRGV0YWlscywgc2V0RW1wbG95ZXJEZXRhaWxzXSA9IHVzZVN0YXRlPERldGFpbD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlc3VsdFJlc3BvbnNlKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBlbXBsb3llckRhdGFpbHMoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmRhdGEuYWdlbnQ7XG4gICAgICBzZXRFbXBsb3llckRldGFpbHMocmVzdWx0KTtcbiAgICB9XG4gICAgcmVzdWx0UmVzcG9uc2UoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgY29uc3Qge1xuICAgIGltYWdlLFxuICAgIG5hbWUsXG4gICAgZW1haWwsXG4gICAgZG9jdW1lbnQsXG4gICAgcGhvbmUsXG4gICAgYmlydGhfZGF0ZSxcbiAgICBpZCxcbiAgICBkZXBhcnRtZW50LFxuICAgIHJvbGUsXG4gICAgc3RhdHVzLFxuICB9ID0gZW1wbG95ZXJEZXRhaWxzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ2FyZERldGFpbHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQZXJmaWx9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lUGVyZmlsfT5cbiAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cbiAgICAgICAgICA8cD57ZW1haWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+SW5mb3JtYcOnw7VlcyBwZXNzb2FpczwvaDI+XG4gICAgICA8SW5wdXRDb21wb25lbnRcbiAgICAgICAgY3BmPXtkb2N1bWVudC5udW1iZXJ9XG4gICAgICAgIHRlbD17cGhvbmV9XG4gICAgICAgIGJpcnRoRGF0ZT17YmlydGhfZGF0ZX1cbiAgICAgIC8+XG5cbiAgICAgIDxPcmdhbml6YXRpb25hbERhdGFcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBkZXBhcnRtZW50PXtkZXBhcnRtZW50fVxuICAgICAgICByb2xlPXtyb2xlfVxuICAgICAgICBzdGF0dXM9e3N0YXR1c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRDb21wb25lbnQiLCJzdHlsZXMiLCJPcmdhbml6YXRpb25hbERhdGEiLCJlbXBsb3llckRhdGFpbHMiLCJ1c2VXaW5kb3dTaXplIiwiRGV0YWlsc0NhcmQiLCJlbXBsb3llckRldGFpbHMiLCJzZXRFbXBsb3llckRldGFpbHMiLCJyZXN1bHRSZXNwb25zZSIsInJlc3BvbnNlIiwicmVzdWx0IiwiZGF0YSIsImFnZW50Iiwic2l6ZSIsImltYWdlIiwibmFtZSIsImVtYWlsIiwiZG9jdW1lbnQiLCJwaG9uZSIsImJpcnRoX2RhdGUiLCJpZCIsImRlcGFydG1lbnQiLCJyb2xlIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2FyZERldGFpbHMiLCJjb250YWluZXJQZXJmaWwiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lUGVyZmlsIiwiaDIiLCJwIiwiY3BmIiwibnVtYmVyIiwidGVsIiwiYmlydGhEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailsCard/index.tsx\n");

/***/ })

});