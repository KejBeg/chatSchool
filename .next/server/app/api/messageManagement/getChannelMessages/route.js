"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/messageManagement/getChannelMessages/route";
exports.ids = ["app/api/messageManagement/getChannelMessages/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&page=%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute.jsx&appDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&page=%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute.jsx&appDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kejbeg_coding_chatSchool_app_api_messageManagement_getChannelMessages_route_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/messageManagement/getChannelMessages/route.jsx */ \"(rsc)/./app/api/messageManagement/getChannelMessages/route.jsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messageManagement/getChannelMessages/route\",\n        pathname: \"/api/messageManagement/getChannelMessages\",\n        filename: \"route\",\n        bundlePath: \"app/api/messageManagement/getChannelMessages/route\"\n    },\n    resolvedPagePath: \"/home/kejbeg/coding/chatSchool/app/api/messageManagement/getChannelMessages/route.jsx\",\n    nextConfigOutput,\n    userland: _home_kejbeg_coding_chatSchool_app_api_messageManagement_getChannelMessages_route_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/messageManagement/getChannelMessages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlTWFuYWdlbWVudCUyRmdldENoYW5uZWxNZXNzYWdlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbWVzc2FnZU1hbmFnZW1lbnQlMkZnZXRDaGFubmVsTWVzc2FnZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtZXNzYWdlTWFuYWdlbWVudCUyRmdldENoYW5uZWxNZXNzYWdlcyUyRnJvdXRlLmpzeCZhcHBEaXI9JTJGaG9tZSUyRmtlamJlZyUyRmNvZGluZyUyRmNoYXRTY2hvb2wlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZrZWpiZWclMkZjb2RpbmclMkZjaGF0U2Nob29sJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRzY2hvb2wvPzYyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUva2VqYmVnL2NvZGluZy9jaGF0U2Nob29sL2FwcC9hcGkvbWVzc2FnZU1hbmFnZW1lbnQvZ2V0Q2hhbm5lbE1lc3NhZ2VzL3JvdXRlLmpzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVzc2FnZU1hbmFnZW1lbnQvZ2V0Q2hhbm5lbE1lc3NhZ2VzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVzc2FnZU1hbmFnZW1lbnQvZ2V0Q2hhbm5lbE1lc3NhZ2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tZXNzYWdlTWFuYWdlbWVudC9nZXRDaGFubmVsTWVzc2FnZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9rZWpiZWcvY29kaW5nL2NoYXRTY2hvb2wvYXBwL2FwaS9tZXNzYWdlTWFuYWdlbWVudC9nZXRDaGFubmVsTWVzc2FnZXMvcm91dGUuanN4XCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9tZXNzYWdlTWFuYWdlbWVudC9nZXRDaGFubmVsTWVzc2FnZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&page=%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute.jsx&appDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/messageManagement/getChannelMessages/route.jsx":
/*!****************************************************************!*\
  !*** ./app/api/messageManagement/getChannelMessages/route.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _tools_privateTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../tools/privateTools */ \"(rsc)/./tools/privateTools.jsx\");\n/* harmony import */ var _tools_database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../tools/database.js */ \"(rsc)/./tools/database.js\");\n/* harmony import */ var _tools_publicTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../tools/publicTools */ \"(rsc)/./tools/publicTools.jsx\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"(rsc)/./node_modules/@auth0/nextjs-auth0/dist/index.js\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__);\n// Module Imports\n// Tool Imports\n\n\n\n\nasync function POST(request) {\n    try {\n        const requestBody = await request.json();\n        const authorization = request.headers.get(\"authorization\");\n        const channelID = requestBody.channelID;\n        const userObject = await (0,_tools_publicTools__WEBPACK_IMPORTED_MODULE_2__.getUserObjectByToken)(authorization);\n        // Check if the channel name is provided\n        if (!channelID) {\n            return new Response(\"Channel ID is required\", {\n                status: 400\n            });\n        }\n        // Check if authorization or userObject is null\n        if (!authorization || !userObject) {\n            return new Response(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        // Getting all messages for the channel\n        let messages = await (0,_tools_database_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(`SELECT * FROM messages WHERE channel = ? ORDER BY created_at ASC`, [\n            channelID\n        ]);\n        messages = JSON.parse(messages);\n        let allUsers = await (0,_tools_privateTools__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)();\n        // Get the owner name for each message\n        messages = messages.map((message)=>{\n            let ownerObject = allUsers.find((user)=>user.user_id === message.owner);\n            message.ownerName = ownerObject.name;\n            return message;\n        });\n        return new Response(JSON.stringify(messages), {\n            status: 200\n        });\n    } catch (error) {\n        console.log(error);\n        return new Response(\"An error occurred\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lc3NhZ2VNYW5hZ2VtZW50L2dldENoYW5uZWxNZXNzYWdlcy9yb3V0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBRWpCLGVBQWU7QUFDdUQ7QUFDcEI7QUFDUTtBQUVyQjtBQUU5QixlQUFlSSxLQUFLQyxPQUFPO0lBQ2pDLElBQUk7UUFDSCxNQUFNQyxjQUFjLE1BQU1ELFFBQVFFLElBQUk7UUFDdEMsTUFBTUMsZ0JBQWdCSCxRQUFRSSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUMxQyxNQUFNQyxZQUFZTCxZQUFZSyxTQUFTO1FBQ3ZDLE1BQU1DLGFBQWEsTUFBTVQsd0VBQW9CQSxDQUFDSztRQUU5Qyx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDRyxXQUFXO1lBQ2YsT0FBTyxJQUFJRSxTQUFTLDBCQUEwQjtnQkFBRUMsUUFBUTtZQUFJO1FBQzdEO1FBRUEsK0NBQStDO1FBQy9DLElBQUksQ0FBQ04saUJBQWlCLENBQUNJLFlBQVk7WUFDbEMsT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtnQkFBRUMsUUFBUTtZQUFJO1FBQ25EO1FBRUEsdUNBQXVDO1FBQ3ZDLElBQUlDLFdBQVcsTUFBTWIsZ0VBQVlBLENBQ2hDLENBQUMsZ0VBQWdFLENBQUMsRUFDbEU7WUFBQ1M7U0FBVTtRQUVaSSxXQUFXQyxLQUFLQyxLQUFLLENBQUNGO1FBRXRCLElBQUlHLFdBQVcsTUFBTWpCLGdFQUFXQTtRQUVoQyxzQ0FBc0M7UUFDdENjLFdBQVdBLFNBQVNJLEdBQUcsQ0FBQyxDQUFDQztZQUN4QixJQUFJQyxjQUFjSCxTQUFTSSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsT0FBTyxLQUFLSixRQUFRSyxLQUFLO1lBQ3hFTCxRQUFRTSxTQUFTLEdBQUdMLFlBQVlNLElBQUk7WUFDcEMsT0FBT1A7UUFDUjtRQUVBLE9BQU8sSUFBSVAsU0FBU0csS0FBS1ksU0FBUyxDQUFDYixXQUFXO1lBQUVELFFBQVE7UUFBSTtJQUM3RCxFQUFFLE9BQU9lLE9BQU87UUFDZkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU8sSUFBSWhCLFNBQVMscUJBQXFCO1lBQUVDLFFBQVE7UUFBSTtJQUN4RDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNjaG9vbC8uL2FwcC9hcGkvbWVzc2FnZU1hbmFnZW1lbnQvZ2V0Q2hhbm5lbE1lc3NhZ2VzL3JvdXRlLmpzeD8zNDU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZSBJbXBvcnRzXG5cbi8vIFRvb2wgSW1wb3J0c1xuaW1wb3J0IHsgZ2V0VXNlck9iamVjdEJ5U3ViLCBnZXRBbGxVc2VycyB9IGZyb20gJy90b29scy9wcml2YXRlVG9vbHMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1ZXJ5IH0gZnJvbSAnL3Rvb2xzL2RhdGFiYXNlLmpzJztcbmltcG9ydCB7IGdldFVzZXJPYmplY3RCeVRva2VuIH0gZnJvbSAnL3Rvb2xzL3B1YmxpY1Rvb2xzJztcblxuaW1wb3J0IHt9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVxdWVzdEJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpO1xuXHRcdGNvbnN0IGNoYW5uZWxJRCA9IHJlcXVlc3RCb2R5LmNoYW5uZWxJRDtcblx0XHRjb25zdCB1c2VyT2JqZWN0ID0gYXdhaXQgZ2V0VXNlck9iamVjdEJ5VG9rZW4oYXV0aG9yaXphdGlvbik7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgY2hhbm5lbCBuYW1lIGlzIHByb3ZpZGVkXG5cdFx0aWYgKCFjaGFubmVsSUQpIHtcblx0XHRcdHJldHVybiBuZXcgUmVzcG9uc2UoJ0NoYW5uZWwgSUQgaXMgcmVxdWlyZWQnLCB7IHN0YXR1czogNDAwIH0pO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIGF1dGhvcml6YXRpb24gb3IgdXNlck9iamVjdCBpcyBudWxsXG5cdFx0aWYgKCFhdXRob3JpemF0aW9uIHx8ICF1c2VyT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKCdVbmF1dGhvcml6ZWQnLCB7IHN0YXR1czogNDAxIH0pO1xuXHRcdH1cblxuXHRcdC8vIEdldHRpbmcgYWxsIG1lc3NhZ2VzIGZvciB0aGUgY2hhbm5lbFxuXHRcdGxldCBtZXNzYWdlcyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShcblx0XHRcdGBTRUxFQ1QgKiBGUk9NIG1lc3NhZ2VzIFdIRVJFIGNoYW5uZWwgPSA/IE9SREVSIEJZIGNyZWF0ZWRfYXQgQVNDYCxcblx0XHRcdFtjaGFubmVsSURdXG5cdFx0KTtcblx0XHRtZXNzYWdlcyA9IEpTT04ucGFyc2UobWVzc2FnZXMpO1xuXG5cdFx0bGV0IGFsbFVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoKTtcblxuXHRcdC8vIEdldCB0aGUgb3duZXIgbmFtZSBmb3IgZWFjaCBtZXNzYWdlXG5cdFx0bWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcblx0XHRcdGxldCBvd25lck9iamVjdCA9IGFsbFVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIudXNlcl9pZCA9PT0gbWVzc2FnZS5vd25lcik7XG5cdFx0XHRtZXNzYWdlLm93bmVyTmFtZSA9IG93bmVyT2JqZWN0Lm5hbWU7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLCB7IHN0YXR1czogMjAwIH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKCdBbiBlcnJvciBvY2N1cnJlZCcsIHsgc3RhdHVzOiA1MDAgfSk7XG5cdH1cbn1cblxuIl0sIm5hbWVzIjpbImdldFVzZXJPYmplY3RCeVN1YiIsImdldEFsbFVzZXJzIiwiZXhlY3V0ZVF1ZXJ5IiwiZ2V0VXNlck9iamVjdEJ5VG9rZW4iLCJQT1NUIiwicmVxdWVzdCIsInJlcXVlc3RCb2R5IiwianNvbiIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiZ2V0IiwiY2hhbm5lbElEIiwidXNlck9iamVjdCIsIlJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZXMiLCJKU09OIiwicGFyc2UiLCJhbGxVc2VycyIsIm1hcCIsIm1lc3NhZ2UiLCJvd25lck9iamVjdCIsImZpbmQiLCJ1c2VyIiwidXNlcl9pZCIsIm93bmVyIiwib3duZXJOYW1lIiwibmFtZSIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/messageManagement/getChannelMessages/route.jsx\n");

/***/ }),

/***/ "(rsc)/./tools/privateTools.jsx":
/*!********************************!*\
  !*** ./tools/privateTools.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getNextAccessToken: () => (/* binding */ getNextAccessToken),\n/* harmony export */   getUserObjectBySub: () => (/* binding */ getUserObjectBySub),\n/* harmony export */   getUserObjext: () => (/* binding */ getUserObjext),\n/* harmony export */   sendUserMetaData: () => (/* binding */ sendUserMetaData)\n/* harmony export */ });\n/**\n * Retrieves the NEXT access token from the server.\n * @returns {Promise<string|null>} The access token or null if the request fails.\n */ async function getNextAccessToken() {\n    let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/oauth/token`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            client_id: process.env.NEXT_ACCESS_TOKEN_CLIENT_ID,\n            client_secret: process.env.NEXT_ACCESS_TOKEN_CLIENT_SECRET,\n            audience: `${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/api/v2/`,\n            grant_type: process.env.NEXT_ACCESS_TOKEN_GRANT_TYPE\n        })\n    });\n    // Check if response is ok\n    if (!response.ok) return null;\n    // If response is ok, return data\n    let data = await response.json();\n    let accessToken = data.access_token;\n    return accessToken;\n}\n/**\n * Retrieves the user object using the provided access token.\n * @param {string} accessToken - The access token for authentication.\n * @returns {Promise<object|null>} - A promise that resolves to the user object if successful, or null if there was an error.\n */ async function getUserObjext(accessToken) {\n    let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/userinfo`, {\n        headers: {\n            Authorization: `Bearer ${accessToken}`\n        }\n    });\n    // Check if response is ok\n    if (!response.ok) return null;\n    // If response is ok, return data\n    let data = await response.json();\n    return data;\n}\n/**\n * Sends user metadata to the server.\n * @param {string} userToken - The user token.\n * @param {object} object - The user metadata object.\n */ async function sendUserMetaData(userToken, object) {\n    const userObject = await getUserObjectByToken(userToken);\n    let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/api/v2/users/${userObject.sub}`, {\n        method: \"PATCH\",\n        headers: {\n            authorization: `Bearer ${getNextAccessToken()}`,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            app_metadata: {\n                object\n            }\n        })\n    });\n}\n/**\n * Retrieves the user object by userSub.\n *\n * @param {string} userSub - The userSub to retrieve the user object for.\n * @returns {Promise<Object>} - The user object.\n */ async function getUserObjectBySub(userSub) {\n    let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/api/v2/users/${userSub}`, {\n        method: \"GET\",\n        headers: {\n            authorization: `Bearer ${await getNextAccessToken()}`\n        }\n    });\n    if (!response.ok) return null;\n    let data = await response.json();\n    return data;\n}\n/**\n * Retrieves all users from the API.\n * @returns {Promise<Object[]|null>} A promise that resolves to an array of user objects, or null if the request fails.\n */ async function getAllUsers() {\n    let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/api/v2/users`, {\n        method: \"GET\",\n        headers: {\n            authorization: `Bearer ${await getNextAccessToken()}`\n        }\n    });\n    if (!response.ok) return null;\n    let data = await response.json();\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi90b29scy9wcml2YXRlVG9vbHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztDQUdDLEdBQ00sZUFBZUE7SUFDckIsSUFBSUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRUMsMkNBQW9DLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDakZHLFFBQVE7UUFDUkMsU0FBUztZQUNSLGdCQUFnQjtRQUNqQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDcEJDLFdBQVdSLFFBQVFDLEdBQUcsQ0FBQ1EsMkJBQTJCO1lBQ2xEQyxlQUFlVixRQUFRQyxHQUFHLENBQUNVLCtCQUErQjtZQUMxREMsVUFBVSxDQUFDLEVBQUVaLDJDQUFvQyxDQUFDLFFBQVEsQ0FBQztZQUMzRGEsWUFBWWIsUUFBUUMsR0FBRyxDQUFDYSw0QkFBNEI7UUFDckQ7SUFDRDtJQUVBLDBCQUEwQjtJQUMxQixJQUFJLENBQUNoQixTQUFTaUIsRUFBRSxFQUFFLE9BQU87SUFFekIsaUNBQWlDO0lBQ2pDLElBQUlDLE9BQU8sTUFBTWxCLFNBQVNtQixJQUFJO0lBQzlCLElBQUlDLGNBQWNGLEtBQUtHLFlBQVk7SUFDbkMsT0FBT0Q7QUFDUjtBQUVBOzs7O0NBSUMsR0FDTSxlQUFlRSxjQUFjRixXQUFXO0lBQzlDLElBQUlwQixXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQywyQ0FBb0MsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM5RUksU0FBUztZQUNSaUIsZUFBZSxDQUFDLE9BQU8sRUFBRUgsWUFBWSxDQUFDO1FBQ3ZDO0lBQ0Q7SUFFQSwwQkFBMEI7SUFDMUIsSUFBSSxDQUFDcEIsU0FBU2lCLEVBQUUsRUFBRSxPQUFPO0lBRXpCLGlDQUFpQztJQUNqQyxJQUFJQyxPQUFPLE1BQU1sQixTQUFTbUIsSUFBSTtJQUM5QixPQUFPRDtBQUNSO0FBRUE7Ozs7Q0FJQyxHQUNNLGVBQWVNLGlCQUFpQkMsU0FBUyxFQUFFQyxNQUFNO0lBQ3ZELE1BQU1DLGFBQWEsTUFBTUMscUJBQXFCSDtJQUU5QyxJQUFJekIsV0FBVyxNQUFNQyxNQUNwQixDQUFDLEVBQUVDLDJDQUFvQyxDQUFDLGNBQWMsRUFBRXlCLFdBQVdFLEdBQUcsQ0FBQyxDQUFDLEVBQ3hFO1FBQ0N4QixRQUFRO1FBQ1JDLFNBQVM7WUFDUndCLGVBQWUsQ0FBQyxPQUFPLEVBQUUvQixxQkFBcUIsQ0FBQztZQUMvQyxnQkFBZ0I7UUFDakI7UUFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ3BCc0IsY0FBYztnQkFBRUw7WUFBTztRQUN4QjtJQUNEO0FBRUY7QUFFQTs7Ozs7Q0FLQyxHQUNNLGVBQWVNLG1CQUFtQkMsT0FBTztJQUMvQyxJQUFJakMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRUMsMkNBQW9DLENBQUMsY0FBYyxFQUFFK0IsUUFBUSxDQUFDLEVBQUU7UUFDN0Y1QixRQUFRO1FBQ1JDLFNBQVM7WUFDUndCLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTS9CLHFCQUFxQixDQUFDO1FBQ3REO0lBQ0Q7SUFFQSxJQUFJLENBQUNDLFNBQVNpQixFQUFFLEVBQUUsT0FBTztJQUV6QixJQUFJQyxPQUFPLE1BQU1sQixTQUFTbUIsSUFBSTtJQUU5QixPQUFPRDtBQUNSO0FBRUE7OztDQUdDLEdBQ00sZUFBZWdCO0lBQ3JCLElBQUlsQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQywyQ0FBb0MsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNsRkcsUUFBUTtRQUNSQyxTQUFTO1lBQ1J3QixlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU0vQixxQkFBcUIsQ0FBQztRQUN0RDtJQUNEO0lBRUEsSUFBSSxDQUFDQyxTQUFTaUIsRUFBRSxFQUFFLE9BQU87SUFFekIsSUFBSUMsT0FBTyxNQUFNbEIsU0FBU21CLElBQUk7SUFFOUIsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRzY2hvb2wvLi90b29scy9wcml2YXRlVG9vbHMuanN4PzQ1YzQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIE5FWFQgYWNjZXNzIHRva2VuIGZyb20gdGhlIHNlcnZlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3xudWxsPn0gVGhlIGFjY2VzcyB0b2tlbiBvciBudWxsIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dEFjY2Vzc1Rva2VuKCkge1xuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9ET01BSU59L29hdXRoL3Rva2VuYCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfQUNDRVNTX1RPS0VOX0NMSUVOVF9JRCxcblx0XHRcdGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfQUNDRVNTX1RPS0VOX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRhdWRpZW5jZTogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfRE9NQUlOfS9hcGkvdjIvYCxcblx0XHRcdGdyYW50X3R5cGU6IHByb2Nlc3MuZW52Lk5FWFRfQUNDRVNTX1RPS0VOX0dSQU5UX1RZUEUsXG5cdFx0fSksXG5cdH0pO1xuXG5cdC8vIENoZWNrIGlmIHJlc3BvbnNlIGlzIG9rXG5cdGlmICghcmVzcG9uc2Uub2spIHJldHVybiBudWxsO1xuXG5cdC8vIElmIHJlc3BvbnNlIGlzIG9rLCByZXR1cm4gZGF0YVxuXHRsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0bGV0IGFjY2Vzc1Rva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG5cdHJldHVybiBhY2Nlc3NUb2tlbjtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHVzZXIgb2JqZWN0IHVzaW5nIHRoZSBwcm92aWRlZCBhY2Nlc3MgdG9rZW4uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSBUaGUgYWNjZXNzIHRva2VuIGZvciBhdXRoZW50aWNhdGlvbi5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdHxudWxsPn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgdXNlciBvYmplY3QgaWYgc3VjY2Vzc2Z1bCwgb3IgbnVsbCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyT2JqZXh0KGFjY2Vzc1Rva2VuKSB7XG5cdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTn0vdXNlcmluZm9gLCB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gQ2hlY2sgaWYgcmVzcG9uc2UgaXMgb2tcblx0aWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIG51bGw7XG5cblx0Ly8gSWYgcmVzcG9uc2UgaXMgb2ssIHJldHVybiBkYXRhXG5cdGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZW5kcyB1c2VyIG1ldGFkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlclRva2VuIC0gVGhlIHVzZXIgdG9rZW4uXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gVGhlIHVzZXIgbWV0YWRhdGEgb2JqZWN0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFVzZXJNZXRhRGF0YSh1c2VyVG9rZW4sIG9iamVjdCkge1xuXHRjb25zdCB1c2VyT2JqZWN0ID0gYXdhaXQgZ2V0VXNlck9iamVjdEJ5VG9rZW4odXNlclRva2VuKTtcblxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9ET01BSU59L2FwaS92Mi91c2Vycy8ke3VzZXJPYmplY3Quc3VifWAsXG5cdFx0e1xuXHRcdFx0bWV0aG9kOiAnUEFUQ0gnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0TmV4dEFjY2Vzc1Rva2VuKCl9YCxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGFwcF9tZXRhZGF0YTogeyBvYmplY3QgfSxcblx0XHRcdH0pLFxuXHRcdH1cblx0KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHVzZXIgb2JqZWN0IGJ5IHVzZXJTdWIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJTdWIgLSBUaGUgdXNlclN1YiB0byByZXRyaWV2ZSB0aGUgdXNlciBvYmplY3QgZm9yLlxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gLSBUaGUgdXNlciBvYmplY3QuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyT2JqZWN0QnlTdWIodXNlclN1Yikge1xuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9ET01BSU59L2FwaS92Mi91c2Vycy8ke3VzZXJTdWJ9YCwge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0YXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F3YWl0IGdldE5leHRBY2Nlc3NUb2tlbigpfWAsXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIG51bGw7XG5cblx0bGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCB1c2VycyBmcm9tIHRoZSBBUEkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3RbXXxudWxsPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgdXNlciBvYmplY3RzLCBvciBudWxsIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG5cdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTn0vYXBpL3YyL3VzZXJzYCwge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0YXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F3YWl0IGdldE5leHRBY2Nlc3NUb2tlbigpfWAsXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIG51bGw7XG5cblx0bGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbiJdLCJuYW1lcyI6WyJnZXROZXh0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudF9pZCIsIk5FWFRfQUNDRVNTX1RPS0VOX0NMSUVOVF9JRCIsImNsaWVudF9zZWNyZXQiLCJORVhUX0FDQ0VTU19UT0tFTl9DTElFTlRfU0VDUkVUIiwiYXVkaWVuY2UiLCJncmFudF90eXBlIiwiTkVYVF9BQ0NFU1NfVE9LRU5fR1JBTlRfVFlQRSIsIm9rIiwiZGF0YSIsImpzb24iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImdldFVzZXJPYmpleHQiLCJBdXRob3JpemF0aW9uIiwic2VuZFVzZXJNZXRhRGF0YSIsInVzZXJUb2tlbiIsIm9iamVjdCIsInVzZXJPYmplY3QiLCJnZXRVc2VyT2JqZWN0QnlUb2tlbiIsInN1YiIsImF1dGhvcml6YXRpb24iLCJhcHBfbWV0YWRhdGEiLCJnZXRVc2VyT2JqZWN0QnlTdWIiLCJ1c2VyU3ViIiwiZ2V0QWxsVXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./tools/privateTools.jsx\n");

/***/ }),

/***/ "(rsc)/./tools/publicTools.jsx":
/*!*******************************!*\
  !*** ./tools/publicTools.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserObjectByToken: () => (/* binding */ getUserObjectByToken),\n/* harmony export */   getUserToken: () => (/* binding */ getUserToken)\n/* harmony export */ });\n/**\n * Retrieves the user token from the server.\n * @returns {Promise<string|null>} The user token if successful, or null if there was an error.\n */ async function getUserToken() {\n    // Fetch user token\n    let response = await fetch(`http://localhost:3000/api/auth/getUserToken`, {\n        method: \"POST\"\n    });\n    // Check if response is ok\n    if (!response.ok) return null;\n    // If response is ok, return data\n    let data = await response.json();\n    data = data.userToken;\n    return data;\n}\n/**\n * Retrieves the user object from the server using the provided user token.\n *\n * @param {string} userToken - The user token used for authentication.\n * @returns {Promise<object|null>} - A promise that resolves to the user object if successful, or null if there was an error.\n */ async function getUserObjectByToken(userToken) {\n    try {\n        let response = await fetch(`${\"https://dev-cbyq3ourirjne21r.us.auth0.com\"}/userinfo`, {\n            method: \"GET\",\n            headers: {\n                Authorization: `Bearer ${userToken}`\n            }\n        });\n        if (!response.ok) return null;\n        let data = await response.json();\n        return data;\n    } catch (error) {\n        console.log(error);\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi90b29scy9wdWJsaWNUb29scy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0NBR0MsR0FDTSxlQUFlQTtJQUNyQixtQkFBbUI7SUFDbkIsSUFBSUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsMkNBQTJDLENBQUMsRUFBRTtRQUN6RUMsUUFBUTtJQUNUO0lBRUEsMEJBQTBCO0lBQzFCLElBQUksQ0FBQ0YsU0FBU0csRUFBRSxFQUFFLE9BQU87SUFFekIsaUNBQWlDO0lBQ2pDLElBQUlDLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUM5QkQsT0FBT0EsS0FBS0UsU0FBUztJQUNyQixPQUFPRjtBQUNSO0FBRUE7Ozs7O0NBS0MsR0FDTSxlQUFlRyxxQkFBcUJELFNBQVM7SUFDbkQsSUFBSTtRQUNILElBQUlOLFdBQVcsTUFBTUMsTUFBTSxDQUFDLEVBQUVPLDJDQUFvQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlFTixRQUFRO1lBQ1JTLFNBQVM7Z0JBQ1JDLGVBQWUsQ0FBQyxPQUFPLEVBQUVOLFVBQVUsQ0FBQztZQUNyQztRQUNEO1FBRUEsSUFBSSxDQUFDTixTQUFTRyxFQUFFLEVBQUUsT0FBTztRQUV6QixJQUFJQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7UUFDOUIsT0FBT0Q7SUFDUixFQUFFLE9BQU9TLE9BQU87UUFDZkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU87SUFDUjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNjaG9vbC8uL3Rvb2xzL3B1YmxpY1Rvb2xzLmpzeD8wYmQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0cmlldmVzIHRoZSB1c2VyIHRva2VuIGZyb20gdGhlIHNlcnZlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3xudWxsPn0gVGhlIHVzZXIgdG9rZW4gaWYgc3VjY2Vzc2Z1bCwgb3IgbnVsbCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyVG9rZW4oKSB7XG5cdC8vIEZldGNoIHVzZXIgdG9rZW5cblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9nZXRVc2VyVG9rZW5gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdH0pO1xuXG5cdC8vIENoZWNrIGlmIHJlc3BvbnNlIGlzIG9rXG5cdGlmICghcmVzcG9uc2Uub2spIHJldHVybiBudWxsO1xuXG5cdC8vIElmIHJlc3BvbnNlIGlzIG9rLCByZXR1cm4gZGF0YVxuXHRsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0ZGF0YSA9IGRhdGEudXNlclRva2VuO1xuXHRyZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHVzZXIgb2JqZWN0IGZyb20gdGhlIHNlcnZlciB1c2luZyB0aGUgcHJvdmlkZWQgdXNlciB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlclRva2VuIC0gVGhlIHVzZXIgdG9rZW4gdXNlZCBmb3IgYXV0aGVudGljYXRpb24uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3R8bnVsbD59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHVzZXIgb2JqZWN0IGlmIHN1Y2Nlc3NmdWwsIG9yIG51bGwgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck9iamVjdEJ5VG9rZW4odXNlclRva2VuKSB7XG5cdHRyeSB7XG5cdFx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfRE9NQUlOfS91c2VyaW5mb2AsIHtcblx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyVG9rZW59YCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4iXSwibmFtZXMiOlsiZ2V0VXNlclRva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwiZGF0YSIsImpzb24iLCJ1c2VyVG9rZW4iLCJnZXRVc2VyT2JqZWN0QnlUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BVVRIMF9ET01BSU4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./tools/publicTools.jsx\n");

/***/ }),

/***/ "(rsc)/./tools/database.js":
/*!***************************!*\
  !*** ./tools/database.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   executeQuery: () => (/* binding */ executeQuery)\n/* harmony export */ });\n// Imports\nconst db = require(\"mysql\");\nrequire(\"dotenv\").config();\n// Create a connection to the database\nconst con = db.createConnection({\n    host: process.env.DB_HOST,\n    port: process.env.DB_PORT,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_DATABASE\n});\n// Connect to the database\nfunction connectDatabase() {\n    con.connect((error)=>{\n        if (error) {\n            console.log(\"Database Connection Failed\");\n            throw error;\n        } else {\n            console.log(\"Database Connected\");\n        }\n    });\n}\n/**\n * Executes a query on the database\n * @param {string} query The query to be executed\n * @param {Array} values The values to be inserted into the query\n * @returns {Promise} The result of the query\n */ async function executeQuery(query, values = []) {\n    return new Promise((resolve, reject)=>{\n        con.query(query, values, (error, result)=>{\n            if (error) {\n                console.log(`Error executing query: ${query}`);\n                console.log(error);\n                reject(error);\n            } else {\n                resolve(JSON.stringify(result));\n            }\n        });\n    });\n}\n// Setup the database\nfunction setupDatabase() {\n    const createChannelsTable = \"CREATE TABLE IF NOT EXISTS channels (id INT PRIMARY KEY AUTO_INCREMENT, name TEXT, owner TEXT, users JSON, created_at DATETIME);\";\n    const createMessagesTable = `CREATE TABLE IF NOT EXISTS messages(id INT PRIMARY KEY AUTO_INCREMENT, message TEXT, channel INT, owner TEXT, created_at DATETIME, FOREIGN KEY(channel) REFERENCES channels(id))`;\n    // Execute the queries\n    executeQuery(createChannelsTable);\n    executeQuery(createMessagesTable);\n}\n// Call the setupDatabase function to create the tables\nsetupDatabase();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi90b29scy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsVUFBVTtBQUNWLE1BQU1BLEtBQUtDLFFBQVE7QUFDbkJBLFFBQVEsVUFBVUMsTUFBTTtBQUV4QixzQ0FBc0M7QUFDdEMsTUFBTUMsTUFBTUgsR0FBR0ksZ0JBQWdCLENBQUM7SUFDL0JDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztJQUN6QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0lBQ3pCQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLE9BQU87SUFDekJDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztJQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxXQUFXO0FBQ2xDO0FBRUEsMEJBQTBCO0FBQzFCLFNBQVNDO0lBQ1JkLElBQUllLE9BQU8sQ0FBQyxDQUFDQztRQUNaLElBQUlBLE9BQU87WUFDVkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUY7UUFDUCxPQUFPO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQztRQUNiO0lBQ0Q7QUFDRDtBQUVBOzs7OztDQUtDLEdBQ00sZUFBZUMsYUFBYUMsS0FBSyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQzVCeEIsSUFBSW9CLEtBQUssQ0FBQ0EsT0FBT0MsUUFBUSxDQUFDTCxPQUFPUztZQUNoQyxJQUFJVCxPQUFPO2dCQUNWQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsRUFBRUUsTUFBTSxDQUFDO2dCQUM3Q0gsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWlEsT0FBT1I7WUFDUixPQUFPO2dCQUNOTyxRQUFRRyxLQUFLQyxTQUFTLENBQUNGO1lBQ3hCO1FBQ0Q7SUFDRDtBQUNEO0FBRUEscUJBQXFCO0FBQ3JCLFNBQVNHO0lBQ1IsTUFBTUMsc0JBQ0w7SUFDRCxNQUFNQyxzQkFBc0IsQ0FBQyxnTEFBZ0wsQ0FBQztJQUU5TSxzQkFBc0I7SUFDdEJYLGFBQWFVO0lBQ2JWLGFBQWFXO0FBQ2Q7QUFFQSx1REFBdUQ7QUFDdkRGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNjaG9vbC8uL3Rvb2xzL2RhdGFiYXNlLmpzPzFmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuY29uc3QgZGIgPSByZXF1aXJlKCdteXNxbCcpO1xucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbi8vIENyZWF0ZSBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlXG5jb25zdCBjb24gPSBkYi5jcmVhdGVDb25uZWN0aW9uKHtcblx0aG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcblx0cG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCxcblx0dXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcblx0cGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuXHRkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXG59KTtcblxuLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbmZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcblx0Y29uLmNvbm5lY3QoKGVycm9yKSA9PiB7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGF0YWJhc2UgQ29ubmVjdGlvbiBGYWlsZWQnKTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGF0YWJhc2UgQ29ubmVjdGVkJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBhIHF1ZXJ5IG9uIHRoZSBkYXRhYmFzZVxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSB0byBiZSBleGVjdXRlZFxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgcXVlcnlcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgcmVzdWx0IG9mIHRoZSBxdWVyeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMgPSBbXSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbi5xdWVyeShxdWVyeSwgdmFsdWVzLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBFcnJvciBleGVjdXRpbmcgcXVlcnk6ICR7cXVlcnl9YCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLyBTZXR1cCB0aGUgZGF0YWJhc2VcbmZ1bmN0aW9uIHNldHVwRGF0YWJhc2UoKSB7XG5cdGNvbnN0IGNyZWF0ZUNoYW5uZWxzVGFibGUgPVxuXHRcdCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBjaGFubmVscyAoaWQgSU5UIFBSSU1BUlkgS0VZIEFVVE9fSU5DUkVNRU5ULCBuYW1lIFRFWFQsIG93bmVyIFRFWFQsIHVzZXJzIEpTT04sIGNyZWF0ZWRfYXQgREFURVRJTUUpOyc7XG5cdGNvbnN0IGNyZWF0ZU1lc3NhZ2VzVGFibGUgPSBgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgbWVzc2FnZXMoaWQgSU5UIFBSSU1BUlkgS0VZIEFVVE9fSU5DUkVNRU5ULCBtZXNzYWdlIFRFWFQsIGNoYW5uZWwgSU5ULCBvd25lciBURVhULCBjcmVhdGVkX2F0IERBVEVUSU1FLCBGT1JFSUdOIEtFWShjaGFubmVsKSBSRUZFUkVOQ0VTIGNoYW5uZWxzKGlkKSlgO1xuXG5cdC8vIEV4ZWN1dGUgdGhlIHF1ZXJpZXNcblx0ZXhlY3V0ZVF1ZXJ5KGNyZWF0ZUNoYW5uZWxzVGFibGUpO1xuXHRleGVjdXRlUXVlcnkoY3JlYXRlTWVzc2FnZXNUYWJsZSk7XG59XG5cbi8vIENhbGwgdGhlIHNldHVwRGF0YWJhc2UgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSB0YWJsZXNcbnNldHVwRGF0YWJhc2UoKTtcblxuIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsImNvbmZpZyIsImNvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfREFUQUJBU0UiLCJjb25uZWN0RGF0YWJhc2UiLCJjb25uZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnkiLCJ2YWx1ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXR1cERhdGFiYXNlIiwiY3JlYXRlQ2hhbm5lbHNUYWJsZSIsImNyZWF0ZU1lc3NhZ2VzVGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./tools/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth0","vendor-chunks/debug","vendor-chunks/tslib","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/joi","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@sideway","vendor-chunks/@hapi","vendor-chunks/object-hash","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/url-join"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&page=%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FmessageManagement%2FgetChannelMessages%2Froute.jsx&appDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkejbeg%2Fcoding%2FchatSchool&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();