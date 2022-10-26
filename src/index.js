import bold, { boldTagName } from "./bold";
import italic, { italicTagName } from "./italic";

let isBold = true;

export function sayHello(name) {
  const formatter = isBold ? bold : italic;

  isBold = !isBold;

  return `Hello! ${formatter(name)}!`;
}

console.log(sayHello("정환")); // 'Hello! <b>정환</b>!'
console.log(sayHello("정환")); // 'Hello! <i>정환</i>!'
console.log(boldTagName); // 'b'
console.log(italicTagName); // 'i'

[1, 2, 3].map((n) => n + 1);
