import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-meteora.jpg'



const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid">
          <Link 
            className="navbar-brand " 
            to="/"
          ><h1 className='m-0'><img className='d-block' src={Logo}
              alt='Logo da loja'/></h1>
          </Link>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                  href="#">Cupons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#">Ofertas</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#"
                  role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            Departamentos
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/brinquedos">Brinquedos</Link></li>
                  <li><Link className="dropdown-item" to="/eletrodomesticos">Eletrodomesticos</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/esportes">Esportes</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Login</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 rounded-0" type="search"
                placeholder="O que você procura?" aria-label="Search"/>
              <button className="btn btn-outline-light rounded-0" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Menu



