// for(let i=1;i<=5; i++)
// {
//   console.log(i)
// }

// for(let i=10; i>=1; i--) {
//   console.log(i)
// }


// for(let i=1; i<=15; i=i+2) {
//   console.log(i)
// }


// for(let i=15; i>=1; i=i-2) {
//   console.log(i)
// }


// for(let i=2; i<=10; i=i+2) {
//   console.log(i)
// }


// for(let i=10; i>=2; i=i-2) {
//   console.log(i)
// }


// for(let i=5; i<=50; i=i+5) {
//   console.log(i)
// }


// let n = prompt("Write your number:");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n) {
//   console.log(i);
// } 


// const favMovie = "avatar";
// let guess = prompt("Guess my Favorite Movie");

// while(((guess != favMovie))) {
//   if(guess == 'quit') {
//     console.log("you quit");
//     break;
//   }
//   guess = prompt("wrong guess. Please try Again");
// }

// if(guess == favMovie) {
//   console.log("congrats!!");
// }


// let fruits = ["mango","apple","banana","litchi","orange"]

// for(let i=0; i<fruits.length; i++) {
//   console.log(i, fruits[i]);
// }


// let heroes = [
//   ["ironman","spiderman","thor"],
//   ["superman","wonderwoman","flash"]
// ]

// for(let i=0; i<heroes.length; i++) {
//   console.log(`List #${i}`);
//   for(let j=0; j<heroes[i].length; j++) {
//     console.log(heroes[i][j]);
//   }
// }


// let fruits = ["mango","apple","banana","litchi","orange"]

// for(fruit of fruits) {
//   console.log(fruit);
// }

// for (char of "apnacollege") {
//   console.log(char);
// }

let heroes = [
  ["ironman","spiderman","thor"],
  ["superman","wonderwoman","flash"]
]

for(list of heroes) {
  for(hero of list) {
    console.log(hero)
  }
}



