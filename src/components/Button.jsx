export function Button({buttonValue, onClick, gameStarted}) {
  return <button disabled={gameStarted} onClick={onClick}>{buttonValue}</button>
}
