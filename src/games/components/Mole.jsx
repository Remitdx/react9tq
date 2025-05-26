export function Mole({character, onClick, onAnimationEnd}) {

  return <img
    src={`${import.meta.env.BASE_URL}images/${character}.jpg`}
    alt={character}
    className="mole"
    onAnimationEnd={onAnimationEnd}
    onClick={onClick}/>
}
