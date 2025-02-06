let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        document.getElementById('resultado').innerHTML = '<li>Adicione pelo menos dois nomes!</li>';
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `<li>O amigo secreto é: ${sorteado}</li>`;
}

