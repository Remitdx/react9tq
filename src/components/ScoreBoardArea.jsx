import { Button } from './Button'
import { Score } from './Score'
import { Timer } from './Timer'

export function ScoreBoardArea({buttonValue, score, timer, onClick, gameStarted}) {
  return <div className="score-board-area d-flex justify-content-around align-items-center">
    <Timer
      timer={timer}>
    </Timer>
    <Button
      onClick={onClick}
      gameStarted={gameStarted}
      buttonValue={buttonValue}>
    </Button>
    <Score
      score={score}>
    </Score>
  </div>
}
