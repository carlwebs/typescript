// 1.模块导入分为相对和非相对。
// 相对导入：
// import Entry from "./components/Entry";
// import { DefaultHeaders } from "../constants/http";
// import "/mod";
// 非相对导入：
// import * as $ from "jQuery";
// import { Component } from "@angular/core";

// 相对导入在解析时是相对于导入它的文件，并且不能解析为一个外部模块声明。 你应该为你自己写的模块使用相对导入，
// 这样能确保它们在运行时的相对位置。

// 非相对模块的导入可以相对于baseUrl或通过下文会讲到的路径映射来进行解析。 它们还可以被解析成 外部模块声明。 
// 使用非相对路径来导入你的外部依赖。

// 2.nodejs解析模块
// 相对路径：
// 相对路径很简单。 例如，假设有一个文件路径为 /root/src/moduleA.js，包含了一个导入var x = require("./moduleB"); Node.js以下面的顺
// 序解析这个导入：
// 检查/root/src/moduleB.js文件是否存在。
// 检查/root/src/moduleB目录是否包含一个package.json文件，且package.json文件指定了一个"main"模块。 在我们的例子里，如果Node.js发现
// 文件 /root/src/moduleB/package.json包含了{ "main": "lib/mainModule.js" }，那么Node.js会引用/root/src/moduleB/lib/mainModule.js。
// 检查/root/src/moduleB目录是否包含一个index.js文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。
// 绝对路径：
// 假设/root/src/moduleA.js里使用的是非相对路径导入var x = require("moduleB");。 Node则会以下面的顺序去解析 moduleB，直到有一个匹配上。

// /root/src/node_modules/moduleB.js
// /root/src/node_modules/moduleB/package.json (如果指定了"main"属性)
// /root/src/node_modules/moduleB/index.js

// /root/node_modules/moduleB.js
// /root/node_modules/moduleB/package.json (如果指定了"main"属性)
// /root/node_modules/moduleB/index.js

// /node_modules/moduleB.js
// /node_modules/moduleB/package.json (如果指定了"main"属性)
// /node_modules/moduleB/index.js

// 3.typescript解析模块：
// 相对路径：
// 有一个导入语句import { b } from "./moduleB"在/root/src/moduleA.ts里，会以下面的流程来定位"./moduleB"：

// /root/src/moduleB.ts
// /root/src/moduleB.tsx
// /root/src/moduleB.d.ts
// /root/src/moduleB/package.json (如果指定了"types"属性)
// /root/src/moduleB/index.ts
// /root/src/moduleB/index.tsx
// /root/src/moduleB/index.d.ts

// 绝对路径：
// /root/src/moduleA.ts文件里的import { b } from "moduleB"会以下面的查找顺序解析：

// /root/src/node_modules/moduleB.ts
// /root/src/node_modules/moduleB.tsx
// /root/src/node_modules/moduleB.d.ts
// /root/src/node_modules/moduleB/package.json (如果指定了"types"属性)
// /root/src/node_modules/moduleB/index.ts
// /root/src/node_modules/moduleB/index.tsx
// /root/src/node_modules/moduleB/index.d.ts

// /root/node_modules/moduleB.ts
// /root/node_modules/moduleB.tsx
// /root/node_modules/moduleB.d.ts
// /root/node_modules/moduleB/package.json (如果指定了"types"属性)
// /root/node_modules/moduleB/index.ts
// /root/node_modules/moduleB/index.tsx
// /root/node_modules/moduleB/index.d.ts

// /node_modules/moduleB.ts
// /node_modules/moduleB.tsx
// /node_modules/moduleB.d.ts
// /node_modules/moduleB/package.json (如果指定了"types"属性)
// /node_modules/moduleB/index.ts
// /node_modules/moduleB/index.tsx
// /node_modules/moduleB/index.d.ts

