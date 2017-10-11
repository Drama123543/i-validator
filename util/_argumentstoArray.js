var _argumentstoArray = function(args) {
  var length = args.length,
      results = Array(length);
   for (var index = 0; index < length; index++) {
      results[index] = args[index]
    }
    return results;
}

module.exports = _argumentstoArray