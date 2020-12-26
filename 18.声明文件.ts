// 1.UMD
// UMD模块是指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。 许多流行的库，比如 Moment.js，就是这样的形式。 
// 比如，在Node.js或RequireJS里，你可以这样写：
// import moment = require("moment");
// console.log(moment.format());
// 然而在纯净的浏览器环境里你也可以这样写：
// console.log(moment.format());

// 大多数流行的库现在都能够被当成UMD包。 比如 jQuery,Moment.js,lodash和许多其它的。

// 2.声明类型的几种方式
// // 声明全局变量
// declare var foo: number;

// // 全局函数
// declare function greet(name:string) :void;

// // 带属性的对象
// declare namespace myLib {
//     function greet(name: string): void;
//     let age: number;
// }

// // 函数重载声明
// declare function getWidget(n: number): number;
// declare function getWidget(s: string): number[];

// // 可重用类型接口
// interface Fun {
//     fn: () => void;
//     name: string;
//     age: number;
// }
// declare function f(fun:Fun): void;

// // 声明类
// declare class Greets {
//     constructor(greet: string);
//     greet: string;
//     age: number;
// }

