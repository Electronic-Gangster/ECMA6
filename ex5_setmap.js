//컬렉션 set: 중복 허용 안함, 비순차적
let set1=new Set("asdasdasd");  //set 생성
console.log(set1);

//추가
set1.add("f");
console.log(set1);
console.log(set1.size);         //set의 크기
console.log(...set1);           //set의 요소를 펼쳐서 출력

//삭제
set1.clear();                   //set의 모든 요소 삭제
console.log(set1.size);

console.log("=".repeat(50));

//컬렉션 map: key-value 쌍으로 저장
let map1=new Map();             //map 생성
let a={n:1};                    //key

//추가
map1.set(a,"A");               //key-value 쌍으로 저장
map1.set("age",64);            //따로 변수를 만들지 않고 바로 key-value 쌍으로 저장

console.log(map1);
console.log(...map1);          //map의 요소를 펼쳐서 출력

//삭제
map1.delete("age");            //key가 age인 요소 삭제
console.log(...map1);          //map의 요소를 펼쳐서 출력