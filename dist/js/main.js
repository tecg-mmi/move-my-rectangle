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

/***/ "./src/ts/Colors/Rgb.ts":
/*!******************************!*\
  !*** ./src/ts/Colors/Rgb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rgb = void 0;\n\nvar Rgb = function () {\n  function Rgb(red, green, blue) {\n    var _this = this;\n\n    this.toString = function () {\n      return \"rgb(\".concat(_this.red, \",\").concat(_this.green, \",\").concat(_this.blue, \")\");\n    };\n\n    this.red = red;\n    this.green = green;\n    this.blue = blue;\n  }\n\n  return Rgb;\n}();\n\nexports.Rgb = Rgb;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29sb3JzL1JnYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBS0ksZUFBWUEsR0FBWixFQUF5QkMsS0FBekIsRUFBd0NDLElBQXhDLEVBQW9EO0FBQXBEOztBQU1PLG9CQUFXO0FBQ2QsYUFBTyxjQUFPQyxLQUFJLENBQUNILEdBQVosRUFBZSxHQUFmLEVBQWVJLE1BQWYsQ0FBbUJELEtBQUksQ0FBQ0YsS0FBeEIsRUFBNkIsR0FBN0IsRUFBNkJHLE1BQTdCLENBQWlDRCxLQUFJLENBQUNELElBQXRDLEVBQTBDLEdBQTFDLENBQVA7QUFDSCxLQUZNOztBQUxILFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNIOztBQUtMO0FBQUMsQ0FkRDs7QUFBYUcsV0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9Db2xvcnMvUmdiLnRzPzJlZjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJnYiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdyZWVuOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBibHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmVkID0gcmVkO1xuICAgICAgICB0aGlzLmdyZWVuID0gZ3JlZW47XG4gICAgICAgIHRoaXMuYmx1ZSA9IGJsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWR9LCR7dGhpcy5ncmVlbn0sJHt0aGlzLmJsdWV9KWA7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJyZWQiLCJncmVlbiIsImJsdWUiLCJfdGhpcyIsImNvbmNhdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Colors/Rgb.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/ts/shapes/Rectangle.ts\");\n\nvar Rgb_1 = __webpack_require__(/*! ./Colors/Rgb */ \"./src/ts/Colors/Rgb.ts\");\n\nvar canvas = document.getElementById('my-canvas');\ncanvas.height = window.innerHeight;\ncanvas.width = window.innerWidth;\nvar myRectangle = new Rectangle_1.Rectangle(canvas, new Rgb_1.Rgb(230, 126, 34), {\n  x: 40,\n  y: 100\n}, 20, 50);\n\nfunction main() {\n  animate();\n}\n\nmain();\nwindow.addEventListener('mousemove', function (e) {\n  window.addEventListener('resize', function () {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n  });\n  canvas.addEventListener('mousemove', function (event) {\n    myRectangle.setDirectionByMousePosition({\n      x: event.x,\n      y: event.y\n    });\n  });\n});\n\nfunction animate() {\n  myRectangle.clear();\n  myRectangle.update();\n  myRectangle.draw();\n  requestAnimationFrame(animate);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0FGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQkMsTUFBTSxDQUFDQyxXQUF2QjtBQUNBTCxNQUFNLENBQUNNLEtBQVAsR0FBZUYsTUFBTSxDQUFDRyxVQUF0QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxxQkFBSixDQUFjVCxNQUFkLEVBQXNCLElBQUlVLFNBQUosQ0FBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixFQUFsQixDQUF0QixFQUE2QztBQUFDQyxHQUFDLEVBQUUsRUFBSjtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUE3QyxFQUE4RCxFQUE5RCxFQUFrRSxFQUFsRSxDQUFwQjs7QUFFQSxTQUFTQyxJQUFULEdBQWE7QUFDVEMsU0FBTztBQUNWOztBQUVERCxJQUFJO0FBRUpULE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFFO0FBQ25DWixRQUFNLENBQUNXLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCZixVQUFNLENBQUNNLEtBQVAsR0FBZUYsTUFBTSxDQUFDRyxVQUF0QjtBQUNBUCxVQUFNLENBQUNHLE1BQVAsR0FBZ0JDLE1BQU0sQ0FBQ0MsV0FBdkI7QUFDSCxHQUhEO0FBS0FMLFFBQU0sQ0FBQ2UsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ0UsS0FBRCxFQUFrQjtBQUNuRFQsZUFBVyxDQUFDVSwyQkFBWixDQUF3QztBQUFDUCxPQUFDLEVBQUVNLEtBQUssQ0FBQ04sQ0FBVjtBQUFhQyxPQUFDLEVBQUVLLEtBQUssQ0FBQ0w7QUFBdEIsS0FBeEM7QUFDSCxHQUZEO0FBR0gsQ0FURDs7QUFXQSxTQUFTRSxPQUFULEdBQWdCO0FBQ1pOLGFBQVcsQ0FBQ1csS0FBWjtBQUNBWCxhQUFXLENBQUNZLE1BQVo7QUFDQVosYUFBVyxDQUFDYSxJQUFaO0FBQ0FDLHVCQUFxQixDQUFDUixPQUFELENBQXJCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy90cy9tYWluLnRzP2U4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3NoYXBlcy9SZWN0YW5nbGVcIjtcbmltcG9ydCB7UmdifSBmcm9tIFwiLi9Db2xvcnMvUmdiXCI7XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jb25zdCBteVJlY3RhbmdsZSA9IG5ldyBSZWN0YW5nbGUoY2FudmFzLCBuZXcgUmdiKDIzMCwgMTI2LCAzNCksIHt4OiA0MCwgeTogMTAwfSwgMjAsIDUwKTtcblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcbiAgICBhbmltYXRlKCk7XG59XG5cbm1haW4oKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfSk7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIG15UmVjdGFuZ2xlLnNldERpcmVjdGlvbkJ5TW91c2VQb3NpdGlvbih7eDogZXZlbnQueCwgeTogZXZlbnQueX0pO1xuICAgIH0pXG59KTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBteVJlY3RhbmdsZS5jbGVhcigpO1xuICAgIG15UmVjdGFuZ2xlLnVwZGF0ZSgpO1xuICAgIG15UmVjdGFuZ2xlLmRyYXcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG4iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlSZWN0YW5nbGUiLCJSZWN0YW5nbGVfMSIsIlJnYl8xIiwieCIsInkiLCJtYWluIiwiYW5pbWF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZXZlbnQiLCJzZXREaXJlY3Rpb25CeU1vdXNlUG9zaXRpb24iLCJjbGVhciIsInVwZGF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/shapes/Rectangle.ts":
/*!************************************!*\
  !*** ./src/ts/shapes/Rectangle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Rectangle = function () {\n  function Rectangle(canvas, color, position, width, height) {\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext('2d');\n    this.position = position;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.speed = 3;\n    this.direction = Math.random() * Math.PI * 2;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);\n    this.ctx.rotate(this.direction);\n    this.ctx.fillStyle = \"\".concat(this.color);\n    this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n    this.ctx.restore();\n    return this;\n  };\n\n  Rectangle.prototype.clear = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  };\n\n  Rectangle.prototype.update = function () {\n    this.position.x += this.speed * Math.cos(this.direction);\n    this.position.y += this.speed * Math.sin(this.direction);\n\n    if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {\n      this.direction = Math.PI - this.direction;\n    }\n\n    if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {\n      this.direction = -this.direction;\n    }\n  };\n\n  Rectangle.prototype.setDirectionByMousePosition = function (position) {\n    this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvdHMvc2hhcGVzL1JlY3RhbmdsZS50cz9hY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHNsfSBmcm9tIFwiLi4vQ29sb3JzL0hzbFwiO1xuaW1wb3J0IHtSZ2J9IGZyb20gXCIuLi9Db2xvcnMvUmdiXCI7XG5pbXBvcnQge0lQb3NpdGlvbn0gZnJvbSBcIi4uL1R5cGVzL0lQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcG9zaXRpb246IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICAgIGNvbG9yOiBIc2wgfCBSZ2I7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY29sb3I6IEhzbCB8IFJnYiwgcG9zaXRpb246IElQb3NpdGlvbiwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7IC8vIHNhdXZlZ2FyZGUgbCfDqXRhdCBhY3R1ZWwgZHUgY29udGV4dGVcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAvIDIpOyAvLyBkw6lwbGFjZSBsJ29yaWdpbmUgZHUgc3lzdMOobWUgZGUgY29vcmRvbm7DqWVzIGF1IGNlbnRyZSBkdSByZWN0YW5nbGVcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uKTsgLy8gYXBwbGlxdWUgbGEgdHJhbnNmb3JtYXRpb24gZGUgcm90YXRpb25cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgLy8gZGVzc2luZSBsZSByZWN0YW5nbGUgY2VudHLDqSBzdXIgbCdvcmlnaW5lXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTsgLy8gcmVzdGF1cmUgbCfDqXRhdCBwcsOpY8OpZGVudCBkdSBjb250ZXh0ZVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgLy90aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID49IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguUEkgLSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uQnlNb3VzZVBvc2l0aW9uKHBvc2l0aW9uOiBJUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnksIHBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiY29sb3IiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsInNwZWVkIiwiZGlyZWN0aW9uIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwiUmVjdGFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsIngiLCJ5Iiwicm90YXRlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiY29zIiwic2luIiwiYXRhbjIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/shapes/Rectangle.ts\n");

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