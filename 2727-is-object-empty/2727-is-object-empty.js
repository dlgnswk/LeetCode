/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if (Object.keys(obj).length === 0 && Object.values(obj).length === 0) {
    return true;
  }
  
  return false;
};