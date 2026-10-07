alert("Bem-vindo ao meu site!");

function changeColor() {
  
 
var color = prompt("Digite uma cor (em inglês):");
  
 
document.body.style.backgroundColor = color;
}

var button = document.createElement("button");
button.innerHTML = "Mudar cor de fundo";
button.onclick = changeColor;
document.body.appendChild(button);