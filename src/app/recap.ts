/* eslint-disable @typescript-eslint/no-inferrable-types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const username: string = 'kevin';
const sum = (a: number, b: number) => {
   return a + b;
}
sum(6,2);

class persona {

  constructor(public age: number, public lastName: string) {

  }
}

const kevin = new persona(15, 'Meichtry');
kevin.age;
