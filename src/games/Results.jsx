export function Results({score}) {

  const sentence = score > 0 ? "Bien joué ! La voie 9 trois quart est ouverte, Fonce !" : "Perdu !"

  return <div className="rules">
    <h1>{score} points</h1>
    <h3>{sentence}</h3>
  </div>
}
