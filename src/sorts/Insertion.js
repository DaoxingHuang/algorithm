import Sort from './Sort.js'
/** 
 * 1.we consider the first element is sorted
 * 2 get the next element and scan it from back to  front
 * 3.if scaned element is more than compareed element ,then put it after this compared element
 * 4.repeat NO.3 ,and find out less than it or equal it .
 * 5.insert this element after element that get if form No.4
 * repeat 2-5 until the last element .
  
*/
export default class Insertion extends Sort {
    constructor(arr) {
        super(arr);
    }

    _sort() {
        let arr = this.arr;
        let len = arr.length;
        for (let i = 1; i < len; i++) {
            let temp = arr[i];
            let index = i;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > temp) {
                    arr[j + 1] = arr[j]
                    index = j;
                }
                else {               
                    break;
                }
            }
            arr[index] = temp;
        }

        return arr;
    }
}