// 1.兼容性
// interface Named {
//     name: string;
// }
// let x: Named;
// let y = {name: "jack",age: 12};
// x = y; //x是Named类型，只会检查y中是否包含name属性，并且值是字符串

// 2.联合类型
// let a: number | string = 1;
// a = "a"

// 3.如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// function getSmallPet(): Fish | Bird {
//     // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors，因为如果getSmallPet返回Bird类型就没有swim方法

// 4.