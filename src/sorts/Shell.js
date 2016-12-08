import Sort from './Sort.js'

export default class Shell extends Sort {
    constructor(arr) {
        super(arr);
    }

    _sort() {
        var arr = this.arr;
        var len = arr.length;
        var gap = Math.round(len/2);
        while(gap>=0){
            for(var i = gap;i<len;i++){
                var temp = arr[i];
                var j = i;
                while(j>=gap&&arr[j-gap]>temp){
                    arr[j] = arr[j-gap];
                    j = -gap;
                }
                arr[j] = temp;
            }
            gap = round(gap/2);
        }

        return arr;
    }

}