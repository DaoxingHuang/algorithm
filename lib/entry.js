'use strict';

var _Bubble = require('./sorts/Bubble.js');

var _Bubble2 = _interopRequireDefault(_Bubble);

var _Insertion = require('./sorts/Insertion.js');

var _Insertion2 = _interopRequireDefault(_Insertion);

var _Select = require('./sorts/Select.js');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arr = [4, 7, 1, 43, 34, 76, 23, 66, 54, 43, 12, 2, 2, 3, 77, 65, 54, 43, 33, 56, 88];
console.log('Bubble start ++++++++');
var bub = new _Bubble2.default(arr.slice(0));
bub.printResult();
console.log('Bubble end ---------');

console.log('###############################################');

console.log('Insertion start ++++++++');
var insert = new _Insertion2.default(arr.slice(0));
insert.printResult();
console.log('Insertion end ---------');

console.log('###############################################');

console.log('Select start ++++++++');
var set = new _Select2.default(arr.slice(0));
set.printResult();
console.log('Select end ---------');