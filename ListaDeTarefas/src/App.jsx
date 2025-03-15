import { useState } from 'react'
import Lista from './components/Lista'
import ListaForm from './components/ListaForm.jsx'
import './App.css'
import Busca from './components/Busca.jsx'
import Filter from './components/Filter.jsx'

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

  const [buscar, setBuscar] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc")

  const addLista = (text, categoria) => {
    const novaLista = [...lista, {
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      completo: false,
    },
    ];
    setLista(novaLista)
  };

  const removerLista = (id) => {
    const novaLista = [...lista]
    const filtrarLista = novaLista.filter(lista => lista.id !== id ? lista : null);
    setLista(filtrarLista)
  }

  const completarTarefa = (id) => {
    const novaLista = [...lista]
    novaLista.map((lista) => lista.id === id ? lista.completo = !lista.completo : lista)
    setLista(novaLista)
  }

  return (
    <>
      <div className='app'>
        <h1>lista de tarefas</h1>
        <Busca buscar={buscar} setBuscar={setBuscar} />
        <div className='separador'></div>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className='lista-tarefas'>
          {lista
            .filter((lista) =>
              filter === "All"
                ? true
                : filter === "Completed"
                  ? lista.completo
                  : !lista.completo
            )
            .filter((lista) =>
              lista.text.toLowerCase().includes(buscar.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
              )
            .map((lista) => (
              <Lista key={lista.id}
                lista={lista}
                removerLista={removerLista}
                completarTarefa={completarTarefa} />
            ))}
        </div>
        <div className='separador'></div>
        <ListaForm addLista={addLista} />
      </div>
    </>
  )
}