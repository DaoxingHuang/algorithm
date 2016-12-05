import Sort from './Sort.js';

/** 
 * find min from unsorted arr and put into start postion
 * find other element find the min and put it into end of sorted 
 * repeat until last one
*/

export default class Select extends Sort {
    constructor(arr) {
        super(arr);
    }
    _sort() {
        let arr  = this.arr;
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[min] >= arr[j])
                    min = j;
            }
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;  
        }
        return arr;
    }


}