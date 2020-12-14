let isBool: boolean = true;

let num: number = 1;

let str: string = "abc";
let str2: string = `${str} a`;
console.log(str2);

let arr1: number[] = [1,2,3];
let arr2: Array<string> = ["a","b"];

// 元组类型：
let tuple: [string,number] = ["a",1];

// 枚举类型：
enum Color {
    "red"="red",
    "green"="green"
}
console.log(Color.red);  //red

let anyArr: any[] = [1,"a"];

function fn(): void {
    
}

let obj: object = {"name":"jack"};

// 断言，也就是强制类型转换.
let someValue: any = "this a";
let numA: number = (<string>someValue).length;
let numB: number = (someValue as string).length;
