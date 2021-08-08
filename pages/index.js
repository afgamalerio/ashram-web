import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashram</title>
        <meta
          name="description"
          content="Ashram es un punto de encuentro y formación para aficionados a las artes holísticas como el yoga y la meditación. Se realizan actividades grupales, cursos y sesiones individuales de sanación."
        />
        <meta
          name="keywords"
          content="yoga, actividades, holistico, clases, meditacion, radiestesia, cursos, formaciones"
        />
        <meta itemProp="name" content="Ashram" />
        <meta
          itemProp="description"
          content="Ashram es un punto de encuentro y formación para aficionados a las artes holísticas como el yoga y la meditación. Se realizan actividades grupales, cursos y sesiones individuales de sanación."
        />
        <meta itemProp="image" content="/banner.png" />

        <meta property="og:url" content="https://ashram.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ashram" />
        <meta
          property="og:description"
          content="Ashram es un punto de encuentro y formación para aficionados a las artes holísticas como el yoga y la meditación. Se realizan actividades grupales, cursos y sesiones individuales de sanación."
        />
        <meta property="og:image" content="/banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ashram" />
        <meta
          name="twitter:description"
          content="Ashram es un punto de encuentro y formación para aficionados a las artes holísticas como el yoga y la meditación. Se realizan actividades grupales, cursos y sesiones individuales de sanación."
        />
        <meta name="twitter:image" content="/banner.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="mainContainer">
          <section className="container-fluid homeDiv">
            <div className="quoteDiv">
              <h3 className="quote">"Un camino desde el hacer al ser"</h3>
            </div>
          </section>

          <section className="container-fluid presentation">
            <img src="/assets/logo.svg" alt="Logo Ashram" className="presentation__logo" />
            <h2 className="presentation__title">Tu espacio de crecimiento espiritual</h2>
            <p className="presentation__description">
              Te invitamos a recorrer nuestras propuestas de{' '}
              <span className="presentation__description--span">
                terapias individuales, clases grupales, cursos y talleres.
              </span>{' '}
              Animate a leer estas propuestas y si alguna resuena en vos, estamos aqui para guiarte,
              responder, contarte mas y compartir nuestra experiencia.
            </p>
          </section>

          <section className="container-fluid activitiesDiv">
            <div className="row justify-content-around align-items-center">
              <div className="col-12 col-md-3 activitiesDiv__card">
                <img
                  src="/assets/tallerAutoconocimiento.png"
                  alt="Imagen actividades"
                  width="100%"
                  height="15rem"
                  className="eventImage"
                />
                <h3 className="cardTitle">Actividades Grupales</h3>
                <p>Descripción de los eventos que se realizan en Ashram</p>
                <Link href="/activities">
                  <a className="activitiesDiv__card--button">Ver Más</a>
                </Link>
              </div>
              <div className="col-12 col-md-3 activitiesDiv__card">
                <img
                  src="/assets/formación-yoga.png"
                  alt="Imagen cursos"
                  className="eventImage"
                  width="100%"
                  height="15rem"
                />
                <h3 className="cardTitle">Cursos y formaciones</h3>
                <p>Descripción de los cursos que se realizan en Ashram</p>
                <Link href="/courses">
                  <a className="activitiesDiv__card--button">Ver Más</a>
                </Link>
              </div>
              <div className="col-12 col-md-3 activitiesDiv__card">
                <img
                  src="/assets/reiki-sesion.png"
                  alt="Imagen sesiones"
                  width="100%"
                  height="15rem"
                  className="eventImage"
                />
                <h3 className="cardTitle">Sesiones individuales</h3>
                <p>Descripción de las sesiones que se realizan en Ashram</p>
                <Link href="/sessions">
                  <a className="activitiesDiv__card--button">Ver Más</a>
                </Link>
              </div>
            </div>
          </section>

          <section className="container-fluid mapSection">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-3 mapSection__text">
                <h3>¡Vení a conocernos!</h3>
                <p>Nos encontramos en calle 9 numero 1237, General Pico, La Pampa.</p>
              </div>
              <div className="col-12 col-md-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51869.973525894224!2d-63.753823999999994!3d-35.655492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda10a54c5ee0368e!2sAshram!5e0!3m2!1ses-419!2sus!4v1618339146511!5m2!1ses-419!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  className="mapSection__map"
                />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
