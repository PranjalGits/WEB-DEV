let para1 = document.createElement("p")
para1.innerText = "Hey I am red!!"
document.querySelector("body").append(para1)

// para1.style.color = "red"
// or

para1.classList.add("red")



let h3 = document.createElement("h3")
para1.innerText = "Hey I am blue!!"
document.querySelector("body").append(h3)

// para1.style.color = "blue"
// or

para1.classList.add("blue")


let div = document.createElement("div")
let para2 = document.createElement("para2")
let h1 = document.createElement("h1")

h1.innerText = "I am in a div"
para2.innerText = "ME TOO!!"

div.append(h1);
div.append(para2)
div.classList.add("box")

document.querySelector("body").append(div)

