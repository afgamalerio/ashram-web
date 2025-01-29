import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href="/">
          <img
            src="/assets/icon.svg"
            alt="Icono Ashram"
            className="icon"
            width="10rem"
            height="auto"
          />
      </Link>

      <nav className="menu">
        <div className="subnav">
          <button className="subnavbtn">About</button>
          <div className="subnav-content">
            <Link href="/sobrenosotros#about__ashram">
              <div>¿Qué es Ashram?</div>
            </Link>
            <Link href="/sobrenosotros#about__founder">
              <div>Sobre la fundadora</div>
            </Link>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Servicios</button>
          <div className="subnav-content">
            <Link href="/actividades">
              <div>Actividades</div>
            </Link>
            <Link href="/cursos">
              <div>Cursos</div>
            </Link>
            <Link href="/sesiones">
              <div>Sesiones</div>
            </Link>
          </div>
        </div>
        <Link href="/contacto">
          <div className="subnavbtn">Contacto</div>
        </Link>
      </nav>
    </header>
  )
}
