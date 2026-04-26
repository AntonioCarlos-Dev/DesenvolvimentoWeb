import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  // O estado principal do aplicativo é um array de tarefas, cada tarefa é um objeto com id, text e concluida
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (textoDaTarefa) => {
    const novaTarefaObj = {
      id: Date.now(), 
      text: textoDaTarefa,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefaObj]);
  };
  // A função removerTarefa recebe um id e atualiza o estado removendo a tarefa com aquele id
  const removerTarefa = (idParaRemover) => {
    const tarefasRestantes = tarefas.filter(tarefa => tarefa.id !== idParaRemover);
    setTarefas(tarefasRestantes);
  };

  // A função alternarConclusao recebe um id e atualiza o estado alternando o status de conclusão da tarefa com aquele id
  const alternarConclusao = (idParaAlternar) => {
    const tarefasAtualizadas = tarefas.map(tarefa => 
      tarefa.id === idParaAlternar 
        ? { ...tarefa, concluida: !tarefa.concluida } 
        : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  // O componente principal renderiza um título, o formulário para adicionar tarefas e a lista de tarefas.
  return (
    <main className="todo-card">
      <h1>Missões do Dia</h1>
      
      <TaskForm onAdicionar={adicionarTarefa} />
      
      <TaskList 
        tarefas={tarefas} 
        onRemover={removerTarefa} 
        onAlternar={alternarConclusao} 
      />
    </main>
  );
}