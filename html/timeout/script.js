const body = document.getElementById("body")
body.style.backgroundColor = "black"
function changeBackgroundColor(){
    if(body.style.backgroundColor=="black"){
        body.style.backgroundColor="white"
    }else{
        body.style.backgroundColor="black"
    }
}
let timeout = setInterval(changeBackgroundColor,1000)

function stopInterval(){
    clearInterval(timeout)
}
