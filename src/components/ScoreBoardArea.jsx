import { useEffect, useState } from 'react'
import { Button } from './Button'
import { Score } from './Score'
import { Timer } from './Timer'

export function ScoreBoardArea({score, onClick, isGameOver, isGameStarted, setIsGameOver}) {

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
      setIsGameOver(true)
    }
  }, [isGameStarted, secondLeft, setIsGameOver])

  const timer = isGameStarted ? secondLeft : '-'

  return <div className="score-board-area d-flex justify-content-around align-items-center">
    <Timer
      timer={timer}>
    </Timer>
    <Button
      onClick={onClick}
      isGameStarted={isGameStarted}
      isGameOver={isGameOver}>
    </Button>
    <Score
      score={score}>
    </Score>
  </div>
}
