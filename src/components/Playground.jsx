import { Rules } from './Rules'
import { Tile } from './Tile'

export function Playground({moles, gameDatas, gameStarted, onClick}) {

  if (gameStarted)
    return <div className="playground">
      {moles.map((_,i) =>
        <Tile
          mole={moles[i]}
          key={i}
          onClick={onClick}
          gameDatas={gameDatas}>
        </Tile>)}
    </div>
  else {
    return <Rules/>
  }
}
