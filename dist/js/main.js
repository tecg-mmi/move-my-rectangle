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

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Canvas = void 0;\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(canvasElement, height, width) {\n    var _this = this;\n\n    _classCallCheck(this, Canvas);\n\n    this.canvasElement = canvasElement;\n\n    if (height !== undefined) {\n      this.height = height;\n    } else {\n      this.autoHeight = true;\n      this.height = window.innerHeight;\n    }\n\n    if (width !== undefined) {\n      this.width = width;\n    } else {\n      this.autoWidth = true;\n      this.width = innerWidth;\n    }\n\n    this.ctx = this.canvasElement.getContext('2d');\n\n    if (this.autoHeight || this.autoHeight) {\n      window.addEventListener('resize', function () {\n        if (_this.autoHeight) {\n          _this.height = innerHeight;\n        }\n\n        if (_this.autoWidth) {\n          _this.width = innerWidth;\n        }\n      });\n    }\n  }\n\n  _createClass(Canvas, [{\n    key: \"height\",\n    get: function get() {\n      return this._height;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._height = value;\n        this.canvasElement.height = value;\n      }\n    }\n  }, {\n    key: \"width\",\n    get: function get() {\n      return this._width;\n    },\n    set: function set(value) {\n      if (value > 0) {\n        this._width = value;\n        this.canvasElement.width = value;\n      }\n    }\n  }]);\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsTTtBQStCVCxrQkFBWUMsYUFBWixFQUE4Q0MsTUFBOUMsRUFBK0RDLEtBQS9ELEVBQTZFO0FBQUE7O0FBQUE7O0FBQ3pFLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCOztBQUNBLFFBQUlDLE1BQU0sS0FBS0UsU0FBZixFQUEwQjtBQUN0QixXQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLRyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0gsTUFBTCxHQUFjSSxNQUFNLENBQUNDLFdBQXJCO0FBQ0g7O0FBRUQsUUFBSUosS0FBSyxLQUFLQyxTQUFkLEVBQXlCO0FBQ3JCLFdBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNILEtBRkQsTUFFTztBQUNILFdBQUtLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLTCxLQUFMLEdBQWFNLFVBQWI7QUFDSDs7QUFDRCxTQUFLQyxHQUFMLEdBQVcsS0FBS1QsYUFBTCxDQUFtQlUsVUFBbkIsQ0FBOEIsSUFBOUIsQ0FBWDs7QUFFQSxRQUFJLEtBQUtOLFVBQUwsSUFBbUIsS0FBS0EsVUFBNUIsRUFBd0M7QUFDcENDLFlBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBSztBQUNuQyxZQUFJLEtBQUksQ0FBQ1AsVUFBVCxFQUFxQjtBQUNqQixlQUFJLENBQUNILE1BQUwsR0FBY0ssV0FBZDtBQUNIOztBQUNELFlBQUksS0FBSSxDQUFDQyxTQUFULEVBQW9CO0FBQ2hCLGVBQUksQ0FBQ0wsS0FBTCxHQUFhTSxVQUFiO0FBQ0g7QUFDSixPQVBEO0FBUUg7QUFDSjs7OztTQW5DRCxlQUFVO0FBQ04sYUFBTyxLQUFLSSxPQUFaO0FBQ0gsSztTQWpCRCxhQUFrQkMsS0FBbEIsRUFBK0I7QUFDM0IsVUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYLGFBQUtELE9BQUwsR0FBZUMsS0FBZjtBQUNBLGFBQUtiLGFBQUwsQ0FBbUJDLE1BQW5CLEdBQTRCWSxLQUE1QjtBQUNIO0FBQ0o7OztTQWNELGVBQVM7QUFDTCxhQUFPLEtBQUtDLE1BQVo7QUFDSCxLO1NBZEQsYUFBaUJELEtBQWpCLEVBQThCO0FBQzFCLFVBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxhQUFLQyxNQUFMLEdBQWNELEtBQWQ7QUFDQSxhQUFLYixhQUFMLENBQW1CRSxLQUFuQixHQUEyQlcsS0FBM0I7QUFDSDtBQUNKOzs7Ozs7QUFwQkxFLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvQ2FudmFzLnRzPzg1YTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dG9IZWlnaHQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRvV2lkdGg6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9XaWR0aCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHQgfHwgdGhpcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBpbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQ2FudmFzIiwiY2FudmFzRWxlbWVudCIsImhlaWdodCIsIndpZHRoIiwidW5kZWZpbmVkIiwiYXV0b0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYXV0b1dpZHRoIiwiaW5uZXJXaWR0aCIsImN0eCIsImdldENvbnRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hlaWdodCIsInZhbHVlIiwiX3dpZHRoIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Colors/Rgb.ts":
/*!******************************!*\
  !*** ./src/ts/Colors/Rgb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Rgb = void 0;\n\nvar Rgb = /*#__PURE__*/_createClass(function Rgb(red, green, blue) {\n  var _this = this;\n\n  _classCallCheck(this, Rgb);\n\n  this.toString = function () {\n    return \"rgb(\".concat(_this.red, \",\").concat(_this.green, \",\").concat(_this.blue, \")\");\n  };\n\n  this.red = red;\n  this.green = green;\n  this.blue = blue;\n});\n\nexports.Rgb = Rgb;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29sb3JzL1JnYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQWFBLEcsNkJBS1QsYUFBWUMsR0FBWixFQUF5QkMsS0FBekIsRUFBd0NDLElBQXhDLEVBQW9EO0FBQUE7O0FBQUE7O0FBTTdDLGtCQUFXLFlBQWE7QUFDM0IseUJBQWMsS0FBSSxDQUFDRixHQUFuQixjQUEwQixLQUFJLENBQUNDLEtBQS9CLGNBQXdDLEtBQUksQ0FBQ0MsSUFBN0M7QUFDSCxHQUZNOztBQUxILE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNILEM7O0FBVExDLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvQ29sb3JzL1JnYi50cz8yZWY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZ2Ige1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBncmVlbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJlZCA9IHJlZDtcbiAgICAgICAgdGhpcy5ncmVlbiA9IGdyZWVuO1xuICAgICAgICB0aGlzLmJsdWUgPSBibHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucmVkfSwke3RoaXMuZ3JlZW59LCR7dGhpcy5ibHVlfSlgO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUmdiIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Colors/Rgb.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Rgb_1 = __webpack_require__(/*! ./Colors/Rgb */ \"./src/ts/Colors/Rgb.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar canvas = new Canvas_1.Canvas(document.getElementById('my-canvas'));\n\nvar FlatColors = __webpack_require__(/*! flat-colors */ \"./node_modules/flat-colors/lib/index.js\");\n\nvar colors = FlatColors(Math.random() * 250, Math.random() * 250, Math.random() * 250);\nvar myRectangle = new Rectangle_1.Rectangle(canvas, new Rgb_1.Rgb(colors[0], colors[1], colors[2]), {\n  x: 40,\n  y: 100\n}, 20, 50);\n\nfunction main() {\n  animate();\n}\n\nmain();\nwindow.addEventListener('mousemove', function (event) {\n  myRectangle.setDirectionByMousePosition({\n    x: event.x,\n    y: event.y\n  });\n});\n\nfunction animate() {\n  myRectangle.clear();\n  myRectangle.update();\n  myRectangle.draw();\n  requestAnimationFrame(animate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQVcsSUFBSUMsZUFBSixDQUFXQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBWCxDQUF2Qjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBMUI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixVQUFVLENBQUNHLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixFQUFzQkQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXRDLEVBQTJDRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBM0QsQ0FBekI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMscUJBQUosQ0FBY1YsTUFBZCxFQUFzQixJQUFJVyxTQUFKLENBQVFMLE1BQU0sQ0FBQyxDQUFELENBQWQsRUFBbUJBLE1BQU0sQ0FBQyxDQUFELENBQXpCLEVBQThCQSxNQUFNLENBQUMsQ0FBRCxDQUFwQyxDQUF0QixFQUFnRTtBQUFDTSxHQUFDLEVBQUUsRUFBSjtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFoRSxFQUFpRixFQUFqRixFQUFxRixFQUFyRixDQUFwQjs7QUFFQSxTQUFTQyxJQUFULEdBQWE7QUFDVEMsU0FBTztBQUNWOztBQUVERCxJQUFJO0FBRUpFLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ0MsS0FBRCxFQUFzQjtBQUN2RFQsYUFBVyxDQUFDVSwyQkFBWixDQUF3QztBQUFDUCxLQUFDLEVBQUVNLEtBQUssQ0FBQ04sQ0FBVjtBQUFhQyxLQUFDLEVBQUVLLEtBQUssQ0FBQ0w7QUFBdEIsR0FBeEM7QUFDSCxDQUZEOztBQUtBLFNBQVNFLE9BQVQsR0FBZ0I7QUFDWk4sYUFBVyxDQUFDVyxLQUFaO0FBQ0FYLGFBQVcsQ0FBQ1ksTUFBWjtBQUNBWixhQUFXLENBQUNhLElBQVo7QUFDQUMsdUJBQXFCLENBQUNSLE9BQUQsQ0FBckI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL3RzL21haW4udHM/ZTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vc2hhcGVzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgY2FudmFzOiBDYW52YXMgPSBuZXcgQ2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSk7XG5jb25zdCBGbGF0Q29sb3JzID0gcmVxdWlyZShcImZsYXQtY29sb3JzXCIpXG5jb25zdCBjb2xvcnMgPSBGbGF0Q29sb3JzKE1hdGgucmFuZG9tKCkgKiAyNTAsIE1hdGgucmFuZG9tKCkgKiAyNTAsIE1hdGgucmFuZG9tKCkgKiAyNTApO1xuY29uc3QgbXlSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKGNhbnZhcywgbmV3IFJnYihjb2xvcnNbMF0sIGNvbG9yc1sxXSwgY29sb3JzWzJdKSwge3g6IDQwLCB5OiAxMDB9LCAyMCwgNTApO1xuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIGFuaW1hdGUoKTtcbn1cblxubWFpbigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbXlSZWN0YW5nbGUuc2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uKHt4OiBldmVudC54LCB5OiBldmVudC55fSk7XG59KTtcblxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIG15UmVjdGFuZ2xlLmNsZWFyKCk7XG4gICAgbXlSZWN0YW5nbGUudXBkYXRlKCk7XG4gICAgbXlSZWN0YW5nbGUuZHJhdygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJjYW52YXMiLCJDYW52YXNfMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJGbGF0Q29sb3JzIiwicmVxdWlyZSIsImNvbG9ycyIsIk1hdGgiLCJyYW5kb20iLCJteVJlY3RhbmdsZSIsIlJlY3RhbmdsZV8xIiwiUmdiXzEiLCJ4IiwieSIsIm1haW4iLCJhbmltYXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uIiwiY2xlYXIiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Rectangle = void 0;\n\nvar Rectangle = /*#__PURE__*/function () {\n  function Rectangle(canvas, color, position, width, height) {\n    _classCallCheck(this, Rectangle);\n\n    this.canvas = canvas;\n    this.ctx = this.canvas.ctx;\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = 3;\n    this.direction = Math.random() * Math.PI * 2;\n  }\n\n  _createClass(Rectangle, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.save();\n      this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);\n      this.ctx.rotate(this.direction);\n      this.ctx.fillStyle = \"\".concat(this.color);\n      this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n      this.ctx.restore();\n      return this;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.position.x += this.speed * Math.cos(this.direction);\n      this.position.y += this.speed * Math.sin(this.direction);\n\n      if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {\n        this.direction = Math.PI - this.direction;\n      }\n\n      if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {\n        this.direction = -this.direction;\n      }\n    }\n  }, {\n    key: \"setDirectionByMousePosition\",\n    value: function setDirectionByMousePosition(position) {\n      this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);\n    }\n  }]);\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9zaGFwZXMvUmVjdGFuZ2xlLnRzP2FjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuLi9Db2xvcnMvSHNsXCI7XG5pbXBvcnQge1JnYn0gZnJvbSBcIi4uL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7SVBvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvSVBvc2l0aW9uXCI7XG5pbXBvcnQge0NhbnZhc30gZnJvbSBcIi4uL0NhbnZhc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcG9zaXRpb246IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICAgIGNvbG9yOiBIc2wgfCBSZ2I7XG4gICAgcHJpdmF0ZSBjYW52YXM6IENhbnZhcztcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogQ2FudmFzLCBjb2xvcjogSHNsIHwgUmdiLCBwb3NpdGlvbjogSVBvc2l0aW9uLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpOyAvLyBzYXV2ZWdhcmRlIGwnw6l0YXQgYWN0dWVsIGR1IGNvbnRleHRlXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgLyAyKTsgLy8gZMOpcGxhY2UgbCdvcmlnaW5lIGR1IHN5c3TDqG1lIGRlIGNvb3Jkb25uw6llcyBhdSBjZW50cmUgZHUgcmVjdGFuZ2xlXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbik7IC8vIGFwcGxpcXVlIGxhIHRyYW5zZm9ybWF0aW9uIGRlIHJvdGF0aW9uXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGAke3RoaXMuY29sb3J9YDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IC8vIGRlc3NpbmUgbGUgcmVjdGFuZ2xlIGNlbnRyw6kgc3VyIGwnb3JpZ2luZVxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7IC8vIHJlc3RhdXJlIGwnw6l0YXQgcHLDqWPDqWRlbnQgZHUgY29udGV4dGVcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIC8vdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IDAgfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLlBJIC0gdGhpcy5kaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IDAgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC10aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERpcmVjdGlvbkJ5TW91c2VQb3NpdGlvbihwb3NpdGlvbjogSVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5hdGFuMihwb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55LCBwb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlY3RhbmdsZSIsImNhbnZhcyIsImNvbG9yIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsInNwZWVkIiwiZGlyZWN0aW9uIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwic2F2ZSIsInRyYW5zbGF0ZSIsIngiLCJ5Iiwicm90YXRlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiY29zIiwic2luIiwiYXRhbjIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

/***/ }),

/***/ "./node_modules/flat-colors/lib/color-names.js":
/*!*****************************************************!*\
  !*** ./node_modules/flat-colors/lib/color-names.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n    turquoise: \"#1abc9c\",\n    emerland: \"#2ecc71\",\n    peterRiver: \"#3498db\",\n    amethyst: \"#9b59b6\",\n    wetAsphalt: \"#34495e\",\n    greenSea: \"#16a085\",\n    nephritis: \"#27ae60\",\n    belizeHole: \"#2980b9\",\n    wisteria: \"#8e44ad\",\n    midnightBlue: \"#2c3e50\",\n    sunFlower: \"#f1c40f\",\n    carrot: \"#e67e22\",\n    alizarin: \"#e74c3c\",\n    clouds: \"#ecf0f1\",\n    concrete: \"#95a5a6\",\n    orange: \"#f39c12\",\n    pumpkin: \"#d35400\",\n    pomegranate: \"#c0392b\",\n    silver: \"#bdc3c7\",\n    asbestos: \"#7f8c8d\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZmxhdC1jb2xvcnMvbGliL2NvbG9yLW5hbWVzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9ub2RlX21vZHVsZXMvZmxhdC1jb2xvcnMvbGliL2NvbG9yLW5hbWVzLmpzPzZjZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHR1cnF1b2lzZTogXCIjMWFiYzljXCIsXG4gICAgZW1lcmxhbmQ6IFwiIzJlY2M3MVwiLFxuICAgIHBldGVyUml2ZXI6IFwiIzM0OThkYlwiLFxuICAgIGFtZXRoeXN0OiBcIiM5YjU5YjZcIixcbiAgICB3ZXRBc3BoYWx0OiBcIiMzNDQ5NWVcIixcbiAgICBncmVlblNlYTogXCIjMTZhMDg1XCIsXG4gICAgbmVwaHJpdGlzOiBcIiMyN2FlNjBcIixcbiAgICBiZWxpemVIb2xlOiBcIiMyOTgwYjlcIixcbiAgICB3aXN0ZXJpYTogXCIjOGU0NGFkXCIsXG4gICAgbWlkbmlnaHRCbHVlOiBcIiMyYzNlNTBcIixcbiAgICBzdW5GbG93ZXI6IFwiI2YxYzQwZlwiLFxuICAgIGNhcnJvdDogXCIjZTY3ZTIyXCIsXG4gICAgYWxpemFyaW46IFwiI2U3NGMzY1wiLFxuICAgIGNsb3VkczogXCIjZWNmMGYxXCIsXG4gICAgY29uY3JldGU6IFwiIzk1YTVhNlwiLFxuICAgIG9yYW5nZTogXCIjZjM5YzEyXCIsXG4gICAgcHVtcGtpbjogXCIjZDM1NDAwXCIsXG4gICAgcG9tZWdyYW5hdGU6IFwiI2MwMzkyYlwiLFxuICAgIHNpbHZlcjogXCIjYmRjM2M3XCIsXG4gICAgYXNiZXN0b3M6IFwiIzdmOGM4ZFwiXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/flat-colors/lib/color-names.js\n");

/***/ }),

/***/ "./node_modules/flat-colors/lib/colors.js":
/*!************************************************!*\
  !*** ./node_modules/flat-colors/lib/colors.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = [[26, 188, 156, \"#1abc9c\", \"turquoise\"], [46, 204, 113, \"#2ecc71\", \"emerland\"], [52, 152, 219, \"#3498db\", \"peter-river\"], [155, 89, 182, \"#9b59b6\", \"amethyst\"], [52, 73, 94, \"#34495e\", \"wet-asphalt\"], [22, 160, 133, \"#16a085\", \"green-sea\"], [39, 174, 96, \"#27ae60\", \"nephritis\"], [41, 128, 185, \"#2980b9\", \"belize-hole\"], [142, 68, 173, \"#8e44ad\", \"wisteria\"], [44, 62, 80, \"#2c3e50\", \"midnight-blue\"], [241, 196, 15, \"#f1c40f\", \"sun-flower\"], [230, 126, 34, \"#e67e22\", \"carrot\"], [231, 76, 60, \"#e74c3c\", \"alizarin\"], [236, 240, 241, \"#ecf0f1\", \"clouds\"], [149, 165, 166, \"#95a5a6\", \"concrete\"], [243, 156, 18, \"#f39c12\", \"orange\"], [211, 84, 0, \"#d35400\", \"pumpkin\"], [192, 57, 43, \"#c0392b\", \"pomegranate\"], [189, 195, 199, \"#bdc3c7\", \"silver\"], [127, 140, 141, \"#7f8c8d\", \"asbestos\"]];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZmxhdC1jb2xvcnMvbGliL2NvbG9ycy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vbm9kZV9tb2R1bGVzL2ZsYXQtY29sb3JzL2xpYi9jb2xvcnMuanM/Mjk3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBbWzI2LCAxODgsIDE1NiwgXCIjMWFiYzljXCIsIFwidHVycXVvaXNlXCJdLCBbNDYsIDIwNCwgMTEzLCBcIiMyZWNjNzFcIiwgXCJlbWVybGFuZFwiXSwgWzUyLCAxNTIsIDIxOSwgXCIjMzQ5OGRiXCIsIFwicGV0ZXItcml2ZXJcIl0sIFsxNTUsIDg5LCAxODIsIFwiIzliNTliNlwiLCBcImFtZXRoeXN0XCJdLCBbNTIsIDczLCA5NCwgXCIjMzQ0OTVlXCIsIFwid2V0LWFzcGhhbHRcIl0sIFsyMiwgMTYwLCAxMzMsIFwiIzE2YTA4NVwiLCBcImdyZWVuLXNlYVwiXSwgWzM5LCAxNzQsIDk2LCBcIiMyN2FlNjBcIiwgXCJuZXBocml0aXNcIl0sIFs0MSwgMTI4LCAxODUsIFwiIzI5ODBiOVwiLCBcImJlbGl6ZS1ob2xlXCJdLCBbMTQyLCA2OCwgMTczLCBcIiM4ZTQ0YWRcIiwgXCJ3aXN0ZXJpYVwiXSwgWzQ0LCA2MiwgODAsIFwiIzJjM2U1MFwiLCBcIm1pZG5pZ2h0LWJsdWVcIl0sIFsyNDEsIDE5NiwgMTUsIFwiI2YxYzQwZlwiLCBcInN1bi1mbG93ZXJcIl0sIFsyMzAsIDEyNiwgMzQsIFwiI2U2N2UyMlwiLCBcImNhcnJvdFwiXSwgWzIzMSwgNzYsIDYwLCBcIiNlNzRjM2NcIiwgXCJhbGl6YXJpblwiXSwgWzIzNiwgMjQwLCAyNDEsIFwiI2VjZjBmMVwiLCBcImNsb3Vkc1wiXSwgWzE0OSwgMTY1LCAxNjYsIFwiIzk1YTVhNlwiLCBcImNvbmNyZXRlXCJdLCBbMjQzLCAxNTYsIDE4LCBcIiNmMzljMTJcIiwgXCJvcmFuZ2VcIl0sIFsyMTEsIDg0LCAwLCBcIiNkMzU0MDBcIiwgXCJwdW1wa2luXCJdLCBbMTkyLCA1NywgNDMsIFwiI2MwMzkyYlwiLCBcInBvbWVncmFuYXRlXCJdLCBbMTg5LCAxOTUsIDE5OSwgXCIjYmRjM2M3XCIsIFwic2lsdmVyXCJdLCBbMTI3LCAxNDAsIDE0MSwgXCIjN2Y4YzhkXCIsIFwiYXNiZXN0b3NcIl1dOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/flat-colors/lib/colors.js\n");

/***/ }),

/***/ "./node_modules/flat-colors/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/flat-colors/lib/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Dependencies\nvar Colors = __webpack_require__(/*! ./colors */ \"./node_modules/flat-colors/lib/colors.js\"),\n    ColorNames = __webpack_require__(/*! ./color-names */ \"./node_modules/flat-colors/lib/color-names.js\");\n\n/**\n * FlatColors\n * Finds the nearest flat color for rgb and hex inputs.\n *\n * @name FlatColors\n * @function\n * @param {String|Number|Array|undefined} r The color as string in hex format, the *red* value or the rgb passed as array. If `undefined`, a random color will be returned.\n * @param {Number} g The green value.\n * @param {Number} b The blue value.\n * @return {Array} An array containing the rgb values of the flat color which was found.\n */\nfunction FlatColors(r, g, b) {\n\n    if (r === undefined) {\n        return Colors[Math.floor(Math.random() * Colors.length)];\n    }\n\n    if (typeof r === \"string\" && r.charAt(0) === \"#\") {\n        return FlatColors(FlatColors.toRgb(r));\n    }\n\n    var rgb = Array.isArray(r) ? r : [r, g, b],\n        best = null;\n\n    for (var i = 0; i < Colors.length; ++i) {\n        var d = distance(Colors[i], rgb);\n        if (!best || d <= best.distance) {\n            best = { distance: d, index: i };\n        }\n    }\n\n    return Colors[best.index];\n}\n\n/**\n * toRgb\n * Converts a hex format color into rgb.\n *\n * @name toRgb\n * @function\n * @param {String} hex The color in the hex format.\n * @return {Array|null} The rgb array or null.\n */\nFlatColors.toRgb = function (hex) {\n    var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n    hex = hex.replace(shorthandRegex, function (m, r, g, b) {\n        return r + r + g + g + b + b;\n    });\n    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;\n};\n\nFlatColors.colors = Colors;\nFlatColors._ = ColorNames;\n\nfunction distance(a, b) {\n    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2));\n}\n\nmodule.exports = FlatColors;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZmxhdC1jb2xvcnMvbGliL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDBEQUFVO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFlOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL25vZGVfbW9kdWxlcy9mbGF0LWNvbG9ycy9saWIvaW5kZXguanM/YTMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzXG52YXIgQ29sb3JzID0gcmVxdWlyZShcIi4vY29sb3JzXCIpLFxuICAgIENvbG9yTmFtZXMgPSByZXF1aXJlKFwiLi9jb2xvci1uYW1lc1wiKTtcblxuLyoqXG4gKiBGbGF0Q29sb3JzXG4gKiBGaW5kcyB0aGUgbmVhcmVzdCBmbGF0IGNvbG9yIGZvciByZ2IgYW5kIGhleCBpbnB1dHMuXG4gKlxuICogQG5hbWUgRmxhdENvbG9yc1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ8QXJyYXl8dW5kZWZpbmVkfSByIFRoZSBjb2xvciBhcyBzdHJpbmcgaW4gaGV4IGZvcm1hdCwgdGhlICpyZWQqIHZhbHVlIG9yIHRoZSByZ2IgcGFzc2VkIGFzIGFycmF5LiBJZiBgdW5kZWZpbmVkYCwgYSByYW5kb20gY29sb3Igd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBnIFRoZSBncmVlbiB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBibHVlIHZhbHVlLlxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJnYiB2YWx1ZXMgb2YgdGhlIGZsYXQgY29sb3Igd2hpY2ggd2FzIGZvdW5kLlxuICovXG5mdW5jdGlvbiBGbGF0Q29sb3JzKHIsIGcsIGIpIHtcblxuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIENvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb2xvcnMubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByID09PSBcInN0cmluZ1wiICYmIHIuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICByZXR1cm4gRmxhdENvbG9ycyhGbGF0Q29sb3JzLnRvUmdiKHIpKTtcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gQXJyYXkuaXNBcnJheShyKSA/IHIgOiBbciwgZywgYl0sXG4gICAgICAgIGJlc3QgPSBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGQgPSBkaXN0YW5jZShDb2xvcnNbaV0sIHJnYik7XG4gICAgICAgIGlmICghYmVzdCB8fCBkIDw9IGJlc3QuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGJlc3QgPSB7IGRpc3RhbmNlOiBkLCBpbmRleDogaSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbG9yc1tiZXN0LmluZGV4XTtcbn1cblxuLyoqXG4gKiB0b1JnYlxuICogQ29udmVydHMgYSBoZXggZm9ybWF0IGNvbG9yIGludG8gcmdiLlxuICpcbiAqIEBuYW1lIHRvUmdiXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBoZXggVGhlIGNvbG9yIGluIHRoZSBoZXggZm9ybWF0LlxuICogQHJldHVybiB7QXJyYXl8bnVsbH0gVGhlIHJnYiBhcnJheSBvciBudWxsLlxuICovXG5GbGF0Q29sb3JzLnRvUmdiID0gZnVuY3Rpb24gKGhleCkge1xuICAgIHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XG4gICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gICAgfSk7XG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHQgPyBbcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KV0gOiBudWxsO1xufTtcblxuRmxhdENvbG9ycy5jb2xvcnMgPSBDb2xvcnM7XG5GbGF0Q29sb3JzLl8gPSBDb2xvck5hbWVzO1xuXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhWzBdIC0gYlswXSwgMikgKyBNYXRoLnBvdyhhWzFdIC0gYlsxXSwgMikgKyBNYXRoLnBvdyhhWzJdIC0gYlsyXSwgMikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsYXRDb2xvcnM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/flat-colors/lib/index.js\n");

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