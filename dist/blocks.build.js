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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    withColors = _wp$blockEditor.withColors;\nvar Fragment = wp.element.Fragment;\nvar __ = wp.i18n.__;\n\n\nvar BlockWithColorSettings = function BlockWithColorSettings(props) {\n\tvar textColor = props.textColor,\n\t    setTextColor = props.setTextColor,\n\t    backgroundColor = props.backgroundColor,\n\t    setBackgroundColor = props.setBackgroundColor,\n\t    setAttributes = props.setAttributes; // Props received from withColors\n\n\tvar blockText = props.attributes.blockText;\n\tvar divClass = '';\n\tvar divStyles = { border: '1px', borderColor: '#999', borderStyle: 'solid', padding: '5px' };\n\tif (textColor != undefined) {\n\t\tif (textColor.class != undefined) {\n\t\t\tdivClass = textColor.class;\n\t\t} else {\n\t\t\tdivStyles.color = textColor.color;\n\t\t}\n\t}\n\n\tif (backgroundColor != undefined) {\n\t\tif (backgroundColor.class != undefined) {\n\t\t\tdivClass += ' ' + backgroundColor.class;\n\t\t} else {\n\t\t\tdivStyles.backgroundColor = backgroundColor.color;\n\t\t}\n\t}\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color settings...'),\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: textColor.color,\n\t\t\t\t\tonChange: setTextColor,\n\t\t\t\t\tlabel: __('Text color')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: backgroundColor.color,\n\t\t\t\t\tonChange: setBackgroundColor,\n\t\t\t\t\tlabel: __('Background color')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t_extends({}, Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"useBlockProps\"])(), { className: divClass, style: divStyles }),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"RichText\"], {\n\t\t\t\tclassName: 'block__text'\n\t\t\t\t//keepPlaceholderOnFocus\n\t\t\t\t, onChange: function onChange(blockText) {\n\t\t\t\t\treturn setAttributes({ blockText: blockText });\n\t\t\t\t},\n\t\t\t\tplaceholder: __('Enter your text here...', 'wholesome-plugin'),\n\t\t\t\ttagName: 'span',\n\t\t\t\tvalue: blockText\n\t\t\t})\n\t\t)\n\t);\n};\n\nregisterBlockType('abeardsley/colorsettings', {\n\ttitle: __('Color Settings Demo - in editor!'),\n\ticon: 'carrot',\n\tcategory: 'common',\n\tattributes: {\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomTextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomBackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tblockText: {\n\t\t\tdefault: 'Default text to edit',\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\t//edit: BlockWithColorSettings,\n\tedit: withColors({ textColor: 'color', backgroundColor: 'background-color' })(BlockWithColorSettings),\n\tsave: function save(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    textColor = _props$attributes.textColor,\n\t\t    customTextColor = _props$attributes.customTextColor,\n\t\t    backgroundColor = _props$attributes.backgroundColor,\n\t\t    customBackgroundColor = _props$attributes.customBackgroundColor,\n\t\t    blockText = _props$attributes.blockText;\n\n\t\tvar divClass = '';\n\t\tvar divStyles = {};\n\n\t\tif (textColor != undefined) {\n\t\t\tdivClass = getColorClassName('color', textColor);\n\t\t}\n\t\tif (customTextColor != undefined) {\n\t\t\tdivStyles.color = customTextColor;\n\t\t}\n\n\t\tif (backgroundColor != undefined) {\n\t\t\tdivClass += ' ' + getColorClassName('background-color', backgroundColor);\n\t\t}\n\t\tif (customBackgroundColor != undefined) {\n\t\t\tdivStyles.backgroundColor = customBackgroundColor;\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\tblockText\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgUGFuZWxDb2xvclNldHRpbmdzID0gX3dwJGJsb2NrRWRpdG9yLlBhbmVsQ29sb3JTZXR0aW5ncyxcbiAgICBnZXRDb2xvckNsYXNzTmFtZSA9IF93cCRibG9ja0VkaXRvci5nZXRDb2xvckNsYXNzTmFtZSxcbiAgICB3aXRoQ29sb3JzID0gX3dwJGJsb2NrRWRpdG9yLndpdGhDb2xvcnM7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF9fID0gd3AuaTE4bi5fXztcblxuXG52YXIgQmxvY2tXaXRoQ29sb3JTZXR0aW5ncyA9IGZ1bmN0aW9uIEJsb2NrV2l0aENvbG9yU2V0dGluZ3MocHJvcHMpIHtcblx0dmFyIHRleHRDb2xvciA9IHByb3BzLnRleHRDb2xvcixcblx0ICAgIHNldFRleHRDb2xvciA9IHByb3BzLnNldFRleHRDb2xvcixcblx0ICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmJhY2tncm91bmRDb2xvcixcblx0ICAgIHNldEJhY2tncm91bmRDb2xvciA9IHByb3BzLnNldEJhY2tncm91bmRDb2xvcixcblx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzOyAvLyBQcm9wcyByZWNlaXZlZCBmcm9tIHdpdGhDb2xvcnNcblxuXHR2YXIgYmxvY2tUZXh0ID0gcHJvcHMuYXR0cmlidXRlcy5ibG9ja1RleHQ7XG5cdHZhciBkaXZDbGFzcyA9ICcnO1xuXHR2YXIgZGl2U3R5bGVzID0geyBib3JkZXI6ICcxcHgnLCBib3JkZXJDb2xvcjogJyM5OTknLCBib3JkZXJTdHlsZTogJ3NvbGlkJywgcGFkZGluZzogJzVweCcgfTtcblx0aWYgKHRleHRDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRpZiAodGV4dENvbG9yLmNsYXNzICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2Q2xhc3MgPSB0ZXh0Q29sb3IuY2xhc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdlN0eWxlcy5jb2xvciA9IHRleHRDb2xvci5jb2xvcjtcblx0XHR9XG5cdH1cblxuXHRpZiAoYmFja2dyb3VuZENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdGlmIChiYWNrZ3JvdW5kQ29sb3IuY2xhc3MgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyBiYWNrZ3JvdW5kQ29sb3IuY2xhc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdlN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IuY29sb3I7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRGcmFnbWVudCxcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbENvbG9yU2V0dGluZ3MsIHtcblx0XHRcdFx0dGl0bGU6IF9fKCdDb2xvciBzZXR0aW5ncy4uLicpLFxuXHRcdFx0XHRjb2xvclNldHRpbmdzOiBbe1xuXHRcdFx0XHRcdHZhbHVlOiB0ZXh0Q29sb3IuY29sb3IsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IHNldFRleHRDb2xvcixcblx0XHRcdFx0XHRsYWJlbDogX18oJ1RleHQgY29sb3InKVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0dmFsdWU6IGJhY2tncm91bmRDb2xvci5jb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogc2V0QmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQmFja2dyb3VuZCBjb2xvcicpXG5cdFx0XHRcdH1dXG5cdFx0XHR9KVxuXHRcdCksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRfZXh0ZW5kcyh7fSwgdXNlQmxvY2tQcm9wcygpLCB7IGNsYXNzTmFtZTogZGl2Q2xhc3MsIHN0eWxlOiBkaXZTdHlsZXMgfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnYmxvY2tfX3RleHQnXG5cdFx0XHRcdC8va2VlcFBsYWNlaG9sZGVyT25Gb2N1c1xuXHRcdFx0XHQsIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShibG9ja1RleHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJsb2NrVGV4dDogYmxvY2tUZXh0IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0VudGVyIHlvdXIgdGV4dCBoZXJlLi4uJywgJ3dob2xlc29tZS1wbHVnaW4nKSxcblx0XHRcdFx0dGFnTmFtZTogJ3NwYW4nLFxuXHRcdFx0XHR2YWx1ZTogYmxvY2tUZXh0XG5cdFx0XHR9KVxuXHRcdClcblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdhYmVhcmRzbGV5L2NvbG9yc2V0dGluZ3MnLCB7XG5cdHRpdGxlOiBfXygnQ29sb3IgU2V0dGluZ3MgRGVtbyAtIGluIGVkaXRvciEnKSxcblx0aWNvbjogJ2NhcnJvdCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdHRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGN1c3RvbVRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGN1c3RvbUJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGJsb2NrVGV4dDoge1xuXHRcdFx0ZGVmYXVsdDogJ0RlZmF1bHQgdGV4dCB0byBlZGl0Jyxcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXHQvL2VkaXQ6IEJsb2NrV2l0aENvbG9yU2V0dGluZ3MsXG5cdGVkaXQ6IHdpdGhDb2xvcnMoeyB0ZXh0Q29sb3I6ICdjb2xvcicsIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQtY29sb3InIH0pKEJsb2NrV2l0aENvbG9yU2V0dGluZ3MpLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgdGV4dENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMudGV4dENvbG9yLFxuXHRcdCAgICBjdXN0b21UZXh0Q29sb3IgPSBfcHJvcHMkYXR0cmlidXRlcy5jdXN0b21UZXh0Q29sb3IsXG5cdFx0ICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvcixcblx0XHQgICAgY3VzdG9tQmFja2dyb3VuZENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMuY3VzdG9tQmFja2dyb3VuZENvbG9yLFxuXHRcdCAgICBibG9ja1RleHQgPSBfcHJvcHMkYXR0cmlidXRlcy5ibG9ja1RleHQ7XG5cblx0XHR2YXIgZGl2Q2xhc3MgPSAnJztcblx0XHR2YXIgZGl2U3R5bGVzID0ge307XG5cblx0XHRpZiAodGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2Q2xhc3MgPSBnZXRDb2xvckNsYXNzTmFtZSgnY29sb3InLCB0ZXh0Q29sb3IpO1xuXHRcdH1cblx0XHRpZiAoY3VzdG9tVGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2U3R5bGVzLmNvbG9yID0gY3VzdG9tVGV4dENvbG9yO1xuXHRcdH1cblxuXHRcdGlmIChiYWNrZ3JvdW5kQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyBnZXRDb2xvckNsYXNzTmFtZSgnYmFja2dyb3VuZC1jb2xvcicsIGJhY2tncm91bmRDb2xvcik7XG5cdFx0fVxuXHRcdGlmIChjdXN0b21CYWNrZ3JvdW5kQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZTdHlsZXMuYmFja2dyb3VuZENvbG9yID0gY3VzdG9tQmFja2dyb3VuZENvbG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBkaXZDbGFzcywgc3R5bGU6IGRpdlN0eWxlcyB9LFxuXHRcdFx0YmxvY2tUZXh0XG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: RichText, useBlockProps */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);