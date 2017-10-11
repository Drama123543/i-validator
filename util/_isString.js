function _isString(v) {
  return Object.prototype.toString.call(v) === '[object String]'
}

module.exports = _isString