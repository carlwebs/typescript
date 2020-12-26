// 1.TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。如下面的例子
// let x = 3;
// 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。

// 2.上下文类型推断：
// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);  //<- Error
// };
// 这个例子会得到一个类型错误，TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边
// 函数表达式的类型。 因此，就能推断出 mouseEvent参数的类型了。 如果函数表达式不是在上下文类型
// 的位置， mouseEvent参数的类型需要指定为any，这样也不会报错了。