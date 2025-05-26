export function Button({onClick, isGameStarted}) {
  if (!isGameStarted) {
    return <button className="btn-dark" onClick={onClick}>Jouer</button>
  }
}
