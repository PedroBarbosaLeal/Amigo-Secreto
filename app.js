let amigos = [];

function adicionarAmigo(){
    let campo = document.querySelector('#amigo');
    let nomeAmigo = campo.value.trim(); 

    if(nomeAmigo !==''){
        amigos.push(nomeAmigo);
        let lista = document.querySelector('#listaAmigos');
        let li = document.createElement('li');
        li.textContent = nomeAmigo;
        lista.appendChild(li);
        campo.value = '';

        console.log(amigos);
    }else{
        alert('Por favor, insira um nome válido!');
    }
}