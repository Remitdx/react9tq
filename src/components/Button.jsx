export function Button({onClick, isGameStarted, isGameOver}) {
  const text = isGameStarted && !isGameOver ? "Game running" : "Start Game"

  return <button disabled={isGameStarted} onClick={onClick}>{text}</button>
}
