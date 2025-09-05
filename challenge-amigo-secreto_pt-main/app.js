
let amigos = [];

function atualizarLista() {
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = '';
	amigos.forEach(nome => {
		const li = document.createElement('li');
		li.textContent = nome;
		lista.appendChild(li);
	});
}

function adicionarAmigo() {
	const input = document.getElementById('amigo');
	const nome = input.value.trim();
	if (!nome) {
		alert('Por favor, preencha o nome!');
		return;
	}
	amigos.push(nome);
	input.value = '';
	atualizarLista();
	document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
	if (amigos.length === 0) {
		alert('Adicione pelo menos um nome antes de sortear!');
		return;
	}
	const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
	document.getElementById('resultado').innerHTML = `<li>Sorteado: <strong>${sorteado}</strong></li>`;
	amigos = [];
	atualizarLista();
}
