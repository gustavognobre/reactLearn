import Nome from "./components/Nome";
import { useState } from "react";

export default function App() {
  //useState pega a informação e relaciona com a variavel de modo mudança ser no cliente
  const [nome,setNome] =useState('');
  const [email,setEmail] =useState('');
  const [idade,setIdade] =useState(0);

  //cria o objeto usuário
  const [user,setUser] = useState({})

  function handleRegister(e){
    //Evita que a página seja atualizada
    e.preventDefault();
    alert('usuário registrado')
    //variaveis do objeto usuário
    setUser({
      nome: nome,
      idade:idade,
      email:email,
    })
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label> Nome: </label><br/>
        <input 
        // A variavel do input se relaciona a um evento "e" e esse evento para função do useState
        placeholder=" Digite seu nome "
        value={nome}
        onChange = {(e) => setNome(e.target.value)}
        />
        <br/>
        <label> E-mail: </label><br/>
        <input 
        placeholder=" Digite seu e-mail "  
        value={email}
        onChange = {(e) => setEmail(e.target.value)}
        /><br/>
        <label> Idade: </label><br/>
        <input placeholder=" Qual sua idade? "  
        value={idade}
        onChange = {(e) => setIdade(e.target.value)}
        /><br/>
        <button type="submit">Registrar</button>
        
      </form>
      <br/><br/>
      <div>
        <span> Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>email: {user.email}</span><br/>
        
      </div>
    </div>
  );
}



