import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'

const Sessions = () => {
  const sessions = [
    {
      image: '/assets/reiki-sesion.png',
      title: 'Reiki',
      description:
        'Una sesión de Reiki se recibe habitualmente relajad@ en una camilla cómoda, abrigada si es el caso y mullida. Reiki es imposición de manos y a través de ella la energía universal (Rei) armoniza la energía individual (Ki) Los efectos son infinitos a partir de esa armonización. Sanación, alivio, conciencia, calma, alegría y bienestar. Puede hacerse presencial y también a distancia.',
    },
    {
      image: '/assets/radiestesia.png',
      title: 'Radiestesia',
      description:
        'A través del uso del péndulo, en una sesión de Radiestesia sobre el cuerpo, se restablece en forma rápida y duradera la plenitud de la energía vital en el cuerpo físico mental y emocional. Sus efectos son maravillosos y potentes. Puede hacerse presencial y a distancia. En una sesión de Radiestesia también se puede mejorar la energía de una relación, de una situación, y responder preguntas.',
    },
    {
      image: '/assets/flores-de-bach.png',
      title: 'Flores de Bach',
      description:
        'Las Flores de Bach son plantas comunes que actúan armonizando emociones en desequilibrio. Cada una de las 38 Flores de este sistema corresponde a un don o virtud. Cuando usamos las Flores que nuestro funcionamiento emocional necesita, recuperamos los dones que nos son innatos, y nuestro mayor potencial, naturalmente quitando energía a los desequilibrios que nos llevan a usarlas. Son naturales, se toman preparadas en un frasco tratamiento, no tienen contraindicaciones y las puede tomar un bebé que no duerme bien o una mamá que está gestando, y también son maravillosas para restablecer la salud en animales y plantas. Se preparan en sesión individual, personalmente o por videollamada, y son siempre personalizadas',
    },
    {
      image: '/assets/registros2.png',
      title: 'Registros akashicos',
      description:
        'Esta es una posibilidad maravillosa y amorosa para recibir la guía que los planos superiores de conciencia tienen para ti momento presente. Es abrir una puerta de luz, claridad y comprensión para tus interrogantes y situaciones presentes. Un espacio amoroso, distendido, relajado para recibir con amor. Conviene grabar la lectura porque sirve para mucho tiempo y mientras continúen las circunstancias que trajiste a la consulta. Cada vez que se accede al plano Akáshico en consulta se puede sentir el amor universal vibrando y reacomodando la historia personal, y se recibe sanación y dispensación del karma. Podés hacer preguntas o también ir a recibir la guía sin preguntar. Puede hacerse presencial o a distancia',
    },
    {
      image: '/assets/cartaNatal.jpg',
      title: 'Carta Natal',
      description:
        'Una sesión de astrología te aporta el mapa del cielo al momento de tu nacimiento. Este mapa, único e irrepetible muestra en la lectura y especialmente en la interpretación la ubicación de las fortalezas y las debilidades con las que viniste a este plano. Te va a dar mucha información sobre tu misión en esta vida, sobre lo que viniste a ser, y sirve para toda la vida.',
    },
    {
      image: '/assets/revolucionSolar.jpg',
      title: 'Revolución Solar',
      description:
        'Habitualmente entregamos nuestras lecturas de carta natal junto con la revolución solar. Revolución solar es la lectura del año que estás transitando que se lee de vuelta al Sol a vuelta al Sol, es decir que tú año se lee desde tu último cumpleaños y hasta el próximo. Esta lectura te aporta información sobre cuál es la energía predominante del año que estás transitando, qué es lo más trascendente que va a tener tu año en dónde está enfocada la energía, cuál es el mejor momento del año y cuáles son las cosas más importantes que van a ocurrir durante el año. Si vos ya tenés tu carta natal podés pedir solamente la lectura de la Revolución solar. Y también se puede pedir la lectura de la Revolución solar cada vez que cumplís años para tener tu guía personal para el año que vas a transitar.',
    },
    {
      image: '/assets/sinastrias.jpg',
      title: 'Sinastrias',
      description:
        'Sinastrías se le llama a la superposición de dos cartas natales. Es una lectura que da la información de relaciones entre dos personas: dónde están las fortalezas, dónde están las debilidades y cómo sobrellevar algunas desintonías.',
    },
    {
      image: '/assets/autoconocimiento.jpg',
      title: 'Autoconocimiento',
      description:
        'En una sesión de autoconocimiento aplicamos la filosofía de las flores de Bach, la filosofía de los Ordenes del Amor de las constelaciones familiares, la filosofía de la Nueva Medicina Germánica o Biodecodificación con el fin de trabajar con ejercicios prácticos directamente aplicables al momento presente para ir sanando y reprogramando lo afectivo, los hábitos de pensamiento, las emociones y por ende, el cuerpo físico.Cada sesión renueva en mucho e ilumina tu Vitalidad Personal abriendo un canal y una comprensión que antes estaba bloqueado.',
    },
  ]
  return (
    <>
      <Head>
        <title>Ashram - Sesiones</title>
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

        <meta property="og:url" content="https://ashram.ar/sesiones" />
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
        <main className="container-fluid activities-container">
          <div className="row">
            <h2 className="activities-title">Terapias en sesiones personalizadas</h2>
          </div>

          <div className="row justify-content-center card-container">
            {sessions.map((session, index) => (
              <div className="col-sm-12 col-md-4 col-lg-4 card" key={index}>
                <img
                  src={session.image}
                  alt="imagen evento"
                  width="10rem"
                  height="10rem"
                  className="card__image"
                />
                <div className="card__content">
                  <h3 className="card__content--title">{session.title}</h3>
                  <p className="card__content--text">{session.description}</p>
                  <a href="mailto:ashramvirtual@gmail.com" className="card__content--button">
                    Quiero más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Sessions
