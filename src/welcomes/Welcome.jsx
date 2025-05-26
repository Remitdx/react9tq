export function Welcome({onClick}) {

  return <div className="container">
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="not-visible welcome-remi my-2">Rémi présente</p>
      <p className="not-visible welcome-9tq my-3">pour 9 trois quart</p>
      <button className="btn btn-dark not-visible welcome-btn my-3" onClick={onClick}>Lancer Démo React</button>
    </div>
  </div>
}
