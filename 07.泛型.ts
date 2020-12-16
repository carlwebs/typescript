// 泛型.
// 第一个T表示类型变量。
function fn<T>(name: T): T {
    return name;
}
console.log(fn<string>("jack"));  //调用方式一
console.log(fn(1)); //调用方式二

function fns<T>(arr:T[]): T[] {
    console.log(arr.length);
    return arr;
}
console.log(fns([1,2,3]));

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };