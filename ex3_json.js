//json형태의 데이터 처리 예제

//1. 객체 할당
let obj1={"name":"윤석열", "age":62, "addr":"seoul"};   //객체 생성
console.log(obj1);                                    //객체 출력
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.addr);

console.log("=".repeat(50));

//2. 오브젝트 통으로 대입 (복사와 유사)
let obj2=obj1;
console.log(obj2.name);

console.log("=".repeat(50));

//3. es6에서 오브젝트로 부터 값을 얻는 방법
let {name,age}=obj1;                                  //오브잭트1 로 부터 키값 name, age를 얻어서 변수에 저장
console.log("이름="+name+",나이="+age);                 //윤석열 62

console.log("=".repeat(50));

//4. 함수에서 매개변수를 객체타입으로 받을때, 초기값을 지정할 경우
let f1=({name='문재인',age=71}={})=>console.log("이름="+name+",나이="+age);

f1();                                                 //이름=문재인,나이=71
f1(obj1.name);                                        //이름=윤석열,나이=71
f1(obj1);                                             //이름=윤석열,나이=62

console.log("=".repeat(50));

