"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/security/page",{

/***/ "(app-pages-browser)/./app/components/asides/Account.tsx":
/*!*******************************************!*\
  !*** ./app/components/asides/Account.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountAside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/actions */ \"(app-pages-browser)/./app/actions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//export default function AccountAside(props: ProfileProps) {\nfunction AccountAside() {\n    _s();\n    //const profile = props.profile\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    //const [token, setToken] = useState('')\n    var token;\n    var userIdString;\n    const [profileInfo, setProfileInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        userId: \"\",\n        profileImg: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        phone: \"\",\n        bio: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getData() {\n            await (0,_app_actions__WEBPACK_IMPORTED_MODULE_3__.getAuthToken)().then(async (t)=>{\n                if (t != null) {\n                    console.log(t);\n                    token = t;\n                }\n            });\n            await (0,_app_actions__WEBPACK_IMPORTED_MODULE_3__.getUserId)().then(async (uid)=>{\n                console.log(uid);\n            });\n            await (0,_app_actions__WEBPACK_IMPORTED_MODULE_3__.getUserProfile)().then(async (profile)=>{\n                //console.log(profile)\n                setProfileInfo(profile);\n            });\n        }\n        // let profileRes = await getProfileInfo()\n        // console.log(profileRes)\n        // if (profileRes != null)\n        //     setProfileInfo(profileRes)\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"accountaside\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"avatar-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"avatar-img\",\n                        src: \"/img/avatars/\" + profileInfo.profileImg,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"change-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-arrows-rotate\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"short-info-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"h5\",\n                        children: profileInfo.firstName + \" \" + profileInfo.lastName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-m\",\n                        children: profileInfo.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/account/details\",\n                        className: \"btn \".concat(pathname === \"/account/details\" ? \"btn-theme\" : \"btn-white\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-regular fa-cog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Account Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/account/security\",\n                        className: \"btn \".concat(pathname === \"/account/security\" ? \"btn-theme\" : \"btn-white\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-regular fa-lock\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Security\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/account/notifications\",\n                        className: \"btn \".concat(pathname === \"/account/notifications\" ? \"btn-theme\" : \"btn-white\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-regular fa-bell\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Notifications\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/auth/signout\",\n                        className: \"btn btn-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-regular fa-arrow-left-from-bracket\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jnbd05\\\\Documents\\\\Barden-GitHub\\\\jsbackend\\\\silicon-client\\\\app\\\\components\\\\asides\\\\Account.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountAside, \"oB/ZAsJr1PsBplQUfutL1FPNNvY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = AccountAside;\nvar _c;\n$RefreshReg$(_c, \"AccountAside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2FzaWRlcy9BY2NvdW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFDaUI7QUFFeUI7QUFDM0I7QUFZNUMsNkRBQTZEO0FBQzlDLFNBQVNPOztJQUNwQiwrQkFBK0I7SUFDL0IsTUFBTUMsV0FBV1AsNERBQVdBO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJUTtJQUNKLElBQUlDO0lBQ0osTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzNDTyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFFQWQsZ0RBQVNBLENBQUM7UUFDTixlQUFlZTtZQUNYLE1BQU1sQiwwREFBWUEsR0FDakJtQixJQUFJLENBQUUsT0FBT0M7Z0JBQ1YsSUFBSUEsS0FBSyxNQUFNO29CQUNYQyxRQUFRQyxHQUFHLENBQUNGO29CQUNaYixRQUFRYTtnQkFDWjtZQUNKO1lBRUEsTUFBTW5CLHVEQUFTQSxHQUNka0IsSUFBSSxDQUFDLE9BQU9JO2dCQUNURixRQUFRQyxHQUFHLENBQUNDO1lBQ2hCO1lBRUEsTUFBTXJCLDREQUFjQSxHQUNuQmlCLElBQUksQ0FBQyxPQUFPSztnQkFDVCxzQkFBc0I7Z0JBQ3RCZCxlQUFlYztZQUNuQjtRQUVKO1FBS0ksMENBQTBDO1FBQzFDLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBRXJDTjtJQUNKLEdBQUcsRUFBRTtJQUdQLHFCQUNFLDhEQUFDTztRQUFNQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBSUYsV0FBVTt3QkFBYUcsS0FBSyxrQkFBa0JwQixZQUFZRyxVQUFVO3dCQUFFa0IsS0FBSTs7Ozs7O2tDQUMvRSw4REFBQ0g7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNLOzRCQUFFTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FHWCw4REFBQ007d0JBQUVOLFdBQVU7a0NBQU1qQixZQUFZSSxTQUFTLEdBQUcsTUFBTUosWUFBWUssUUFBUTs7Ozs7O2tDQUNyRSw4REFBQ2tCO3dCQUFFTixXQUFVO2tDQUFVakIsWUFBWU0sS0FBSzs7Ozs7Ozs7Ozs7OzBCQUU1Qyw4REFBQ1k7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDNUIsaURBQUlBO3dCQUFDbUMsTUFBTTt3QkFBb0JQLFdBQVcsT0FBbUUsT0FBNURwQixhQUFhLHFCQUFxQixjQUFjOzswQ0FDOUYsOERBQUN5QjtnQ0FBRUwsV0FBVTs7Ozs7OzBDQUNiLDhEQUFDTTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVQLDhEQUFDbEMsaURBQUlBO3dCQUFDbUMsTUFBSzt3QkFBb0JQLFdBQVcsT0FBb0UsT0FBN0RwQixhQUFhLHNCQUFzQixjQUFjOzswQ0FDOUYsOERBQUN5QjtnQ0FBRUwsV0FBVTs7Ozs7OzBDQUNiLDhEQUFDTTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVQLDhEQUFDbEMsaURBQUlBO3dCQUFDbUMsTUFBSzt3QkFBeUJQLFdBQVcsT0FBeUUsT0FBbEVwQixhQUFhLDJCQUEyQixjQUFjOzswQ0FDeEcsOERBQUN5QjtnQ0FBRUwsV0FBVTs7Ozs7OzBDQUNiLDhEQUFDTTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQVVQLDhEQUFDbEMsaURBQUlBO3dCQUFDbUMsTUFBSzt3QkFBZ0JQLFdBQVU7OzBDQUNqQyw4REFBQ0s7Z0NBQUVMLFdBQVU7Ozs7OzswQ0FDYiw4REFBQ007MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtHQTdGd0IzQjs7UUFFSE4sd0RBQVdBOzs7S0FGUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvYXNpZGVzL0FjY291bnQudHN4PzcyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldEF1dGhUb2tlbiwgZ2V0VXNlcklkLCBnZXRVc2VyUHJvZmlsZSB9IGZyb20gXCJAL2FwcC9hY3Rpb25zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUHJvZmlsZU1vZGVsID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZW1haWw6IHN0cmluZyxcclxuICAgIHByb2ZpbGVJbWc6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGVQcm9wcyB7XHJcbiAgICBwcm9maWxlOiBQcm9maWxlTW9kZWxcclxufVxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50QXNpZGUocHJvcHM6IFByb2ZpbGVQcm9wcykge1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50QXNpZGUoKSB7XHJcbiAgICAvL2NvbnN0IHByb2ZpbGUgPSBwcm9wcy5wcm9maWxlXHJcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcclxuICAgIC8vY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIHZhciB0b2tlbjogc3RyaW5nXHJcbiAgICB2YXIgdXNlcklkU3RyaW5nOiBzdHJpbmdcclxuICAgIGNvbnN0IFtwcm9maWxlSW5mbywgc2V0UHJvZmlsZUluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgcHJvZmlsZUltZzogJycsXHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBiaW86ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGdldEF1dGhUb2tlbigpXHJcbiAgICAgICAgICAgIC50aGVuKCBhc3luYyAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlcklkKClcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codWlkKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlclByb2ZpbGUoKVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAocHJvZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9maWxlKVxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZmlsZUluZm8ocHJvZmlsZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcHJvZmlsZVJlcyA9IGF3YWl0IGdldFByb2ZpbGVJbmZvKClcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZmlsZVJlcylcclxuICAgICAgICAgICAgLy8gaWYgKHByb2ZpbGVSZXMgIT0gbnVsbClcclxuICAgICAgICAgICAgLy8gICAgIHNldFByb2ZpbGVJbmZvKHByb2ZpbGVSZXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGdldERhdGEoKVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJhY2NvdW50YXNpZGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1ib3hcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXItaW1nXCIgc3JjPXtcIi9pbWcvYXZhdGFycy9cIiArIHByb2ZpbGVJbmZvLnByb2ZpbGVJbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYXJyb3dzLXJvdGF0ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydC1pbmZvLWJveFwiPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaDVcIj57cHJvZmlsZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tXCI+e3Byb2ZpbGUuZW1haWx9PC9wPiAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDVcIj57cHJvZmlsZUluZm8uZmlyc3ROYW1lICsgJyAnICsgcHJvZmlsZUluZm8ubGFzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1cIj57cHJvZmlsZUluZm8uZW1haWx9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1ib3hcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYWNjb3VudC9kZXRhaWxzXCJ9IGNsYXNzTmFtZT17YGJ0biAke3BhdGhuYW1lID09PSAnL2FjY291bnQvZGV0YWlscycgPyAnYnRuLXRoZW1lJyA6ICdidG4td2hpdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jb2dcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8cD5BY2NvdW50IERldGFpbHM8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L3NlY3VyaXR5XCIgY2xhc3NOYW1lPXtgYnRuICR7cGF0aG5hbWUgPT09ICcvYWNjb3VudC9zZWN1cml0eScgPyAnYnRuLXRoZW1lJyA6ICdidG4td2hpdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1sb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHA+U2VjdXJpdHk8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L25vdGlmaWNhdGlvbnNcIiBjbGFzc05hbWU9e2BidG4gJHtwYXRobmFtZSA9PT0gJy9hY2NvdW50L25vdGlmaWNhdGlvbnMnID8gJ2J0bi10aGVtZScgOiAnYnRuLXdoaXRlJ31gfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtYmVsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvYWNjb3VudC9tZXNzYWdlc1wiIGNsYXNzTmFtZT17YGJ0biAke3BhdGhuYW1lID09PSAnL2FjY291bnQvbWVzc2FnZXMnID8gJ2J0bi10aGVtZScgOiAnYnRuLXdoaXRlJ31gfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtbWVzc2FnZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8cD5NZXNzYWdlczwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQvc2F2ZWRpdGVtc1wiIGNsYXNzTmFtZT17YGJ0biAke3BhdGhuYW1lID09PSAnL2FjY291bnQvc2F2ZWRpdGVtcycgPyAnYnRuLXRoZW1lJyA6ICdidG4td2hpdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1ib29rbWFya1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxwPlNhdmVkIEl0ZW1zPC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbm91dFwiIGNsYXNzTmFtZT1cImJ0biBidG4td2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtYXJyb3ctbGVmdC1mcm9tLWJyYWNrZXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8cD5TaWduIE91dDwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsImdldEF1dGhUb2tlbiIsImdldFVzZXJJZCIsImdldFVzZXJQcm9maWxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBY2NvdW50QXNpZGUiLCJwYXRobmFtZSIsInRva2VuIiwidXNlcklkU3RyaW5nIiwicHJvZmlsZUluZm8iLCJzZXRQcm9maWxlSW5mbyIsInVzZXJJZCIsInByb2ZpbGVJbWciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJiaW8iLCJnZXREYXRhIiwidGhlbiIsInQiLCJjb25zb2xlIiwibG9nIiwidWlkIiwicHJvZmlsZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiaSIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/asides/Account.tsx\n"));

/***/ })

});