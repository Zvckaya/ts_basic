type Person = { readonly name: string; age: number; email: string };

const p1: Person = { name: "홍길동", age: 16, email: "hong@skhu.net" };

p1.age = 17;
p1.name = "Honggildong";

console.log(p1);

export {};
