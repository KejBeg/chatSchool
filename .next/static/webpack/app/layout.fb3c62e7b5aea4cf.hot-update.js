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

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"(app-pages-browser)/./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var _contexts_mainContextProvider_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/mainContextProvider.jsx */ \"(app-pages-browser)/./contexts/mainContextProvider.jsx\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/navbar */ \"(app-pages-browser)/./components/navbar.jsx\");\n/* harmony import */ var _tools_publicTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../tools/publicTools */ \"(app-pages-browser)/./tools/publicTools.jsx\");\n/* harmony import */ var _tools_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../tools/socket */ \"(app-pages-browser)/./tools/socket.js\");\n/* harmony import */ var _public_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/styles/globals.css */ \"(app-pages-browser)/./public/styles/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Module Imports\n\n// Tool Imports\n\n\n// Component Imports\n\n\n\n// Style Imports\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    // State variables\n    const [contextVariables, setContextVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Socket useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"useeffect socketj\");\n        (async ()=>{\n            setContextVariables({\n                ...contextVariables,\n                socket: _tools_socket__WEBPACK_IMPORTED_MODULE_6__.socket\n            });\n        })();\n    }, []);\n    // User Token useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            // Get user token\n            let userToken = await (0,_tools_publicTools__WEBPACK_IMPORTED_MODULE_5__.getUserToken)();\n            setContextVariables({\n                ...contextVariables,\n                userToken: userToken\n            });\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_mainContextProvider_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n                value: {\n                    ...contextVariables\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                console.log(contextVariables);\n                            },\n                            children: \"tst\"\n                        }, void 0, false, {\n                            fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n            lineNumber: 48,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kejbeg/coding/chatSchool/app/layout.jsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, this);\n}\n_s(RootLayout, \"Hp3nmaixMqnH1nnL/MEK1K3B9Vs=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlCQUFpQjtBQUMyQjtBQUU1QyxlQUFlO0FBQzJDO0FBQ0E7QUFFMUQsb0JBQW9CO0FBQ29CO0FBQ1U7QUFDWDtBQUV2QyxnQkFBZ0I7QUFDb0I7QUFFckIsU0FBU08sV0FBVyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2xDLGtCQUFrQjtJQUNsQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpELG1CQUFtQjtJQUNuQkQsZ0RBQVNBLENBQUM7UUFDVFcsUUFBUUMsR0FBRyxDQUFDO1FBQ1g7WUFDQUYsb0JBQW9CO2dCQUNuQixHQUFHRCxnQkFBZ0I7Z0JBQ25CSCxRQUFRQSxpREFBTUE7WUFDZjtRQUNEO0lBQ0QsR0FBRyxFQUFFO0lBRUwsdUJBQXVCO0lBQ3ZCTixnREFBU0EsQ0FBQztRQUNSO1lBQ0EsaUJBQWlCO1lBQ2pCLElBQUlhLFlBQVksTUFBTVIsZ0VBQVlBO1lBRWxDSyxvQkFBb0I7Z0JBQ25CLEdBQUdELGdCQUFnQjtnQkFDbkJJLFdBQVdBO1lBQ1o7UUFDRDtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNWLDRFQUFDYixvRUFBWUE7c0JBQ1osNEVBQUNDLHlFQUFTQSxDQUFDYSxRQUFRO2dCQUFDQyxPQUFPO29CQUFFLEdBQUdSLGdCQUFnQjtnQkFBQzswQkFDaEQsNEVBQUNTOztzQ0FDQSw4REFBQ0M7NEJBQ0FDLFNBQVM7Z0NBQ1JULFFBQVFDLEdBQUcsQ0FBQ0g7NEJBQ2I7c0NBQUc7Ozs7OztzQ0FHSiw4REFBQ0wsMERBQU1BOzs7Ozt3QkFDTkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNUDtHQTlDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXQuanN4PzBjODEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG4vLyBNb2R1bGUgSW1wb3J0c1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gVG9vbCBJbXBvcnRzXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwL2NsaWVudCc7XG5pbXBvcnQgbXlDb250ZXh0IGZyb20gJy9jb250ZXh0cy9tYWluQ29udGV4dFByb3ZpZGVyLmpzeCc7XG5cbi8vIENvbXBvbmVudCBJbXBvcnRzXG5pbXBvcnQgTmF2YmFyIGZyb20gJy9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgeyBnZXRVc2VyVG9rZW4gfSBmcm9tICcvdG9vbHMvcHVibGljVG9vbHMnO1xuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnL3Rvb2xzL3NvY2tldCc7XG5cbi8vIFN0eWxlIEltcG9ydHNcbmltcG9ydCAnL3B1YmxpYy9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuXHQvLyBTdGF0ZSB2YXJpYWJsZXNcblx0Y29uc3QgW2NvbnRleHRWYXJpYWJsZXMsIHNldENvbnRleHRWYXJpYWJsZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cblx0Ly8gU29ja2V0IHVzZUVmZmVjdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCd1c2VlZmZlY3Qgc29ja2V0aicpO1xuXHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRzZXRDb250ZXh0VmFyaWFibGVzKHtcblx0XHRcdFx0Li4uY29udGV4dFZhcmlhYmxlcyxcblx0XHRcdFx0c29ja2V0OiBzb2NrZXQsXG5cdFx0XHR9KTtcblx0XHR9KSgpO1xuXHR9LCBbXSk7XG5cblx0Ly8gVXNlciBUb2tlbiB1c2VFZmZlY3Rcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Ly8gR2V0IHVzZXIgdG9rZW5cblx0XHRcdGxldCB1c2VyVG9rZW4gPSBhd2FpdCBnZXRVc2VyVG9rZW4oKTtcblxuXHRcdFx0c2V0Q29udGV4dFZhcmlhYmxlcyh7XG5cdFx0XHRcdC4uLmNvbnRleHRWYXJpYWJsZXMsXG5cdFx0XHRcdHVzZXJUb2tlbjogdXNlclRva2VuLFxuXHRcdFx0fSk7XG5cdFx0fSkoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8VXNlclByb3ZpZGVyPlxuXHRcdFx0XHQ8bXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmNvbnRleHRWYXJpYWJsZXMgfX0+XG5cdFx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjb250ZXh0VmFyaWFibGVzKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdHRzdFxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8TmF2YmFyIC8+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0XHQ8L215Q29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvVXNlclByb3ZpZGVyPlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlclByb3ZpZGVyIiwibXlDb250ZXh0IiwiTmF2YmFyIiwiZ2V0VXNlclRva2VuIiwic29ja2V0IiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwiY29udGV4dFZhcmlhYmxlcyIsInNldENvbnRleHRWYXJpYWJsZXMiLCJjb25zb2xlIiwibG9nIiwidXNlclRva2VuIiwiaHRtbCIsImxhbmciLCJQcm92aWRlciIsInZhbHVlIiwiYm9keSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});