/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csv-parse/lib/sync */ \"csv-parse/lib/sync\");\n/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/chris/development/macro-meal-planner/pages/index.js\";\n\n\n\nconst HomePage = ({\n  data,\n  error\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Meals\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"An error occurred!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 24\n    }, undefined), !error && data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Type\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Energy (kcal)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Protein (g)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Carbs (g)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            children: \"Fat (g)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: data.map((meal, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.type\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.kcal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.protein\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.carbs\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: meal.fat\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 33\n          }, undefined)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 29\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst getServerSideProps = async () => {\n  const fileContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(process.cwd() + '/_data/meals.csv');\n  const data = csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_2___default()(fileContent, {\n    columns: true\n  });\n  return {\n    props: {\n      data\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWNyby1tZWFsLXBsYW5uZXIvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZGF0YSIsImVycm9yIiwibWFwIiwibWVhbCIsImkiLCJuYW1lIiwidHlwZSIsImtjYWwiLCJwcm90ZWluIiwiY2FyYnMiLCJmYXQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJmaWxlQ29udGVudCIsImZzIiwicHJvY2VzcyIsImN3ZCIsInBhcnNlIiwiY29sdW1ucyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFxQjtBQUNsQyxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRU1BLEtBQUssaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmYsRUFHTSxDQUFDQSxLQUFELElBQVVELElBQVYsaUJBQ0U7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFXSTtBQUFBLGtCQUNNQSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxDQUFDQyxJQUFELEVBQU9DLENBQVAsa0JBQ1A7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsc0JBQUtGLElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSxzQkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosZUFJSTtBQUFBLHNCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJO0FBQUEsc0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBTUk7QUFBQSxzQkFBS04sSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQSxXQUFTTixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUjtBQUFBLGtCQURKO0FBZ0NILENBakNEOztBQW1DTyxNQUFNTyxrQkFBa0IsR0FBRyxZQUFZO0FBQzFDLFFBQU1DLFdBQVcsR0FBR0Msc0RBQUEsQ0FBZ0JDLE9BQU8sQ0FBQ0MsR0FBUixLQUFnQixrQkFBaEMsQ0FBcEI7QUFDQSxRQUFNZixJQUFJLEdBQUdnQix5REFBSyxDQUFDSixXQUFELEVBQWM7QUFBQ0ssV0FBTyxFQUFFO0FBQVYsR0FBZCxDQUFsQjtBQUVBLFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUVsQjtBQUFGO0FBQVQsR0FBUDtBQUNILENBTE07QUFPUCwrREFBZUQsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhcnNlIGZyb20gXCJjc3YtcGFyc2UvbGliL3N5bmNcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5NZWFsczwvaDE+XG4gICAgICAgICAgICB7IGVycm9yICYmIDxkaXY+QW4gZXJyb3Igb2NjdXJyZWQhPC9kaXY+fVxuICAgICAgICAgICAgeyAhZXJyb3IgJiYgZGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW5lcmd5IChrY2FsKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb3RlaW4gKGcpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2FyYnMgKGcpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmF0IChnKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGEubWFwKChtZWFsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbC50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbC5rY2FsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbC5wcm90ZWlufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbC5jYXJic308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lYWwuZmF0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwcm9jZXNzLmN3ZCgpICsgJy9fZGF0YS9tZWFscy5jc3YnKTtcbiAgICBjb25zdCBkYXRhID0gcGFyc2UoZmlsZUNvbnRlbnQsIHtjb2x1bW5zOiB0cnVlfSk7XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "csv-parse/lib/sync":
/*!*************************************!*\
  !*** external "csv-parse/lib/sync" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("csv-parse/lib/sync");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();