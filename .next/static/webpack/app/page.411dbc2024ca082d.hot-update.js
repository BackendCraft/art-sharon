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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FloatingMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction FloatingMenu() {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const heroHeight = window.innerHeight;\n            setIsVisible(window.scrollY > heroHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: -50\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        className: \"fixed top-0 left-0 right-0 z-50 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        className: \"text-white text-xl font-bold hover:text-gray-300 transition-colors uppercase\",\n                        children: \"SHARON TORIBIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex space-x-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#art\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"ART\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#about\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#portfolio\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"PORTFOLIO\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#get-in-touch\",\n                                        className: \"text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase\",\n                                        children: \"CONTACT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden text-white\",\n                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                        \"aria-label\": \"Toggle menu\",\n                        children: isMobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isMobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n                initial: {\n                    opacity: 0,\n                    y: -20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3\n                },\n                className: \"md:hidden mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col space-y-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#art\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"ART\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#about\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"ABOUT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#portfolio\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"PORTFOLIO\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#get-in-touch\",\n                                className: \"block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase\",\n                                onClick: ()=>setIsMobileMenuOpen(false),\n                                children: \"CONTACT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\LFFG\\\\art-sharon\\\\app\\\\components\\\\navbar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(FloatingMenu, \"WCdahdHlL/ARRitpJOVs7D7/rik=\");\n_c = FloatingMenu;\nvar _c;\n$RefreshReg$(_c, \"FloatingMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDTDtBQUNWO0FBRWIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGVBQWU7WUFDbkIsTUFBTUMsYUFBYUMsT0FBT0MsV0FBVztZQUNyQ04sYUFBYUssT0FBT0UsT0FBTyxHQUFHSDtRQUNoQztRQUVBQyxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1FLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0osV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDSCxpREFBTUEsQ0FBQ2MsR0FBRztRQUNUQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7UUFDOUJDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ1A7Z0JBQUlPLFdBQVU7O2tDQUNiLDhEQUFDcEIsaURBQUlBO3dCQUFDcUIsTUFBSzt3QkFBSUQsV0FBVTtrQ0FBK0U7Ozs7OztrQ0FHeEcsOERBQUNFO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDRzs0QkFBR0gsV0FBVTs7OENBQ1osOERBQUNJOzhDQUNELDRFQUFDeEIsaURBQUlBO3dDQUFDcUIsTUFBSzt3Q0FBT0QsV0FBVTtrREFBK0U7Ozs7Ozs7Ozs7OzhDQUszRyw4REFBQ0k7OENBQ0MsNEVBQUN4QixpREFBSUE7d0NBQ0hxQixNQUFLO3dDQUNMRCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ0k7OENBQ0MsNEVBQUN4QixpREFBSUE7d0NBQ0hxQixNQUFLO3dDQUNMRCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ0k7OENBQ0MsNEVBQUN4QixpREFBSUE7d0NBQ0hxQixNQUFLO3dDQUNMRCxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1QLDhEQUFDSzt3QkFDQ0wsV0FBVTt3QkFDVk0sU0FBUyxJQUFNckIsb0JBQW9CLENBQUNEO3dCQUNwQ3VCLGNBQVc7a0NBRVZ2QixpQ0FDQyw4REFBQ3dCOzRCQUNDQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxRQUFPOzRCQUNQWixXQUFVO3NDQUVWLDRFQUFDYTtnQ0FBS0MsZUFBYztnQ0FBUUMsZ0JBQWU7Z0NBQVFDLGFBQWE7Z0NBQUdDLEdBQUU7Ozs7Ozs7Ozs7aURBR3ZFLDhEQUFDVDs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsUUFBTzs0QkFDUFosV0FBVTtzQ0FFViw0RUFBQ2E7Z0NBQUtDLGVBQWM7Z0NBQVFDLGdCQUFlO2dDQUFRQyxhQUFhO2dDQUFHQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSzVFakMsa0NBQ0MsOERBQUNMLGlEQUFNQSxDQUFDdUIsR0FBRztnQkFDVFIsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRyxDQUFDO2dCQUFHO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUk7Z0JBQzVCQyxXQUFVOzBCQUVWLDRFQUFDRztvQkFBR0gsV0FBVTs7c0NBQ1osOERBQUNJO3NDQUNDLDRFQUFDeEIsaURBQUlBO2dDQUNIcUIsTUFBSztnQ0FDTEQsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNckIsb0JBQW9COzBDQUNwQzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNtQjtzQ0FDQyw0RUFBQ3hCLGlEQUFJQTtnQ0FDSHFCLE1BQUs7Z0NBQ0xELFdBQVU7Z0NBQ1ZNLFNBQVMsSUFBTXJCLG9CQUFvQjswQ0FDcEM7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDbUI7c0NBQ0MsNEVBQUN4QixpREFBSUE7Z0NBQ0hxQixNQUFLO2dDQUNMRCxXQUFVO2dDQUNWTSxTQUFTLElBQU1yQixvQkFBb0I7MENBQ3BDOzs7Ozs7Ozs7OztzQ0FJSCw4REFBQ21CO3NDQUNDLDRFQUFDeEIsaURBQUlBO2dDQUNIcUIsTUFBSztnQ0FDTEQsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNckIsb0JBQW9COzBDQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBMUl3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeD84OTZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb2F0aW5nTWVudSgpIHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhlcm9IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgc2V0SXNWaXNpYmxlKHdpbmRvdy5zY3JvbGxZID4gaGVyb0hlaWdodClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxyXG4gIH0sIFtdKVxyXG5cclxuICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTUwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBwLTRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgU0hBUk9OIFRPUklCSU9cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjYXJ0XCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxyXG4gIEFSVFxyXG48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQUJPVVRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNwb3J0Zm9saW9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUE9SVEZPTElPXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjZ2V0LWluLXRvdWNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBtZW51XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/IChcclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiAoXHJcbiAgICAgICAgPG1vdGlvbi5uYXZcclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIG10LTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjYXJ0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBweS0yIHRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBUlRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNhYm91dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgcHktMiB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQUJPVVRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNwb3J0Zm9saW9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzIHB5LTIgdGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBPUlRGT0xJT1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2dldC1pbi10b3VjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgcHktMiB0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tb3Rpb24ubmF2PlxyXG4gICAgICApfVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiTGluayIsIkZsb2F0aW5nTWVudSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwiaGVyb0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImhyZWYiLCJuYXYiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});