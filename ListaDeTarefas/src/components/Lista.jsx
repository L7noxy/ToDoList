import React from 'react'

function Lista({ lista }) {
  return (
    <div className='Lista'>
      <div className='content'>
        <p>{lista.text}</p>
        <p className='categoria'>
          ({lista.categoria})
        </p>
      </div>

      <div>
        <button className='completar'>completar</button>
        <button className='excluir'>x</button>
      </div>
    </div>
  )
}

export default Lista