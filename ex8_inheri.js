class AA{
    constructor()
    {
        console.log("부모 클래스 생성자 호출");
    }
}

class BB extends AA{
    constructor()
    {
        super();    //부모의 생성자 호출
        console.log("자식 클래스 생성자 호출");
    }
}

let a = new BB();

class CC{
    constructor(name)
    {
        this.name=name;
    }

    printA()
    {
        console.log("네 이름은 "+this.name);
    }
}

class DD extends CC{
    constructor(name,age)
    {
        super(name);    //부모의 생성자 호출
        this.age=age;
    }

    printAll()
    {
        this.printA();
        console.log("네 나이는 "+this.age+"살!!");
    }
}

let b=new DD("윤석열",62);
b.printAll();