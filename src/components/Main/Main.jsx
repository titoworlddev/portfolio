import HomeSection from '../HomeSection/HomeSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import './_Main.scss';

export default function Main() {
  return (
    <main className='main'>
      {/* Terminada */}
      <HomeSection />
      <hr />
      {/* Terminada */}
      <ProjectsSection />
      <hr />
      {/* Terminada */}
      <AboutSection />
      <hr />
      <ContactSection />
    </main>
  );
}
