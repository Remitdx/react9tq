import { Mole } from './Mole'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function Tile({mole, onClick, gameDatas}) {

  if (mole) {
    const character = gameDatas[getRandomInt(11)].character
    return <div className="tile">
      <Mole character={character} onClick={onClick}></Mole>
    </div>
  } else {
    return <div className="tile"></div>
  }
}
