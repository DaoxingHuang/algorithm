import Sort from './Sort.js';


export default class Bubble extends Sort {
    constructor(arr) {
        super(arr);
    }

    _sort() {
        let arr = this.arr;
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (arr[i] > arr[j]) {
                    arr[i] += arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] = arr[i] - arr[j];
                }
            }
        }
        return arr;
    }   
}