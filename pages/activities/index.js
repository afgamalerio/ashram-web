import React from 'react'
import Layout from '../../components/Layout'

const Activities = () => {
  return (
    <Layout>
      <main className="container-fluid activities-container">
        <div className="row">
          <h2 className="activities-title">Clases y actividades grupales</h2>
        </div>

        <div className="row justify-content-center card-container">
          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/yoga-class2.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Clases de yoga.</h3>
              <p className="card__content--text">
                Te invitamos a participar en nuestras clases de Yoga en modalidad presencial, o
                virtual, y tambien a aprovechar las clases que compartimos en nuestras redes
                sociales. Habitualmente trabajamos con la modalidad Yoga Flow para dejarnos llevar
                por el cuerpo en su proposito de restablecer la salud, la vitalidad, el bienestar y
                la alegría.
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/tallerAutoconocimiento.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Talleres de autoconocimiento.</h3>
              <p className="card__content--text">
                Casi siempre proponemos un tema de trabajo grupal, y nos reunimos a trabajar con
                técnicas de Constelaciones Familiares, con técnicas de Biodecodificación, con la
                filosofia de las Flores de Bach, con el enfoque de la personalidad que nos otorga el
                Eneagrama, y tambien con meditación y pranayama. Cada taller es una oportunidad de
                verse con una nueva y mejor mirada, que amplia el autoconocimento y las
                posibilidades de desarrollo personal.
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/meditacion-guiada.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Meditaciones guiadas.</h3>
              <p className="card__content--text">
                Nos reunimos a meditar, para aprender el habito y poner la meditación a sumar sus
                múltiples beneficios en la vida cotidiana. Compartimos técnicas y posibilidades,
                para entrar en estado meditativo desde distintos lugares que pueden ser: una
                practica de yoga, o una practica de pranayama, o una practica de mantrams, o temas
                especificos para evolucionar desde la meditación. Y tambien tenemos meditaciones
                guiadas para aplicar en la vida cotidiana en casos de insomnio, inquietud, ansiedad,
                o molestias fisicas.
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Activities
