// Pegando os elementos na tela
const formTarefa = document.getElementById('formTarefa');
const inputTarefa = document.getElementById('inputTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Quando a página carregar, pego as tarefas que estão salvas no LocalStorage e mostrar na tela
document.addEventListener('DOMContentLoaded', function() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('minhasMissoes')) || [];
    
    // Para cada tarefa salva, recria ela na tela usando a nossa função
    tarefasSalvas.forEach(function(tarefa) {
        criarElementoTarefa(tarefa.texto, tarefa.concluida);
    });
});

// Função para salvar as tarefas na memória do navegador sempre que houver uma mudança
function salvarNoLocalStorage() {
    const todasAsTarefas = [];
    
    // Pega todas as tags <li> que estão na tela
    const itensLi = document.querySelectorAll('li');
    
    // Passa por cada <li>, anota o texto e se tem a classe 'concluida'
    itensLi.forEach(function(li) {
        todasAsTarefas.push({
            texto: li.querySelector('.texto-missao').innerText,
            concluida: li.classList.contains('concluida')
        });
    });
    
    // O JSON.stringify transforma a lista em um formato de texto para o navegador conseguir guardar
    localStorage.setItem('minhasMissoes', JSON.stringify(todasAsTarefas));
}

// Função separada para criar a <li> do zero. 
// Feito para evitar repetição de código, para criar a tarefa tanto quando o usuário adicionar uma nova,
// quanto carregar as tarefas salvas do LocalStorage.
function criarElementoTarefa(textoTarefa, concluida = false) {
    const novoLi = document.createElement('li');
    
    // Se a tarefa já vier concluída do LocalStorage, adicionamos a classe nela
    if (concluida) {
        novoLi.classList.add('concluida');
    }

    // Injetando o conteúdo HTML dentro do <li>.
    novoLi.innerHTML = `
        <div class="task-content">
            <input type="checkbox" class="check-concluir" ${concluida ? 'checked' : ''}> 
            <span class="texto-missao">${textoTarefa}</span>
        </div>
        <button class="btn-excluir" title="Excluir missão">Excluir</button>
    `;

    // Adicionando o novo <li> na <ul> da página
    listaTarefas.appendChild(novoLi);
}

// Colocando o evento de envio no formulário
formTarefa.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const textoTarefa = inputTarefa.value.trim();

    // Se estiver vazio, não faz nada
    if (textoTarefa === "") {
        alert("Por favor, digite uma missão válida.");
        return; 
    }

    // Chama a função para criar a tarefa na tela
    criarElementoTarefa(textoTarefa);
    
    // Salva a nova lista atualizada no navegador para não sumir no F5
    salvarNoLocalStorage();
    
    // Limpa o campo para a próxima digitação
    inputTarefa.value = "";
});

// Colocando o evento de clique na lista de tarefas (delegação de eventos)
// Em vez de colocar um evento em cada <li>, foi colocado um evento na <ul> que envolve tudo. Assim, quando clicar em qualquer
// tarefa, o evento é capturado pela <ul> e podemos identificar qual <li> foi clicada.
listaTarefas.addEventListener('click', function(event) {
    
    const itemLi = event.target.closest('li');
    
    if (!itemLi) return; 

    // Se o usuário clicou exatamente no checkbox ou no texto, é marcado como concluída e não é deletada.
    if (event.target.classList.contains('check-concluir') || event.target.classList.contains('texto-missao')) {
        itemLi.classList.toggle('concluida');
        
        // Se clicou apenas no texto, força o checkbox a marcar/desmarcar sozinho para acompanhar o visual
        if (event.target.classList.contains('texto-missao')) {
            const checkbox = itemLi.querySelector('.check-concluir');
            checkbox.checked = !checkbox.checked;
        }
        
        // Salva a alteração (riscado ou não riscado) no navegador
        salvarNoLocalStorage();
        return;
    }

    // Se o usuário clicou exatamente no botão de lixeira (e não no resto da tarefa)
    if (event.target.classList.contains('btn-excluir')) {
        
        // Pede uma confirmação
        const confirmacao = confirm("Deseja realmente excluir esta tarefa?");
        
        if (confirmacao) {
            itemLi.remove();
            salvarNoLocalStorage();
        }
    }
});