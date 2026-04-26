export default function TaskItem({ tarefa, onRemover, onAlternar }) {
    // O checkbox é controlado, seu estado é determinado por tarefa.concluida
  return (
    <li className={tarefa.concluida ? 'concluida' : ''}>
      <label className="task-content">
        <input 
          type="checkbox" 
          checked={tarefa.concluida} 
          onChange={() => onAlternar(tarefa.id)} 
        />
        <span className="texto-missao">{tarefa.text}</span>
      </label>
      <button 
        onClick={() => onRemover(tarefa.id)} 
        className="btn-excluir"
        aria-label="Excluir missão"
      >
        Excluir
      </button>
      
    </li>
  );
}