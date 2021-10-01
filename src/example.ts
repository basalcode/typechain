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

class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const alex = new Human("alex", 20, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`;
};

console.log(sayHi(alex));

export {}; // export 해주면 js 문법이 사용 가능