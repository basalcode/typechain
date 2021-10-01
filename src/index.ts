/* 
Javascript

const name = "Alex",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, gender{gender}`);
};

sayHi(name, age, gender);
sayHi(name, age); // typescript에서는 애러가 발생한다.
*/

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, gender{gender}!`;
};

console.log(sayHi("Alex", 20, "male"));

export {};
