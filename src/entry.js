import Bubble from './sorts/Bubble.js';
import Insertion from './sorts/Insertion.js'
import Select from './sorts/Select.js'

let arr =[4,7,1,43,34,76,23,66,54,43,12,2,2,3,77,65,54,43,33,56,88];
console.log('Bubble start ++++++++');
let bub = new Bubble(arr.slice(0));
bub.printResult();
console.log('Bubble end ---------');

console.log('###############################################');

console.log('Insertion start ++++++++');
let insert = new Insertion(arr.slice(0));
insert.printResult();
console.log('Insertion end ---------');

console.log('###############################################');

console.log('Select start ++++++++');
let set = new Select(arr.slice(0));
set.printResult();
console.log('Select end ---------');

