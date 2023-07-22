import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>

      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid " style={{ backgroundColor: "#0B417F" }}>

          <Link to={"/"}>

            <h1>
              MUYU TERAPIAS
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar" style={{ backgroundColor: "#0B417F" }}>
              <li className="nav-item">
                <NavLink to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/categoria/aceites"}>
                  Aceites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/categoria/cremas"}>
                  Cremas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Contacto"}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>


    </header>
  )
}

export default NavBar