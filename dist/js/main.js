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

/***/ "./src/js/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/js/Rectangle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Rectangle = function () {\n  function Rectangle(positon, delta, canvas, ctx) {\n    this.positon = positon;\n    this.canvas = canvas;\n    this.canvas = canvas;\n    this.direction = 0;\n    this.ctx = ctx;\n    this._mousePosition = {\n      x: this.positon.x,\n      y: this.positon.y\n    };\n    this.opacity = Math.random() + 0.09;\n    this.size = {\n      width: settings_1.settings.rectangle.minWidth + Math.ceil(Math.random() * settings_1.settings.rectangle.maxWidth),\n      height: settings_1.settings.rectangle.minHeight + Math.ceil(Math.random() * settings_1.settings.rectangle.maxHeight)\n    };\n    this.speed = Math.random() % 0.5;\n    this.color = \"rgba(\".concat(settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)], \",\").concat(this.opacity.toFixed(2), \")\");\n    delta.x += this.size.width;\n    delta.y += this.size.height;\n    this.currentPosition = {\n      x: delta.x,\n      y: delta.y\n    };\n  }\n\n  Object.defineProperty(Rectangle.prototype, \"mousePosition\", {\n    set: function set(value) {\n      this._mousePosition = value;\n      this.positon.x += (this._mousePosition.x - this.positon.x) * Math.random() % 0.5;\n      this.positon.y += (this._mousePosition.y - this.positon.y) * Math.random() % 0.5;\n    },\n    enumerable: false,\n    configurable: true\n  });\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.fillStyle = this.color;\n    this.ctx.translate(this.positon.x, this.positon.y);\n    this.ctx.rotate(this.direction);\n    this.ctx.fillRect(-this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);\n    this.ctx.restore();\n  };\n\n  Rectangle.prototype.update = function () {\n    this.positon.x += (this._mousePosition.x - this.positon.x) * this.speed;\n    this.positon.y += (this._mousePosition.y - this.positon.y) * this.speed;\n    this.direction = Math.atan2(this._mousePosition.y - this.positon.y, this._mousePosition.x - this.positon.x);\n    this.draw();\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVNpQyxRQUFULENBQWtCLENBQUMsS0FBS3pCLElBQUwsQ0FBVUMsS0FBWCxHQUFpQixDQUFuQyxFQUFzQyxDQUFDLEtBQUtELElBQUwsQ0FBVU8sTUFBWCxHQUFrQixDQUF4RCxFQUEyRCxLQUFLUCxJQUFMLENBQVVDLEtBQXJFLEVBQTRFLEtBQUtELElBQUwsQ0FBVU8sTUFBdEY7QUFDQSxTQUFLZixHQUFMLENBQVNrQyxPQUFUO0FBQ0gsR0FQRDs7QUFRQVA7QUFDSSxTQUFLOUIsT0FBTCxDQUFhTSxDQUFiLElBQWtCLENBQUMsS0FBS0QsY0FBTCxDQUFvQkMsQ0FBcEIsR0FBd0IsS0FBS04sT0FBTCxDQUFhTSxDQUF0QyxJQUEyQyxLQUFLZSxLQUFsRTtBQUNBLFNBQUtyQixPQUFMLENBQWFPLENBQWIsSUFBa0IsQ0FBQyxLQUFLRixjQUFMLENBQW9CRSxDQUFwQixHQUF3QixLQUFLUCxPQUFMLENBQWFPLENBQXRDLElBQTJDLEtBQUtjLEtBQWxFO0FBQ0EsU0FBS2pCLFNBQUwsR0FBaUJLLElBQUksQ0FBQzZCLEtBQUwsQ0FBVyxLQUFLakMsY0FBTCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS1AsT0FBTCxDQUFhTyxDQUFoRCxFQUFtRCxLQUFLRixjQUFMLENBQW9CQyxDQUFwQixHQUF3QixLQUFLTixPQUFMLENBQWFNLENBQXhGLENBQWpCO0FBQ0EsU0FBS2lDLElBQUw7QUFDSCxHQUxEOztBQU9KO0FBQUMsQ0F6REQ7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL2pzL1JlY3RhbmdsZS50cz84MDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIHByaXZhdGUgc2l6ZTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9XG4gICAgcHJpdmF0ZSBwb3NpdG9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyO1xuICAgIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGN1cnJlbnRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgX21vdXNlUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHB1YmxpYyBzZXQgbW91c2VQb3NpdGlvbih2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wb3NpdG9uLnggKz0gKHRoaXMuX21vdXNlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRvbi54KSAqIE1hdGgucmFuZG9tKCkgJSAwLjU7XG4gICAgICAgIHRoaXMucG9zaXRvbi55ICs9ICh0aGlzLl9tb3VzZVBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0b24ueSkgKiBNYXRoLnJhbmRvbSgpICUgMC41O1xuXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocG9zaXRvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkZWx0YTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLnBvc2l0b24gPSBwb3NpdG9uO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5fbW91c2VQb3NpdGlvbiA9IHt4OiB0aGlzLnBvc2l0b24ueCwgeTogdGhpcy5wb3NpdG9uLnl9O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICsgMC4wOTtcbiAgICAgICAgdGhpcy5zaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLnJlY3RhbmdsZS5taW5XaWR0aCArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MucmVjdGFuZ2xlLm1heFdpZHRoKSxcbiAgICAgICAgICAgIGhlaWdodDogc2V0dGluZ3MucmVjdGFuZ2xlLm1pbkhlaWdodCArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MucmVjdGFuZ2xlLm1heEhlaWdodClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCklMC41O1xuICAgICAgICB0aGlzLmNvbG9yID0gYHJnYmEoJHtzZXR0aW5ncy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JzLmxlbmd0aCldfSwke3RoaXMub3BhY2l0eS50b0ZpeGVkKDIpfSlgO1xuXG4gICAgICAgIGRlbHRhLnggKz0gdGhpcy5zaXplLndpZHRoO1xuICAgICAgICBkZWx0YS55ICs9IHRoaXMuc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0ge3g6IGRlbHRhLngsIHk6IGRlbHRhLnl9O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucG9zaXRvbi54LCB0aGlzLnBvc2l0b24ueSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLnNpemUud2lkdGgvMiwgLXRoaXMuc2l6ZS5oZWlnaHQvMiwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zaXRvbi54ICs9ICh0aGlzLl9tb3VzZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0b24ueCkgKiB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLnBvc2l0b24ueSArPSAodGhpcy5fbW91c2VQb3NpdGlvbi55IC0gdGhpcy5wb3NpdG9uLnkpICogdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHRoaXMuX21vdXNlUG9zaXRpb24ueSAtIHRoaXMucG9zaXRvbi55LCB0aGlzLl9tb3VzZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0b24ueCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbInBvc2l0b24iLCJkZWx0YSIsImNhbnZhcyIsImN0eCIsImRpcmVjdGlvbiIsIl9tb3VzZVBvc2l0aW9uIiwieCIsInkiLCJvcGFjaXR5IiwiTWF0aCIsInJhbmRvbSIsInNpemUiLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJyZWN0YW5nbGUiLCJtaW5XaWR0aCIsImNlaWwiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInNwZWVkIiwiY29sb3IiLCJjb2xvcnMiLCJmbG9vciIsImxlbmd0aCIsImNvbmNhdCIsInRvRml4ZWQiLCJjdXJyZW50UG9zaXRpb24iLCJPYmplY3QiLCJSZWN0YW5nbGUiLCJ2YWx1ZSIsInNhdmUiLCJmaWxsU3R5bGUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJhdGFuMiIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Rectangle.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.ts\");\n\nvar canvas = {\n  canvas: HTMLCanvasElement,\n  context: CanvasRenderingContext2D,\n  rectangles: new Array(),\n  currentPosition: {\n    x: 0,\n    y: 0\n  },\n  init: function init() {\n    this.canvas = document.querySelector('#my-canvas');\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.context = this.canvas.getContext('2d');\n    this.rectangles.push(new Rectangle_1.Rectangle({\n      x: this.canvas.width / 2,\n      y: this.canvas.height / 2\n    }, this.context, this.canvas, this.context));\n    this.addEventListeners();\n    this.animate();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.canvas.width = window.innerWidth;\n      _this.canvas.height = window.innerHeight;\n    });\n    this.canvas.addEventListener('click', function (event) {\n      var rectangle = new Rectangle_1.Rectangle({\n        x: event.clientX,\n        y: event.clientY\n      }, _this.currentPosition, _this.canvas, _this.context);\n\n      _this.rectangles.push(rectangle);\n    });\n    this.canvas.addEventListener('mousemove', function (event) {\n      _this.rectangles.forEach(function (rectangle) {\n        rectangle.mousePosition = {\n          x: event.clientX,\n          y: event.clientY\n        };\n      });\n    });\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.rectangles.forEach(function (rectangle) {\n      rectangle.update();\n    });\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};\ncanvas.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnREFyQixNQUFNLENBQUNTLElBQVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy9qcy9tYWluLnRzPzRiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuXG5jb25zdCBjYW52YXMgPSB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVjdGFuZ2xlczogbmV3IEFycmF5KCksXG4gICAgY3VycmVudFBvc2l0aW9uOiB7eDogMCwgeTogMH0sXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLnJlY3RhbmdsZXMucHVzaChuZXcgUmVjdGFuZ2xlKHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAvIDJcbiAgICAgICAgfSwgdGhpcy5jb250ZXh0LCB0aGlzLmNhbnZhcywgdGhpcy5jb250ZXh0KSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdGFuZ2xlOiBSZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKHtcbiAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICAgIH0sIHRoaXMuY3VycmVudFBvc2l0aW9uLCB0aGlzLmNhbnZhcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVzLnB1c2gocmVjdGFuZ2xlKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdGFuZ2xlOiBSZWN0YW5nbGUpIHtcbiAgICAgICAgICAgICAgICByZWN0YW5nbGUubW91c2VQb3NpdGlvbiA9IHt4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0YW5nbGU6IFJlY3RhbmdsZSkge1xuICAgICAgICAgICAgcmVjdGFuZ2xlLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbn1cblxuY2FudmFzLmluaXQoKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJjb250ZXh0IiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwicmVjdGFuZ2xlcyIsIkFycmF5IiwiY3VycmVudFBvc2l0aW9uIiwieCIsInkiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJnZXRDb250ZXh0IiwicHVzaCIsIlJlY3RhbmdsZV8xIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiZXZlbnQiLCJyZWN0YW5nbGUiLCJjbGllbnRYIiwiY2xpZW50WSIsImZvckVhY2giLCJtb3VzZVBvc2l0aW9uIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  rectangle: {\n    minWidth: 20,\n    maxWidth: 100,\n    minHeight: 10,\n    maxHeight: 20,\n    minSpeed: 2,\n    maxSpeed: 10\n  },\n  colors: [\"0, 8, 20\", \"0, 29, 61\", \"0, 53, 102\", \"255, 195, 0\", \"255, 214, 10\"]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsV0FBUyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxFQURIO0FBRVBDLFlBQVEsRUFBRSxHQUZIO0FBR1BDLGFBQVMsRUFBRSxFQUhKO0FBSVBDLGFBQVMsRUFBRSxFQUpKO0FBS1BDLFlBQVEsRUFBRSxDQUxIO0FBTVBDLFlBQVEsRUFBRTtBQU5ILEdBRFM7QUFTcEJDLFFBQU0sRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFlBQTFCLEVBQXdDLGFBQXhDLEVBQXVELGNBQXZEO0FBVFksQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL2pzL3NldHRpbmdzLnRzP2M0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIHJlY3RhbmdsZToge1xuICAgICAgICBtaW5XaWR0aDogMjAsXG4gICAgICAgIG1heFdpZHRoOiAxMDAsXG4gICAgICAgIG1pbkhlaWdodDogMTAsXG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pblNwZWVkOiAyLFxuICAgICAgICBtYXhTcGVlZDogMTAsXG4gICAgfSxcbiAgICBjb2xvcnM6IFtcIjAsIDgsIDIwXCIsIFwiMCwgMjksIDYxXCIsIFwiMCwgNTMsIDEwMlwiLCBcIjI1NSwgMTk1LCAwXCIsIFwiMjU1LCAyMTQsIDEwXCJdXG59OyJdLCJuYW1lcyI6WyJleHBvcnRzIiwicmVjdGFuZ2xlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1pblNwZWVkIiwibWF4U3BlZWQiLCJjb2xvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

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
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;