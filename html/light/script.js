const button = document.getElementById("button")
const light = document.getElementById("body")
button.innerHTML="red"
light.style.backgroundColor="black"
function myFunction(){
    if(light.style.backgroundColor=="black"){
        light.style.backgroundColor="red"
        button.innerHTML="yellow"       
    }else if(light.style.backgroundColor=="red"){
        light.style.backgroundColor="yellow"
        button.innerHTML="green"
    }else if(light.style.backgroundColor=="yellow"){
        light.style.backgroundColor="green"
        button.innerHTML="black"
    }else{
        light.style.backgroundColor="black"
        button.innerHTML="red"
    }

}