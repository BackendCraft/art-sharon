"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FloatingMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction FloatingMenu() {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const heroHeight = window.innerHeight;\n            setIsVisible(window.scrollY > heroHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: -50\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        className: \"fixed top-0 left-0 right-0 z-50 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        className: \"text-white text-xl font-bold hover:text-gray-300 transition-colors uppercase\",\n                        children: \"SHARON TORIBIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex space-x-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/gallery\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"ART\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#about\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/portfolio\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"PORTFOLIO\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#get-in-touch\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"CONTACT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden text-white\",\n                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                        \"aria-label\": \"Toggle menu\",\n                        children: isMobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isMobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n                initial: {\n                    opacity: 0,\n                    y: -20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3\n                },\n                className: \"md:hidden mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col space-y-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/gallery\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"ART\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#about\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"ABOUT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/portfolio\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"PORTFOLIO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#get-in-touch\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"CONTACT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(FloatingMenu, \"WCdahdHlL/ARRitpJOVs7D7/rik=\");\n_c = FloatingMenu;\nvar _c;\n$RefreshReg$(_c, \"FloatingMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDTDtBQUNWO0FBRWIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGVBQWU7WUFDbkIsTUFBTUMsYUFBYUMsT0FBT0MsV0FBVztZQUNyQ04sYUFBYUssT0FBT0UsT0FBTyxHQUFHSDtRQUNoQztRQUVBQyxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1FLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0osV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDSCxpREFBTUEsQ0FBQ2MsR0FBRztRQUNUQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7UUFDOUJDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ1A7Z0JBQUlPLFdBQVU7O2tDQUNiLDhEQUFDcEIsaURBQUlBO3dCQUFDcUIsTUFBSzt3QkFBSUQsV0FBVTtrQ0FBK0U7Ozs7OztrQ0FHeEcsOERBQUNFO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDRzs0QkFBR0gsV0FBVTs7OENBQ1osOERBQUNJOzhDQUNDLDRFQUFDeEIsaURBQUlBO3dDQUFDcUIsTUFBSzt3Q0FBV0QsV0FBVTtrREFBK0U7Ozs7Ozs7Ozs7OzhDQUlqSCw4REFBQ0k7OENBQ0MsNEVBQUN4QixpREFBSUE7d0NBQUNxQixNQUFLO3dDQUFTRCxXQUFVO2tEQUErRTs7Ozs7Ozs7Ozs7OENBSS9HLDhEQUFDSTs4Q0FDQyw0RUFBQ3hCLGlEQUFJQTt3Q0FBQ3FCLE1BQUs7d0NBQWFELFdBQVU7a0RBQStFOzs7Ozs7Ozs7Ozs4Q0FJbkgsOERBQUNJOzhDQUNDLDRFQUFDeEIsaURBQUlBO3dDQUFDcUIsTUFBSzt3Q0FBZ0JELFdBQVU7a0RBQStFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU0xSCw4REFBQ0s7d0JBQ0NMLFdBQVU7d0JBQ1ZNLFNBQVMsSUFBTXJCLG9CQUFvQixDQUFDRDt3QkFDcEN1QixjQUFXO2tDQUVWdkIsaUNBQ0MsOERBQUN3Qjs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsUUFBTzs0QkFDUFosV0FBVTtzQ0FFViw0RUFBQ2E7Z0NBQUtDLGVBQWM7Z0NBQVFDLGdCQUFlO2dDQUFRQyxhQUFhO2dDQUFHQyxHQUFFOzs7Ozs7Ozs7O2lEQUd2RSw4REFBQ1Q7NEJBQ0NDLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BaLFdBQVU7c0NBRVYsNEVBQUNhO2dDQUFLQyxlQUFjO2dDQUFRQyxnQkFBZTtnQ0FBUUMsYUFBYTtnQ0FBR0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUs1RWpDLGtDQUNDLDhEQUFDTCxpREFBTUEsQ0FBQ3VCLEdBQUc7Z0JBQ1RSLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBRztnQkFDOUJDLFNBQVM7b0JBQUVGLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUU7Z0JBQzVCRSxZQUFZO29CQUFFQyxVQUFVO2dCQUFJO2dCQUM1QkMsV0FBVTswQkFFViw0RUFBQ0c7b0JBQUdILFdBQVU7O3NDQUNaLDhEQUFDSTtzQ0FDQyw0RUFBQ3hCLGlEQUFJQTtnQ0FDSHFCLE1BQUs7Z0NBQ0xELFdBQVU7Z0NBQ1ZNLFNBQVMsSUFBTXJCLG9CQUFvQjswQ0FDcEM7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDbUI7c0NBQ0MsNEVBQUN4QixpREFBSUE7Z0NBQ0hxQixNQUFLO2dDQUNMRCxXQUFVO2dDQUNWTSxTQUFTLElBQU1yQixvQkFBb0I7MENBQ3BDOzs7Ozs7Ozs7OztzQ0FJSCw4REFBQ21CO3NDQUNDLDRFQUFDeEIsaURBQUlBO2dDQUNIcUIsTUFBSztnQ0FDTEQsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNckIsb0JBQW9COzBDQUNwQzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNtQjtzQ0FDQyw0RUFBQ3hCLGlEQUFJQTtnQ0FDSHFCLE1BQUs7Z0NBQ0xELFdBQVU7Z0NBQ1ZNLFNBQVMsSUFBTXJCLG9CQUFvQjswQ0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQWhJd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3g/ODk2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbG9hdGluZ01lbnUoKSB7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCBzZXRJc01vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBoZXJvSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgIHNldElzVmlzaWJsZSh3aW5kb3cuc2Nyb2xsWSA+IGhlcm9IZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcclxuICB9LCBbXSlcclxuXHJcbiAgaWYgKCFpc1Zpc2libGUpIHJldHVybiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxyXG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgcC00XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgIFNIQVJPTiBUT1JJQklPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FsbGVyeVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIEFSVFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjYWJvdXRcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgUE9SVEZPTElPXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNnZXQtaW4tdG91Y2hcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTW9iaWxlTWVudU9wZW4gPyAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA2aDE2TTQgMTJoMTZtLTcgNmg3XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgKFxyXG4gICAgICAgIDxtb3Rpb24ubmF2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBtdC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2dhbGxlcnlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHB5LTIgdGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFSVFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2Fib3V0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBweS0yIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgcHktMiB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUE9SVEZPTElPXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjZ2V0LWluLXRvdWNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBweS0yIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21vdGlvbi5uYXY+XHJcbiAgICAgICl9XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkxpbmsiLCJGbG9hdGluZ01lbnUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0SXNNb2JpbGVNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsImhlcm9IZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJocmVmIiwibmF2IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});