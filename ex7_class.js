//class 활용 예제

//1. 기본 구조
class Student{                  //class 선언
    constructor(name)           //생성자
    {
        console.log("생성자 호출")
        this.name=name;         //멤버변수
    }
}

//1-1. 클래스 '생성'
let s1=new Student("윤석열");     //생성자 호출
console.log(s1.name);           //윤석열

let s2=new Student("문재인");     
console.log(s2.name);

console.log("=".repeat(50));

//2. 클래스 구현
let Sawon=class{
    constructor(name,buseo)
    {
        this.name=name;
        this.buseo=buseo;
    }

    //2-1. 멤버 메서드
    printSawon()
    {
        console.log(`사원명:${this.name}, 부서:${this.buseo}`);
    }

    //2-2. 정적 메서드
    static showTitle(){
        console.log("** 우리 회사 직원들 명단 **");
    }
}

//2-1. 클래스 '생성'
let sw1=new Sawon("윤석열","대통령");
console.log(sw1.name+":"+sw1.buseo);
console.log(`${sw1.name}님은 ${sw1.buseo}에 취임했습니다.`)

//2-2. 멤버 메서드 호출
sw1.printSawon();

//2-3. 정적 메서드 호출
Sawon.showTitle();

