import { useState } from 'react'
import { Playground } from './Playground'
import { ScoreBoardArea } from './ScoreBoardArea'

export function Game() {
  // define constants

  const GAMEDATAS = [
    { points: 200, character: 'voldemort' },
    { points: 150, character: 'bellatrix' },
    { points: 125, character: 'lucius' },
    { points: 100, character: 'draco' },
    { points: 75, character: 'dolores' },
    { points: 50, character: 'dudley' },
    { points: 25, character: 'vernon' },
    { points: -75, character: 'hagrid' },
    { points: -100, character: 'sirius' },
    { points: -150, character: 'hermione' },
    { points: -200, character: 'dumbledore' }
  ]

  // audio elements

  const slapAudio = new Audio(`${import.meta.env.BASE_URL}sounds/slap.mp3`)
  const ouchAudio = new Audio(`${import.meta.env.BASE_URL}sounds/ouch.mp3`)
  const menuAudio = new Audio(`${import.meta.env.BASE_URL}sounds/menu.mp3`)
  const fightAudio = new Audio(`${import.meta.env.BASE_URL}sounds/fight.mp3`)
  menuAudio.loop = true
  fightAudio.loop = true
  fightAudio.volume = 0.1
  slapAudio.volume = 0.3

  // define variables and setters

  const [moles, setMoles] = useState([true, false, false, false, false, false, false, false, false])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState('-')

  // define functions that trigger some effects

  const shuffleArray = (array) => {
    let newArray = [...array]
    while (newArray.toString() == array.toString()) {
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    }
    return newArray
  }

  const startGame = () => {
    setIsGameStarted(true)
    setScore(0)
    setMoles(shuffleArray(moles))
  }

  const handleScore = (e) => {
    const scoreToAdd = GAMEDATAS.filter((data) => data.character === e.target.alt)[0].points
    scoreToAdd > 0 ? slapAudio.play() : ouchAudio.play()
    setScore(score + scoreToAdd)
    setMoles(shuffleArray(moles))
  }

  const reRunMoles = () => {
    const copyMoles = moles
    setMoles(shuffleArray(copyMoles))
  }

  // Return some JSX

  return <div className="container">
    <ScoreBoardArea
      onClick={startGame}
      score={score}
      isGameStarted={isGameStarted}
      isGameOver={isGameOver}
      setIsGameOver={setIsGameOver}
    />
    <Playground
      moles={moles}
      onClick={handleScore}
      onAnimationEnd={reRunMoles}
      isGameOver={isGameOver}
      isGameStarted={isGameStarted}
      gameDatas={GAMEDATAS}
      score={score}
    />
  </div>
}
