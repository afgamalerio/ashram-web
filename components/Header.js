import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <img
            src="/assets/icon.svg"
            alt="Icono Ashram"
            className="icon"
            width="10rem"
            height="auto"
          />
        </a>
      </Link>

      <nav className="menu">
        <div className="subnav">
          <button className="subnavbtn">About</button>
          <div className="subnav-content">
            <Link href="/sobrenosotros#about__ashram">
              <a>¿Qué es Ashram?</a>
            </Link>
            <Link href="/sobrenosotros#about__founder">
              <a>Sobre la fundadora</a>
            </Link>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Servicios</button>
          <div className="subnav-content">
            <Link href="/actividades">
              <a>Actividades</a>
            </Link>
            <Link href="/cursos">
              <a>Cursos</a>
            </Link>
            <Link href="/sesiones">
              <a>Sesiones</a>
            </Link>
          </div>
        </div>
        <Link href="/contacto">
          <a className="subnavbtn">Contacto</a>
        </Link>
      </nav>
    </header>
  )
}
