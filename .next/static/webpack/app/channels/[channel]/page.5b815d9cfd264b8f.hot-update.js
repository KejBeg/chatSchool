"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/channels/[channel]/page",{

/***/ "(app-pages-browser)/./components/chatInput.jsx":
/*!**********************************!*\
  !*** ./components/chatInput.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ chatInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"(app-pages-browser)/./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var _contexts_mainContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/mainContextProvider */ \"(app-pages-browser)/./contexts/mainContextProvider.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Module Imports\n\n\n// Tool Imports\n\n// Component Imports\nfunction chatInput(param) {\n    let { currentChannelID } = param;\n    _s();\n    // State Variables\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Context Variables\n    const { userToken, socket, isConnected, transport } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_mainContextProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    // Auth0 Variables\n    const { user } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Resetting the message\n        setMessage(\"\");\n        // let created_at = new Date();\n        let created_at = new Date().toISOString().slice(0, 19).replace(\"T\", \" \");\n        // Emitting the message\n        if (user && socket) {\n            socket.emit(\"sendMessage\", {\n                channeId: currentChannelID,\n                owner: user.sub,\n                ownerName: user.name,\n                message,\n                created_at\n            });\n        }\n        let response = await fetch(\"/api/messageManagement/addMessage\", {\n            method: \"POST\",\n            headers: {\n                authorization: userToken,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message,\n                channelID: currentChannelID,\n                created_at\n            })\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chat-input-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>handleSubmit(e),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: message,\n                    onChange: (e)=>setMessage(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/kejbeg/coding/chatSchool/components/chatInput.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    hidden: !message,\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        hidden: !message,\n                        src: \"/images/send.svg\",\n                        alt: \"send\"\n                    }, void 0, false, {\n                        fileName: \"/home/kejbeg/coding/chatSchool/components/chatInput.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kejbeg/coding/chatSchool/components/chatInput.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kejbeg/coding/chatSchool/components/chatInput.jsx\",\n            lineNumber: 54,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kejbeg/coding/chatSchool/components/chatInput.jsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, this);\n}\n_s(chatInput, \"SXjpu6+RJNr5jTA/jPpb2yputGY=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2hhdElucHV0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLGlCQUFpQjtBQUN1QztBQUNIO0FBRXJELGVBQWU7QUFDeUM7QUFFeEQsb0JBQW9CO0FBRUwsU0FBU0ssVUFBVSxLQUFvQjtRQUFwQixFQUFFQyxnQkFBZ0IsRUFBRSxHQUFwQjs7SUFDakMsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2QyxvQkFBb0I7SUFDcEIsTUFBTSxFQUFFUSxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxTQUFTLEVBQUUsR0FBR1YsaURBQVVBLENBQUNFLHFFQUFXQTtJQUU1RSxrQkFBa0I7SUFDbEIsTUFBTSxFQUFFUyxJQUFJLEVBQUUsR0FBR1YsbUVBQU9BO0lBRXhCLE1BQU1XLGVBQWUsT0FBT0M7UUFDM0JBLE1BQU1DLGNBQWM7UUFFcEIsd0JBQXdCO1FBQ3hCUixXQUFXO1FBRVgsK0JBQStCO1FBQy9CLElBQUlTLGFBQWEsSUFBSUMsT0FBT0MsV0FBVyxHQUFHQyxLQUFLLENBQUMsR0FBRyxJQUFJQyxPQUFPLENBQUMsS0FBSztRQUVwRSx1QkFBdUI7UUFDdkIsSUFBSVIsUUFBUUgsUUFBUTtZQUNuQkEsT0FBT1ksSUFBSSxDQUFDLGVBQWU7Z0JBQzFCQyxVQUFVakI7Z0JBQ1ZrQixPQUFPWCxLQUFLWSxHQUFHO2dCQUNmQyxXQUFXYixLQUFLYyxJQUFJO2dCQUNwQnBCO2dCQUNBVTtZQUNEO1FBQ0Q7UUFFQSxJQUFJVyxXQUFXLE1BQU1DLE1BQU0scUNBQXFDO1lBQy9EQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1JDLGVBQWV2QjtnQkFDZixnQkFBZ0I7WUFDakI7WUFDQXdCLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRTVCO2dCQUFTNkIsV0FBVzlCO2dCQUFrQlc7WUFBVztRQUN6RTtJQUNEO0lBRUEscUJBQ0MsOERBQUNvQjtRQUFJQyxJQUFHO2tCQUNQLDRFQUFDQztZQUFLQyxVQUFVLENBQUNDLElBQU0zQixhQUFhMkI7OzhCQUNuQyw4REFBQ0M7b0JBQ0FDLE1BQUs7b0JBQ0xDLE9BQU9yQztvQkFDUHNDLFVBQVUsQ0FBQ0osSUFBTWpDLFdBQVdpQyxFQUFFSyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4QkFFM0MsOERBQUNHO29CQUNBQyxRQUFRLENBQUN6QztvQkFDVG9DLE1BQUs7OEJBQ0wsNEVBQUNNO3dCQUNBRCxRQUFRLENBQUN6Qzt3QkFDVDJDLEtBQUk7d0JBQ0pDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVjtHQTVEd0I5Qzs7UUFRTkYsK0RBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdElucHV0LmpzeD9hZDA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuLy8gTW9kdWxlIEltcG9ydHNcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMC9jbGllbnQnO1xuXG4vLyBUb29sIEltcG9ydHNcbmltcG9ydCBtYWluQ29udGV4dCBmcm9tICcvY29udGV4dHMvbWFpbkNvbnRleHRQcm92aWRlcic7XG5cbi8vIENvbXBvbmVudCBJbXBvcnRzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXRJbnB1dCh7IGN1cnJlbnRDaGFubmVsSUQgfSkge1xuXHQvLyBTdGF0ZSBWYXJpYWJsZXNcblx0Y29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG5cdC8vIENvbnRleHQgVmFyaWFibGVzXG5cdGNvbnN0IHsgdXNlclRva2VuLCBzb2NrZXQsIGlzQ29ubmVjdGVkLCB0cmFuc3BvcnQgfSA9IHVzZUNvbnRleHQobWFpbkNvbnRleHQpO1xuXG5cdC8vIEF1dGgwIFZhcmlhYmxlc1xuXHRjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gUmVzZXR0aW5nIHRoZSBtZXNzYWdlXG5cdFx0c2V0TWVzc2FnZSgnJyk7XG5cblx0XHQvLyBsZXQgY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IGNyZWF0ZWRfYXQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLnJlcGxhY2UoJ1QnLCAnICcpO1xuXG5cdFx0Ly8gRW1pdHRpbmcgdGhlIG1lc3NhZ2Vcblx0XHRpZiAodXNlciAmJiBzb2NrZXQpIHtcblx0XHRcdHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcblx0XHRcdFx0Y2hhbm5lSWQ6IGN1cnJlbnRDaGFubmVsSUQsXG5cdFx0XHRcdG93bmVyOiB1c2VyLnN1Yixcblx0XHRcdFx0b3duZXJOYW1lOiB1c2VyLm5hbWUsXG5cdFx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRcdGNyZWF0ZWRfYXQsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tZXNzYWdlTWFuYWdlbWVudC9hZGRNZXNzYWdlJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdGF1dGhvcml6YXRpb246IHVzZXJUb2tlbixcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UsIGNoYW5uZWxJRDogY3VycmVudENoYW5uZWxJRCwgY3JlYXRlZF9hdCB9KSxcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9XCJjaGF0LWlucHV0LWNvbnRhaW5lclwiPlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0dmFsdWU9e21lc3NhZ2V9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGhpZGRlbj17IW1lc3NhZ2V9XG5cdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGhpZGRlbj17IW1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRzcmM9XCIvaW1hZ2VzL3NlbmQuc3ZnXCJcblx0XHRcdFx0XHRcdGFsdD1cInNlbmRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlVXNlciIsIm1haW5Db250ZXh0IiwiY2hhdElucHV0IiwiY3VycmVudENoYW5uZWxJRCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlclRva2VuIiwic29ja2V0IiwiaXNDb25uZWN0ZWQiLCJ0cmFuc3BvcnQiLCJ1c2VyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsInJlcGxhY2UiLCJlbWl0IiwiY2hhbm5lSWQiLCJvd25lciIsInN1YiIsIm93bmVyTmFtZSIsIm5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5uZWxJRCIsImRpdiIsImlkIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJoaWRkZW4iLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/chatInput.jsx\n"));

/***/ })

});