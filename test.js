var iValidator = require('./index')
var assert = require('assert')


it("i-validator test",function() {
  var validatorArr = [
    [
      {value:123,key:"name"},
      {"validatorFn":function(v) { return typeof v ==="string"},"errorMessage":"name can only be a string"},
      {"validatorFn":function (v) {return v.length>=3 && v.length<=8},"errorMessage":"the length of name is 3-8"}
    ],
    [
      {value:'j',key:"name"},
      {"validatorFn":function(v) { return typeof v ==="string"},"errorMessage":"name can only be a string"},
      {"validatorFn":function (v) {return v.length>=3 && v.length<=8},"errorMessage":"the length of name is 3-8"}
    ],
    [
      {value:'john',key:"name"},
      {"validatorFn":function(v) { return typeof v ==="string"},"errorMessage":"name can only be a string"},
      {"validatorFn":function (v) {return v.length>=3 && v.length<=8},"errorMessage":"the length of name is 3-8"}
    ],
  ]

  var result = iValidator(validatorArr);

  assert.equal(result[0]['key'], 'name')
  assert.equal(result[0]['errormessageArr'][0], 'name can only be a string')
  assert.equal(result[0]['errormessageArr'][1], 'the length of name is 3-8')

  assert.equal(result[1]['key'], 'name')
  assert.equal(result[1]['errormessageArr'][0], 'the length of name is 3-8')

  assert.equal(result[2], undefined)

})