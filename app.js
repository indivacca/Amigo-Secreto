
let lista = [];

function agregarAmigo() {
    let amigoEl = document.getElementById("amigo");
    let amigoVal = amigoEl.value.trim();

    if (amigoVal.length) {

        if(!lista.includes(amigoVal)) {
            const li = document.createElement("li");
            const amigoEle = document.createTextNode(amigoVal);
            li.appendChild(amigoEle);
    
            document.getElementById("listaAmigos").appendChild(li);
            
            lista.push(amigoVal);
    
            amigoEl.value = '';
        } else {
            alert("Ël amigo ya esta en la lista!")
        }
    } else {
        alert("Debes ingresar el nombre de un amigo!")
    }
}


function sortearAmigo() {
    let random = Math.floor(Math.random() * lista.length); 
    let amigoSecreto = lista[random];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    const li = document.createElement("li");

    const amigoSecretoTexto = document.createTextNode("Tu amigo secreto es: " + amigoSecreto);
    li.appendChild(amigoSecretoTexto);

    resultado.appendChild(li);

    console.log("amigo secreto " + amigoSecreto);
}

function resetear() {
    document.getElementById("amigo").innerHTML = '';
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}


