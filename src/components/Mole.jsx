export function Mole({character, onClick, onAnimationEnd}) {

  return <img
    src={`src/assets/${character}.jpg`}
    alt={character}
    className="mole medium-mole"
    onAnimationEnd={onAnimationEnd}
    onClick={onClick}/>
}
