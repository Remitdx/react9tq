import { Fragment, useState } from 'react'
import './App.css'
import '../public/fonts/HarryP-MVZ6w.ttf'
import { Game } from './games/Game'
import { Welcome } from './welcomes/Welcome'

function App() {

  const [demoStarted, setDemoStarted] = useState(false)

  if (demoStarted) {
    return <>
      <Game/>
    </>
  } else  {
    return <>
      <Welcome onClick={setDemoStarted}/>
    </>
  }
}

export default App
