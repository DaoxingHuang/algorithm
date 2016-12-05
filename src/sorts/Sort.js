
export default class Sort {
    constructor(arr = []) {
        if (!(arr instanceof Array))
            throw new Error('Type error!');
        this.arr = arr;
    } 

    _sort() {
        console.log('this is sort function of Parent.');
    }

    printResult() {
        console.log(this._sort());
    }
}