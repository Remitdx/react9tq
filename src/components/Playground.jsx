import { Rules } from './Rules'
import { Tile } from './Tile'

export function Playground({timer, moles, gameDatas, gameStarted, onClick, onAnimationEnd}) {

  if (gameStarted && timer > 0)
    return <div className="playground">
      {moles.map((_,i) =>
        <Tile
          timer={timer}
          mole={moles[i]}
          key={i}
          onClick={onClick}
          onAnimationEnd={onAnimationEnd}
          gameDatas={gameDatas}>
        </Tile>)}
    </div>
  else if (timer < 0) {
    return <Results/>
  }
  else {
    return <Rules/>
  }
}
