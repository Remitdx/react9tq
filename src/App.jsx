import { useState } from 'react'
import './App.css'
import { Playground } from './components/Playground'
import { ScoreBoardArea } from './components/ScoreBoardArea'

function App() {

  // define constants

  const GAMEDATAS = [
    {points: 200, character: 'voldemort'},
    {points: 150, character: 'bellatrix'},
    {points: 125, character: 'lucius'},
    {points: 100, character: 'draco'},
    {points: 75, character: 'dolores'},
    {points: 50, character: 'dudley'},
    {points: 25, character: 'vernon'},
    {points: -75, character: 'hagrid'},
    {points: -100, character: 'sirius'},
    {points: -150, character: 'hermione'},
    {points: -200, character: 'dumbledore'}
  ]

  // define variables and setters

  const [moles, setMoles] = useState([false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false])
  const [gameStarted, setGameStarted] = useState(false)
  const [timer, setTimer] = useState('-')
  const [score, setScore] = useState('-')
  const [buttonValue, setButtonValue] = useState('Start Game')

  // define functions that trigger some effects

  const handleScore = (e) => {
    const scoreToAdd = GAMEDATAS.filter((data) => data.character === e.target.alt)[0].points
    console.log(e.target.parent)
    setScore(score + scoreToAdd)
    // TODO: remove the kicked Mole
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const startGame = () => {
    setGameStarted(true)
    setButtonValue("Game running")
    setTimer(30)
    setScore(0)
    setMoles(shuffleArray(moles))
  }

  // Return some JSX

  return <div className="container">
    <ScoreBoardArea
      onClick={startGame}
      buttonValue={buttonValue}
      score={score}
      timer={timer}
      gameStarted={gameStarted}
      />
    <Playground
      moles={moles}
      onClick={handleScore}
      gameStarted={gameStarted}
      gameDatas={GAMEDATAS}
      />
  </div>
}

export default App
