export function Results({score}) {

  let sentence = ""

  if (score > 750) {
    sentence = "La voie 9 trois quart est ouverte, Fonce !"
  } else if (score  < 0) {
    sentence = "Les forces du mal sont victorieuses !"
  } else {
    sentence = "Aucun camp ne sort vainqueur de cette bataille !"
  }

  return <div className="rules">
    <p>{score} points</p>
    <p>{sentence}</p>
  </div>
}
