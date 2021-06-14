import React from 'react'
import Layout from '../../components/Layout'

const About = () => {
  return (
    <Layout>
      <main className="about-container">
        <section className="about" id="about__ashram">
          <img
            src="/assets/ashram.jpg"
            alt="Imagen yoga"
            width="15rem"
            height="15rem"
            className="about__image"
          />

          <div className="about__content">
            <h2 className="about__content--title">¿Que es Ashram?</h2>

            <h4 className="about__content--subtitle">Ashram significa La Casa del Maestro</h4>
            <p className="about__content--text">
              En Ashram proponemos que cuando llegues aquí comiences a reconocer tu propia Maestría
              Interior. Cada SER trae a este plano una misión única e irrepetible y los dones en la
              exacta medida de esa misión. Cada propuesta que encuentres aquí te permitirá avanzar
              en el rumbo del Autoconocimiento, autoaceptacion, autosanacion.
              <br />
              La palabra Ashram generalmente indica un lugar físico dónde alguien comparte guía,
              conocimientos Nuestro Ashram es pura energía evolutiva que tiene varios canales de
              expresión
            </p>
            <ul className="about__content--list">
              <li>En Youtube nos encontras como AshramVirtual - Silvita Gamalerio</li>
              <li>En Instagram AshramVirtual</li>
              <li>En facebook Silvita Gamalerio</li>
              <li>
                Y si querés conocer nuestro espacio físico amoroso y cuidado, hoy es en calle 9 nro
                1237 de General Pico
              </li>
            </ul>

            <h4 className="about__content--subtitle">Los inicios</h4>
            <p className="about__content--text">
              El 19 de septiembre de 2006 nació Ashram como un sueño cumplido, un sitio sostenido
              por la energía amorosa de quienes compartían formación y clases de YOGA, formación y
              sesiones de REIKI, consultas de Flores de Bach y Meditaciones grupales. Nuestro
              espacio era entonces en calle 13 nro 1137 de General Pico.
            </p>
          </div>
        </section>

        <section className="about" id="about__founder">
          <img
            src="/assets/founder.jpg"
            alt="Imagen fundadora"
            width="15rem"
            height="15rem"
            className="about__image"
          />

          <div className="about__content">
            <h2 className="about__content--title">La fundadora.</h2>
            <p className="about__content--text">
              Silvia Griselda Gamalerio, o Silvita Gamalerio, se formó en la Asociación Bonaerense
              de Yoga como Instructora de Yoga (1991) y Profesora de Yoga (1992, 1995, 2002).
              Radicada en General Pico La Pampa a partir de 1998 decidió hacerse Formadora de
              Profesores de Yoga para lo cual siguió el programa de la ABY (Asociación Bonaerense de
              Yoga ubicada en la ciudad de La Plata y que dirige el Maestro Ricardo García) A partir
              de 2005, y cada año desde entonces, hay nuevos Instructores y Profesores de Yoga que
              se preparan en ASHRAM para sostener una práctica diaria o sadhana que les mantenga en
              el camino de salud, bienestar y evolución que propone Yoga, y para compartir estas
              prácticas en clases individuales y grupales.
            </p>

            <h4 className="about__content--subtitle">Master reiki.</h4>
            <p className="about__content--text">
              Silvia Griselda Gamalerio se formó como Master Reiki en la escuela Usui Shiki Ryoho
              entregando las iniciaciones de primer segundo tercer nivel y maestría desde 2011 a más
              de un centenar de seres que canalizan sanación y alivio por imposición de manos
            </p>

            <h4 className="about__content--subtitle">Flores de Bach.</h4>
            <p className="about__content--text">
              A partir de 2006 y hasta fines de 2008 Nuestra Fundadora curso los estudios de
              Terapeuta Floral en la Bach's Foundation con sede en Argentina, egresando como Bach
              Foundation Registered Practitioner Y a partir de 2018, con el aval de la trayectoria y
              experiencia, formar grupos de Terapeutas Florales en General Pico.
            </p>

            <h4 className="about__content--subtitle">Radiestesia.</h4>
            <p className="about__content--text">
              Formada en Radiestesia por la Maestra Mariana Salvado y la bibliografía del Padre
              Gerula, desde 2011 se brinda la formación de radiestesistas.
            </p>

            <h4 className="about__content--subtitle">Registros Akashicos.</h4>
            <p className="about__content--text">
              A través del canal amoroso de Gabriela Krusembaum Lista y Andrea Ragalzi, nuestra
              Fundadora transitó sus Maestrías en Registros Akáshicos ofreciendo desde 2009 su
              amoroso canal en lecturas individuales, meditaciones canalizadas y formación de
              lectores de registros Akáshicos.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
