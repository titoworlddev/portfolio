import CertificationCard from './CertificationCard';
import './_CoursesAndCertifications.scss';

export default function CoursesAndCertifications() {
  return (
    <section className="certifications">
      <h2>Cursos y certificaciones</h2>

      <div className="certifications--cards">
        <CertificationCard
          title="Introducción a Frameworks de Frontend con Vue 3 - 8 horas"
          school="Mastermind"
          year="2023"
          description="En este curso aprendí a crear una interfaz de usuario con Vue, un framework progresivo de JavaScript. Utilizé las herramientas más prácticas y adaptables que pueden implementarse para desarrollar aplicaciones web de forma sencilla economizando tiempo y recursos. Además, al tratarse de un framework de Frontend, comprendí las diferencias con backend"
          skills="Vue, HTML5, CSS3, JavaScript, Componentes, Eventos, Ciclo de vida y comunicación con el backend, Composition API, FrontEnd Routing"
          certificateUrl="https://www.mastermind.ac/certificates/rdjzg2fasx"
        />
        <CertificationCard
          title="Curso gratis de ReactJS 2020 - 17,5 horas"
          school="midu.dev"
          year="2023"
          description="Aprendí qué es React, cree una aplicación desde cero, cree mis propios hooks y añadí infinite scroll y testing con estas clases. Todo desde cero."
          skills="create-react-app, Custom Hooks, React Context, Lazy Load, Suspense, Paginación, CSS Grid, Infinite Scroll, Testing, React.memo, Deploy con Vercel, SEO con React, Deploy Integrado con GitHub, useReducer, testing de React Hooks, Inicio de sesión y gestión de favoritos del usuario, Registro de usuario con Formik y React.createPortal, CSS en JS y Styled Components con Emotion"
          certificateUrl="https://midu.dev/curso-gratis-react-2020/"
        />
        <CertificationCard
          title="Diseño web profesional el curso completo práctico y desde 0 - 42 horas"
          school="Udemy"
          year="2022 a 2023"
          description="Aprendí paso a paso y desde lo más básico, a diseñar cualquier página web de manera práctica y sencilla."
          skills="HTML5, CSS3, Responsive Design, Figma, SASS, JavaScript, jQuery,
          Bootstrap 5, WordPress, Git, GitHub"
          certificateUrl="https://www.udemy.com/certificate/UC-97b91edc-738a-4dba-9d33-de5bf7f28a47/"
        />
        <CertificationCard
          title="Flutter intermedio: Diseños profesionales y animaciones - 15,5 horas"
          school="Udemy"
          year="2021"
          description="Este curso tiene por objetivo enseñarte a crear animaciones personalizadas y diseños atractivos para tus aplicaciones móviles y aplicaciones para tabletas."
          skills="AnimationBuilder, Tweens, SingleTickerStateProvider, Curves, Provider como manejador de estado, Creación de widgets re-utilizables, Diseño en tabletas y teléfonos con la misma base de código, Tema light y dark, Temas personalizados, CustomPainters, Slivers, CustomSlivers, Slideshow personalizado, Diseño de aplicaciones tipo Pinterest, Menú animado, Circular progress indicators, ScrollControllers, AnimationControllers, Y mucho más..."
          certificateUrl="https://www.udemy.com/certificate/UC-219303a8-b7ef-42cf-bd98-e6a37a1e73eb/"
        />
        <CertificationCard
          title="Flutter: Tu guía completa para ios y android - 37,5 horas"
          school="Udemy"
          year="2020"
          description="Un curso para enseñarte todo lo que necesitas de sobre el lenguaje de Dart y Flutter para poder crear aplicaciones hermosas y principalmente funcionales que son aplicables a la vida real."
          skills="State Management, Tokens, Widgets comunes y no tan comunes, Dart, Firebase REST API y REST Auth, Cámara, Galería de imágenes, Carga de archivos a la mediante servicios REST, Modelos, Providers , Streams, Notificaciones Push, Futures, Despliegues en la AppStore, Despliegues en la PlayStore, Generación de APKs de 64 bits, Diseños de aplicaciones móviles, Lectura de archivos JSON, CRUD hacia servicios REST, SQLite – CRUD, PageViews, InfiniteScrolls, Pull to refresh, Uso de mapas, Preferencias de usuario, Storage nativo, Instalaciones de paquetes, Formularios, Y mucho más…"
          certificateUrl="https://www.udemy.com/certificate/UC-d89f1c48-dd97-498c-813a-4c6c7e465bc5/"
        />
        <CertificationCard
          title="Dart: De cero hasta los detalles - 10 horas"
          school="Udemy"
          year="2020"
          description="Guía completa para aprender Dart sin Frameworks y darte la base que necesitas para programar utilizando este lenguaje."
          skills="Estructura de proyectos en Dart, Guía de estilos oficial del equipo de Dart / Google, Constantes y finals, Peticiones HTTP, Mapeo de información, Ciclos, Estructuras de control de datos, Tips, Trucos en Dart, Lectura de la documentación oficial, Condiciones, Tipado estricto y dinámico, Depuración, Listas, Mapas, Queues, Enumeraciones, Singletons, Mucho más!"
          certificateUrl="https://www.udemy.com/certificate/UC-90927f6c-0391-4d62-bd8e-7748329f0688/"
        />
      </div>
    </section>
  );
}
