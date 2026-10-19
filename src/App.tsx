import { useState, useEffect } from 'react';

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
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#politica-privacidad') setLegalModal('privacy');
      else if (hash === '#terminos-condiciones') setLegalModal('terms');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (legalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [legalModal]);

  const services = [
    {
      num: '01',
      title: 'DISEÑO RESIDENCIAL',
      desc: 'Proyectos residenciales a medida con diseño vanguardista, funcionalidad y acabados de primer nivel.',
      img: '/diseñoResidencial.webp',
    },
    {
      num: '02',
      title: 'INTERIORISMO',
      desc: 'Transformación de interiores combinando iluminación estratégica, materiales selectos y mobiliario exclusivo.',
      img: '/interiores.webp',
    },
    {
      num: '03',
      title: 'GESTIÓN DE OBRA',
      desc: 'Supervisión y dirección técnica integral, garantizando plazos de entrega, presupuesto y máxima calidad.',
      img: '/gestion.webp',
    },
  ];

  const process = [
    {
      num: '01',
      title: 'CONCEPTO',
      desc: 'Escuchamos y analizamos. Cada proyecto comienza con una conversación profunda sobre tus aspiraciones, el lugar y el contexto.',
      img: '/concepto.jpg',
    },
    {
      num: '02',
      title: 'DISEÑO',
      desc: 'Traducimos tus ideas en planos, maquetas y renders fotorrealistas. Iteramos hasta alcanzar la perfección formal y funcional.',
      img: '/diseno.jpg',
    },
    {
      num: '03',
      title: 'DOCUMENTACIÓN',
      desc: 'Elaboramos todos los planos técnicos, memorias y especificaciones necesarias para una ejecución impecable.',
      img: '/documentacion.jpg',
    },
    {
      num: '04',
      title: 'EJECUCIÓN',
      desc: 'Supervisamos cada detalle de la construcción. Tu visión se materializa con la misma precisión con la que fue concebida.',
      img: '/ejecucion.jpg',
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="navbar">
        <div className="navbar-container">
          <a href="#inicio" className="logo" aria-label="SMI Inicio">
            <img src="/logo azul transparente.webp" alt="SMI Construcción" className="logo-img" />
          </a>
          <nav className="nav-links">
            <a href="#inicio" className="active">INICIO</a>
            <a href="#proyectos">PROYECTOS</a>
            <a href="#filosofia">NOSOTROS</a>
            <a href="#servicios">ESPECIALIDADES</a>
            <a href="#proceso">PROCESO</a>
            <a href="#contacto">CONTACTO</a>
          </nav>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="hero" id="inicio">
        <div className="hero-bg">
          <img src="/hero.webp" alt="SMI Construcción" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-phrase">DISEÑO QUE INSPIRA,</span>{' '}
            <span className="hero-title-phrase">CONSTRUCCIÓN QUE PERDURA.</span>
          </h1>
          <p className="hero-subtitle">Construcción y remodelación integral con acabados de alta calidad, entregados a tiempo y dentro de tu presupuesto.</p>
          <a href="#proyectos" className="btn-outline">
            EXPLORAR PROYECTOS <i className="fa-solid fa-arrow-right-long"></i>
          </a>
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
              "Creemos que la construcción es la disciplina capaz de transformar proyectos e ideas en realidades tangibles y duraderas. La precisión técnica, los estándares de calidad y el rigor constructivo: esas son nuestras verdaderas herramientas."
            </blockquote>

            <div className="philosophy-values">
              <div className="philo-value-item">
                <div className="philo-value-icon">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="philo-value-info">
                  <h4>CALIDAD E INNOVACIÓN</h4>
                  <p>Soluciones modernas y acabados de primer nivel.</p>
                </div>
              </div>
              <div className="philo-value-item">
                <div className="philo-value-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="philo-value-info">
                  <h4>SEGURIDAD Y EFICIENCIA</h4>
                  <p>Estrictos protocolos y cumplimiento de plazos.</p>
                </div>
              </div>
              <div className="philo-value-item">
                <div className="philo-value-icon">
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <div className="philo-value-info">
                  <h4>EQUIPO CALIFICADO</h4>
                  <p>Profesionales especializados en cada obra.</p>
                </div>
              </div>
              <div className="philo-value-item">
                <div className="philo-value-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div className="philo-value-info">
                  <h4>ENFOQUE PREVENTIVO</h4>
                  <p>Mantenimiento y garantía para el éxito continuo.</p>
                </div>
              </div>
            </div>

            <div className="philosophy-stats">
              <div className="philo-stat">
                <span className="philo-num">19</span>
                <span className="philo-label">AÑOS JUNTO A TI</span>
              </div>
              <div className="philo-stat-divider"></div>
              <div className="philo-stat">
                <span className="philo-num">65+</span>
                <span className="philo-label">COLABORADORES</span>
              </div>
              <div className="philo-stat-divider"></div>
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
            <div className="project-meta">2023 / LA MOLINA, LIMA - PERÚ</div>
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
            <div className="project-meta">2022 / MIRAFLORES, LIMA - PERÚ</div>
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
            <div className="project-meta">2021 / BARRANCO, LIMA - PERÚ</div>
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
                onClick={() => setActiveService(i)}
              >
                <div className="service-row-inner">
                  <span className="service-num">{s.num}</span>
                  <h4 className="service-title">{s.title}</h4>
                  <div className={`service-desc ${activeService === i ? 'visible' : ''}`}>
                    <p>{s.desc}</p>
                    <div className="service-mobile-img-wrapper">
                      <img src={s.img} alt={s.title} className="service-mobile-img" />
                    </div>
                  </div>
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
                <div className="process-bg">
                  <img src={p.img} alt={`${p.num} ${p.title}`} />
                  <div className="process-overlay"></div>
                </div>
                <div className="process-content">
                  <div className="process-hero-num">{p.num}</div>
                  <h4 className="process-title">{p.title}</h4>
                  <p className="process-desc">{p.desc}</p>
                </div>
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
            <h2 className="cta-title">CONSTRUYAMOS<br /><span>ALGO JUNTOS.</span></h2>
            <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>
              Déjanos un mensaje
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
          {/* Logo y Razón Social */}
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.25rem' }}>
              <img src="/logo azul transparente.webp" alt="SMI Construcción" className="logo-img" />
            </div>
            <div className="footer-company-details" style={{ marginBottom: '1.5rem', fontSize: '0.8rem', lineHeight: '1.5', color: 'var(--text-muted)' }}>
              <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C.
              </span>
              <span>RUC: 20516004879</span>
            </div>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/smi.peru.sac" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1Djh4vZ6rj/" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.tiktok.com/@smiperu.oficial?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
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
          <span>&copy; 2024 SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C. &bull; RUC 20516004879 &bull; TODOS LOS DERECHOS RESERVADOS.</span>
          <div className="footer-bottom-links">
            <a
              href="#politica-privacidad"
              onClick={(e) => {
                e.preventDefault();
                setLegalModal('privacy');
                window.location.hash = 'politica-privacidad';
              }}
            >
              Política de Privacidad
            </a>
            <span className="sep">|</span>
            <a
              href="#terminos-condiciones"
              onClick={(e) => {
                e.preventDefault();
                setLegalModal('terms');
                window.location.hash = 'terminos-condiciones';
              }}
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </footer>

      {/* ═══════ MODAL LEGAL (POLÍTICAS / TÉRMINOS) ═══════ */}
      {legalModal && (
        <div
          className="legal-modal-backdrop"
          onClick={() => {
            setLegalModal(null);
            history.replaceState(null, '', window.location.pathname);
          }}
        >
          <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
            <div className="legal-modal-header">
              <div className="legal-modal-title-box">
                <h3 className="legal-modal-title">
                  {legalModal === 'privacy' ? 'POLÍTICA DE PRIVACIDAD' : 'TÉRMINOS Y CONDICIONES'}
                </h3>
                <span className="legal-modal-subtitle">
                  SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C. &bull; RUC: 20516004879 &bull; Conforme a la Ley N° 29733
                </span>
              </div>
              <button
                className="legal-modal-close"
                onClick={() => {
                  setLegalModal(null);
                  history.replaceState(null, '', window.location.pathname);
                }}
                aria-label="Cerrar modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="legal-modal-body">
              {legalModal === 'privacy' ? (
                <>
                  <section className="legal-section">
                    <h4>1. Identificación del Responsable del Tratamiento</h4>
                    <p>
                      El presente sitio web es operado por <strong>SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C.</strong> (en adelante, "SMI"), sociedad constituida bajo las leyes de la República del Perú, con <strong>RUC N° 20516004879</strong> y domicilio fiscal en <strong>CAL. GERMAN SCHEREIBER NRO. 276 URB. SANTA ANA, LIMA - LIMA - SAN ISIDRO</strong>. Teléfono comercial oficial: <strong>905 446 906</strong>. Correo electrónico para consultas de privacidad: <strong>cesia.vidal@smiperusac.com</strong>.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>2. Marco Legal Aplicable</h4>
                    <p>
                      Esta Política de Privacidad se rige estrictamente por la <strong>Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong> y su Reglamento aprobado mediante Decreto Supremo N° 003-2013-JUS, garantizando el debido tratamiento, seguridad y confidencialidad de los datos personales suministrados por nuestros usuarios y clientes.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>3. Datos Personales Recopilados</h4>
                    <p>
                      A través de nuestro formulario de contacto digital y canales autorizados, recopilamos los siguientes datos:
                    </p>
                    <ul>
                      <li>Nombres y apellidos completos.</li>
                      <li>Dirección de correo electrónico.</li>
                      <li>Número de teléfono de contacto (llamadas o mensajería).</li>
                      <li>Detalles y requerimientos del proyecto de construcción, diseño o remodelación.</li>
                    </ul>
                  </section>

                  <section className="legal-section">
                    <h4>4. Finalidad del Tratamiento de Datos</h4>
                    <p>
                      Los datos personales recopilados se destinan exclusivamente a los siguientes propósitos legítimos:
                    </p>
                    <ul>
                      <li>Atender consultas y solicitudes de información técnica o presupuestaria.</li>
                      <li>Elaborar y remitir propuestas comerciales, cotizaciones y cronogramas de obra personalizados.</li>
                      <li>Gestionar la comunicación directa con el cliente mediante llamadas, correo o mensajería instantánea.</li>
                      <li>Cumplir con las obligaciones legales y contractuales correspondientes.</li>
                    </ul>
                  </section>

                  <section className="legal-section">
                    <h4>5. Confidencialidad y No Cesión de Datos a Terceros</h4>
                    <p>
                      SMI garantiza que los datos personales recopilados no serán comercializados, vendidos, transferidos ni compartidos con terceras personas o entidades bajo ninguna circunstancia, siendo tratados bajo estricta reserva y empleados únicamente para las finalidades de contacto y cotización autorizadas por el usuario.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h4>
                    <p>
                      De conformidad con la Ley N° 29733, usted tiene derecho a ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> respecto de sus datos personales. Para ejercer cualquiera de estos derechos, puede remitir una solicitud por correo electrónico a <strong>cesia.vidal@smiperusac.com</strong> con el asunto "Derechos ARCO", adjuntando copia de su documento de identidad.
                    </p>
                  </section>

                  <section className="legal-section highlight-box">
                    <h4>7. Solicitud de Supresión y Eliminación Definitiva de Datos</h4>
                    <p>
                      Todo usuario que desee que sus datos personales de contacto sean eliminados de manera definitiva de nuestros registros comerciales puede solicitarlo en cualquier momento enviando un correo a <strong>cesia.vidal@smiperusac.com</strong> con el asunto <strong>"Solicitud de Eliminación de Datos"</strong>. Su solicitud será procesada y confirmada en un plazo máximo de 48 horas hábiles.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>8. Medidas de Seguridad</h4>
                    <p>
                      SMI implementa medidas de índole técnica, organizativa y legal necesarias para evitar la alteración, pérdida, tratamiento o acceso no autorizado a los datos personales, garantizando su estricta confidencialidad.
                    </p>
                  </section>
                </>
              ) : (
                <>
                  <section className="legal-section">
                    <h4>1. Disposiciones Generales</h4>
                    <p>
                      Los presentes Términos y Condiciones regulan el acceso, navegación y uso del sitio web oficial de <strong>SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C.</strong> (con RUC N° 20516004879, en adelante "SMI"), empresa peruana especializada en servicios de construcción integral, remodelación, diseño residencial, interiorismo y gestión de obras en el Perú.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>2. Carácter Referencial de Contenidos y Presupuestos</h4>
                    <p>
                      Toda la información, fotografías de antes y después, renders arquitectónicos, maquetas 3D y estimaciones mostradas en esta plataforma digital tienen carácter exclusivamente ilustrativo y referencial.
                    </p>
                    <p>
                      Las especificaciones técnicas finales, costos definitivos, cronogramas de entrega y condiciones de pago quedan sujetos de manera obligatoria a la suscripción de un <strong>Contrato de Obra o Locación de Servicios</strong> debidamente firmado por las partes, con sus respectivas memorias descriptivas y planos de ingeniería aprobados.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>3. Propiedad Intelectual y Derechos Reservados</h4>
                    <p>
                      Todos los derechos de propiedad industrial e intelectual sobre las marcas, nombres comerciales, logotipos, imágenes, proyectos arquitectónicos, planos, fotografías de obras, videos, diseño gráfico y código fuente pertenecen en su totalidad a <strong>SMI PERU - SISTEMAS DE MONTAJES INDUSTRIALES S.A.C.</strong> o cuentan con las debidas autorizaciones. Queda expresamente prohibida su copia, modificación, reproducción o uso comercial no autorizado sin consentimiento previo y por escrito de SMI.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>4. Obligaciones del Usuario</h4>
                    <p>
                      El usuario se compromete a hacer un uso diligente, correcto y lícito del sitio web y del formulario de contacto. Queda prohibido el ingreso de información falsa, el envío de spam, o el uso de cualquier mecanismo que pudiera dañar o sobrecargar los servidores o vulnerar la seguridad del sitio.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>5. Canales de Comunicación Digital</h4>
                    <p>
                      Las comunicaciones electrónicas, formularios web y canales de mensajería directa habilitados por la empresa son de uso exclusivamente profesional y comercial. La información intercambiada se encuentra protegida bajo el secreto comercial y las normas de confidencialidad de SMI.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>6. Limitación de Responsabilidad</h4>
                    <p>
                      SMI no se responsabiliza por interrupciones eventuales del servicio derivadas de fallos en la red de telecomunicaciones o mantenimientos en servidores de terceros, aunque implementa las mejores prácticas para asegurar la máxima disponibilidad de la plataforma.
                    </p>
                  </section>

                  <section className="legal-section">
                    <h4>7. Legislación Aplicable y Jurisdicción</h4>
                    <p>
                      Para todo lo relativo a la interpretación y cumplimiento de estos Términos y Condiciones, las partes se someten expresamente a las leyes vigentes de la República del Perú y a la jurisdicción de los jueces y tribunales del distrito judicial de Lima, Perú.
                    </p>
                  </section>
                </>
              )}
            </div>

            <div className="legal-modal-footer">
              <span className="legal-modal-date">Última actualización: Octubre 2024 &bull; Lima, Perú</span>
              <button
                className="btn-solid"
                style={{ padding: '0.6rem 1.75rem', fontSize: '0.75rem' }}
                onClick={() => {
                  setLegalModal(null);
                  history.replaceState(null, '', window.location.pathname);
                }}
              >
                ENTENDIDO Y CERRAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  );
}

export default App;
