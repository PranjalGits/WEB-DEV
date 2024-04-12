// for single button
// let btn = document.querySelector("button")
// btn.onclick = function say () {
//   alert("Don't edit further !!!!!")
// }


// for multiple buttons

let btns  = document.querySelectorAll("button")

for (btn of btns) {

    btn.onclick = say
  }

btn.onclick = function say() {
  alert("Hello") 
}