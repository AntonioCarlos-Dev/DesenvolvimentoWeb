import TaskItem from './TaskItem';

export default function TaskList({ tarefas, onRemover, onAlternar }) {
  // A lista de tarefas é renderizada mapeando o array tarefas e criando um TaskItem para cada tarefa
  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <TaskItem 
          key={tarefa.id} 
          tarefa={tarefa} 
          onRemover={onRemover} 
          onAlternar={onAlternar} 
        />
      ))}
    </ul>
  );
}