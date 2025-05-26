export function Button({onClick, isGameStarted}) {
  if (!isGameStarted) {
    return <button className="btn btn-dark" onClick={onClick}>Jouer</button>
  } else {
    return <div></div>
  }
}
