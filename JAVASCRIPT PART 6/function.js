// function printPoem() {
//   console.log("Twinkle Twinkle, Little Star")
//   console.log("How I wonder What YOu Are")
// }
// printPoem()


// function rollDics() {
//   let rand = Math.floor(Math.random()*6)+1
//   console.log(rand)
// }
// rollDics()


// function printName(name,age) {
//   console.log(name,age);
// }
// printName("Pranjal",21);
// printName("Shanu",22);
// printName("Shan");


// function sum(a,b) {
//   console.log(a+b);
// }
// sum(2,3);
// sum(10,3);


// function avgSum(a,b,c) {
//   sum = (a+b+c)/3;
//   console.log(sum);
// }
// avgSum(2,2,2); 
// avgSum(3,3,3); 


// function calAvg() {
//   a = prompt("Enter the first number");
//   b = prompt("Enter the second number");
//   c = prompt("Enter the third number");
//   sum = (a+b+c)/3;
//   console.log("Sum of three number is:-",sum)
// }
// calAvg();


// function printTable(n) {
//   for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
//   }
// }
// printTable(2);


function sum(a,b) {
  return a+b;
}

let s = sum(3,4);
console.log(s);
console.log(sum(5,5))
console.log(sum(sum(1,1), 3));