import React, { Component } from 'react'

export default class TarefaLista extends Component {
    render(){
        return (
            <div className="flex-grow-1">
                <div className="text-bg-primary rounded text-center m-3 p-2">
                    {this.props.tarefa}
                </div>
            </div>
        )
    }
}