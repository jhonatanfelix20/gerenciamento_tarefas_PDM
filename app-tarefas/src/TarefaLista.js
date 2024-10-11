import React, { Component } from 'react'

export default class TarefaLista extends Component {
    render(){
        return (
            <div className="row">
                {
                    this.props.lista[0] ? (
                        this.props.lista.map((tarefa) => (
                            <div className="flex-grow-1 col-sm-12 col-md-6 col-xl-4 col-xxl-3">
                            <div className="text-bg-primary rounded text-center m-3 p-2">
                              {tarefa}
                            </div>
                          </div>
                ))
              ) : (
                <div className="align-items-center text-center m-2">Nenhuma tarefa criada</div>
              )
            }
            </div>
        )
    }
}