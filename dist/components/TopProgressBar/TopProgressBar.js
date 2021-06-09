"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Progress = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position:  fixed;\n    top: 0;\n    background:  linear-gradient(\n        to right,\n        rgba(250, 224, 66, .8) ", ",\n        transparent  0);\n    width:  100%;\n    height:  4px;\n    z-index:  3;\n"])), props => props.scroll);

var _default = Progress;
exports.default = _default;