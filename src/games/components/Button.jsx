export function Button({buttonValue, onClick, isGameStarted, isGameOver}) {

  return <button className="btn-dark" disabled={isGameStarted && !isGameOver} onClick={onClick}>{buttonValue}</button>
}
