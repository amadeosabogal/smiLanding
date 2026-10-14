import { useState } from 'react';

const BeforeAfterSlider = ({ beforeImg, afterImg }: { beforeImg: string, afterImg: string }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="before-after-slider" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <img src={afterImg} alt="Después" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />

      <img
        src={beforeImg}
        alt="Antes"
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      />

      <input
        type="range" min="0" max="100" value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          opacity: 0, cursor: 'ew-resize', zIndex: 10
        }}
      />

      <div
        style={{
          position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`,
          width: '2px', backgroundColor: 'white', transform: 'translateX(-50%)',
          pointerEvents: 'none', zIndex: 5
        }}
      >
        <div className="slider-handle" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#014BAC', boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          <i className="fa-solid fa-arrows-left-right" style={{ fontSize: '12px' }}></i>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      num: '01',
      title: 'DISEÑO RESIDENCIAL',
      desc: 'Hogares a medida que reflejan la identidad de quienes los habitan. Desde villas privadas hasta apartamentos de lujo, cada proyecto es una obra única.',
      img: '/diseñoResidencial.webp',
    },
    {
      num: '02',
      title: 'INTERIORISMO',
      desc: 'Espacios interiores concebidos como extensiones del alma del edificio. Cada detalle, material y luz tiene un propósito deliberado.',
      img: '/interiores.webp',
    },
    {
      num: '03',
      title: 'GESTIÓN DE OBRA',
      desc: 'Acompañamiento integral desde el concepto hasta la entrega de llaves. Coordinamos cada fase con precisión y compromiso total.',
      img: '/gestion.webp',
    },
  ];

  const process = [
    { num: '01', title: 'CONCEPTO', desc: 'Escuchamos y analizamos. Cada proyecto comienza con una conversación profunda sobre tus aspiraciones, el lugar y el contexto.' },
    { num: '02', title: 'DISEÑO', desc: 'Traducimos tus ideas en planos, maquetas y renders fotorrealistas. Iteramos hasta alcanzar la perfección formal y funcional.' },
    { num: '03', title: 'DOCUMENTACIÓN', desc: 'Elaboramos todos los planos técnicos, memorias y especificaciones necesarias para una ejecución impecable.' },
    { num: '04', title: 'EJECUCIÓN', desc: 'Supervisamos cada detalle de la construcción. Tu visión se materializa con la misma precisión con la que fue concebida.' },
  ];

  return (
    <>
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo azul transparente.webp" alt="SMI Construcción" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#inicio" className="active">INICIO</a>
          <a href="#proyectos">PROYECTOS</a>
          <a href="#filosofia">NOSOTROS</a>
          <a href="#servicios">ESPECIALIDADES</a>
          <a href="#proceso">PROCESO</a>
          <a href="#contacto">CONTACTO</a>
        </nav>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="hero" id="inicio">
        <div className="hero-bg">
          <img src="/hero.webp" alt="SMI Construcción" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">DISEÑO QUE INSPIRA,<br />CONSTRUCCIÓN QUE PERDURA.</h1>
          <p className="hero-subtitle">Construcción y remodelación integral con acabados de alta calidad, entregados a tiempo y dentro de tu presupuesto.</p>
          <a href="#proyectos" className="btn-outline">
            EXPLORAR PROYECTOS <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="hero-pager">
          <span className="active">01</span>
          <div className="line"></div>
          <span>03</span>
        </div>
      </section>

      {/* ═══════ FILOSOFÍA ═══════ */}
      <section className="philosophy" id="filosofia">
        <div className="philosophy-inner container">
          <div className="philosophy-img">
            <video src="/gemini_generated_video_584e244e.mp4" autoPlay loop muted playsInline />
          </div>
          <div className="philosophy-text">
            <div className="section-label">NUESTRA FILOSOFÍA</div>
            <blockquote className="manifesto">
              "Creemos que la arquitectura es la única disciplina capaz de transformar lo invisible
              en materia. La luz, el silencio, la escala: esas son nuestras verdaderas herramientas."
            </blockquote>
            <p className="philosophy-body">
              Nuestro compromiso con la calidad y la innovación nos impulsa a ofrecer soluciones eficientes y seguras en cada uno de nuestros proyectos. Con un equipo altamente calificado y un enfoque en el mantenimiento preventivo, garantizamos la satisfacción de nuestros clientes y el éxito continuo de nuestras obras.
            </p>
            <div className="philosophy-stats">
              <div className="philo-stat">
                <span className="philo-num">19</span>
                <span className="philo-label">AÑOS JUNTOS A TI</span>
              </div>
              <div className="philo-stat">
                <span className="philo-num">65+</span>
                <span className="philo-label">COLABORADORES</span>
              </div>
              <div className="philo-stat">
                <span className="philo-num">100+</span>
                <span className="philo-label">CLIENTES SATISFECHOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OBRAS DESTACADAS ═══════ */}
      <section className="selected-work container" id="proyectos">
        <div className="section-header">
          <h3>OBRAS DESTACADAS</h3>
          <div className="line"></div>
          <a href="#" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            VER TODOS LOS PROYECTOS <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img-wrapper" style={{ position: 'relative' }}>
              <BeforeAfterSlider
                beforeImg="/Gemini_Generated_Image_e7nepge7nepge7ne.webp"
                afterImg="/pexels-alinaskazka-21625181.webp"
              />
            </div>
            <div className="project-number">01</div>
            <h4 className="project-title">RESIDENCIA PRIVADA</h4>
            <div className="project-meta">2023 / LAHORE, PAKISTÁN</div>
            <a href="#" className="project-link">VER PROYECTO <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="project-card">
            <div className="project-img-wrapper" style={{ position: 'relative' }}>
              <BeforeAfterSlider
                beforeImg="/pexels-jaimejoelvh18-39722101.webp"
                afterImg="/Gemini_Generated_Image_n12ds1n12ds1n12d.webp"
              />
            </div>
            <div className="project-number">02</div>
            <h4 className="project-title">CASA URBANA</h4>
            <div className="project-meta">2022 / ISLAMABAD, PAKISTÁN</div>
            <a href="#" className="project-link">VER PROYECTO <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="project-card">
            <div className="project-img-wrapper" style={{ position: 'relative' }}>
              <BeforeAfterSlider
                beforeImg="/Gemini_Generated_Image_w5qyfiw5qyfiw5qy.webp"
                afterImg="/assets/about_img_1790876137253.webp"
              />
            </div>
            <div className="project-number">03</div>
            <h4 className="project-title">ESPACIO CULTURAL</h4>
            <div className="project-meta">2021 / DUBÁI, EAU</div>
            <a href="#" className="project-link">VER PROYECTO <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICIOS CON IMAGEN ═══════ */}
      <section className="services-section" id="servicios">
        <div className="container">
          <div className="section-header">
            <h3>ÁREAS DE ESPECIALIDAD</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="services-layout">
          {/* Lista izquierda */}
          <div className="services-list container">
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-row ${activeService === i ? 'open' : ''}`}
                onMouseEnter={() => setActiveService(i)}
              >
                <div className="service-row-inner">
                  <span className="service-num">{s.num}</span>
                  <h4 className="service-title">{s.title}</h4>
                  <p className={`service-desc ${activeService === i ? 'visible' : ''}`}>{s.desc}</p>
                  <span className="service-arrow">
                    <i className={`fa-solid ${activeService === i ? 'fa-arrow-right-long' : 'fa-plus'}`}></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Imagen derecha */}
          <div className="services-img-panel">
            {services.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt={s.title}
                className={`service-panel-img ${activeService === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROCESO ═══════ */}
      <section className="process-section" id="proceso">
        <div className="container">
          <div className="section-header">
            <h3>NUESTRO PROCESO</h3>
            <div className="line"></div>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-card">
                <div className="process-num">{p.num}</div>
                <div className="process-line"></div>
                <h4 className="process-title">{p.title}</h4>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════ CTA ═══════ */}
      <section className="cta-section" id="contacto">
        <div className="cta-bg">
          <img src="/assets/cta_concrete_1790877791568.webp" alt="Construyamos algo atemporal" />
          <div className="cta-overlay"></div>
        </div>
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-overline">¿LISTO PARA EMPEZAR?</div>
            <h2 className="cta-title">CONSTRUYAMOS<br />ALGO<br />JUNTOS.</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>
              Déjanos un mensaje y nuestro equipo de especialistas se pondrá en contacto contigo a la brevedad.
            </p>
          </div>
          <div className="cta-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Teléfono" />
              </div>
              <div className="form-group">
                <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} required></textarea>
              </div>
              <button type="submit" className="btn-solid">
                ENVIAR MENSAJE <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="footer-top">
          {/* Logo + descripcion */}
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src="/logo azul transparente.webp" alt="SMI Construcción" className="logo-img" />
            </div>
            <p className="footer-tagline">
              Arquitectura moldeada por la luz,<br />la forma y el propósito.
            </p>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/smi.peru.sac" target="_blank" rel="noreferrer" className="footer-social-btn"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1Djh4vZ6rj/" target="_blank" rel="noreferrer" className="footer-social-btn"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.tiktok.com/@smiperu.oficial?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="footer-social-btn"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>

          {/* Navegación */}
          <div className="footer-col">
            <h5 className="footer-col-title">NAVEGACIÓN</h5>
            <ul className="footer-links-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#filosofia">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Proceso</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-col">
            <h5 className="footer-col-title">SERVICIOS</h5>
            <ul className="footer-links-list">
              <li><a href="#servicios" onClick={() => setActiveService(0)}>Diseño Residencial</a></li>
              <li><a href="#servicios" onClick={() => setActiveService(1)}>Interiorismo</a></li>
              <li><a href="#servicios" onClick={() => setActiveService(2)}>Gestión de Obra</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h5 className="footer-col-title">CONTACTO</h5>
            <ul className="footer-links-list footer-contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>CAL. GERMAN SCHEREIBER NRO. 276 URB. SANTA ANA<br />LIMA - LIMA - SAN ISIDRO</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>905 446 906</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:cesia.vidal@smiperusac.com" style={{ color: 'inherit', textDecoration: 'none' }}>cesia.vidal@smiperusac.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2024 SMI — TODOS LOS DERECHOS RESERVADOS.</span>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <span className="sep">|</span>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </>

  );
}

export default App;
