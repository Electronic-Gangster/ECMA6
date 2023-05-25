//화살표 함수 : ES6에서 추가된 함수

//예제 1번 : 인자가 없는 경우
let f1=()=>"Hello World";              //return "hello world"의 의미 : 한줄일 경우 return 생략 가능
                                       //한 줄일 때는, 중괄호 사용하지 않아도 됨
console.log(f1());                     //f1 함수 호출

//예제 2번 : 인자가 2개인 경우
let f2=(a,b=10)=>a*b;                 //return a*b의 의미 인자로 받은 두 수의 곱을 반환
console.log("3*4 는?",f2(3,4));       //f2 함수 호출
console.log(f2(5));                   //NaN : Not a Number (숫자가 아님), 단 초기값을 준 경우 a=5, b=10

//예제 3번 : 인자가 3개인 경우
let f3=(x=1, y=2, z=3)=>x+y+z;        //return x+y+z의 의미
console.log(f3(4));                   //9 : x=4, y=2, z=3
console.log(f3(10,20));               //33 : x=10, y=20, z=3
console.log(f3(10,20,30));            //60 : x=10, y=20, z=30