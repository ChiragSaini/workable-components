"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./Button"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: props.color,
    padding: props.padding,
    bgColor: props.bgColor
  }, props.children);
};

var _default = Button;
exports.default = _default;