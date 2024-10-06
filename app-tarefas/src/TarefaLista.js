import React from 'react'

const TarefaLista = () => {
  return (
        <div className="container border mt-2 mb-2">
            <div className="flex-grow-1">
                <div className="text-badge text-bg-primary rounded
                    text-wrap text-center m-3 p-2">
                        Treinar Karate
                </div>
            </div>
            <div className="flex-grow-1">
                <div className="text-badge text-bg-primary rounded
                    text-wrap text-center m-3 p-2">
                        Fazer Lista de Compras para o mercado
                </div>
            </div>
            <div className="flex-grow-1">
                <div className="text-badge text-bg-primary rounded
                    text-wrap text-center m-3 p-2">
                        Estudar para prova do Bossini
                </div>
            </div>
        </div>
  )
}

export default TarefaLista