let content = document.querySelector(".content");
let container = document.querySelector(".container");
content.onclick = function(){
    container.classList.toggle('active');
}