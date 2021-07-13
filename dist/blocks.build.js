/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    withColors = _wp$blockEditor.withColors;\nvar Fragment = wp.element.Fragment;\nvar __ = wp.i18n.__;\n\n\nvar BlockWithColorSettings = function BlockWithColorSettings(props) {\n\tvar textColor = props.textColor,\n\t    setTextColor = props.setTextColor,\n\t    backgroundColor = props.backgroundColor,\n\t    setBackgroundColor = props.setBackgroundColor; // Props received from withColors\n\n\tvar divClass = '';\n\tvar divStyles = {};\n\tif (textColor != undefined) {\n\t\tif (textColor.class != undefined) {\n\t\t\tdivClass = textColor.class;\n\t\t} else {\n\t\t\tdivStyles.color = textColor.color;\n\t\t}\n\t}\n\n\tif (backgroundColor != undefined) {\n\t\tif (backgroundColor.class != undefined) {\n\t\t\tdivClass += ' ' + backgroundColor.class;\n\t\t} else {\n\t\t\tdivStyles.backgroundColor = backgroundColor.color;\n\t\t}\n\t}\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color settings'),\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: textColor.color,\n\t\t\t\t\tonChange: setTextColor,\n\t\t\t\t\tlabel: __('Text color')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: backgroundColor.color,\n\t\t\t\t\tonChange: setBackgroundColor,\n\t\t\t\t\tlabel: __('Background color')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\t'This is static text'\n\t\t)\n\t);\n};\n\nregisterBlockType('awp/colorsettings', {\n\ttitle: __('Color Settings Demo - in editor!'),\n\ticon: 'carrot',\n\tcategory: 'common',\n\tattributes: {\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomTextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomBackgroundColor: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\t//edit: BlockWithColorSettings,\n\tedit: withColors({ textColor: 'color', backgroundColor: 'background-color' })(BlockWithColorSettings),\n\tsave: function save(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    textColor = _props$attributes.textColor,\n\t\t    customTextColor = _props$attributes.customTextColor,\n\t\t    backgroundColor = _props$attributes.backgroundColor,\n\t\t    customBackgroundColor = _props$attributes.customBackgroundColor;\n\n\t\tvar divClass = '';\n\t\tvar divStyles = {};\n\n\t\tif (textColor != undefined) {\n\t\t\tdivClass = getColorClassName('color', textColor);\n\t\t}\n\t\tif (customTextColor != undefined) {\n\t\t\tdivStyles.color = customTextColor;\n\t\t}\n\n\t\tif (backgroundColor != undefined) {\n\t\t\tdivClass += ' ' + getColorClassName('background-color', backgroundColor);\n\t\t}\n\t\tif (customBackgroundColor != undefined) {\n\t\t\tdivStyles.backgroundColor = customBackgroundColor;\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\t'This is static text'\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBQYW5lbENvbG9yU2V0dGluZ3MgPSBfd3AkYmxvY2tFZGl0b3IuUGFuZWxDb2xvclNldHRpbmdzLFxuICAgIGdldENvbG9yQ2xhc3NOYW1lID0gX3dwJGJsb2NrRWRpdG9yLmdldENvbG9yQ2xhc3NOYW1lLFxuICAgIHdpdGhDb2xvcnMgPSBfd3AkYmxvY2tFZGl0b3Iud2l0aENvbG9ycztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX18gPSB3cC5pMThuLl9fO1xuXG5cbnZhciBCbG9ja1dpdGhDb2xvclNldHRpbmdzID0gZnVuY3Rpb24gQmxvY2tXaXRoQ29sb3JTZXR0aW5ncyhwcm9wcykge1xuXHR2YXIgdGV4dENvbG9yID0gcHJvcHMudGV4dENvbG9yLFxuXHQgICAgc2V0VGV4dENvbG9yID0gcHJvcHMuc2V0VGV4dENvbG9yLFxuXHQgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuXHQgICAgc2V0QmFja2dyb3VuZENvbG9yID0gcHJvcHMuc2V0QmFja2dyb3VuZENvbG9yOyAvLyBQcm9wcyByZWNlaXZlZCBmcm9tIHdpdGhDb2xvcnNcblxuXHR2YXIgZGl2Q2xhc3MgPSAnJztcblx0dmFyIGRpdlN0eWxlcyA9IHt9O1xuXHRpZiAodGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdGlmICh0ZXh0Q29sb3IuY2xhc3MgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyA9IHRleHRDb2xvci5jbGFzcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGl2U3R5bGVzLmNvbG9yID0gdGV4dENvbG9yLmNvbG9yO1xuXHRcdH1cblx0fVxuXG5cdGlmIChiYWNrZ3JvdW5kQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGJhY2tncm91bmRDb2xvci5jbGFzcyAhPSB1bmRlZmluZWQpIHtcblx0XHRcdGRpdkNsYXNzICs9ICcgJyArIGJhY2tncm91bmRDb2xvci5jbGFzcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGl2U3R5bGVzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvci5jb2xvcjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdEZyYWdtZW50LFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHR0aXRsZTogX18oJ0NvbG9yIHNldHRpbmdzJyksXG5cdFx0XHRcdGNvbG9yU2V0dGluZ3M6IFt7XG5cdFx0XHRcdFx0dmFsdWU6IHRleHRDb2xvci5jb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogc2V0VGV4dENvbG9yLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnVGV4dCBjb2xvcicpXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHR2YWx1ZTogYmFja2dyb3VuZENvbG9yLmNvbG9yLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBzZXRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdCYWNrZ3JvdW5kIGNvbG9yJylcblx0XHRcdFx0fV1cblx0XHRcdH0pXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBkaXZDbGFzcywgc3R5bGU6IGRpdlN0eWxlcyB9LFxuXHRcdFx0J1RoaXMgaXMgc3RhdGljIHRleHQnXG5cdFx0KVxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2F3cC9jb2xvcnNldHRpbmdzJywge1xuXHR0aXRsZTogX18oJ0NvbG9yIFNldHRpbmdzIERlbW8gLSBpbiBlZGl0b3IhJyksXG5cdGljb246ICdjYXJyb3QnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0ZXh0Q29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRjdXN0b21UZXh0Q29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHRjdXN0b21CYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXHQvL2VkaXQ6IEJsb2NrV2l0aENvbG9yU2V0dGluZ3MsXG5cdGVkaXQ6IHdpdGhDb2xvcnMoeyB0ZXh0Q29sb3I6ICdjb2xvcicsIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQtY29sb3InIH0pKEJsb2NrV2l0aENvbG9yU2V0dGluZ3MpLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgdGV4dENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMudGV4dENvbG9yLFxuXHRcdCAgICBjdXN0b21UZXh0Q29sb3IgPSBfcHJvcHMkYXR0cmlidXRlcy5jdXN0b21UZXh0Q29sb3IsXG5cdFx0ICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvcixcblx0XHQgICAgY3VzdG9tQmFja2dyb3VuZENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMuY3VzdG9tQmFja2dyb3VuZENvbG9yO1xuXG5cdFx0dmFyIGRpdkNsYXNzID0gJyc7XG5cdFx0dmFyIGRpdlN0eWxlcyA9IHt9O1xuXG5cdFx0aWYgKHRleHRDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRcdGRpdkNsYXNzID0gZ2V0Q29sb3JDbGFzc05hbWUoJ2NvbG9yJywgdGV4dENvbG9yKTtcblx0XHR9XG5cdFx0aWYgKGN1c3RvbVRleHRDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRcdGRpdlN0eWxlcy5jb2xvciA9IGN1c3RvbVRleHRDb2xvcjtcblx0XHR9XG5cblx0XHRpZiAoYmFja2dyb3VuZENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2Q2xhc3MgKz0gJyAnICsgZ2V0Q29sb3JDbGFzc05hbWUoJ2JhY2tncm91bmQtY29sb3InLCBiYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdH1cblx0XHRpZiAoY3VzdG9tQmFja2dyb3VuZENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2U3R5bGVzLmJhY2tncm91bmRDb2xvciA9IGN1c3RvbUJhY2tncm91bmRDb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogZGl2Q2xhc3MsIHN0eWxlOiBkaXZTdHlsZXMgfSxcblx0XHRcdCdUaGlzIGlzIHN0YXRpYyB0ZXh0J1xuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);