export default function shiftTwoValues(first , second){
    if(!(first instanceof number || second instanceof number))
       throw new Error('numbers are required');
    first += second;
    second = first - second;
    first = first - second;
    return [first,second];
}