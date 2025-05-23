export function Button({buttonValue, onClick, isGameStarted}) {
  return <button disabled={isGameStarted} onClick={onClick}>{buttonValue}</button>
}
