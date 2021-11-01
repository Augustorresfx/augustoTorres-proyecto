const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="logo.png" alt="Logo Juggling Games" width="30" height="30" className="img-fluid"></img>
       Juggling Games
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
        <button type="button" class="btn btn-primary">Ver tienda</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar