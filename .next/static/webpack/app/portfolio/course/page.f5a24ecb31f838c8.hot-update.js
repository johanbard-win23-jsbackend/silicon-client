"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/course/page",{

/***/ "(app-pages-browser)/./app/portfolio/course/page.tsx":
/*!***************************************!*\
  !*** ./app/portfolio/course/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/portfolio/course/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Course() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    useEffect(()=>{\n        async function getData() {\n            await getCourses().then(async (c)=>{\n                console.log(c);\n                //setCourses(courses => [...courses, c])\n                setCourses(c);\n                setIsLoading(false);\n            });\n        }\n        getData();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"w-full d-flex column center \".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"courses w-full d-flex center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container d-flex center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full d-flex column center \".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"courses w-full d-flex center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-max d-flex column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"heading-box\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content-box\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Course, \"o88fMihYLgI7pcaxHyhn+JSckVk=\");\n_c = Course;\nvar _c;\n$RefreshReg$(_c, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wb3J0Zm9saW8vY291cnNlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ007QUFFeEIsU0FBU0U7O0lBbUJ0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQTtJQUV0Q08sVUFBVTtRQUNOLGVBQWVDO1lBQ1gsTUFBTUMsYUFDTEMsSUFBSSxDQUFDLE9BQU9DO2dCQUNUQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNaLHdDQUF3QztnQkFDeENHLFdBQVdIO2dCQUNYUCxhQUFhO1lBQ2pCO1FBQ0o7UUFDQUk7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFHTCxXQUFXO1FBQ1YscUJBQ0ksOERBQUNZO1lBQUtDLFdBQVcsK0JBQTJDLE9BQVpmLDhEQUFXO3NCQUN2RCw0RUFBQ2dCO2dCQUFRRCxXQUFVOzBCQUNmLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDWCw0RUFBQ0c7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUt2QjtJQUdFLHFCQUNFLDhEQUFDSjtRQUFLQyxXQUFXLCtCQUEyQyxPQUFaZiw4REFBVztrQkFDekQsNEVBQUNnQjtZQUFRRCxXQUFVO3NCQUNqQiw0RUFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBSUYsV0FBVTs7Ozs7O2tDQUdmLDhEQUFDRTt3QkFBSUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QjtHQTlEd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wb3J0Zm9saW8vY291cnNlL3BhZ2UudHN4P2QzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoKSB7XHJcbiAgaW50ZXJmYWNlIElDb3Vyc2Uge1xyXG4gICAgaWQ6IFN0cmluZyxcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjYXRlZ29yeTogc3RyaW5nLFxyXG4gICAgc21hbGxJbWFnZVVyaTogc3RyaW5nLFxyXG4gICAgaXNCZXN0c2VsbGVyOiBib29sZWFuLFxyXG4gICAgaG91cnM6IHN0cmluZyxcclxuICAgIGxpa2VzOiBzdHJpbmcsXHJcbiAgICBsaWtlc0luUGVyY2VudDogc3RyaW5nLFxyXG4gICAgcHJpY2VzOiB7XHJcbiAgICAgICAgY3VycmVuY3lTeW1ib2w6IHN0cmluZyxcclxuICAgICAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgICAgIGRpc2NvdW50UHJpY2U6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGF1dGhvcnM6IFtcclxuICAgICAgICB7IG5hbWU6IFN0cmluZ31cclxuICAgIF1cclxuICB9XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlPElDb3Vyc2U+KClcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICAgIGF3YWl0IGdldENvdXJzZXMoKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChjKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGMpXHJcbiAgICAgICAgICAgIC8vc2V0Q291cnNlcyhjb3Vyc2VzID0+IFsuLi5jb3Vyc2VzLCBjXSlcclxuICAgICAgICAgICAgc2V0Q291cnNlcyhjKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldERhdGEoKVxyXG59LCBbXSlcclxuXHJcbmlmKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2B3LWZ1bGwgZC1mbGV4IGNvbHVtbiBjZW50ZXIgJHtzdHlsZXMubWFpbn1gfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY291cnNlcyB3LWZ1bGwgZC1mbGV4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17YHctZnVsbCBkLWZsZXggY29sdW1uIGNlbnRlciAke3N0eWxlcy5tYWlufWB9PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3Vyc2VzIHctZnVsbCBkLWZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdy1tYXggZC1mbGV4IGNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLWJveFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJDb3Vyc2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiZ2V0Q291cnNlcyIsInRoZW4iLCJjIiwiY29uc29sZSIsImxvZyIsInNldENvdXJzZXMiLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/portfolio/course/page.tsx\n"));

/***/ })

});