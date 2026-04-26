import { useState } from 'react';
export default function TaskForm({ onAdicionar }) {
  // O estado local para controlar o valor do input
  const [novaTarefa, setNovaTarefa] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (novaTarefa.trim() === '') return;

    onAdicionar(novaTarefa);
    setNovaTarefa('');
  };
  // Input controlado
  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        placeholder="Qual a próxima missão?"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        aria-label="Nova missão"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}