var map = require('./polyfill/map');

function _map(arr,fn) {
  return map.call(arr,fn);
}

module.exports = _map;