export function Mole({timer, character, onClick, onAnimationEnd}) {

  let classes = ""
  if (timer > 20) {
    classes='mole slow-mole'
  } else if (timer < 10) {
    classes = 'mole fast-mole'
  } else {
    classes = 'mole medium-mole'
  }

  return <img
    src={`src/assets/${character}.jpg`}
    alt={character}
    className={classes}
    onAnimationEnd={onAnimationEnd}
    onClick={onClick}/>
}
