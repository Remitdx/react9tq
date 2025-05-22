export function Results({score}) {

  const sentence = score > 0 ? "Bien joué !" : "Perdu !"

  return <div className="rules">
    <p>{score}</p>
    <p>{sentence}</p>
  </div>
}
