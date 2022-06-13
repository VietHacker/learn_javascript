const number = document.getElementById("number")
console.log(number.innerHTML)

function function1(){
    let a = Number(number.innerHTML)+1
    number.innerHTML=a 
    number.style.color='red'
}
function function2(){
    let a = Number(number.innerHTML)-1
    number.innerHTML=a
    number.style.color='blue'
}
