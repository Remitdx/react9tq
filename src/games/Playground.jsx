import { Rules } from './Rules'
import { Tile } from './components/Tile'
import { Results } from './Results'

export function Playground({score, moles, gameDatas, isGameOver, isGameStarted, onClick, onAnimationEnd}) {

  if (isGameOver) {
    return <Results score={score}/>
  }
  else if (isGameStarted){
    return <div className="playground">
      {moles.map((_,i) =>
        <Tile
          mole={moles[i]}
          key={i}
          onClick={onClick}
          onAnimationEnd={onAnimationEnd}
          gameDatas={gameDatas}>
        </Tile>)}
    </div>
  }

  else {
    return <Rules/>
  }
}
