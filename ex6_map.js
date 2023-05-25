//반복문 map예제
let array=['red','green','blue','yellow'];

//map 반복문을 이용하여 출력하기
array.map((num,idx)=>console.log(idx+":"+num));


// //2번만 제외하고 다시 배열에 담기
// array=[...array.slice(0,2), /*red,green*/
//     ...array.slice(3,array.length)]; //3번부터 끝까지 배열에 담기
// array.map((num,idx)=>console.log(idx+':'+num));

// console.log('='.repeat(40));
// console.log();

//2번만 제외하고 다시 배열에 담기 - filter
array=array.filter((item,i)=>i!==2); //i가 2가 아닌것만 필터링(반환)
array.map((num,idx)=>console.log(idx+':'+num));