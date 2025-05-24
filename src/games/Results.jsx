export function Results({score}) {

  const sentence = score > 0 ? "Bien joué ! La voie 9 trois quart est ouverte, Fonce !" : "Perdu !"

  return <div className="rules">
    <p>{score}</p>
    <p>{sentence}</p>
  </div>
}
