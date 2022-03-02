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

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Rectangle = function () {\n  function Rectangle(positon, delta, canvas, ctx) {\n    this.positon = positon;\n    this.canvas = canvas;\n    this.canvas = canvas;\n    this.direction = 0;\n    this.ctx = ctx;\n    this._mousePosition = {\n      x: this.positon.x,\n      y: this.positon.y\n    };\n    this.opacity = Math.random() + 0.09;\n    this.size = {\n      width: settings_1.settings.rectangle.minWidth + Math.ceil(Math.random() * settings_1.settings.rectangle.maxWidth),\n      height: settings_1.settings.rectangle.minHeight + Math.ceil(Math.random() * settings_1.settings.rectangle.maxHeight)\n    };\n    this.speed = Math.random() % 0.5;\n    this.color = \"rgba(\".concat(settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)], \",\").concat(this.opacity.toFixed(2), \")\");\n    delta.x += this.size.width;\n    delta.y += this.size.height;\n    this.currentPosition = {\n      x: delta.x,\n      y: delta.y\n    };\n  }\n\n  Object.defineProperty(Rectangle.prototype, \"mousePosition\", {\n    set: function set(value) {\n      this._mousePosition = value;\n      this.positon.x += (this._mousePosition.x - this.positon.x) * Math.random() % 0.5;\n      this.positon.y += (this._mousePosition.y - this.positon.y) * Math.random() % 0.5;\n    },\n    enumerable: false,\n    configurable: true\n  });\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.fillStyle = this.color;\n    this.ctx.translate(this.positon.x, this.positon.y);\n    this.ctx.rotate(this.direction);\n    this.ctx.fillRect(-this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);\n    this.ctx.restore();\n  };\n\n  Rectangle.prototype.update = function () {\n    this.positon.x += (this._mousePosition.x - this.positon.x) * this.speed;\n    this.positon.y += (this._mousePosition.y - this.positon.y) * this.speed;\n    this.direction = Math.atan2(this._mousePosition.y - this.positon.y, this._mousePosition.x - this.positon.x);\n    this.draw();\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVNpQyxRQUFULENBQWtCLENBQUMsS0FBS3pCLElBQUwsQ0FBVUMsS0FBWCxHQUFpQixDQUFuQyxFQUFzQyxDQUFDLEtBQUtELElBQUwsQ0FBVU8sTUFBWCxHQUFrQixDQUF4RCxFQUEyRCxLQUFLUCxJQUFMLENBQVVDLEtBQXJFLEVBQTRFLEtBQUtELElBQUwsQ0FBVU8sTUFBdEY7QUFDQSxTQUFLZixHQUFMLENBQVNrQyxPQUFUO0FBQ0gsR0FQRDs7QUFRQVA7QUFDSSxTQUFLOUIsT0FBTCxDQUFhTSxDQUFiLElBQWtCLENBQUMsS0FBS0QsY0FBTCxDQUFvQkMsQ0FBcEIsR0FBd0IsS0FBS04sT0FBTCxDQUFhTSxDQUF0QyxJQUEyQyxLQUFLZSxLQUFsRTtBQUNBLFNBQUtyQixPQUFMLENBQWFPLENBQWIsSUFBa0IsQ0FBQyxLQUFLRixjQUFMLENBQW9CRSxDQUFwQixHQUF3QixLQUFLUCxPQUFMLENBQWFPLENBQXRDLElBQTJDLEtBQUtjLEtBQWxFO0FBQ0EsU0FBS2pCLFNBQUwsR0FBaUJLLElBQUksQ0FBQzZCLEtBQUwsQ0FBVyxLQUFLakMsY0FBTCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS1AsT0FBTCxDQUFhTyxDQUFoRCxFQUFtRCxLQUFLRixjQUFMLENBQW9CQyxDQUFwQixHQUF3QixLQUFLTixPQUFMLENBQWFNLENBQXhGLENBQWpCO0FBQ0EsU0FBS2lDLElBQUw7QUFDSCxHQUxEOztBQVFKO0FBQUMsQ0ExREQ7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXkgLXJlY3RhbmdsZS8uL3NyYy9qcy9SZWN0YW5nbGUudHM/ODA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHNpemU6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxuICAgIHByaXZhdGUgcG9zaXRvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIG9wYWNpdHk6IG51bWJlcjtcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50UG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIF9tb3VzZVBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwdWJsaWMgc2V0IG1vdXNlUG9zaXRpb24odmFsdWU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLl9tb3VzZVBvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMucG9zaXRvbi54ICs9ICh0aGlzLl9tb3VzZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0b24ueCkgKiBNYXRoLnJhbmRvbSgpICUgMC41O1xuICAgICAgICB0aGlzLnBvc2l0b24ueSArPSAodGhpcy5fbW91c2VQb3NpdGlvbi55IC0gdGhpcy5wb3NpdG9uLnkpICogTWF0aC5yYW5kb20oKSAlIDAuNTtcblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0b246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgZGVsdGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5wb3NpdG9uID0gcG9zaXRvbjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuX21vdXNlUG9zaXRpb24gPSB7eDogdGhpcy5wb3NpdG9uLngsIHk6IHRoaXMucG9zaXRvbi55fTtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gTWF0aC5yYW5kb20oKSArIDAuMDk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBzZXR0aW5ncy5yZWN0YW5nbGUubWluV2lkdGggKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLnJlY3RhbmdsZS5tYXhXaWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLnJlY3RhbmdsZS5taW5IZWlnaHQgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLnJlY3RhbmdsZS5tYXhIZWlnaHQpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpJTAuNTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGByZ2JhKCR7c2V0dGluZ3MuY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLmNvbG9ycy5sZW5ndGgpXX0sJHt0aGlzLm9wYWNpdHkudG9GaXhlZCgyKX0pYDtcblxuICAgICAgICBkZWx0YS54ICs9IHRoaXMuc2l6ZS53aWR0aDtcbiAgICAgICAgZGVsdGEueSArPSB0aGlzLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHt4OiBkZWx0YS54LCB5OiBkZWx0YS55fTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0b24ueCwgdGhpcy5wb3NpdG9uLnkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgtdGhpcy5zaXplLndpZHRoLzIsIC10aGlzLnNpemUuaGVpZ2h0LzIsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvc2l0b24ueCArPSAodGhpcy5fbW91c2VQb3NpdGlvbi54IC0gdGhpcy5wb3NpdG9uLngpICogdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5wb3NpdG9uLnkgKz0gKHRoaXMuX21vdXNlUG9zaXRpb24ueSAtIHRoaXMucG9zaXRvbi55KSAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5hdGFuMih0aGlzLl9tb3VzZVBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0b24ueSwgdGhpcy5fbW91c2VQb3NpdGlvbi54IC0gdGhpcy5wb3NpdG9uLngpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cblxufVxuIl0sIm5hbWVzIjpbInBvc2l0b24iLCJkZWx0YSIsImNhbnZhcyIsImN0eCIsImRpcmVjdGlvbiIsIl9tb3VzZVBvc2l0aW9uIiwieCIsInkiLCJvcGFjaXR5IiwiTWF0aCIsInJhbmRvbSIsInNpemUiLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJyZWN0YW5nbGUiLCJtaW5XaWR0aCIsImNlaWwiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInNwZWVkIiwiY29sb3IiLCJjb2xvcnMiLCJmbG9vciIsImxlbmd0aCIsImNvbmNhdCIsInRvRml4ZWQiLCJjdXJyZW50UG9zaXRpb24iLCJPYmplY3QiLCJSZWN0YW5nbGUiLCJ2YWx1ZSIsInNhdmUiLCJmaWxsU3R5bGUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJhdGFuMiIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Rectangle.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.ts\");\n\nvar canvas = {\n  canvas: HTMLCanvasElement,\n  context: CanvasRenderingContext2D,\n  rectangles: new Array(),\n  currentPosition: {\n    x: 0,\n    y: 0\n  },\n  init: function init() {\n    this.canvas = document.querySelector('#my-canvas');\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.context = this.canvas.getContext('2d');\n    this.rectangles.push(new Rectangle_1.Rectangle({\n      x: this.canvas.width / 2,\n      y: this.canvas.height / 2\n    }, this.context, this.canvas, this.context));\n    this.addEventListeners();\n    this.animate();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.canvas.width = window.innerWidth;\n      _this.canvas.height = window.innerHeight;\n    });\n    this.canvas.addEventListener('click', function (event) {\n      var rectangle = new Rectangle_1.Rectangle({\n        x: event.clientX,\n        y: event.clientY\n      }, _this.currentPosition, _this.canvas, _this.context);\n\n      _this.rectangles.push(rectangle);\n    });\n    this.canvas.addEventListener('mousemove', function (event) {\n      _this.rectangles.forEach(function (rectangle) {\n        rectangle.mousePosition = {\n          x: event.clientX,\n          y: event.clientY\n        };\n      });\n    });\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.rectangles.forEach(function (rectangle) {\n      rectangle.update();\n    });\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};\ncanvas.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnREFyQixNQUFNLENBQUNTLElBQVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15IC1yZWN0YW5nbGUvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxuY29uc3QgY2FudmFzID0ge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlY3RhbmdsZXM6IG5ldyBBcnJheSgpLFxuICAgIGN1cnJlbnRQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWNhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5yZWN0YW5nbGVzLnB1c2gobmV3IFJlY3RhbmdsZSh7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyXG4gICAgICAgIH0sIHRoaXMuY29udGV4dCwgdGhpcy5jYW52YXMsIHRoaXMuY29udGV4dCkpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH0sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZTogUmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSh7XG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgICAgICAgICB9LCB0aGlzLmN1cnJlbnRQb3NpdGlvbiwgdGhpcy5jYW52YXMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlcy5wdXNoKHJlY3RhbmdsZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlY3RhbmdsZTogUmVjdGFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgcmVjdGFuZ2xlLm1vdXNlUG9zaXRpb24gPSB7eDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WX1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnJlY3RhbmdsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVjdGFuZ2xlOiBSZWN0YW5nbGUpIHtcbiAgICAgICAgICAgIHJlY3RhbmdsZS51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG59XG5cbmNhbnZhcy5pbml0KCk7Il0sIm5hbWVzIjpbImNhbnZhcyIsIkhUTUxDYW52YXNFbGVtZW50IiwiY29udGV4dCIsIkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsInJlY3RhbmdsZXMiLCJBcnJheSIsImN1cnJlbnRQb3NpdGlvbiIsIngiLCJ5IiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0Q29udGV4dCIsInB1c2giLCJSZWN0YW5nbGVfMSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImV2ZW50IiwicmVjdGFuZ2xlIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3JFYWNoIiwibW91c2VQb3NpdGlvbiIsImNsZWFyUmVjdCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  rectangle: {\n    minWidth: 20,\n    maxWidth: 100,\n    minHeight: 10,\n    maxHeight: 20,\n    minSpeed: 2,\n    maxSpeed: 10\n  },\n  colors: [\"0, 8, 20\", \"0, 29, 61\", \"0, 53, 102\", \"255, 195, 0\", \"255, 214, 10\"]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsV0FBUyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxFQURIO0FBRVBDLFlBQVEsRUFBRSxHQUZIO0FBR1BDLGFBQVMsRUFBRSxFQUhKO0FBSVBDLGFBQVMsRUFBRSxFQUpKO0FBS1BDLFlBQVEsRUFBRSxDQUxIO0FBTVBDLFlBQVEsRUFBRTtBQU5ILEdBRFM7QUFTcEJDLFFBQU0sRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFlBQTFCLEVBQXdDLGFBQXhDLEVBQXVELGNBQXZEO0FBVFksQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXkgLXJlY3RhbmdsZS8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICByZWN0YW5nbGU6IHtcbiAgICAgICAgbWluV2lkdGg6IDIwLFxuICAgICAgICBtYXhXaWR0aDogMTAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDEwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5TcGVlZDogMixcbiAgICAgICAgbWF4U3BlZWQ6IDEwLFxuICAgIH0sXG4gICAgY29sb3JzOiBbXCIwLCA4LCAyMFwiLCBcIjAsIDI5LCA2MVwiLCBcIjAsIDUzLCAxMDJcIiwgXCIyNTUsIDE5NSwgMFwiLCBcIjI1NSwgMjE0LCAxMFwiXVxufTsiXSwibmFtZXMiOlsiZXhwb3J0cyIsInJlY3RhbmdsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5TcGVlZCIsIm1heFNwZWVkIiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teSAtcmVjdGFuZ2xlLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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