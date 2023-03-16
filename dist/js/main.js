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

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Hsl_1 = __webpack_require__(/*! ./Colors/Hsl */ \"./src/ts/Colors/Hsl.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar myRectangle = new Rectangle_1.Rectangle(canvas, new Hsl_1.Hsl(120, 80, 40), {\n  x: 40,\n  y: 100\n}, 20, 50);\n\nfunction main() {\n  animate();\n}\n\nmain();\nwindow.addEventListener('mousemove', function (e) {});\n\nfunction animate() {\n  myRectangle.clear();\n  myRectangle.update();\n  myRectangle.draw();\n  requestAnimationFrame(animate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlDLHFCQUFKLENBQWNKLE1BQWQsRUFBc0IsSUFBSUssU0FBSixDQUFRLEdBQVIsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBQXRCLEVBQTRDO0FBQUNDLEdBQUMsRUFBRSxFQUFKO0FBQVFDLEdBQUMsRUFBRTtBQUFYLENBQTVDLEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLENBQXBCOztBQUVBLFNBQVNDLElBQVQsR0FBYTtBQUNUQyxTQUFPO0FBQ1Y7O0FBRURELElBQUk7QUFFSkUsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDQyxDQUFELEVBQUUsQ0FFdEMsQ0FGRDs7QUFHQSxTQUFTSCxPQUFULEdBQWdCO0FBQ1pOLGFBQVcsQ0FBQ1UsS0FBWjtBQUNBVixhQUFXLENBQUNXLE1BQVo7QUFDQVgsYUFBVyxDQUFDWSxJQUFaO0FBQ0FDLHVCQUFxQixDQUFDUCxPQUFELENBQXJCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9tYWluLnRzP2U4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3NoYXBlcy9SZWN0YW5nbGVcIjtcbmltcG9ydCB7SHNsfSBmcm9tIFwiLi9Db2xvcnMvSHNsXCI7XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XG5jb25zdCBteVJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoY2FudmFzLCBuZXcgSHNsKDEyMCwgODAsIDQwKSwge3g6IDQwLCB5OiAxMDB9LCAyMCwgNTApO1xuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIGFuaW1hdGUoKTtcbn1cblxubWFpbigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcblxufSk7XG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIG15UmVjdGFuZ2xlLmNsZWFyKCk7XG4gICAgbXlSZWN0YW5nbGUudXBkYXRlKCk7XG4gICAgbXlSZWN0YW5nbGUuZHJhdygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibXlSZWN0YW5nbGUiLCJSZWN0YW5nbGVfMSIsIkhzbF8xIiwieCIsInkiLCJtYWluIiwiYW5pbWF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xlYXIiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Rectangle = function () {\n  function Rectangle(canvas, color, position, width, height) {\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext('2d');\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = 3;\n    this.alpha = Math.random() * Math.PI * 2;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);\n    this.ctx.rotate(this.alpha);\n    this.ctx.fillStyle = \"\".concat(this.color);\n    this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n    this.ctx.restore();\n    return this;\n  };\n\n  Rectangle.prototype.clear = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Rectangle.prototype.update = function () {\n    this.position.x += this.speed * Math.cos(this.alpha);\n    this.position.y += this.speed * Math.sin(this.alpha);\n\n    if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {\n      this.alpha = Math.PI - this.alpha;\n    }\n\n    if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {\n      this.alpha = -this.alpha;\n    }\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBVUkscUJBQVlBLE1BQVosRUFBdUNDLEtBQXZDLEVBQXlEQyxRQUF6RCxFQUE4RUMsS0FBOUUsRUFBNkZDLE1BQTdGLEVBQTJHO0FBQ3ZHLFNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtLLEdBQUwsR0FBVyxLQUFLTCxNQUFMLENBQVlNLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS00sS0FBTCxHQUFhLENBQWI7QUFFQSxTQUFLQyxLQUFMLEdBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDRSxFQUFyQixHQUEwQixDQUF2QztBQUNIOztBQUVEQztBQUNJLFNBQUtQLEdBQUwsQ0FBU1EsSUFBVDtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQixLQUFLWixRQUFMLENBQWNhLENBQWQsR0FBa0IsS0FBS1osS0FBTCxHQUFhLENBQWxELEVBQXFELEtBQUtELFFBQUwsQ0FBY2MsQ0FBZCxHQUFrQixLQUFLWixNQUFMLEdBQWMsQ0FBckY7QUFDQSxTQUFLQyxHQUFMLENBQVNZLE1BQVQsQ0FBZ0IsS0FBS1QsS0FBckI7QUFDQSxTQUFLSCxHQUFMLENBQVNhLFNBQVQsR0FBcUIsVUFBRyxLQUFLakIsS0FBUixDQUFyQjtBQUNBLFNBQUtJLEdBQUwsQ0FBU2MsUUFBVCxDQUFrQixDQUFDLEtBQUtoQixLQUFOLEdBQWMsQ0FBaEMsRUFBbUMsQ0FBQyxLQUFLQyxNQUFOLEdBQWUsQ0FBbEQsRUFBcUQsS0FBS0QsS0FBMUQsRUFBaUUsS0FBS0MsTUFBdEU7QUFDQSxTQUFLQyxHQUFMLENBQVNlLE9BQVQ7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVJEOztBQVVBUjtBQUVJLFNBQUtQLEdBQUwsQ0FBU2dCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3JCLE1BQUwsQ0FBWUcsS0FBckMsRUFBNEMsS0FBS0gsTUFBTCxDQUFZSSxNQUF4RDtBQUNILEdBSEQ7O0FBS0FRO0FBQ0ksU0FBS1YsUUFBTCxDQUFjYSxDQUFkLElBQW1CLEtBQUtSLEtBQUwsR0FBYUUsSUFBSSxDQUFDYSxHQUFMLENBQVMsS0FBS2QsS0FBZCxDQUFoQztBQUNBLFNBQUtOLFFBQUwsQ0FBY2MsQ0FBZCxJQUFtQixLQUFLVCxLQUFMLEdBQWFFLElBQUksQ0FBQ2MsR0FBTCxDQUFTLEtBQUtmLEtBQWQsQ0FBaEM7O0FBRUEsUUFBSSxLQUFLTixRQUFMLENBQWNhLENBQWQsSUFBbUIsQ0FBbkIsSUFBd0IsS0FBS2IsUUFBTCxDQUFjYSxDQUFkLEdBQWtCLEtBQUtaLEtBQXZCLElBQWdDLEtBQUtILE1BQUwsQ0FBWUcsS0FBeEUsRUFBK0U7QUFDM0UsV0FBS0ssS0FBTCxHQUFhQyxJQUFJLENBQUNFLEVBQUwsR0FBVSxLQUFLSCxLQUE1QjtBQUNIOztBQUVELFFBQUksS0FBS04sUUFBTCxDQUFjYyxDQUFkLElBQW1CLENBQW5CLElBQXdCLEtBQUtkLFFBQUwsQ0FBY2MsQ0FBZCxHQUFrQixLQUFLWixNQUF2QixJQUFpQyxLQUFLSixNQUFMLENBQVlJLE1BQXpFLEVBQWlGO0FBQzdFLFdBQUtJLEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5CO0FBQ0g7QUFDSixHQVhEOztBQVlKO0FBQUMsQ0FqREQ7O0FBQWFnQixpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9zaGFwZXMvUmVjdGFuZ2xlLnRzP2FjZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuLi9Db2xvcnMvSHNsXCI7XG5pbXBvcnQge1JnYn0gZnJvbSBcIi4uL0NvbG9ycy9SZ2JcIjtcbmltcG9ydCB7SVBvc2l0aW9ufSBmcm9tIFwiLi9JUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBJUG9zaXRpb247XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgYWxwaGE6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICBjb2xvcjogSHNsIHwgUmdiO1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNvbG9yOiBIc2wgfCBSZ2IsIHBvc2l0aW9uOiBJUG9zaXRpb24sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgLy8gWzAgLSAyKk1hdGguUEldXG4gICAgICAgIHRoaXMuYWxwaGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpOyAvLyBzYXV2ZWdhcmRlIGwnw6l0YXQgYWN0dWVsIGR1IGNvbnRleHRlXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgLyAyKTsgLy8gZMOpcGxhY2UgbCdvcmlnaW5lIGR1IHN5c3TDqG1lIGRlIGNvb3Jkb25uw6llcyBhdSBjZW50cmUgZHUgcmVjdGFuZ2xlXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFscGhhKTsgLy8gYXBwbGlxdWUgbGEgdHJhbnNmb3JtYXRpb24gZGUgcm90YXRpb25cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgLy8gZGVzc2luZSBsZSByZWN0YW5nbGUgY2VudHLDqSBzdXIgbCdvcmlnaW5lXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gcmVzdGF1cmUgbCfDqXRhdCBwcsOpY8OpZGVudCBkdSBjb250ZXh0ZVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgLy90aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmFscGhhKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmFscGhhKTtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IDAgfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IE1hdGguUEkgLSB0aGlzLmFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSAwIHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID49IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IC10aGlzLmFscGhhO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJjb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3BlZWQiLCJhbHBoYSIsIk1hdGgiLCJyYW5kb20iLCJQSSIsIlJlY3RhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJ4IiwieSIsInJvdGF0ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsImNsZWFyUmVjdCIsImNvcyIsInNpbiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

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