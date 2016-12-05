'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sort2 = require('./Sort.js');

var _Sort3 = _interopRequireDefault(_Sort2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** 
 * find min from unsorted arr and put into start postion
 * find other element find the min and put it into end of sorted 
 * repeat until last one
*/

var Select = function (_Sort) {
    _inherits(Select, _Sort);

    function Select(arr) {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, arr));
    }

    _createClass(Select, [{
        key: '_sort',
        value: function _sort() {
            var arr = this.arr;
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var min = i;
                for (var j = i + 1; j < len; j++) {
                    if (arr[min] >= arr[j]) min = j;
                }
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
            return arr;
        }
    }]);

    return Select;
}(_Sort3.default);

exports.default = Select;