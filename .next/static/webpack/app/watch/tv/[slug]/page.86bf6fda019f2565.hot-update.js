"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/watch/tv/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/watch/embed-player.tsx":
/*!***********************************************!*\
  !*** ./src/components/watch/embed-player.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction EmbedPlayer(props) {\n    _s();\n    // Ref to the iframe element\n    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        const iframe = ref.current;\n        if (iframe) {\n            // Set the iframe source when the URL prop changes\n            iframe.src = props.url;\n            // Reset the opacity to 0 to indicate it's loading again\n            iframe.style.opacity = \"0\";\n            // Add event listener for when the iframe has fully loaded\n            iframe.addEventListener(\"load\", handleIframeLoaded);\n            // Cleanup the event listener when the component is unmounted or URL changes\n            return ()=>{\n                iframe.removeEventListener(\"load\", handleIframeLoaded);\n            };\n        }\n    }, [\n        props.url\n    ]); // Re-run the effect if the URL prop changes\n    // Function to handle iframe load event and update its opacity\n    const handleIframeLoaded = ()=>{\n        if (ref.current) {\n            ref.current.style.opacity = \"1\"; // Make iframe visible once loaded\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"absolute\",\n            backgroundColor: \"#000\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/home\",\n                style: {\n                    color: \"#fff\",\n                    position: \"absolute\",\n                    top: \"15px\",\n                    right: \"20px\"\n                },\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                ref: ref,\n                width: \"100%\",\n                height: \"100%\",\n                allowFullScreen: true,\n                style: {\n                    opacity: 0\n                },\n                referrerPolicy: \"no-referrer-when-downgrade\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(EmbedPlayer, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = EmbedPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedPlayer);\nvar _c;\n$RefreshReg$(_c, \"EmbedPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dhdGNoL2VtYmVkLXBsYXllci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU2QjtBQUNIO0FBTTFCLFNBQVNFLFlBQVlDLEtBQXVCOztJQUMxQyw0QkFBNEI7SUFDNUIsTUFBTUMsTUFBTUgsbURBQVksQ0FBb0I7SUFFNUNBLHNEQUFlLENBQUM7UUFDZCxNQUFNTSxTQUFTSCxJQUFJSSxPQUFPO1FBQzFCLElBQUlELFFBQVE7WUFDVixrREFBa0Q7WUFDbERBLE9BQU9FLEdBQUcsR0FBR04sTUFBTU8sR0FBRztZQUV0Qix3REFBd0Q7WUFDeERILE9BQU9JLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1lBRXZCLDBEQUEwRDtZQUMxREwsT0FBT00sZ0JBQWdCLENBQUMsUUFBUUM7WUFFaEMsNEVBQTRFO1lBQzVFLE9BQU87Z0JBQ0xQLE9BQU9RLG1CQUFtQixDQUFDLFFBQVFEO1lBQ3JDO1FBQ0Y7SUFDRixHQUFHO1FBQUNYLE1BQU1PLEdBQUc7S0FBQyxHQUFHLDRDQUE0QztJQUU3RCw4REFBOEQ7SUFDOUQsTUFBTUkscUJBQXFCO1FBQ3pCLElBQUlWLElBQUlJLE9BQU8sRUFBRTtZQUNmSixJQUFJSSxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssa0NBQWtDO1FBQ3JFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0wsT0FBTztZQUNMTSxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxpQkFBaUI7UUFDbkI7OzBCQUdBLDhEQUFDcEIsaURBQUlBO2dCQUNIcUIsTUFBTTtnQkFDTlYsT0FBTztvQkFDTFcsT0FBTztvQkFDUEgsVUFBVTtvQkFDVkksS0FBSztvQkFDTEMsT0FBTztnQkFDVDswQkFDRDs7Ozs7OzBCQUlELDhEQUFDakI7Z0JBQ0NILEtBQUtBO2dCQUNMYSxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQTyxlQUFlO2dCQUNmZCxPQUFPO29CQUFFQyxTQUFTO2dCQUFFO2dCQUNwQmMsZ0JBQWU7Ozs7Ozs7Ozs7OztBQUl2QjtHQTlEU3hCO0tBQUFBO0FBZ0VULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dhdGNoL2VtYmVkLXBsYXllci50c3g/MzFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEVtYmVkUGxheWVyUHJvcHMge1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFbWJlZFBsYXllcihwcm9wczogRW1iZWRQbGF5ZXJQcm9wcykge1xyXG4gIC8vIFJlZiB0byB0aGUgaWZyYW1lIGVsZW1lbnRcclxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTElGcmFtZUVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaWZyYW1lID0gcmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoaWZyYW1lKSB7XHJcbiAgICAgIC8vIFNldCB0aGUgaWZyYW1lIHNvdXJjZSB3aGVuIHRoZSBVUkwgcHJvcCBjaGFuZ2VzXHJcbiAgICAgIGlmcmFtZS5zcmMgPSBwcm9wcy51cmw7XHJcblxyXG4gICAgICAvLyBSZXNldCB0aGUgb3BhY2l0eSB0byAwIHRvIGluZGljYXRlIGl0J3MgbG9hZGluZyBhZ2FpblxyXG4gICAgICBpZnJhbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiB0aGUgaWZyYW1lIGhhcyBmdWxseSBsb2FkZWRcclxuICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVJZnJhbWVMb2FkZWQpO1xyXG5cclxuICAgICAgLy8gQ2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBvciBVUkwgY2hhbmdlc1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlSWZyYW1lTG9hZGVkKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMudXJsXSk7IC8vIFJlLXJ1biB0aGUgZWZmZWN0IGlmIHRoZSBVUkwgcHJvcCBjaGFuZ2VzXHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBpZnJhbWUgbG9hZCBldmVudCBhbmQgdXBkYXRlIGl0cyBvcGFjaXR5XHJcbiAgY29uc3QgaGFuZGxlSWZyYW1lTG9hZGVkID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7IC8vIE1ha2UgaWZyYW1lIHZpc2libGUgb25jZSBsb2FkZWRcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsvKiBCYWNrIGxpbmsgKi99XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj17Jy9ob21lJ31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgdG9wOiAnMTVweCcsXHJcbiAgICAgICAgICByaWdodDogJzIwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBCYWNrXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIEVtYmVkIGlmcmFtZSBwbGF5ZXIgKi99XHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAgfX0gLy8gTWFrZSBpZnJhbWUgaW52aXNpYmxlIHVudGlsIGxvYWRlZFxyXG4gICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1iZWRQbGF5ZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJFbWJlZFBsYXllciIsInByb3BzIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaWZyYW1lIiwiY3VycmVudCIsInNyYyIsInVybCIsInN0eWxlIiwib3BhY2l0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVJZnJhbWVMb2FkZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJjb2xvciIsInRvcCIsInJpZ2h0IiwiYWxsb3dGdWxsU2NyZWVuIiwicmVmZXJyZXJQb2xpY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/watch/embed-player.tsx\n"));

/***/ })

});