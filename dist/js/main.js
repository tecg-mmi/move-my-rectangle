/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Colors/Hsl.ts":
/*!******************************!*\
  !*** ./src/ts/Colors/Hsl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Hsl = void 0;\n\nvar Hsl = function () {\n  function Hsl(hue, saturation, lightness) {\n    var _this = this;\n\n    this.toString = function () {\n      return \"hsl(\".concat(_this.hue, \",\").concat(_this.saturation, \"%,\").concat(_this.lightness, \"%)\");\n    };\n\n    this.hue = hue;\n    this.saturation = saturation;\n    this.lightness = lightness;\n  }\n\n  return Hsl;\n}();\n\nexports.Hsl = Hsl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29sb3JzL0hzbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBS0ksZUFBWUEsR0FBWixFQUF5QkMsVUFBekIsRUFBNkNDLFNBQTdDLEVBQThEO0FBQTlEOztBQU1PLG9CQUFXO0FBQ2QsYUFBTyxjQUFPQyxLQUFJLENBQUNILEdBQVosRUFBZSxHQUFmLEVBQWVJLE1BQWYsQ0FBbUJELEtBQUksQ0FBQ0YsVUFBeEIsRUFBa0MsSUFBbEMsRUFBa0NHLE1BQWxDLENBQXVDRCxLQUFJLENBQUNELFNBQTVDLEVBQXFELElBQXJELENBQVA7QUFDSCxLQUZNOztBQUxILFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7QUFLTDtBQUFDLENBZEQ7O0FBQWFHLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvQ29sb3JzL0hzbC50cz85ZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIc2wge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzYXR1cmF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsaWdodG5lc3M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGh1ZTogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHVlID0gaHVlO1xuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzYXR1cmF0aW9uO1xuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IGxpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGBoc2woJHt0aGlzLmh1ZX0sJHt0aGlzLnNhdHVyYXRpb259JSwke3RoaXMubGlnaHRuZXNzfSUpYDtcbiAgICB9XG59Il0sIm5hbWVzIjpbImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJfdGhpcyIsImNvbmNhdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Colors/Hsl.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Hsl_1 = __webpack_require__(/*! ./Colors/Hsl */ \"./src/ts/Colors/Hsl.ts\");\n\nfunction main() {\n  var ctx = document.getElementById('my-canvas').getContext('2d');\n  var myRectangle = new Rectangle_1.Rectangle(ctx, new Hsl_1.Hsl(120, 80, 40), {\n    x: 40,\n    y: 100\n  }, 20, 50);\n  myRectangle.draw();\n}\n\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFhO0FBRVQsTUFBTUMsR0FBRyxHQUE2QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxVQUFyQyxDQUFnRCxJQUFoRCxDQUF0QztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxxQkFBSixDQUFjTCxHQUFkLEVBQW1CLElBQUlNLFNBQUosQ0FBUSxHQUFSLEVBQWEsRUFBYixFQUFpQixFQUFqQixDQUFuQixFQUF5QztBQUFDQyxLQUFDLEVBQUUsRUFBSjtBQUFRQyxLQUFDLEVBQUU7QUFBWCxHQUF6QyxFQUEwRCxFQUExRCxFQUE4RCxFQUE5RCxDQUFwQjtBQUNBSixhQUFXLENBQUNLLElBQVo7QUFDSDs7QUFFRFYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL21haW4udHM/ZTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtIc2x9IGZyb20gXCIuL0NvbG9ycy9Ic2xcIjtcblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBteVJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoY3R4LCBuZXcgSHNsKDEyMCwgODAsIDQwKSwge3g6IDQwLCB5OiAxMDB9LCAyMCwgNTApO1xuICAgIG15UmVjdGFuZ2xlLmRyYXcoKTtcbn1cblxubWFpbigpOyJdLCJuYW1lcyI6WyJtYWluIiwiY3R4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJteVJlY3RhbmdsZSIsIlJlY3RhbmdsZV8xIiwiSHNsXzEiLCJ4IiwieSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Rectangle = function () {\n  function Rectangle(ctx, color, position, width, height) {\n    this.ctx = ctx;\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = \"\".concat(this.color);\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    return this;\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBT0kscUJBQVlBLEdBQVosRUFBMkNDLEtBQTNDLEVBQTZEQyxRQUE3RCxFQUFrRkMsS0FBbEYsRUFBaUdDLE1BQWpHLEVBQStHO0FBQzNHLFNBQUtKLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBRURJO0FBQ0ksU0FBS0wsR0FBTCxDQUFTTSxTQUFULEdBQXFCLFVBQUcsS0FBS0wsS0FBUixDQUFyQjtBQUNBLFNBQUtELEdBQUwsQ0FBU08sUUFBVCxDQUFrQixLQUFLTCxRQUFMLENBQWNNLENBQWhDLEVBQW1DLEtBQUtOLFFBQUwsQ0FBY08sQ0FBakQsRUFBb0QsS0FBS04sS0FBekQsRUFBZ0UsS0FBS0MsTUFBckU7QUFDQSxXQUFPLElBQVA7QUFDSCxHQUpEOztBQUtKO0FBQUMsQ0FwQkQ7O0FBQWFNLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL3NoYXBlcy9SZWN0YW5nbGUudHM/YWNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hzbH0gZnJvbSBcIi4uL0NvbG9ycy9Ic2xcIjtcbmltcG9ydCB7UmdifSBmcm9tIFwiLi4vQ29sb3JzL1JnYlwiO1xuaW1wb3J0IHtJUG9zaXRpb259IGZyb20gXCIuL0lQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcG9zaXRpb246IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yOiBIc2wgfCBSZ2I7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IEhzbCB8IFJnYiwgcG9zaXRpb246IElQb3NpdGlvbiwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59Il0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmove_my_rectangle"] = self["webpackChunkmove_my_rectangle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;