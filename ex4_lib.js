

let a=12;
let b=23.0;
let c=12.6;

console.log(a+"는 정수인가?"+Number.isInteger(a)); //true
console.log(b+"는 정수인가?"+Number.isInteger(b)); //true
console.log(c+"는 정수인가?"+Number.isInteger(c)); //false

//isNaN : NaN이 출력되는 경우만 true
console.log(12/'a'); //NaN: 수식에 오류가 있을경우 NaN이 출력됨

let a1="NaN";
let b1=NaN;
let c1="Hello";
let d1=12;

console.log("es5의 isNaN");
console.log("a1="+isNaN(a1)); //숫자가 아닐 경우만 : true
console.log("b1="+isNaN(b1)); //true
console.log("c1="+isNaN(c1)); //true
console.log("d1="+isNaN(d1)); //d1만 숫자라서 : false

console.log("=".repeat(50));

console.log("es6의 Number.isNaN");    //es6의 Number.isNaN
console.log("a1="+Number.isNaN(a1)); //NaN을 가장한 문자열이라서 : false 
console.log("b1="+Number.isNaN(b1)); //NaN인 경우에만 : true
console.log("c1="+Number.isNaN(c1)); //문자열이라서 : false
console.log("d1="+Number.isNaN(d1)); //숫자라서 : false

console.log("=".repeat(50));

//반복함수 repeat
console.log("반복 함수 repeat");
console.log("재밌다!".repeat(20));

