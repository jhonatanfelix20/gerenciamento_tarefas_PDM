import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

class App extends React.Component {
    state = {
      lista: []
    }

    obterTexto = (texto) => {
      const newLista = this.state.lista
      newLista.push(texto)
      this.setState({
        lista: newLista
      })
    }
    render() {
      return (
        <div className="container border mt-2">
          <h1 className="text-center m-2">Gerencimento de Tarefas</h1>
          <div className="container border mt-2 mb-2">
          
          <TarefaEntrada
            obterTexto={this.obterTexto}
            lista={this.state.lista} />

            {
              this.state.lista[0] ? (
                this.state.lista.map((tarefa) => (
                  <TarefaLista
                    tarefa={tarefa} />
                ))
              ) : (
                <div className="align-items-center text-center m-2">Nenhuma tarefa criada</div>
              )
            }
          </div>
        </div>
      )
    }

}
  

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )