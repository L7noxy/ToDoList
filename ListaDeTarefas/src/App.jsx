import { useState } from 'react'
import Lista from './components/Lista'
import ListaForm from './components/ListaForm.jsx'
import './App.css'

export default function App() {

  const [lista, setLista] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      categoria: "Trabalho",
      completo: false,
    },
    {
      id: 2,
      text: "Ir para a escola",
      categoria: "Pessoal",
      completo: false,
    },
    {
      id: 3,
      text: "Estudar Back-end",
      categoria: "Estudo",
      completo: false,
    },

  ])
  return (
    <>
      <div className='app'>
        <h1>lista de tarefas</h1>
        <div className='lista-tarefas'>
          {lista.map((lista) => (
            <Lista lista = {lista}/>
          ))}
        </div>
        <ListaForm />
      </div>
    </>
  )
}


