import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { Score } from './components/Score'
import { Timer } from './components/Timer'

export function ScoreBoardArea({buttonValue, setButtonValue, score, onClick, isGameOver, isGameStarted, setIsGameOver}) {

  const [secondLeft, setSecondLeft] = useState(30)

  useEffect(() => {
    if (!isGameStarted ){
      return undefined // hack to avoid 1st trigger at 1st page load
    }
    const interval = setInterval(() => {
      setSecondLeft(v => {
        if (v <= 1) {
          clearInterval(interval)
          return 0
        }
        return v - 1
      })
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [isGameStarted])

  useEffect(() => {
    if (!isGameStarted) {
      return undefined // hack to avoid 1st trigger at 1st page load
    }
    if (secondLeft == 0){
      setIsGameOver(true);
      setButtonValue("Rejouer");
    }
  }, [isGameStarted, secondLeft, setButtonValue, setIsGameOver])

  const timer = isGameStarted ? secondLeft : '-'

  return <div className="score-board-area d-flex justify-content-around align-items-center">
    <Timer
      timer={timer}>
    </Timer>
    <Button
      buttonValue={buttonValue}
      onClick={onClick}
      isGameStarted={isGameStarted}
      isGameOver={isGameOver}>
    </Button>
    <Score
      score={score}>
    </Score>
  </div>
}
