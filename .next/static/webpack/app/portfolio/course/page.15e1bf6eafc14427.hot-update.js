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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/portfolio/course/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _courseAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courseAction */ \"(app-pages-browser)/./app/portfolio/course/courseAction.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Course() {\n    var _searchParams_get;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const id = (_searchParams_get = searchParams.get(\"id\")) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getData() {\n            console.log(id);\n            let test = await (0,_courseAction__WEBPACK_IMPORTED_MODULE_3__.getQuery)(id);\n            console.log(test);\n            await (0,_courseAction__WEBPACK_IMPORTED_MODULE_3__.getCourse)(id).then(async (c)=>{\n                setCourse(c);\n                setIsLoading(false);\n            });\n        }\n        getData();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"w-full d-flex column center \".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"course w-full d-flex center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container d-flex center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this);\n    }\n    if (course === undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"w-full d-flex column center \".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"course w-full d-flex center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container d-flex center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Course not found!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n            lineNumber: 61,\n            columnNumber: 5\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full d-flex column center \".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"course w-full d-flex center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-full d-flex column center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"heading-box w-max d-flex column center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"heading-info w-max\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tags\",\n                                    children: [\n                                        course.isBestseller && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-s bestseller\",\n                                            children: \"Best Seller\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 42\n                                        }, this),\n                                        course.category !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-s category\",\n                                            children: course.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 47\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"title\",\n                                    children: course.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"info-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"price-box\",\n                                            children: course.prices.discountPrice === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-l price\",\n                                                children: \"\".concat(course.prices.currencySymbol, \" \").concat(course.prices.price)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-l price sale-new\",\n                                                        children: \"\".concat(course.prices.currencySymbol, \" \").concat(course.prices.discountPrice)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 24\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-l price sale-old\",\n                                                        children: \"\".concat(course.prices.currencySymbol, \" \").concat(course.prices.price)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 138\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"details-box\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-s hours\",\n                                                    children: \"The course totals \".concat(course.hours, \" hours and is liked by \").concat(course.likesInPercent, \" (\").concat(course.likes, \" p) of its users\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-s rating\",\n                                                    children: \"\".concat(course.likesInPercent, \" (\").concat(course.likes, \")\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"author-box\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"h6\",\n                                            children: \"Created by\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"navigation\",\n                                            children: \"By \".concat(course.authors.map((x)=>x.name).join(\" & \"))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content-box w-max\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"h1\",\n                                children: \"Course Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: course.description\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\portfolio\\\\course\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Course, \"pmRZfGkbluLFkZ+Kw2EJ8y/VYnk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = Course;\nvar _c;\n$RefreshReg$(_c, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wb3J0Zm9saW8vY291cnNlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDTDtBQUNjO0FBQ0g7QUFFbkMsU0FBU007UUFzQlhDOztJQURYLE1BQU1BLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxNQUFLRCxvQkFBQUEsYUFBYUUsR0FBRyxDQUFDLG1CQUFqQkYsd0NBQUFBLGtCQUF3QkcsUUFBUTtJQUMzQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQTtJQUVwQ0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlZTtZQUNYQyxRQUFRQyxHQUFHLENBQUNUO1lBQ1osSUFBSVUsT0FBTyxNQUFNZCx1REFBUUEsQ0FBQ0k7WUFDMUJRLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWixNQUFNZix3REFBU0EsQ0FBQ0ssSUFDZlcsSUFBSSxDQUFDLE9BQU9DO2dCQUNUTixVQUFVTTtnQkFDVlIsYUFBYTtZQUNqQjtRQUNKO1FBQ0FHO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBR0osV0FBVztRQUNWLHFCQUNJLDhEQUFDVTtZQUFLQyxXQUFXLCtCQUEyQyxPQUFacEIsOERBQVc7c0JBQ3ZELDRFQUFDcUI7Z0JBQVFELFdBQVU7MEJBQ2YsNEVBQUNFO29CQUFJRixXQUFVOzhCQUNYLDRFQUFDRztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3ZCO0lBRUEsSUFBR1osV0FBV2EsV0FBVztRQUN2QixxQkFDRSw4REFBQ0w7WUFBS0MsV0FBVywrQkFBMkMsT0FBWnBCLDhEQUFXO3NCQUN2RCw0RUFBQ3FCO2dCQUFRRCxXQUFVOzBCQUNmLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDWCw0RUFBQ0c7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtuQjtJQUdFLHFCQUNFLDhEQUFDSjtRQUFLQyxXQUFXLCtCQUEyQyxPQUFacEIsOERBQVc7a0JBQ3pELDRFQUFDcUI7WUFBUUQsV0FBVTtzQkFDakIsNEVBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUlGLFdBQVU7O3dDQUNYVCxPQUFPYyxZQUFZLGtCQUFJLDhEQUFDSDs0Q0FBSUYsV0FBVTtzREFBb0I7Ozs7Ozt3Q0FDMURULE9BQU9lLFFBQVEsS0FBSyxzQkFBUSw4REFBQ0o7NENBQUlGLFdBQVU7c0RBQW1CVCxPQUFPZSxRQUFROzs7Ozs7Ozs7Ozs7OENBRWpGLDhEQUFDQztvQ0FBR1AsV0FBVTs4Q0FBU1QsT0FBT2lCLEtBQUs7Ozs7Ozs4Q0FDbkMsOERBQUNOO29DQUFJRixXQUFVOztzREFDYiw4REFBQ0U7NENBQUlGLFdBQVU7c0RBQ1hULE9BQU9rQixNQUFNLENBQUNDLGFBQWEsS0FBSyxxQkFDaEMsOERBQUNQO2dEQUFFSCxXQUFVOzBEQUFnQixHQUFtQ1QsT0FBaENBLE9BQU9rQixNQUFNLENBQUNFLGNBQWMsRUFBQyxLQUF1QixPQUFwQnBCLE9BQU9rQixNQUFNLENBQUNHLEtBQUs7Ozs7O3FFQUNuRiw4REFBQ1Q7O2tFQUFFLDhEQUFDVTt3REFBS2IsV0FBVTtrRUFBeUIsR0FBbUNULE9BQWhDQSxPQUFPa0IsTUFBTSxDQUFDRSxjQUFjLEVBQUMsS0FBK0IsT0FBNUJwQixPQUFPa0IsTUFBTSxDQUFDQyxhQUFhOzs7Ozs7b0RBQVU7a0VBQUMsOERBQUNHO3dEQUFLYixXQUFVO2tFQUF5QixHQUFtQ1QsT0FBaENBLE9BQU9rQixNQUFNLENBQUNFLGNBQWMsRUFBQyxLQUF1QixPQUFwQnBCLE9BQU9rQixNQUFNLENBQUNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUd4Tiw4REFBQ1Y7NENBQUlGLFdBQVU7OzhEQUNmLDhEQUFDRTtvREFBSUYsV0FBVTs4REFBZ0IscUJBQTJEVCxPQUF0Q0EsT0FBT3VCLEtBQUssRUFBQywyQkFBbUR2QixPQUExQkEsT0FBT3dCLGNBQWMsRUFBQyxNQUFpQixPQUFieEIsT0FBT3lCLEtBQUssRUFBQzs7Ozs7OzhEQUNqSSw4REFBQ2Q7b0RBQUlGLFdBQVU7OERBQWlCLEdBQTZCVCxPQUExQkEsT0FBT3dCLGNBQWMsRUFBQyxNQUFpQixPQUFieEIsT0FBT3lCLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUc1RSw4REFBQ2Q7b0NBQUlGLFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FBRUgsV0FBVTtzREFBSzs7Ozs7O3NEQUNsQiw4REFBQ0c7NENBQUVILFdBQVU7c0RBQWMsTUFBa0QsT0FBNUNULE9BQU8wQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk1RSw4REFBQ25CO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ3NCO2dDQUFHdEIsV0FBVTswQ0FBSzs7Ozs7OzBDQUNuQiw4REFBQ0c7Z0NBQUVvQix5QkFBeUI7b0NBQUNDLFFBQVFqQyxPQUFPa0MsV0FBVztnQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtHQXRHd0J6Qzs7UUFxQkRELDREQUFlQTs7O0tBckJkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcG9ydGZvbGlvL2NvdXJzZS9wYWdlLnRzeD9kMzRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldENvdXJzZSwgZ2V0UXVlcnkgfSBmcm9tIFwiLi9jb3Vyc2VBY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlKCkge1xyXG4gIGludGVyZmFjZSBJQ291cnNlIHtcclxuICAgIGlkOiBTdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY2F0ZWdvcnk6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBzbWFsbEltYWdlVXJpOiBzdHJpbmcsXHJcbiAgICBpc0Jlc3RzZWxsZXI6IGJvb2xlYW4sXHJcbiAgICBob3Vyczogc3RyaW5nLFxyXG4gICAgbGlrZXM6IHN0cmluZyxcclxuICAgIGxpa2VzSW5QZXJjZW50OiBzdHJpbmcsXHJcbiAgICBwcmljZXM6IHtcclxuICAgICAgICBjdXJyZW5jeVN5bWJvbDogc3RyaW5nLFxyXG4gICAgICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICAgICAgZGlzY291bnRQcmljZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yczogW1xyXG4gICAgICAgIHsgbmFtZTogU3RyaW5nfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcclxuICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk/LnRvU3RyaW5nKClcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGU8SUNvdXJzZT4oKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBsZXQgdGVzdCA9IGF3YWl0IGdldFF1ZXJ5KGlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QpXHJcbiAgICAgICAgYXdhaXQgZ2V0Q291cnNlKGlkKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChjKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvdXJzZShjKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldERhdGEoKVxyXG59LCBbXSlcclxuXHJcbmlmKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2B3LWZ1bGwgZC1mbGV4IGNvbHVtbiBjZW50ZXIgJHtzdHlsZXMubWFpbn1gfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY291cnNlIHctZnVsbCBkLWZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5pZihjb3Vyc2UgPT09IHVuZGVmaW5lZCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e2B3LWZ1bGwgZC1mbGV4IGNvbHVtbiBjZW50ZXIgJHtzdHlsZXMubWFpbn1gfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3Vyc2Ugdy1mdWxsIGQtZmxleCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Q291cnNlIG5vdCBmb3VuZCE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e2B3LWZ1bGwgZC1mbGV4IGNvbHVtbiBjZW50ZXIgJHtzdHlsZXMubWFpbn1gfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY291cnNlIHctZnVsbCBkLWZsZXggY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdy1mdWxsIGQtZmxleCBjb2x1bW4gY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctYm94IHctbWF4IGQtZmxleCBjb2x1bW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1pbmZvIHctbWF4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICB7IGNvdXJzZS5pc0Jlc3RzZWxsZXIgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXMgYmVzdHNlbGxlclwiPkJlc3QgU2VsbGVyPC9kaXY+IH1cclxuICAgICAgICAgICAgICAgIHsgY291cnNlLmNhdGVnb3J5ICE9PSBudWxsICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zIGNhdGVnb3J5XCI+e2NvdXJzZS5jYXRlZ29yeX08L2Rpdj4gfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntjb3Vyc2UudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICB7IGNvdXJzZS5wcmljZXMuZGlzY291bnRQcmljZSA9PT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbCBwcmljZVwiPntgJHtjb3Vyc2UucHJpY2VzLmN1cnJlbmN5U3ltYm9sfSAke2NvdXJzZS5wcmljZXMucHJpY2V9YH08L3A+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sIHByaWNlIHNhbGUtbmV3XCI+e2Ake2NvdXJzZS5wcmljZXMuY3VycmVuY3lTeW1ib2x9ICR7Y291cnNlLnByaWNlcy5kaXNjb3VudFByaWNlfWB9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWwgcHJpY2Ugc2FsZS1vbGRcIj57YCR7Y291cnNlLnByaWNlcy5jdXJyZW5jeVN5bWJvbH0gJHtjb3Vyc2UucHJpY2VzLnByaWNlfWB9PC9zcGFuPjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXMgaG91cnNcIj57YFRoZSBjb3Vyc2UgdG90YWxzICR7Y291cnNlLmhvdXJzfSBob3VycyBhbmQgaXMgbGlrZWQgYnkgJHtjb3Vyc2UubGlrZXNJblBlcmNlbnR9ICgke2NvdXJzZS5saWtlc30gcCkgb2YgaXRzIHVzZXJzYH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zIHJhdGluZ1wiPntgJHtjb3Vyc2UubGlrZXNJblBlcmNlbnR9ICgke2NvdXJzZS5saWtlc30pYH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDZcIj5DcmVhdGVkIGJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPntgQnkgJHtjb3Vyc2UuYXV0aG9ycy5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJyAmICcpfWB9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveCB3LW1heFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5Db3Vyc2UgRGVzY3JpcHRpb248L2gyPlxyXG4gICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY291cnNlLmRlc2NyaXB0aW9ufX0+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImdldENvdXJzZSIsImdldFF1ZXJ5IiwidXNlU2VhcmNoUGFyYW1zIiwiQ291cnNlIiwic2VhcmNoUGFyYW1zIiwiaWQiLCJnZXQiLCJ0b1N0cmluZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvdXJzZSIsInNldENvdXJzZSIsImdldERhdGEiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsInRoZW4iLCJjIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJkaXYiLCJwIiwidW5kZWZpbmVkIiwiaXNCZXN0c2VsbGVyIiwiY2F0ZWdvcnkiLCJoMSIsInRpdGxlIiwicHJpY2VzIiwiZGlzY291bnRQcmljZSIsImN1cnJlbmN5U3ltYm9sIiwicHJpY2UiLCJzcGFuIiwiaG91cnMiLCJsaWtlc0luUGVyY2VudCIsImxpa2VzIiwiYXV0aG9ycyIsIm1hcCIsIngiLCJuYW1lIiwiam9pbiIsImgyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/portfolio/course/page.tsx\n"));

/***/ })

});