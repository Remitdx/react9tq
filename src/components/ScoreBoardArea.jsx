import { Button } from './Button'
import { Score } from './Score'
import { Timer } from './Timer'

export function ScoreBoardArea() {
  return <div className="score-board-area d-flex justify-content-around align-items-center">
    <Timer></Timer>
    <Button></Button>
    <Score></Score>
  </div>
}
