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


// function sum(a,b) {
//   return a+b;
// }

// let s = sum(3,4);
// console.log(s);
// console.log(sum(5,5))
// console.log(sum(sum(1,1), 3));


// function getSum(n) {
//   let sum = 0;
//   for(let i=1; i<=n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(getSum(10))


// let str = ["Hii"," ","hello"," ","bye", "!!!!"]
// function concat(str) {
//   let result;
//   for(let i=0; i<str.length; i++) {
//     result = result + str[i];
//   }
//   return result;
// }
// console.log(concat(str))


// const sum = function(a,b) {
//   return a+b;
// }
// console.log(sum(2,3));



// function multipleGreet(func, count) {
//   for(let i=1; i<=count; i++) {
//     func();
//   }
// }

// let greet = function() {
//   console.log("Hello");
// }

// multipleGreet(greet, 10);



// const calculator = {
//   num:55,

//   add:function(a,b) {
//     return a+b;
//   },
//   sub:function(a,b) {
//     return a-b;
//   },
//   mul:function(a,b) {
//     return a*b;
//   }
// }

// console.log(calculator.num);
// console.log(calculator.add(1,2));
// console.log(calculator.sub(6,2));
// console.log(calculator.mul(6,2));



// const calculator = {
//   add(a,b) {
//     return a+b;
//   },
//   sub(a,b) {
//     return a-b;
//   },
//   mul(a,b) {
//     return a*b;
//   }
// }
// console.log(calculator.add(10,2));
// console.log(calculator.sub(66,2));
// console.log(calculator.mul(66,2));