import Nome from "./components/Nome";
import { useState } from "react";

export default function App() {
  //useState pega a informação e relaciona com a variavel de modo mudança ser no cliente
  const [input, setInput] = useState('');
  const [tarefas,setTarefas] = useState([
    'pagar a conta de luz',
    'estudar next.js'
  ]);

  function handleRegister(e){
    //Evita que a página seja atualizada
    e.preventDefault();
    //registrando os dados de input em um array
    setTarefas([...tarefas, input])
    setInput('');
    }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label> Nome da tarefa </label><br/>
        <input 
        // A variavel do input se relaciona a um evento "e" e esse evento para função do useState
        placeholder=" Digite sua tarefa "
        value={input}
        onChange = {(e) => setInput(e.target.value)}
        />
        <br/>
        
        <button type="submit">Registrar</button>
        
      </form>
      <br/><br/>
      <ul>
      
        
       { //mapeando as tarefas do array em lista  
       tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
       ))}
        
      </ul>
    </div>
  );
}



