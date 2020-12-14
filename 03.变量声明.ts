// 当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，
// 而是针对 每次迭代都会创建这样一个新作用域。
function fn() {
    for(let i=0;i<10;i++) {
        setTimeout(() => {
            console.log(i);
        }, 3000);
    }
}
fn();
// 转化为js的结果
// function fn() {
//     var _loop_1 = function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 3000);
//     };
//     for (var i = 0; i < 10; i++) {
//         _loop_1(i);
//     }
// }

function fun([first,second]: [number,number]) {
    return first + second;
}
console.log(fun([1,2]));  //3
let [a,...b] = [1,2,3,4,5];  
console.log(a,b);  //1,[2,3,4,5];

let obj = {
    "names": "jack",
    "age": 12,
    "sex": "man"
}
let {names,...obj2} = obj;
console.log(names,obj2);  //jack,{age:12,sex:man};

let arr11 = [1,2];
let arr22 = [3,4];
let arr33 = [5,...arr11,...arr22]
console.log(arr33);

let obj11 = {"name":"jack"};
let obj22 = {"age":12};
let obj33 = {"sex":"man",...obj11,...obj22};
console.log(obj33);