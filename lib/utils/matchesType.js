'use strict';

exports.__esModule = true;
exports['default'] = matchesType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashLangIsArray = require('lodash/lang/isArray');

var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);

var _lodashArrayIntersection = require('lodash/array/intersection');

var _lodashArrayIntersection2 = _interopRequireDefault(_lodashArrayIntersection);

function matchesType(targetType, draggedItemType) {
  var draggedItemTypeArr = draggedItemType.split('#');
  if (_lodashLangIsArray2['default'](targetType)) {
    if (_lodashArrayIntersection2['default'](targetType, draggedItemTypeArr).length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return draggedItemTypeArr.some(function (t) {
      return t === targetType;
    });
  }
}

module.exports = exports['default'];