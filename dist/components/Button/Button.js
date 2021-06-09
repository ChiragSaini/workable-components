"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 1.2rem;\n    padding: ", ";\n    background: ", ";\n    box-shadow: none;\n    border: none;\n    min-width: 100px;\n    border-radius: 20px;\n"])), props => props.color, props => props.padding, props => props.bgColor);

var _default = Button;
exports.default = _default;