let amigosInseridos = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("não pode deixar o espaço vazio!");
        return;
    } else {
        amigosInseridos.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    lista.innerHTML = ''; 

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}


function sortearAmigo() {
    if (amigosInseridos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigosInseridos[Math.floor(Math.random() * amigosInseridos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

function limparLista() {
    amigosInseridos = [];
    atualizarLista();
    resultado.innerHTML = '';
}

":)"