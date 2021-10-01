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

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Alex",
  age: 20,
  gender: "male"
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`;
};

console.log(sayHi(person));

export {};
