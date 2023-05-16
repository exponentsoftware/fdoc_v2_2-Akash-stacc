// 1. Create a function that takes an array of numbers and returns an array of objects. Each object should have a key called number with the original number, a key called isEven with a boolean value indicating whether the number is even, and a key called double with double the value of the number.

function transformarray(numbers) {
  return numbers.map((number) => {
    return {
      number: number,
      isEven: number % 2 === 0,
      double: number * 2,
    };
  });
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const transformedarray = transformarray(numbers);
console.log(transformedarray);
