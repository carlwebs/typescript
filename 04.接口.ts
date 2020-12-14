interface Fn1 {
    name: string;
    age?: number
}
interface Obj {
    readonly x:number 
}
interface Obj2 {
    name:string ;
    [a: string]: any;  //定义任意的可选属性
}
function fn(obj:{name:string}) {
    console.log(obj.name);
}
fn({name:"jack"});

function fun1(obj: Fn1) {
    console.log(obj.age,obj.name);
}
fun1({name:"jack",age:12});

let a: Obj = {x:1};
let b: Obj2= {"name": "jack","age":12};