export function Welcome({onClick}) {

  return <div className="container">
    <div className="d-flex flex-column align-items-center">
      <h2 className="not-visible welcome-h2 my-2">Rémi présente</h2>
      <h1 className="not-visible welcome-h1 my-3">pour 9 trois quart</h1>
      <button className="not-visible welcome-btn my-3" onClick={onClick}>Démarrer la démo React</button>
    </div>
  </div>
}
