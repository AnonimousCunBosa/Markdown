let sum = '5' + 5 ;
console.log(typeof sum, sum);//OUTPUT:"string"

let rest = '10' -5;
console.log(typeof rest, rest);//Output:"number" 5 

let multiplicacion = '5' * 2;
console.log(typeof multiplicacion, multiplicacion);//OUTPUT:"number" 10

let division = '10' / 2;
console.log(typeof division, division); //  ouput:"number"

//convertio

let  transformToString = Number(sum); 
console.log(typeof transformToString, transformToString); //OUTPUT:"number" 55

const transformToNumber = String(rest);
console.log(typeof transformToNumber, transformToNumber); //OUTPUT:"string" 5

const numberPi = 3.1415926535 ;
const methodToFixed = numberPi.toFixed(2);
console.log (typeof methodToFixed, methodToFixed); //OUTPUT:"string" 3.14

const methodParseInt = parseInt(numberPi);
console.log(typeof methodParseInt, methodParseInt); //OUTPUT:"number" 3

const  methodParseFloat = parseFloat(numberPi);
console.log(typeof methodParseFloat, methodParseFloat); //OUTPUT:"number" 3.1415926535
