"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"(app-pages-browser)/./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Module Imports\n\n\n\nfunction Navbar() {\n    _s();\n    const { user, error, isLoading } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, this),\n                user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/api/auth/logout\",\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"api/auth/me\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: user.picture,\n                                    alt: \"profile picture\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 8\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/api/auth/login\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 6\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n            lineNumber: 13,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kejbeg/coding/chatSchool/components/navbar.jsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n_s(Navbar, \"z8NjDiK5azFgDeQIeOoWnL/sCfs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLGlCQUFpQjtBQUNpQjtBQUNtQjtBQUN4QjtBQUVkLFNBQVNHOztJQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR0wsbUVBQU9BO0lBRTFDLHFCQUNDLDhEQUFDTTtrQkFDQSw0RUFBQ0M7OzhCQUNBLDhEQUFDQzs4QkFDQSw0RUFBQ1AsaURBQUlBO3dCQUFDUSxNQUFLO2tDQUFJOzs7Ozs7Ozs7OztnQkFFZE4sc0JBQ0Q7O3NDQUNDLDhEQUFDSztzQ0FDQSw0RUFBQ1AsaURBQUlBO2dDQUFDUSxNQUFLOzBDQUFtQjs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDRDtzQ0FDQSw0RUFBQ1AsaURBQUlBO2dDQUFDUSxNQUFLOzBDQUNWLDRFQUFDQztvQ0FDQUMsS0FBS1IsS0FBS1MsT0FBTztvQ0FDakJDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU1SLDhEQUFDTDs4QkFDQSw0RUFBQ1AsaURBQUlBO3dCQUFDUSxNQUFLO2tDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztHQS9Cd0JQOztRQUNZRiwrREFBT0E7OztLQURuQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanN4P2Y1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG4vLyBNb2R1bGUgSW1wb3J0c1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAvY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcblx0Y29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2PlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR7KHVzZXIgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cImFwaS9hdXRoL21lXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXt1c2VyLnBpY3R1cmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJwcm9maWxlIHBpY3R1cmVcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkpIHx8IChcblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ2luXCI+TG9naW48L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KX1cblx0XHRcdDwvdWw+XG5cdFx0PC9uYXY+XG5cdCk7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VVc2VyIiwiTGluayIsIk5hdmJhciIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsIm5hdiIsInVsIiwibGkiLCJocmVmIiwiaW1nIiwic3JjIiwicGljdHVyZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navbar.jsx\n"));

/***/ })

});