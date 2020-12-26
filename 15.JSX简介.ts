// 1.JSX文件名.tsx

// 2.固有元素的查找：
// 固有元素使用特殊的接口JSX.IntrinsicElements来查找。 默认地，如果这个接口没有指定，会全部通过，不对固有元素进行类型检查。 
// 然而，如果这个接口存在，那么固有元素的名字需要在JSX.IntrinsicElements接口的属性里查找。
// 例如：declarations.d.ts
// declare namespace JSX {
//     interface IntrinsicElements {
//         'hello-plugin1': any;
//         'mock-plugin': any;
//         'mock-command': any;
//         'plugin-icon': any;
//         'mock-command-delete': any;
//         'plugin-command-a-entry': any;
//         'plugin-io-main-view': any;
//         'plugin-gluing': any;
//         'plugin-gluing-command': any;
//     }
// }

// 3.基于值的元素
// 基于值的元素会简单的在它所在的作用域里按标识符查找。
// import MyComponent from "./myComponent";
                                
// <MyComponent />; // 正确
// <SomeOtherComponent />; // 错误

// 4.元素属性类型用于JSX里进行属性的类型检查。支持可选属性和必须属性。
// declare namespace JSX {
//     interface IntrinsicElements {
//     foo: { requiredProp: string; optionalProp?: number }
//     }
// }

// <foo requiredProp="bar" />; // 正确
// <foo requiredProp="bar" optionalProp={0} />; // 正确
// <foo />; // 错误, 缺少 requiredProp
// <foo requiredProp={0} />; // 错误, requiredProp 应该是字符串
// <foo requiredProp="bar" unknownProp />; // 错误, unknownProp 不存在
// <foo requiredProp="bar" some-unknown-prop />; // 正确, `some-unknown-prop`不是个合法的标识符

