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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst blockedAdPatterns = [\n    \"winner.rw/en/authentication/register\",\n    \"googleads.g.doubleclick.net\",\n    \"ads.youtube.com\",\n    \"player.vimeo.com\",\n    \"ad.doubleclick.net\"\n];\nfunction EmbedPlayer(props) {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const iframe = document.querySelector(\"iframe\");\n        if (iframe) {\n            const iframeUrl = iframe.src;\n            // Block the iframe if the URL matches any blocked pattern\n            const isBlocked = blockedAdPatterns.some((pattern)=>iframeUrl.includes(pattern));\n            if (isBlocked) {\n                alert(\"This content has been blocked due to external/ads-related URL.\");\n                iframe.src = \"\"; // Remove iframe source to block loading\n            }\n        }\n    }, [\n        props.url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"absolute\",\n            backgroundColor: \"#000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            src: props.url,\n            width: \"100%\",\n            height: \"100%\",\n            allowFullScreen: true,\n            style: {\n                opacity: 1\n            },\n            referrerPolicy: \"no-referrer-when-downgrade\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(EmbedPlayer, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = EmbedPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedPlayer);\nvar _c;\n$RefreshReg$(_c, \"EmbedPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dhdGNoL2VtYmVkLXBsYXllci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBCO0FBTTFCLE1BQU1DLG9CQUFvQjtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQyxZQUFZQyxLQUF1Qjs7SUFDMUNILHNEQUFlLENBQUM7UUFDZCxNQUFNSyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdEMsSUFBSUYsUUFBUTtZQUNWLE1BQU1HLFlBQVlILE9BQU9JLEdBQUc7WUFFNUIsMERBQTBEO1lBQzFELE1BQU1DLFlBQVlULGtCQUFrQlUsSUFBSSxDQUFDQyxDQUFBQSxVQUFXSixVQUFVSyxRQUFRLENBQUNEO1lBRXZFLElBQUlGLFdBQVc7Z0JBQ2JJLE1BQU07Z0JBQ05ULE9BQU9JLEdBQUcsR0FBRyxJQUFJLHdDQUF3QztZQUMzRDtRQUNGO0lBQ0YsR0FBRztRQUFDTixNQUFNWSxHQUFHO0tBQUM7SUFFZCxxQkFDRSw4REFBQ0M7UUFDQ0MsT0FBTztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxpQkFBaUI7UUFDbkI7a0JBRUEsNEVBQUNoQjtZQUNDSSxLQUFLTixNQUFNWSxHQUFHO1lBQ2RHLE9BQU07WUFDTkMsUUFBTztZQUNQRyxlQUFlO1lBQ2ZMLE9BQU87Z0JBQUVNLFNBQVM7WUFBRTtZQUNwQkMsZ0JBQWU7Ozs7Ozs7Ozs7O0FBSXZCO0dBbkNTdEI7S0FBQUE7QUFxQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2F0Y2gvZW1iZWQtcGxheWVyLnRzeD8zMWY0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBFbWJlZFBsYXllclByb3BzIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgYmxvY2tlZEFkUGF0dGVybnMgPSBbXHJcbiAgJ3dpbm5lci5ydy9lbi9hdXRoZW50aWNhdGlvbi9yZWdpc3RlcicsIC8vIEJsb2NrIHJlZ2lzdHJhdGlvbiBwYWdlcyBvciBjZXJ0YWluIFVSTCBwYXR0ZXJuc1xyXG4gICdnb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXQnLCAvLyBFeGFtcGxlIGZvciBHb29nbGUgQWRzXHJcbiAgJ2Fkcy55b3V0dWJlLmNvbScsIC8vIEV4YW1wbGUgZm9yIFlvdVR1YmUgYWRzXHJcbiAgJ3BsYXllci52aW1lby5jb20nLCAvLyBFeGFtcGxlIGZvciBWaW1lbyBhZHNcclxuICAnYWQuZG91YmxlY2xpY2submV0JywgLy8gQW5vdGhlciBHb29nbGUgQWQgc2VydmljZVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRW1iZWRQbGF5ZXIocHJvcHM6IEVtYmVkUGxheWVyUHJvcHMpIHtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJykgYXMgSFRNTElGcmFtZUVsZW1lbnQ7XHJcbiAgICBpZiAoaWZyYW1lKSB7XHJcbiAgICAgIGNvbnN0IGlmcmFtZVVybCA9IGlmcmFtZS5zcmM7XHJcblxyXG4gICAgICAvLyBCbG9jayB0aGUgaWZyYW1lIGlmIHRoZSBVUkwgbWF0Y2hlcyBhbnkgYmxvY2tlZCBwYXR0ZXJuXHJcbiAgICAgIGNvbnN0IGlzQmxvY2tlZCA9IGJsb2NrZWRBZFBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBpZnJhbWVVcmwuaW5jbHVkZXMocGF0dGVybikpO1xyXG5cclxuICAgICAgaWYgKGlzQmxvY2tlZCkge1xyXG4gICAgICAgIGFsZXJ0KCdUaGlzIGNvbnRlbnQgaGFzIGJlZW4gYmxvY2tlZCBkdWUgdG8gZXh0ZXJuYWwvYWRzLXJlbGF0ZWQgVVJMLicpO1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSAnJzsgLy8gUmVtb3ZlIGlmcmFtZSBzb3VyY2UgdG8gYmxvY2sgbG9hZGluZ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLnVybF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBzcmM9e3Byb3BzLnVybH1cclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYmVkUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJibG9ja2VkQWRQYXR0ZXJucyIsIkVtYmVkUGxheWVyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJpZnJhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZnJhbWVVcmwiLCJzcmMiLCJpc0Jsb2NrZWQiLCJzb21lIiwicGF0dGVybiIsImluY2x1ZGVzIiwiYWxlcnQiLCJ1cmwiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbGxvd0Z1bGxTY3JlZW4iLCJvcGFjaXR5IiwicmVmZXJyZXJQb2xpY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/watch/embed-player.tsx\n"));

/***/ })

});