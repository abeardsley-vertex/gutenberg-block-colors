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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************!*\
  !*** ./src/border-style-control/index.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BorderStyleControl; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__);\n\n/**\n * WordPress dependencies\n */\n\n\n\nvar DEFAULT_STYLE = {\n    key: 'default',\n    name: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('Default'),\n    style: { borderStyle: undefined }\n};\n\nvar BORDER_STYLES = [DEFAULT_STYLE, {\n    key: 'none',\n    name: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('None'),\n    style: { borderStyle: 'none' }\n}, {\n    key: 'solid',\n    name: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('Solid'),\n    style: { borderStyle: 'solid' }\n}, {\n    key: 'dashed',\n    name: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('Dashed'),\n    style: { borderStyle: 'dashed' }\n}, {\n    key: 'dotted',\n    name: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('Dotted'),\n    style: { borderStyle: 'dotted' }\n}];\n\n/**\n * Control to display border style options.\n *\n * @param {Object} props          Component props.\n * @param {Object} props.onChange Handler for changing border style selection.\n * @param {Object} props.value    Currently selected border style value.\n *\n * @return {WPElement} Custom border style select control.\n */\nfunction BorderStyleControl(_ref) {\n    var _onChange = _ref.onChange,\n        value = _ref.value,\n        label = _ref.label;\n\n    var style = BORDER_STYLES.find(function (option) {\n        return option.key === value;\n    });\n\n    if (label === undefined) {\n        label = \"Border Style\";\n    }\n\n    return wp.element.createElement(\n        'fieldset',\n        { className: 'components-border-style-control' },\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"CustomSelectControl\"], {\n            className: 'components-border-style-control__select',\n            label: label,\n            options: BORDER_STYLES,\n            value: style || DEFAULT_STYLE,\n            onChange: function onChange(_ref2) {\n                var selectedItem = _ref2.selectedItem;\n                return selectedItem.key === 'default' ? _onChange(undefined) : _onChange(selectedItem.key);\n            }\n        })\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ib3JkZXItc3R5bGUtY29udHJvbC9pbmRleC5qcz80MjA0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEJvcmRlclN0eWxlQ29udHJvbCBhcyBkZWZhdWx0IH07XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgQ3VzdG9tU2VsZWN0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbnZhciBERUZBVUxUX1NUWUxFID0ge1xuICAgIGtleTogJ2RlZmF1bHQnLFxuICAgIG5hbWU6IF9fKCdEZWZhdWx0JyksXG4gICAgc3R5bGU6IHsgYm9yZGVyU3R5bGU6IHVuZGVmaW5lZCB9XG59O1xuXG52YXIgQk9SREVSX1NUWUxFUyA9IFtERUZBVUxUX1NUWUxFLCB7XG4gICAga2V5OiAnbm9uZScsXG4gICAgbmFtZTogX18oJ05vbmUnKSxcbiAgICBzdHlsZTogeyBib3JkZXJTdHlsZTogJ25vbmUnIH1cbn0sIHtcbiAgICBrZXk6ICdzb2xpZCcsXG4gICAgbmFtZTogX18oJ1NvbGlkJyksXG4gICAgc3R5bGU6IHsgYm9yZGVyU3R5bGU6ICdzb2xpZCcgfVxufSwge1xuICAgIGtleTogJ2Rhc2hlZCcsXG4gICAgbmFtZTogX18oJ0Rhc2hlZCcpLFxuICAgIHN0eWxlOiB7IGJvcmRlclN0eWxlOiAnZGFzaGVkJyB9XG59LCB7XG4gICAga2V5OiAnZG90dGVkJyxcbiAgICBuYW1lOiBfXygnRG90dGVkJyksXG4gICAgc3R5bGU6IHsgYm9yZGVyU3R5bGU6ICdkb3R0ZWQnIH1cbn1dO1xuXG4vKipcbiAqIENvbnRyb2wgdG8gZGlzcGxheSBib3JkZXIgc3R5bGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzLm9uQ2hhbmdlIEhhbmRsZXIgZm9yIGNoYW5naW5nIGJvcmRlciBzdHlsZSBzZWxlY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMudmFsdWUgICAgQ3VycmVudGx5IHNlbGVjdGVkIGJvcmRlciBzdHlsZSB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtXUEVsZW1lbnR9IEN1c3RvbSBib3JkZXIgc3R5bGUgc2VsZWN0IGNvbnRyb2wuXG4gKi9cbmZ1bmN0aW9uIEJvcmRlclN0eWxlQ29udHJvbChfcmVmKSB7XG4gICAgdmFyIF9vbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsO1xuXG4gICAgdmFyIHN0eWxlID0gQk9SREVSX1NUWUxFUy5maW5kKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5rZXkgPT09IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGFiZWwgPSBcIkJvcmRlciBTdHlsZVwiO1xuICAgIH1cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdmaWVsZHNldCcsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY29tcG9uZW50cy1ib3JkZXItc3R5bGUtY29udHJvbCcgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEN1c3RvbVNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYm9yZGVyLXN0eWxlLWNvbnRyb2xfX3NlbGVjdCcsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICBvcHRpb25zOiBCT1JERVJfU1RZTEVTLFxuICAgICAgICAgICAgdmFsdWU6IHN0eWxlIHx8IERFRkFVTFRfU1RZTEUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoX3JlZjIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3JlZjIuc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0ua2V5ID09PSAnZGVmYXVsdCcgPyBfb25DaGFuZ2UodW5kZWZpbmVkKSA6IF9vbkNoYW5nZShzZWxlY3RlZEl0ZW0ua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JvcmRlci1zdHlsZS1jb250cm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: CustomSelectControl, RangeControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__border_style_control_index_js__ = __webpack_require__(/*! ./border-style-control/index.js */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ib3JkZXItc3R5bGUtY29udHJvbC9pbmRleC5qcyc7XG5pbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__border_style_control__ = __webpack_require__(/*! ../border-style-control */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    withColors = _wp$blockEditor.withColors;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow;\nvar __ = wp.i18n.__;\n\n\nvar BlockWithColorSettings = function BlockWithColorSettings(props) {\n\tvar borderColor = props.borderColor,\n\t    setBorderColor = props.setBorderColor,\n\t    textColor = props.textColor,\n\t    setTextColor = props.setTextColor,\n\t    backgroundColor = props.backgroundColor,\n\t    setBackgroundColor = props.setBackgroundColor,\n\t    setAttributes = props.setAttributes; // Props received from withColors\n\n\t//get attributes (except for the color ones) out of the attributes sent in\n\n\tvar blockText = props.attributes.blockText;\n\tvar borderWidth = props.attributes.borderWidth;\n\tvar borderStyle = props.attributes.borderStyle;\n\n\tvar divClass = '';\n\tvar divStyles = { borderWidth: borderWidth + 'px', borderStyle: borderStyle };\n\t//let divStyles = {};\n\n\tif (borderColor != undefined) {\n\t\tif (borderColor.class != undefined) {\n\t\t\tdivClass = borderColor.class;\n\t\t} else {\n\t\t\tdivStyles.borderColor = borderColor.color;\n\t\t}\n\t}\n\n\tif (textColor != undefined) {\n\t\tif (textColor.class != undefined) {\n\t\t\tdivClass += ' ' + textColor.class;\n\t\t} else {\n\t\t\tdivStyles.color = textColor.color;\n\t\t}\n\t}\n\n\tif (backgroundColor != undefined) {\n\t\tif (backgroundColor.class != undefined) {\n\t\t\tdivClass += ' ' + backgroundColor.class;\n\t\t} else {\n\t\t\tdivStyles.backgroundColor = backgroundColor.color;\n\t\t}\n\t}\n\n\t//console.log(\"divClass is:\", divClass);\n\t//console.log(\"PanelColorSettings is:\", PanelColorSettings);\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: 'Border' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__border_style_control__[\"a\" /* default */], {\n\t\t\t\t\t\tlabel: __('Style'),\n\t\t\t\t\t\tvalue: borderStyle,\n\t\t\t\t\t\tonChange: function onChange(borderStyle) {\n\t\t\t\t\t\t\tconsole.log(\"New border style: \" + borderStyle);setAttributes({ borderStyle: borderStyle });\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"RangeControl\"], {\n\t\t\t\t\t\tlabel: 'Width',\n\t\t\t\t\t\tvalue: borderWidth,\n\t\t\t\t\t\tonChange: function onChange(borderWidth) {\n\t\t\t\t\t\t\treturn setAttributes({ borderWidth: borderWidth });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmin: 0,\n\t\t\t\t\t\tmax: 10\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelRow,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\t\t\ttitle: __('Color'),\n\t\t\t\t\t\tcolorSettings: [{\n\t\t\t\t\t\t\tvalue: borderColor.color,\n\t\t\t\t\t\t\tonChange: setBorderColor,\n\t\t\t\t\t\t\tlabel: __('Color')\n\t\t\t\t\t\t}]\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Text and Background'),\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: textColor.color,\n\t\t\t\t\tonChange: setTextColor,\n\t\t\t\t\tlabel: __('Text color')\n\t\t\t\t}, {\n\t\t\t\t\tvalue: backgroundColor.color,\n\t\t\t\t\tonChange: setBackgroundColor,\n\t\t\t\t\tlabel: __('Background color')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t_extends({}, Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"useBlockProps\"])(), { className: divClass, style: divStyles }),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"RichText\"], {\n\t\t\t\tclassName: 'block__text'\n\t\t\t\t//keepPlaceholderOnFocus\n\t\t\t\t, onChange: function onChange(blockText) {\n\t\t\t\t\treturn setAttributes({ blockText: blockText });\n\t\t\t\t},\n\t\t\t\tplaceholder: __('Enter your text here...', 'wholesome-plugin'),\n\t\t\t\ttagName: 'span',\n\t\t\t\tvalue: blockText\n\t\t\t})\n\t\t)\n\t);\n};\n\nregisterBlockType('abeardsley/colorsettings', {\n\ttitle: __('Color Settings Demo - in editor!'),\n\ticon: 'carrot',\n\tcategory: 'common',\n\tattributes: {\n\t\tborderColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomBorderColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomTextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomBackgroundColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tblockText: {\n\t\t\tdefault: 'Default text to edit',\n\t\t\ttype: 'string'\n\t\t},\n\n\t\tborderStyle: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'none'\n\t\t},\n\n\t\tborderWidth: {\n\t\t\ttype: 'integer',\n\t\t\tdefault: 10\n\t\t}\n\t},\n\t//edit: BlockWithColorSettings,\n\tedit: withColors({ borderColor: 'border-color', textColor: 'color', backgroundColor: 'background-color' })(BlockWithColorSettings),\n\tsave: function save(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    borderColor = _props$attributes.borderColor,\n\t\t    customBorderColor = _props$attributes.customBorderColor,\n\t\t    textColor = _props$attributes.textColor,\n\t\t    customTextColor = _props$attributes.customTextColor,\n\t\t    backgroundColor = _props$attributes.backgroundColor,\n\t\t    customBackgroundColor = _props$attributes.customBackgroundColor,\n\t\t    blockText = _props$attributes.blockText,\n\t\t    borderStyle = _props$attributes.borderStyle,\n\t\t    borderWidth = _props$attributes.borderWidth;\n\n\t\tvar divClass = '';\n\t\tvar divStyles = { borderWidth: borderWidth + 'px', borderStyle: borderStyle };\n\t\t//let divStyles = {};\n\n\t\tconsole.log(\"on save borderStyle is: \" + borderStyle);\n\n\t\tif (borderColor != undefined) {\n\t\t\tdivClass = getColorClassName('border-color', borderColor);\n\t\t}\n\t\tif (customBorderColor != undefined) {\n\t\t\tdivStyles.borderColor = customBorderColor;\n\t\t}\n\n\t\tif (textColor != undefined) {\n\t\t\tdivClass += ' ' + getColorClassName('color', textColor);\n\t\t}\n\t\tif (customTextColor != undefined) {\n\t\t\tdivStyles.color = customTextColor;\n\t\t}\n\n\t\tif (backgroundColor != undefined) {\n\t\t\tdivClass += ' ' + getColorClassName('background-color', backgroundColor);\n\t\t}\n\t\tif (customBackgroundColor != undefined) {\n\t\t\tdivStyles.backgroundColor = customBackgroundColor;\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\tblockText\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IEJvcmRlclN0eWxlQ29udHJvbCBmcm9tICcuLi9ib3JkZXItc3R5bGUtY29udHJvbCc7XG5pbXBvcnQgeyBSYW5nZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgUGFuZWxDb2xvclNldHRpbmdzID0gX3dwJGJsb2NrRWRpdG9yLlBhbmVsQ29sb3JTZXR0aW5ncyxcbiAgICBnZXRDb2xvckNsYXNzTmFtZSA9IF93cCRibG9ja0VkaXRvci5nZXRDb2xvckNsYXNzTmFtZSxcbiAgICB3aXRoQ29sb3JzID0gX3dwJGJsb2NrRWRpdG9yLndpdGhDb2xvcnM7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdztcbnZhciBfXyA9IHdwLmkxOG4uX187XG5cblxudmFyIEJsb2NrV2l0aENvbG9yU2V0dGluZ3MgPSBmdW5jdGlvbiBCbG9ja1dpdGhDb2xvclNldHRpbmdzKHByb3BzKSB7XG5cdHZhciBib3JkZXJDb2xvciA9IHByb3BzLmJvcmRlckNvbG9yLFxuXHQgICAgc2V0Qm9yZGVyQ29sb3IgPSBwcm9wcy5zZXRCb3JkZXJDb2xvcixcblx0ICAgIHRleHRDb2xvciA9IHByb3BzLnRleHRDb2xvcixcblx0ICAgIHNldFRleHRDb2xvciA9IHByb3BzLnNldFRleHRDb2xvcixcblx0ICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmJhY2tncm91bmRDb2xvcixcblx0ICAgIHNldEJhY2tncm91bmRDb2xvciA9IHByb3BzLnNldEJhY2tncm91bmRDb2xvcixcblx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzOyAvLyBQcm9wcyByZWNlaXZlZCBmcm9tIHdpdGhDb2xvcnNcblxuXHQvL2dldCBhdHRyaWJ1dGVzIChleGNlcHQgZm9yIHRoZSBjb2xvciBvbmVzKSBvdXQgb2YgdGhlIGF0dHJpYnV0ZXMgc2VudCBpblxuXG5cdHZhciBibG9ja1RleHQgPSBwcm9wcy5hdHRyaWJ1dGVzLmJsb2NrVGV4dDtcblx0dmFyIGJvcmRlcldpZHRoID0gcHJvcHMuYXR0cmlidXRlcy5ib3JkZXJXaWR0aDtcblx0dmFyIGJvcmRlclN0eWxlID0gcHJvcHMuYXR0cmlidXRlcy5ib3JkZXJTdHlsZTtcblxuXHR2YXIgZGl2Q2xhc3MgPSAnJztcblx0dmFyIGRpdlN0eWxlcyA9IHsgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JywgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlIH07XG5cdC8vbGV0IGRpdlN0eWxlcyA9IHt9O1xuXG5cdGlmIChib3JkZXJDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRpZiAoYm9yZGVyQ29sb3IuY2xhc3MgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyA9IGJvcmRlckNvbG9yLmNsYXNzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaXZTdHlsZXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvci5jb2xvcjtcblx0XHR9XG5cdH1cblxuXHRpZiAodGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdGlmICh0ZXh0Q29sb3IuY2xhc3MgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyB0ZXh0Q29sb3IuY2xhc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdlN0eWxlcy5jb2xvciA9IHRleHRDb2xvci5jb2xvcjtcblx0XHR9XG5cdH1cblxuXHRpZiAoYmFja2dyb3VuZENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdGlmIChiYWNrZ3JvdW5kQ29sb3IuY2xhc3MgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyBiYWNrZ3JvdW5kQ29sb3IuY2xhc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdlN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IuY29sb3I7XG5cdFx0fVxuXHR9XG5cblx0Ly9jb25zb2xlLmxvZyhcImRpdkNsYXNzIGlzOlwiLCBkaXZDbGFzcyk7XG5cdC8vY29uc29sZS5sb2coXCJQYW5lbENvbG9yU2V0dGluZ3MgaXM6XCIsIFBhbmVsQ29sb3JTZXR0aW5ncyk7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0RnJhZ21lbnQsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0eyB0aXRsZTogJ0JvcmRlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJvcmRlclN0eWxlQ29udHJvbCwge1xuXHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdTdHlsZScpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGJvcmRlclN0eWxlLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGJvcmRlclN0eWxlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTmV3IGJvcmRlciBzdHlsZTogXCIgKyBib3JkZXJTdHlsZSk7c2V0QXR0cmlidXRlcyh7IGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSB9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFuZ2VDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ1dpZHRoJyxcblx0XHRcdFx0XHRcdHZhbHVlOiBib3JkZXJXaWR0aCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShib3JkZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aCB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0XHRtYXg6IDEwXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHRcdFx0dGl0bGU6IF9fKCdDb2xvcicpLFxuXHRcdFx0XHRcdFx0Y29sb3JTZXR0aW5nczogW3tcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGJvcmRlckNvbG9yLmNvbG9yLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogc2V0Qm9yZGVyQ29sb3IsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ29sb3InKVxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHR0aXRsZTogX18oJ1RleHQgYW5kIEJhY2tncm91bmQnKSxcblx0XHRcdFx0Y29sb3JTZXR0aW5nczogW3tcblx0XHRcdFx0XHR2YWx1ZTogdGV4dENvbG9yLmNvbG9yLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBzZXRUZXh0Q29sb3IsXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdUZXh0IGNvbG9yJylcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHZhbHVlOiBiYWNrZ3JvdW5kQ29sb3IuY29sb3IsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IHNldEJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRsYWJlbDogX18oJ0JhY2tncm91bmQgY29sb3InKVxuXHRcdFx0XHR9XVxuXHRcdFx0fSlcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0X2V4dGVuZHMoe30sIHVzZUJsb2NrUHJvcHMoKSwgeyBjbGFzc05hbWU6IGRpdkNsYXNzLCBzdHlsZTogZGl2U3R5bGVzIH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2Jsb2NrX190ZXh0J1xuXHRcdFx0XHQvL2tlZXBQbGFjZWhvbGRlck9uRm9jdXNcblx0XHRcdFx0LCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoYmxvY2tUZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBibG9ja1RleHQ6IGJsb2NrVGV4dCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdFbnRlciB5b3VyIHRleHQgaGVyZS4uLicsICd3aG9sZXNvbWUtcGx1Z2luJyksXG5cdFx0XHRcdHRhZ05hbWU6ICdzcGFuJyxcblx0XHRcdFx0dmFsdWU6IGJsb2NrVGV4dFxuXHRcdFx0fSlcblx0XHQpXG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYWJlYXJkc2xleS9jb2xvcnNldHRpbmdzJywge1xuXHR0aXRsZTogX18oJ0NvbG9yIFNldHRpbmdzIERlbW8gLSBpbiBlZGl0b3IhJyksXG5cdGljb246ICdjYXJyb3QnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRib3JkZXJDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGN1c3RvbUJvcmRlckNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0dGV4dENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0Y3VzdG9tVGV4dENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0YmFja2dyb3VuZENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0Y3VzdG9tQmFja2dyb3VuZENvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0YmxvY2tUZXh0OiB7XG5cdFx0XHRkZWZhdWx0OiAnRGVmYXVsdCB0ZXh0IHRvIGVkaXQnLFxuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXG5cdFx0Ym9yZGVyU3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ25vbmUnXG5cdFx0fSxcblxuXHRcdGJvcmRlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OiAxMFxuXHRcdH1cblx0fSxcblx0Ly9lZGl0OiBCbG9ja1dpdGhDb2xvclNldHRpbmdzLFxuXHRlZGl0OiB3aXRoQ29sb3JzKHsgYm9yZGVyQ29sb3I6ICdib3JkZXItY29sb3InLCB0ZXh0Q29sb3I6ICdjb2xvcicsIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQtY29sb3InIH0pKEJsb2NrV2l0aENvbG9yU2V0dGluZ3MpLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgYm9yZGVyQ29sb3IgPSBfcHJvcHMkYXR0cmlidXRlcy5ib3JkZXJDb2xvcixcblx0XHQgICAgY3VzdG9tQm9yZGVyQ29sb3IgPSBfcHJvcHMkYXR0cmlidXRlcy5jdXN0b21Cb3JkZXJDb2xvcixcblx0XHQgICAgdGV4dENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMudGV4dENvbG9yLFxuXHRcdCAgICBjdXN0b21UZXh0Q29sb3IgPSBfcHJvcHMkYXR0cmlidXRlcy5jdXN0b21UZXh0Q29sb3IsXG5cdFx0ICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvcixcblx0XHQgICAgY3VzdG9tQmFja2dyb3VuZENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMuY3VzdG9tQmFja2dyb3VuZENvbG9yLFxuXHRcdCAgICBibG9ja1RleHQgPSBfcHJvcHMkYXR0cmlidXRlcy5ibG9ja1RleHQsXG5cdFx0ICAgIGJvcmRlclN0eWxlID0gX3Byb3BzJGF0dHJpYnV0ZXMuYm9yZGVyU3R5bGUsXG5cdFx0ICAgIGJvcmRlcldpZHRoID0gX3Byb3BzJGF0dHJpYnV0ZXMuYm9yZGVyV2lkdGg7XG5cblx0XHR2YXIgZGl2Q2xhc3MgPSAnJztcblx0XHR2YXIgZGl2U3R5bGVzID0geyBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLCBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUgfTtcblx0XHQvL2xldCBkaXZTdHlsZXMgPSB7fTtcblxuXHRcdGNvbnNvbGUubG9nKFwib24gc2F2ZSBib3JkZXJTdHlsZSBpczogXCIgKyBib3JkZXJTdHlsZSk7XG5cblx0XHRpZiAoYm9yZGVyQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyA9IGdldENvbG9yQ2xhc3NOYW1lKCdib3JkZXItY29sb3InLCBib3JkZXJDb2xvcik7XG5cdFx0fVxuXHRcdGlmIChjdXN0b21Cb3JkZXJDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRcdGRpdlN0eWxlcy5ib3JkZXJDb2xvciA9IGN1c3RvbUJvcmRlckNvbG9yO1xuXHRcdH1cblxuXHRcdGlmICh0ZXh0Q29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyBnZXRDb2xvckNsYXNzTmFtZSgnY29sb3InLCB0ZXh0Q29sb3IpO1xuXHRcdH1cblx0XHRpZiAoY3VzdG9tVGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2U3R5bGVzLmNvbG9yID0gY3VzdG9tVGV4dENvbG9yO1xuXHRcdH1cblxuXHRcdGlmIChiYWNrZ3JvdW5kQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZDbGFzcyArPSAnICcgKyBnZXRDb2xvckNsYXNzTmFtZSgnYmFja2dyb3VuZC1jb2xvcicsIGJhY2tncm91bmRDb2xvcik7XG5cdFx0fVxuXHRcdGlmIChjdXN0b21CYWNrZ3JvdW5kQ29sb3IgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkaXZTdHlsZXMuYmFja2dyb3VuZENvbG9yID0gY3VzdG9tQmFja2dyb3VuZENvbG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBkaXZDbGFzcywgc3R5bGU6IGRpdlN0eWxlcyB9LFxuXHRcdFx0YmxvY2tUZXh0XG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: RichText, useBlockProps */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);