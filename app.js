let amigos = [];

function adicionarAmigo(){
    let campo = document.querySelector('#amigo');
    let nomeAmigo = campo.value.trim(); 

    if(nomeAmigo !==''){
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        campo.value = '';

        console.log(amigos);
    }else{
        alert('Por favor, insira um nome válido!');
    }
}
function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');  
        li.textContent = amigos[i];  
        lista.appendChild(li);  
    }
}
