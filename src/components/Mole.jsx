export function Mole({character, onClick}) {

  return <div>
    <img src={`src/assets/${character}.jpg`} alt={character} className='mole' onClick={onClick}/>
  </div>
}
