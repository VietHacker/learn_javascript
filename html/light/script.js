const button = document.getElementById("button")
function myFunction(){
const light = document.getElementById("body")
    if(light.style.backgroundColor!="white"){
        light.style.backgroundColor="white"
        button.innerHTML="off"       
    }else{
        light.style.backgroundColor="black"
        button.innerHTML="on"
    }
}