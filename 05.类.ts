class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log(this.greeting);
    }
}
let greetA = new Greeter("jack");
greetA.greet();

class Animal {
    animal1: string
    constructor(name: string) {
        this.animal1 = name;
    }
    animalFn() {
        console.log(this.animal1);
    }
    fun() {
        console.log(this.animal1);
    }
}
class Cat extends Animal {
    cat1: string;
    constructor(name: string) {
        super(name);
        this.cat1 = name;
    }
    fun() {
        console.log(this.cat1);
    }
}

class CatChild extends Cat {
    catChild: string;
    constructor(name: string) {
        super(name);
        this.catChild = name;
    }
    fun() {
        console.log(this.catChild);
    }
}
var cat = new CatChild("cat");
cat.fun();
cat.animalFn();

// class定义数据类型
class Point {
    x: number;
    y: number;
}
let p: Point = {x:1,y:2};