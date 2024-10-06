import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import TarefaEntrada from './TarefaEntrada'

const App = () => {
  return <div className='container border mt-2'>
    <TarefaEntrada />
  </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)