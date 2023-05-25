//es6의 배열 기능

//1. 배열의 비구조화 할당
let arr=[3,5,7];                  //배열 생성
let f1=(a,b) => console.log(a,b); //함수 생성

f1(arr[0],arr[1]);                //함수 호출
f1(...arr);                       // '...'은 펼침 연산자, 배열의 요소를 펼쳐서 전달

//2. 배열의 연결
let arr1=[1,2];
let arr2=[33,44,55];
let arr3=[5,6,...arr1,...arr2];
console.log(arr3.length);         //7개의 요소가 저장됨
console.log(arr3);                //5,6,1,2,33,44,55

//2-1. 배열 속 데이터의 합계 구하기
let sum=0;                        //합계를 저장할 변수
for (let a of arr3){              //of: 배열의 요소를 하나씩 꺼내서 a에 저장
    console.log(a);               //배열의 요소를 하나씩 출력
    sum+=a;                       //배열의 요소를 하나씩 더함
}
console.log("sum="+sum);          //sum=146

//2-2. 배열 속 데이터의 합계 구하기 
sum=0;                           //합계를 저장할 변수      
for (let i in arr3){             //in: 배열의 인덱스를 하나씩 꺼내서 i에 저장                            
    sum+=arr3[i];                //배열의 요소를 하나씩 더함                      
}
console.log("sum="+sum);         //sum=146
