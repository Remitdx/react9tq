import './App.css'
import { Playground } from './components/Playground'
import { ScoreBoardArea } from './components/ScoreBoardArea'

function App() {
  return <div className="container">
    <ScoreBoardArea/>
    <Playground/>
  </div>
}

export default App
