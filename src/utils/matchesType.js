import isArray from 'lodash/lang/isArray';
import intersection from 'lodash/array/intersection';

export default function matchesType(targetType, draggedItemType) {
  var draggedItemTypeArr = draggedItemType.split('#');
  if (isArray(targetType)) {
    return intersection(targetType, draggedItemTypeArr);
  } else {
    return draggedItemTypeArr.some(t => t === targetType);
  }
}