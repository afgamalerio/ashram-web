import React from 'react'
import Layout from '../../components/Layout'

const Sessions = () => {
  return (
    <Layout>
      <main className="container-fluid activities-container">
        <div className="row">
          <h2 className="activities-title">Terapias en sesiones personalizadas</h2>
        </div>

        <div className="row justify-content-center card-container">
          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/reiki-sesion.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Reiki</h3>
              <p className="card__content--text">
                Una sesión de Reiki se recibe habitualmente relajad@ en una camilla cómoda, abrigada
                si es el caso y mullida. Reiki es imposición de manos y a través de ella la energía
                universal (Rei) armoniza la energía individual (Ki) Los efectos son infinitos a
                partir de esa armonización. Sanación, alivio, conciencia, calma, alegría y
                bienestar. Puede hacerse presencial y también a distancia.
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/radiestesia.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Radiestesia</h3>
              <p className="card__content--text">
                A través del uso del péndulo, en una sesión de Radiestesia sobre el cuerpo, se
                restablece en forma rápida y duradera la plenitud de la energía vital en el cuerpo
                físico mental y emocional. Sus efectos son maravillosos y potentes. Puede hacerse
                presencial y a distancia. En una sesión de Radiestesia también se puede mejorar la
                energía de una relación, de una situación, y responder preguntas.
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/flores-de-bach.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Flores de Bach</h3>
              <p className="card__content--text">
                Las Flores de Bach son plantas comunes que actúan armonizando emociones en
                desequilibrio. Cada una de las 38 Flores de este sistema corresponde a un don o
                virtud. Cuando usamos las Flores que nuestro funcionamiento emocional necesita,
                recuperamos los dones que nos son innatos, y nuestro mayor potencial, naturalmente
                quitando energía a los desequilibrios que nos llevan a usarlas. Son naturales, se
                toman preparadas en un frasco tratamiento, no tienen contraindicaciones y las puede
                tomar un bebé que no duerme bien o una mamá que está gestando, y también son
                maravillosas para restablecer la salud en animales y plantas. Se preparan en sesión
                individual, personalmente o por videollamada, y son siempre personalizadas
              </p>
              <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                Quiero más información
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 card">
            <img
              src="/assets/registros2.png"
              alt="imagen evento"
              width="10rem"
              height="10rem"
              className="card__image"
            />
            <div className="card__content">
              <h3 className="card__content--title">Registros akashicos</h3>
              <p className="card__content--text">
                Esta es una posibilidad maravillosa y amorosa para recibir la guía que los planos
                superiores de conciencia tienen para ti momento presente. Es abrir una puerta de
                luz, claridad y comprensión para tus interrogantes y situaciones presentes. Un
                espacio amoroso, distendido, relajado para recibir con amor. Conviene grabar la
                lectura porque sirve para mucho tiempo y mientras continúen las circunstancias que
                trajiste a la consulta. Cada vez que se accede al plano Akáshico en consulta se
                puede sentir el amor universal vibrando y reacomodando la historia personal, y se
                recibe sanación y dispensación del karma. Podés hacer preguntas o también ir a
                recibir la guía sin preguntar. Puede hacerse presencial o a distancia
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

export default Sessions
