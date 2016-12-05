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
 * 1.we consider the first element is sorted
 * 2 get the next element and scan it from back to  front
 * 3.if scaned element is more than compareed element ,then put it after this compared element
 * 4.repeat NO.3 ,and find out less than it or equal it .
 * 5.insert this element after element that get if form No.4
 * repeat 2-5 until the last element .
  
*/
var Insertion = function (_Sort) {
    _inherits(Insertion, _Sort);

    function Insertion(arr) {
        _classCallCheck(this, Insertion);

        return _possibleConstructorReturn(this, (Insertion.__proto__ || Object.getPrototypeOf(Insertion)).call(this, arr));
    }

    _createClass(Insertion, [{
        key: '_sort',
        value: function _sort() {
            var arr = this.arr;
            var len = arr.length;
            for (var i = 1; i < len; i++) {
                var temp = arr[i];
                var index = i;
                for (var j = i - 1; j >= 0; j--) {
                    if (arr[j] > temp) {
                        arr[j + 1] = arr[j];
                        index = j;
                    } else {
                        break;
                    }
                }
                arr[index] = temp;
            }

            return arr;
        }
    }]);

    return Insertion;
}(_Sort3.default);

exports.default = Insertion;