import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

const App = () => {
  return <div className='container border mt-2'>
    <TarefaEntrada />
    <TarefaLista />
  </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)