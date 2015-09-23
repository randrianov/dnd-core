import isArray from 'lodash/lang/isArray';
import intersection from 'lodash/array/intersection';

export default function matchesType(targetType, draggedItemType) {
  var draggedItemTypeArr = draggedItemType.split('#');
  if (isArray(targetType)) {
  	if (intersection(targetType, draggedItemTypeArr) !== []) {
  		return true;
  	} else {
  		return false;
  	}
  } else {
    return draggedItemTypeArr.some(t => t === targetType);
  }
}