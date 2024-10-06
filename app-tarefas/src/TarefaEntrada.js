import React from 'react'

const TarefaEntrada = () => {
  return (
    <div className='row text-center'>
        <div className='col-12'>
            <input type='text' placeholder='Digite sua nova tarefa'
                className='form-control mt-2 mb-2 w-100' id='campo'/>
            <button type='button' className='btn btn-primary w-100 mb-2'
                onClick={() => alert('Tarefa Cadastrada!')}>OK</button>
        </div>
    </div>
  )
}

export default TarefaEntrada