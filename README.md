Desafio Amigo Secreto

Projeto desenvolvido no curso de JavaScript da Oracle Next Education, que permite cadastrar nomes de participantes e realizar o sorteio do amigo secreto diretamente no navegador.

Estrutura do projeto

index.html: estrutura da página e integração com o CSS e o JavaScript.
style.css: estilos e responsividade da aplicação.
app.js: contém a lógica de adicionar nomes, armazenar participantes e realizar o sorteio.
assets/: imagens utilizadas na interface.

Como funciona

O usuário digita o nome de um participante no campo de texto.
Ao clicar no botão Adicionar, o nome é incluído em uma lista exibida na tela.
Depois de adicionar todos os nomes desejados, basta clicar em Sortear amigo.
A aplicação sorteia automaticamente pares de amigo secreto e exibe o resultado em uma lista.
O código garante que um participante não tire a si mesmo.

Tecnologias utilizadas

HTML5
CSS3
JavaScript (ES6+)

Como executar o projeto

Clone o repositório:
git clone https://github.com/seu-usuario/amigo-secreto.git

Acesse a pasta do projeto:
cd amigo-secreto

Abra o arquivo index.html no navegador.
Exemplo de uso

Digite nomes como Ana, Carlos, Maria.
Eles aparecerão listados na tela.

Clique em Sortear amigo.

O resultado exibirá algo como:
Ana → Carlos  
Carlos → Maria  
Maria → Ana  

Explicação do código
1. Adicionar nomes
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}


Cria um array amigos para armazenar os nomes.

Captura o valor digitado no campo de input.

Verifica se o nome é válido (não vazio).

Adiciona o nome ao array e atualiza a lista exibida na tela.

2. Atualizar lista
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}


Limpa a lista anterior.

Percorre o array amigos e cria um <li> para cada nome.

Atualiza o HTML dinamicamente.

3. Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let sorteados = [...amigos];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    amigos.forEach(amigo => {
        let indice = Math.floor(Math.random() * sorteados.length);

        // Garante que o participante não tire a si mesmo
        while (sorteados[indice] === amigo) {
            indice = Math.floor(Math.random() * sorteados.length);
        }

        let sorteado = sorteados.splice(indice, 1)[0];
        let item = document.createElement("li");
        item.textContent = `${amigo} → ${sorteado}`;
        resultado.appendChild(item);
    });
}


Verifica se existem participantes suficientes.

Copia a lista de amigos para o array sorteados.

Para cada amigo, sorteia um nome aleatório.

Se o sorteado for o mesmo nome do participante, repete o sorteio.

Remove o sorteado da lista para evitar repetições.

Mostra o par formado no HTML.

Aprendizados

Manipulação da DOM com document.getElementById, createElement e appendChild.

Uso de arrays para armazenar e manipular os dados.

Implementação de lógica de sorteio evitando que alguém tire a si mesmo.

Separação entre HTML, CSS e JavaScript para melhor organização do projeto.
