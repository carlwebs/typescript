// 1.装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用
//  @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息
//  做为参数传入。
//  例如：有一个@sealed装饰器，我们会这样定义sealed函数：
//  function sealed(target) {
//      console.log(target);
//  }

//  编译命令：
//  tsc index.ts --target ES5 --experimentalDecorators

//  2.最基本的构造器：
//  function hello(target: any) {
//     console.log(target);
// }
// @hello
// class H {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     getName = () => {
//         console.log(this.name);
//     }
// }
// let a = new H("jack");
// a.getName();

// 3.装饰器的执行实机是在编译的时候执行的。

// 4.装饰器工厂：如果我们要定制一个修饰器如何应用到一个声明上，我们得写一个装饰器工厂函数。装饰器工厂就是
// 一个简单得函数，它返回一个表达式，以供装饰器在运行时调用。
// function color(value: string) { // 这是一个装饰器工厂
//     return function (target) { //  这是装饰器
//         // do something with "target" and "value"...
//     }
// }
// 例子：
// function add(num: number) {
//     return (target: Function) => {
//         target.prototype.age = num;
//     }
// }

// @add(12)
// class A {
//     public age: number;
//     public name: string = "jack";
// }
// console.log(A.prototype.age);
// let demo = new A();
// console.log(demo.age)

// 5.多个装饰器一起修饰：
// function A(target) {
//     console.log("A");
// }
// function B(target) {
//     console.log("B");
// }

// @A
// @B
// class C {

// }
// // 打印结果为： B  A

// 6.在Typescript里，当多个装饰器应用在一个声明上时会进行如下步骤得操作：
// (1).由上至下依次对装饰器表达式求值。
// (2).求值的结果会被当作函数，由下至上依次调用。
// function f() {
//     console.log("f(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// function g() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// class C {
//     @f()
//     @g()
//     method() {}
// }

// 打印结果为：
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called

// 7.类装饰器：
// 类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
// 例子：
// function A(target) {
//     console.log(target);

//     打印结果为：
//     /* ƒ C() {
//         var _this = this;
//         this.name = "jack";
//         this.getName = function () {
//             console.log(_this.name);
//         };
//         this.age = 12;
//     } */
// }

// @A 
// class C {
//     public name: string = "jack";
//     public age: number;
//     constructor() {
//         this.age = 12;
//     }
//     getName = () => {
//         console.log(this.name);
//     }
// }

// 8.方法修饰符：
// 方法装饰器声明在一个方法的声明之前(紧靠着方法声明)。它会被应用到方法的属性描述符上，可以
// 用来监视，修改或者替换方法定义。
// 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的名字。
// 成员的属性描述符。
// 例子：
// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(target);
//         console.log(propertyKey);
//         console.log(descriptor);
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let a = new Greeter("jack");

// 9.访问器装饰器：
// function configurable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(target);
//         console.log(propertyKey);
//         console.log(descriptor);
//         descriptor.configurable = value;
//     };
// }

// class Point {
//     private _x: number;
//     private _y: number;
//     constructor(x: number, y: number) {
//         this._x = x;
//         this._y = y;
//     }

//     @configurable(false)
//     get x() { return this._x; }

//     get y() { return this._y; }
// }
// let p = new Point(1,2);

// 10.属性装饰器：
// 修饰类得属性得，感觉没有什么用处。

// 11.参数装饰器：
// 参数装饰器感觉没有什么用处呢。

// 12.extends与implements区别：
// 假如我有一个干净的抽象类A
// abstract class A {
//     abstract m(): void;
// }

// //TypeScript，继承
// class B extends A{

// }

// //实现：
// class C implements A {
//     m(): void { }
// }

// implements关键字将类A当作一个接口，这意味着类C必须去实现定义在A中的所有方法，无论这些方法是否在类A中有没有默认的实现。同时，
// 也不用在类C中定义super方法。
// 而就像是extends关键字本身所表达的意思一样，你只需要实现类A中定义的虚方法，并且关于super的调用也会有效。
// 我想在抽象方法的情况下，这并没有什么区别。但是很少有只使用抽象方法的类，如果只使用抽象方法，最好将其转换为接口。