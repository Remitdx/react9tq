import { Mole } from './Mole'

const CHARACTERS = ['bellatrix', 'dolores', 'draco', 'dudley', 'dumbledore', 'hagrid', 'hermione', 'lucius', 'sirius', 'vernon', 'voldemort']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function Tile() {

  const character = CHARACTERS[getRandomInt(11)]

  return <div className="tile">
    <Mole character={character}></Mole>
  </div>
}
