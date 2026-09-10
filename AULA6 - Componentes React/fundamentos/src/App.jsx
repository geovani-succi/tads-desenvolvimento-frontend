
import './App.css'

import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MeuComponente from './components/MeuComponente'
import Events from './components/Events'

function App() {
  return (
   <div className="App">
    <h1>Fundamentos de Componentes</h1>

    <FirstComponent></FirstComponent>
    <TemplateExpression></TemplateExpression>
    <MeuComponente></MeuComponente>
    <Events></Events>
   </div>
  )
}

export default App
