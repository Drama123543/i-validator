# i-validator  

*validate so easy(3.28kb)*

```Javascript
npm install i-validator
```

# node
```Javascript
var iValidator = require('i-validator')

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

// result
[ { key: 'name',
    errormessageArr: [ 'name can only be a string', 'the length of name is 3-8' ] },
  { key: 'name',
    errormessageArr: [ 'the length of name is 3-8' ] } ]
```

# browserify
```Javascript
<script src="dist/i-validator.js"></script>
<script>
var iValidator = require('i-validator')
</script>
```