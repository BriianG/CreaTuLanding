import {} from 'react-bootstrap'
//rfce // te crea la function


//destructuring se llama poner en({param1})
function NavBar({param1}) {
  
  // const {param1} = props
  
  return (
      <>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">SCA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Nosotros</a>
        <a className="nav-link" href="#">Carrito</a>
        <a className="nav-link disabled">Contacto</a>
      </div>
    </div>
  </div>
</nav>
      
      {/* <h2>{param1}</h2> */}


    </>
)
}

export default NavBar

