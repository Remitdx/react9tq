import { Mole } from './Mole'

const CHARACTERS = ['bellatrix', 'dolores', 'draco', 'dudley', 'dumbledore', 'hagrid', 'hermione', 'lucius', 'sirius', 'vernon', 'voldemort']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function Tile({id}) {

  const character = CHARACTERS[getRandomInt(11)]

  if (id < 5 ) {
    return <div id={id} className="tile">
      <Mole character={character}></Mole>
    </div>
  } else {
    return <div id={id} className="tile"></div>
  }
}
