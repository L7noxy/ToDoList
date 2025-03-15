import React from 'react'

function ListaForm() {
    return (
        <div className='container-form'>
            <h2>Criar Tarefa:</h2>
            <form action="">
                <input type="text" placeholder='digite o titulo' />
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default ListaForm