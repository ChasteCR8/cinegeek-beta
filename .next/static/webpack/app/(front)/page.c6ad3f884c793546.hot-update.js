"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(front)/page",{

/***/ "(app-pages-browser)/./src/components/Popup.tsx":
/*!**********************************!*\
  !*** ./src/components/Popup.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst AdBlockerPopup = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const steps = [\n        {\n            title: \"Step 1: Download uBlock Origin Extension\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: \"To block ads and improve your browsing experience, we recommend using the uBlock Origin extension for Chrome. Follow these steps:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mb-6 ml-5 list-disc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"Go to the official uBlock Origin page on the Chrome Web Store:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://chrome.google.com/webstore/detail/ublock-origin\",\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"text-blue-400 hover:text-blue-500\",\n                                        children: \"uBlock Origin - Chrome Web Store\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: 'Click on the \"Add to Chrome\" button to install the extension.'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: 'Click \"Add Extension\" to confirm the installation.'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true)\n        },\n        {\n            title: \"Step 2: Install uBlock Origin\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: \"After downloading the uBlock Origin extension, it should automatically install. If it doesn't, follow these steps:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mb-6 ml-5 list-disc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Once installed, you will see the uBlock Origin icon in the top-right corner of Chrome.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Click the icon to configure settings if needed.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true)\n        },\n        {\n            title: \"Step 3: Enable Ad Blocker\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: \"After installation, you need to enable the ad blocker:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mb-6 ml-5 list-disc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Click on the uBlock Origin icon in your browser's toolbar.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Ensure the switch is turned on (green) to activate the ad blocker.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"If you want to block ads on specific websites, adjust the settings accordingly in the extension's options.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true)\n        },\n        {\n            title: \"Step 4: Enjoy an Ad-Free Experience!\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4\",\n                    children: \"You are all set! Now you can browse the web without annoying ads. Enjoy a smoother and faster browsing experience.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false)\n        }\n    ];\n    const nextStep = ()=>{\n        if (currentStep < steps.length - 1) {\n            setCurrentStep(currentStep + 1);\n        } else {\n            onClose(); // Close this popup when finished\n        }\n    };\n    const prevStep = ()=>{\n        if (currentStep > 0) {\n            setCurrentStep(currentStep - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-lg rounded-lg bg-gray-900 p-8 text-white shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-4 text-2xl font-semibold\",\n                    children: steps[currentStep].title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, undefined),\n                steps[currentStep].content,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 flex justify-between\",\n                    children: [\n                        currentStep > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded-md bg-gray-600 px-6 py-2 text-white transition duration-200 hover:bg-gray-700\",\n                            onClick: prevStep,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded-md bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700\",\n                            onClick: nextStep,\n                            children: currentStep < steps.length - 1 ? \"Next\" : \"Got it!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AdBlockerPopup, \"1sJm2lQ2mRX7Y0EEARB7TDldOEM=\");\n_c = AdBlockerPopup;\nconst Popup = ()=>{\n    _s1();\n    const [isVisibleStep1, setIsVisibleStep1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isVisibleStep2, setIsVisibleStep2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if the user has already seen the popup\n        const hasVisited = localStorage.getItem(\"hasVisited\");\n        if (!hasVisited) {\n            setIsVisibleStep1(true); // Show the first popup\n            localStorage.setItem(\"hasVisited\", \"true\"); // Set to prevent showing again\n        }\n    }, []);\n    const handleCloseStep1 = ()=>{\n        setIsVisibleStep1(false); // Hide Step 1\n        setIsVisibleStep2(true); // Show Step 2\n    };\n    const handleCloseStep2 = ()=>{\n        setIsVisibleStep2(false); // Close Step 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isVisibleStep1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AdBlockerPopup, {\n                onClose: handleCloseStep1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                lineNumber: 137,\n                columnNumber: 32\n            }, undefined),\n            isVisibleStep2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PopupStep2, {\n                onClose: handleCloseStep2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\Popup.tsx\",\n                lineNumber: 138,\n                columnNumber: 32\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s1(Popup, \"dF3L49IjYvejsnTubAGiCfBsTXw=\");\n_c1 = Popup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popup);\nvar _c, _c1;\n$RefreshReg$(_c, \"AdBlockerPopup\");\n$RefreshReg$(_c1, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUQ7QUFFbkQsTUFBTUcsaUJBQWlCO1FBQUMsRUFBRUMsT0FBTyxFQUEyQjs7SUFDeEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1NLFFBQVE7UUFDVjtZQUNJQyxPQUFPO1lBQ1BDLHVCQUNJOztrQ0FDSSw4REFBQ0M7d0JBQUVDLFdBQVU7a0NBQU87Ozs7OztrQ0FHcEIsOERBQUNDO3dCQUFHRCxXQUFVOzswQ0FDViw4REFBQ0U7O29DQUFHO29DQUMrRDtrREFDL0QsOERBQUNDO3dDQUNHQyxNQUFLO3dDQUNMQyxRQUFPO3dDQUNQQyxLQUFJO3dDQUNKTixXQUFVO2tEQUNiOzs7Ozs7Ozs7Ozs7MENBSUwsOERBQUNFOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7OztRQUlwQjtRQUNBO1lBQ0lMLE9BQU87WUFDUEMsdUJBQ0k7O2tDQUNJLDhEQUFDQzt3QkFBRUMsV0FBVTtrQ0FBTzs7Ozs7O2tDQUdwQiw4REFBQ0M7d0JBQUdELFdBQVU7OzBDQUNWLDhEQUFDRTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7UUFJcEI7UUFDQTtZQUNJTCxPQUFPO1lBQ1BDLHVCQUNJOztrQ0FDSSw4REFBQ0M7d0JBQUVDLFdBQVU7a0NBQU87Ozs7OztrQ0FHcEIsOERBQUNDO3dCQUFHRCxXQUFVOzswQ0FDViw4REFBQ0U7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7Ozs7O1FBSXBCO1FBQ0E7WUFDSUwsT0FBTztZQUNQQyx1QkFDSTswQkFDSSw0RUFBQ0M7b0JBQUVDLFdBQVU7OEJBQU87Ozs7Ozs7UUFLaEM7S0FDSDtJQUVELE1BQU1PLFdBQVc7UUFDYixJQUFJYixjQUFjRSxNQUFNWSxNQUFNLEdBQUcsR0FBRztZQUNoQ2IsZUFBZUQsY0FBYztRQUNqQyxPQUFPO1lBQ0hELFdBQVcsaUNBQWlDO1FBQ2hEO0lBQ0o7SUFFQSxNQUFNZ0IsV0FBVztRQUNiLElBQUlmLGNBQWMsR0FBRztZQUNqQkMsZUFBZUQsY0FBYztRQUNqQztJQUNKO0lBRUEscUJBQ0ksOERBQUNnQjtRQUFJVixXQUFVO2tCQUNYLDRFQUFDVTtZQUFJVixXQUFVOzs4QkFDWCw4REFBQ1c7b0JBQUdYLFdBQVU7OEJBQStCSixLQUFLLENBQUNGLFlBQVksQ0FBQ0csS0FBSzs7Ozs7O2dCQUNwRUQsS0FBSyxDQUFDRixZQUFZLENBQUNJLE9BQU87OEJBQzNCLDhEQUFDWTtvQkFBSVYsV0FBVTs7d0JBQ1ZOLGNBQWMsbUJBQ1gsOERBQUNrQjs0QkFDR1osV0FBVTs0QkFDVmEsU0FBU0o7c0NBQVU7Ozs7OztzQ0FJM0IsOERBQUNHOzRCQUNHWixXQUFVOzRCQUNWYSxTQUFTTjtzQ0FDUmIsY0FBY0UsTUFBTVksTUFBTSxHQUFHLElBQUksU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0ExR01oQjtLQUFBQTtBQTRHTixNQUFNc0IsUUFBUTs7SUFDVixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUMyQixnQkFBZ0JDLGtCQUFrQixHQUFHNUIsK0NBQVFBLENBQUM7SUFFckRDLGdEQUFTQSxDQUFDO1FBQ04sK0NBQStDO1FBQy9DLE1BQU00QixhQUFhQyxhQUFhQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDRixZQUFZO1lBQ2JILGtCQUFrQixPQUFPLHVCQUF1QjtZQUNoREksYUFBYUUsT0FBTyxDQUFDLGNBQWMsU0FBUywrQkFBK0I7UUFDL0U7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxtQkFBbUI7UUFDckJQLGtCQUFrQixRQUFRLGNBQWM7UUFDeENFLGtCQUFrQixPQUFRLGNBQWM7SUFDNUM7SUFFQSxNQUFNTSxtQkFBbUI7UUFDckJOLGtCQUFrQixRQUFRLGVBQWU7SUFDN0M7SUFFQSxxQkFDSTs7WUFDS0gsZ0NBQWtCLDhEQUFDdkI7Z0JBQWVDLFNBQVM4Qjs7Ozs7O1lBQzNDTixnQ0FBa0IsOERBQUNRO2dCQUFXaEMsU0FBUytCOzs7Ozs7OztBQUdwRDtJQTVCTVY7TUFBQUE7QUE4Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAudHN4Pzk2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBZEJsb2NrZXJQb3B1cCA9ICh7IG9uQ2xvc2UgfTogeyBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgc3RlcHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0ZXAgMTogRG93bmxvYWQgdUJsb2NrIE9yaWdpbiBFeHRlbnNpb24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gYmxvY2sgYWRzIGFuZCBpbXByb3ZlIHlvdXIgYnJvd3NpbmcgZXhwZXJpZW5jZSwgd2UgcmVjb21tZW5kIHVzaW5nIHRoZSB1QmxvY2sgT3JpZ2luIGV4dGVuc2lvbiBmb3IgQ2hyb21lLiBGb2xsb3cgdGhlc2Ugc3RlcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi02IG1sLTUgbGlzdC1kaXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIHRoZSBvZmZpY2lhbCB1QmxvY2sgT3JpZ2luIHBhZ2Ugb24gdGhlIENocm9tZSBXZWIgU3RvcmU6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL3VibG9jay1vcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1QmxvY2sgT3JpZ2luIC0gQ2hyb21lIFdlYiBTdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2xpY2sgb24gdGhlIFwiQWRkIHRvIENocm9tZVwiIGJ1dHRvbiB0byBpbnN0YWxsIHRoZSBleHRlbnNpb24uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsaWNrIFwiQWRkIEV4dGVuc2lvblwiIHRvIGNvbmZpcm0gdGhlIGluc3RhbGxhdGlvbi48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdGVwIDI6IEluc3RhbGwgdUJsb2NrIE9yaWdpbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZnRlciBkb3dubG9hZGluZyB0aGUgdUJsb2NrIE9yaWdpbiBleHRlbnNpb24sIGl0IHNob3VsZCBhdXRvbWF0aWNhbGx5IGluc3RhbGwuIElmIGl0IGRvZXNuJ3QsIGZvbGxvdyB0aGVzZSBzdGVwczpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTYgbWwtNSBsaXN0LWRpc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9uY2UgaW5zdGFsbGVkLCB5b3Ugd2lsbCBzZWUgdGhlIHVCbG9jayBPcmlnaW4gaWNvbiBpbiB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiBDaHJvbWUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsaWNrIHRoZSBpY29uIHRvIGNvbmZpZ3VyZSBzZXR0aW5ncyBpZiBuZWVkZWQuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RlcCAzOiBFbmFibGUgQWQgQmxvY2tlcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZnRlciBpbnN0YWxsYXRpb24sIHlvdSBuZWVkIHRvIGVuYWJsZSB0aGUgYWQgYmxvY2tlcjpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTYgbWwtNSBsaXN0LWRpc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsaWNrIG9uIHRoZSB1QmxvY2sgT3JpZ2luIGljb24gaW4geW91ciBicm93c2VyJ3MgdG9vbGJhci48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW5zdXJlIHRoZSBzd2l0Y2ggaXMgdHVybmVkIG9uIChncmVlbikgdG8gYWN0aXZhdGUgdGhlIGFkIGJsb2NrZXIuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklmIHlvdSB3YW50IHRvIGJsb2NrIGFkcyBvbiBzcGVjaWZpYyB3ZWJzaXRlcywgYWRqdXN0IHRoZSBzZXR0aW5ncyBhY2NvcmRpbmdseSBpbiB0aGUgZXh0ZW5zaW9uJ3Mgb3B0aW9ucy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdGVwIDQ6IEVuam95IGFuIEFkLUZyZWUgRXhwZXJpZW5jZSEnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBhbGwgc2V0ISBOb3cgeW91IGNhbiBicm93c2UgdGhlIHdlYiB3aXRob3V0IGFubm95aW5nIGFkcy4gRW5qb3kgYSBzbW9vdGhlciBhbmQgZmFzdGVyIGJyb3dzaW5nIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgbmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdGVwIDwgc3RlcHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKTsgLy8gQ2xvc2UgdGhpcyBwb3B1cCB3aGVuIGZpbmlzaGVkXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2U3RlcCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgcm91bmRlZC1sZyBiZy1ncmF5LTkwMCBwLTggdGV4dC13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj57c3RlcHNbY3VycmVudFN0ZXBdLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7c3RlcHNbY3VycmVudFN0ZXBdLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFN0ZXAgPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmF5LTYwMCBweC02IHB5LTIgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcmV2U3RlcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ibHVlLTYwMCBweC02IHB5LTIgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1ibHVlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRTdGVwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwIDwgc3RlcHMubGVuZ3RoIC0gMSA/ICdOZXh0JyA6ICdHb3QgaXQhJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBQb3B1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc1Zpc2libGVTdGVwMSwgc2V0SXNWaXNpYmxlU3RlcDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzVmlzaWJsZVN0ZXAyLCBzZXRJc1Zpc2libGVTdGVwMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBzZWVuIHRoZSBwb3B1cFxyXG4gICAgICAgIGNvbnN0IGhhc1Zpc2l0ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzVmlzaXRlZCcpO1xyXG4gICAgICAgIGlmICghaGFzVmlzaXRlZCkge1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGVTdGVwMSh0cnVlKTsgLy8gU2hvdyB0aGUgZmlyc3QgcG9wdXBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhc1Zpc2l0ZWQnLCAndHJ1ZScpOyAvLyBTZXQgdG8gcHJldmVudCBzaG93aW5nIGFnYWluXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU3RlcDEgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlU3RlcDEoZmFsc2UpOyAvLyBIaWRlIFN0ZXAgMVxyXG4gICAgICAgIHNldElzVmlzaWJsZVN0ZXAyKHRydWUpOyAgLy8gU2hvdyBTdGVwIDJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTdGVwMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1Zpc2libGVTdGVwMihmYWxzZSk7IC8vIENsb3NlIFN0ZXAgMlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc1Zpc2libGVTdGVwMSAmJiA8QWRCbG9ja2VyUG9wdXAgb25DbG9zZT17aGFuZGxlQ2xvc2VTdGVwMX0gLz59XHJcbiAgICAgICAgICAgIHtpc1Zpc2libGVTdGVwMiAmJiA8UG9wdXBTdGVwMiBvbkNsb3NlPXtoYW5kbGVDbG9zZVN0ZXAyfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZEJsb2NrZXJQb3B1cCIsIm9uQ2xvc2UiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwic3RlcHMiLCJ0aXRsZSIsImNvbnRlbnQiLCJwIiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwibmV4dFN0ZXAiLCJsZW5ndGgiLCJwcmV2U3RlcCIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsIlBvcHVwIiwiaXNWaXNpYmxlU3RlcDEiLCJzZXRJc1Zpc2libGVTdGVwMSIsImlzVmlzaWJsZVN0ZXAyIiwic2V0SXNWaXNpYmxlU3RlcDIiLCJoYXNWaXNpdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVDbG9zZVN0ZXAxIiwiaGFuZGxlQ2xvc2VTdGVwMiIsIlBvcHVwU3RlcDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Popup.tsx\n"));

/***/ })

});