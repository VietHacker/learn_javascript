const number1 = document.getElementById("number1")
const redlight = document.getElementById("redlight")
const greenlight = document.getElementById("greenlight")
const yellowlight = document.getElementById("yellowlight")
let color = "red"
greenlight.style.backgroundColor = "white"
redlight.style.backgroundColor = "red"
yellowlight.style.backgroundColor = "white"

number1.innerHTML = 10
function cong1(){
    number1.innerHTML = Number(number1.innerHTML)-1
    if(number1.innerHTML<0 && color =="red"){
        number1.innerHTML = 7
        color = "yellow"
        greenlight.style.backgroundColor = "green"
        redlight.style.backgroundColor = "white"
        yellowlight.style.backgroundColor = "white"

    }else if (number1.innerHTML<0 && color =="yellow"){
        number1.innerHTML = 3
        color = "green"
        greenlight.style.backgroundColor = "white"
        redlight.style.backgroundColor = "white"
        yellowlight.style.backgroundColor = "yellow"

    }else if(number1.innerHTML<0 && color =="green"){
        number1.innerHTML = 10
        color = "red"
        greenlight.style.backgroundColor = "white"
        redlight.style.backgroundColor = "red"
        yellowlight.style.backgroundColor = "white"

    }
    console.log(color)
}
const interval = setInterval(cong1,500)
function stopInterval(){
    clearInterval(interval)
    
}
