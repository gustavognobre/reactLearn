import Nome from "./components/Nome";
import { useState } from "react";

export default function App() {
  
  const [aluno,setAluno] =useState('Sujeito Programador')

  function handleChangeName(nome){
    setAluno(nome)
  }

  return (
    <div>
      <h1>Bem vindo ao projeto</h1>
      <h2>Olá {aluno}</h2>
      <button onClick={() => handleChangeName('Gustavo Nobre')}>
        Mudar Nome
      </button>
      <Nome aluno = "Gustavo" idade = {23}/>
    </div>    
  );
}



