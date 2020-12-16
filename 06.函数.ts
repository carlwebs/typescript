function add(x: number,y: number) : number {
    return x + y;
}

// 可选参数
function fullName(firstName: string,lastName?: string): string {
    return firstName + lastName;
}

// 默认值
function fullName2(firstName: string,lastName: string =" abc"): string {
    return firstName + lastName;
}

function restDemo(firstName: string,...rest: string[]): void {
    console.log(firstName,rest);  //jack,["a","b","c"]
}
restDemo("jack","a","b","c");
