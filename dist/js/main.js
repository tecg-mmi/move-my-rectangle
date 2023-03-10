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

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Hsl_1 = __webpack_require__(/*! ./Colors/Hsl */ \"./src/ts/Colors/Hsl.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar myRectangle = new Rectangle_1.Rectangle(canvas, new Hsl_1.Hsl(120, 80, 40), {\n  x: 40,\n  y: 100\n}, 20, 50);\n\nfunction main() {\n  animate();\n}\n\nmain();\n\nfunction animate() {\n  myRectangle.clear();\n  myRectangle.update();\n  myRectangle.draw();\n  requestAnimationFrame(animate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlDLHFCQUFKLENBQWNKLE1BQWQsRUFBc0IsSUFBSUssU0FBSixDQUFRLEdBQVIsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBQXRCLEVBQTRDO0FBQUNDLEdBQUMsRUFBRSxFQUFKO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQTVDLEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLENBQXBCOztBQUVBLFNBQVNDLElBQVQsR0FBYTtBQUNUQyxTQUFPO0FBQ1Y7O0FBRURELElBQUk7O0FBRUosU0FBU0MsT0FBVCxHQUFnQjtBQUNaTixhQUFXLENBQUNPLEtBQVo7QUFDQVAsYUFBVyxDQUFDUSxNQUFaO0FBQ0FSLGFBQVcsQ0FBQ1MsSUFBWjtBQUNBQyx1QkFBcUIsQ0FBQ0osT0FBRCxDQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvbWFpbi50cz9lODg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9zaGFwZXMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQge0hzbH0gZnJvbSBcIi4vQ29sb3JzL0hzbFwiO1xuXG4vLyBAdHMtaWdub3JlXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpO1xuY29uc3QgbXlSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKGNhbnZhcywgbmV3IEhzbCgxMjAsIDgwLCA0MCksIHt4OiA0MCwgeTogMTAwfSwgMjAsIDUwKTtcblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcbiAgICBhbmltYXRlKCk7XG59XG5cbm1haW4oKTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBteVJlY3RhbmdsZS5jbGVhcigpO1xuICAgIG15UmVjdGFuZ2xlLnVwZGF0ZSgpO1xuICAgIG15UmVjdGFuZ2xlLmRyYXcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJteVJlY3RhbmdsZSIsIlJlY3RhbmdsZV8xIiwiSHNsXzEiLCJ4IiwieSIsIm1haW4iLCJhbmltYXRlIiwiY2xlYXIiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Rectangle = function () {\n  function Rectangle(canvas, color, position, width, height) {\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext('2d');\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = 3;\n    this.alpha = Math.random() * Math.PI;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = \"\".concat(this.color);\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    return this;\n  };\n\n  Rectangle.prototype.clear = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Rectangle.prototype.update = function () {\n    if (this.position.x + this.width >= this.canvas.width || this.position.x <= 0 || this.position.y + this.height >= this.canvas.height || this.position.y <= 0) {\n      this.speed = -this.speed;\n    }\n\n    this.position.x += this.speed * Math.cos(this.alpha);\n    this.position.y += this.speed * Math.sin(this.alpha);\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBVUkscUJBQVlBLE1BQVosRUFBdUNDLEtBQXZDLEVBQXlEQyxRQUF6RCxFQUE4RUMsS0FBOUUsRUFBNkZDLE1BQTdGLEVBQTJHO0FBQ3ZHLFNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtLLEdBQUwsR0FBVyxLQUFLTCxNQUFMLENBQVlNLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS00sS0FBTCxHQUFhLENBQWI7QUFFQSxTQUFLQyxLQUFMLEdBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDRSxFQUFsQztBQUNIOztBQUVEQztBQUNJLFNBQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFxQixVQUFHLEtBQUtaLEtBQVIsQ0FBckI7QUFDQSxTQUFLSSxHQUFMLENBQVNTLFFBQVQsQ0FBa0IsS0FBS1osUUFBTCxDQUFjYSxDQUFoQyxFQUFtQyxLQUFLYixRQUFMLENBQWNjLENBQWpELEVBQW9ELEtBQUtiLEtBQXpELEVBQWdFLEtBQUtDLE1BQXJFO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FKRDs7QUFNQVE7QUFFSSxTQUFLUCxHQUFMLENBQVNZLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2pCLE1BQUwsQ0FBWUcsS0FBckMsRUFBNEMsS0FBS0gsTUFBTCxDQUFZSSxNQUF4RDtBQUNILEdBSEQ7O0FBS0FRO0FBQ0ksUUFBSyxLQUFLVixRQUFMLENBQWNhLENBQWQsR0FBa0IsS0FBS1osS0FBdkIsSUFBZ0MsS0FBS0gsTUFBTCxDQUFZRyxLQUE1QyxJQUNELEtBQUtELFFBQUwsQ0FBY2EsQ0FBZCxJQUFtQixDQURuQixJQUVBLEtBQUtiLFFBQUwsQ0FBY2MsQ0FBZCxHQUFrQixLQUFLWixNQUF2QixJQUFpQyxLQUFLSixNQUFMLENBQVlJLE1BQTdDLElBQ0EsS0FBS0YsUUFBTCxDQUFjYyxDQUFkLElBQW1CLENBSHZCLEVBRzJCO0FBQ25CLFdBQUtULEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5CO0FBQ1A7O0FBRUQsU0FBS0wsUUFBTCxDQUFjYSxDQUFkLElBQW1CLEtBQUtSLEtBQUwsR0FBYUUsSUFBSSxDQUFDUyxHQUFMLENBQVMsS0FBS1YsS0FBZCxDQUFoQztBQUNBLFNBQUtOLFFBQUwsQ0FBY2MsQ0FBZCxJQUFtQixLQUFLVCxLQUFMLEdBQWFFLElBQUksQ0FBQ1UsR0FBTCxDQUFTLEtBQUtYLEtBQWQsQ0FBaEM7QUFDSCxHQVZEOztBQVdKO0FBQUMsQ0E1Q0Q7O0FBQWFZLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL3NoYXBlcy9SZWN0YW5nbGUudHM/YWNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hzbH0gZnJvbSBcIi4uL0NvbG9ycy9Ic2xcIjtcbmltcG9ydCB7UmdifSBmcm9tIFwiLi4vQ29sb3JzL1JnYlwiO1xuaW1wb3J0IHtJUG9zaXRpb259IGZyb20gXCIuL0lQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcG9zaXRpb246IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICAgIGNvbG9yOiBIc2wgfCBSZ2I7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY29sb3I6IEhzbCB8IFJnYiwgcG9zaXRpb246IElQb3NpdGlvbiwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICAvLyBbMCAtIDIqTWF0aC5QSV1cbiAgICAgICAgdGhpcy5hbHBoYSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGAke3RoaXMuY29sb3J9YDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIC8vdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSB0aGlzLmNhbnZhcy53aWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IDw9IDApIHx8IChcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID49IHRoaXMuY2FudmFzLmhlaWdodCB8fFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IDw9IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLnNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmFscGhhKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmFscGhhKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImNvbG9yIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJzcGVlZCIsImFscGhhIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwiUmVjdGFuZ2xlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsImNsZWFyUmVjdCIsImNvcyIsInNpbiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

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