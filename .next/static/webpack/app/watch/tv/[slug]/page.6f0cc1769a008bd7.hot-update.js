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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/EmbedPlayer.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst blockedAdDomains = [\n    \"googleads.g.doubleclick.net\",\n    \"ads.youtube.com\",\n    \"player.vimeo.com\",\n    \"ad.doubleclick.net\"\n];\nfunction EmbedPlayer(props) {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const iframe = document.querySelector(\"iframe\");\n        if (iframe) {\n            // Check the iframe's src URL against the blocked ad domains\n            const iframeUrl = new URL(iframe.src);\n            const hostname = iframeUrl.hostname;\n            // Block the iframe if it contains any ad domain\n            if (blockedAdDomains.some((domain)=>hostname.includes(domain))) {\n                alert(\"This player contains ads and has been blocked.\");\n                iframe.src = \"\"; // Remove iframe source\n            }\n        }\n    }, [\n        props.url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"absolute\",\n            backgroundColor: \"#000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            src: props.url,\n            width: \"100%\",\n            height: \"100%\",\n            allowFullScreen: true,\n            style: {\n                opacity: 1\n            },\n            referrerPolicy: \"no-referrer-when-downgrade\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Esc Byimana\\\\Documents\\\\GitHub\\\\cinegeek-beta\\\\src\\\\components\\\\watch\\\\embed-player.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(EmbedPlayer, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = EmbedPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedPlayer);\nvar _c;\n$RefreshReg$(_c, \"EmbedPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dhdGNoL2VtYmVkLXBsYXllci50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUE2Qjs7O0FBRUg7QUFNMUIsTUFBTUMsbUJBQW1CO0lBQ3ZCO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQyxZQUFZQyxLQUF1Qjs7SUFDMUNILHNEQUFlLENBQUM7UUFDZCxNQUFNSyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdEMsSUFBSUYsUUFBUTtZQUNWLDREQUE0RDtZQUM1RCxNQUFNRyxZQUFZLElBQUlDLElBQUlKLE9BQU9LLEdBQUc7WUFDcEMsTUFBTUMsV0FBV0gsVUFBVUcsUUFBUTtZQUVuQyxnREFBZ0Q7WUFDaEQsSUFBSVYsaUJBQWlCVyxJQUFJLENBQUNDLENBQUFBLFNBQVVGLFNBQVNHLFFBQVEsQ0FBQ0QsVUFBVTtnQkFDOURFLE1BQU07Z0JBQ05WLE9BQU9LLEdBQUcsR0FBRyxJQUFJLHVCQUF1QjtZQUMxQztRQUNGO0lBQ0YsR0FBRztRQUFDUCxNQUFNYSxHQUFHO0tBQUM7SUFFZCxxQkFDRSw4REFBQ0M7UUFDQ0MsT0FBTztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxpQkFBaUI7UUFDbkI7a0JBRUEsNEVBQUNqQjtZQUNDSyxLQUFLUCxNQUFNYSxHQUFHO1lBQ2RHLE9BQU07WUFDTkMsUUFBTztZQUNQRyxlQUFlO1lBQ2ZMLE9BQU87Z0JBQUVNLFNBQVM7WUFBRTtZQUNwQkMsZ0JBQWU7Ozs7Ozs7Ozs7O0FBSXZCO0dBbkNTdkI7S0FBQUE7QUFxQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2F0Y2gvZW1iZWQtcGxheWVyLnRzeD8zMWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvRW1iZWRQbGF5ZXIudHN4XHJcbid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBFbWJlZFBsYXllclByb3BzIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgYmxvY2tlZEFkRG9tYWlucyA9IFtcclxuICAnZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0JywgLy8gRXhhbXBsZSBmb3IgR29vZ2xlIEFkc1xyXG4gICdhZHMueW91dHViZS5jb20nLCAvLyBFeGFtcGxlIGZvciBZb3VUdWJlIGFkc1xyXG4gICdwbGF5ZXIudmltZW8uY29tJywgLy8gRXhhbXBsZSBmb3IgVmltZW8gYWRzXHJcbiAgJ2FkLmRvdWJsZWNsaWNrLm5ldCcsIC8vIEFub3RoZXIgR29vZ2xlIEFkIHNlcnZpY2VcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEVtYmVkUGxheWVyKHByb3BzOiBFbWJlZFBsYXllclByb3BzKSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgaWYgKGlmcmFtZSkge1xyXG4gICAgICAvLyBDaGVjayB0aGUgaWZyYW1lJ3Mgc3JjIFVSTCBhZ2FpbnN0IHRoZSBibG9ja2VkIGFkIGRvbWFpbnNcclxuICAgICAgY29uc3QgaWZyYW1lVXJsID0gbmV3IFVSTChpZnJhbWUuc3JjKTtcclxuICAgICAgY29uc3QgaG9zdG5hbWUgPSBpZnJhbWVVcmwuaG9zdG5hbWU7XHJcblxyXG4gICAgICAvLyBCbG9jayB0aGUgaWZyYW1lIGlmIGl0IGNvbnRhaW5zIGFueSBhZCBkb21haW5cclxuICAgICAgaWYgKGJsb2NrZWRBZERvbWFpbnMuc29tZShkb21haW4gPT4gaG9zdG5hbWUuaW5jbHVkZXMoZG9tYWluKSkpIHtcclxuICAgICAgICBhbGVydCgnVGhpcyBwbGF5ZXIgY29udGFpbnMgYWRzIGFuZCBoYXMgYmVlbiBibG9ja2VkLicpO1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSAnJzsgLy8gUmVtb3ZlIGlmcmFtZSBzb3VyY2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy51cmxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgc3JjPXtwcm9wcy51cmx9XHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWJlZFBsYXllcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYmxvY2tlZEFkRG9tYWlucyIsIkVtYmVkUGxheWVyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJpZnJhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZnJhbWVVcmwiLCJVUkwiLCJzcmMiLCJob3N0bmFtZSIsInNvbWUiLCJkb21haW4iLCJpbmNsdWRlcyIsImFsZXJ0IiwidXJsIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYWxsb3dGdWxsU2NyZWVuIiwib3BhY2l0eSIsInJlZmVycmVyUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/watch/embed-player.tsx\n"));

/***/ })

});