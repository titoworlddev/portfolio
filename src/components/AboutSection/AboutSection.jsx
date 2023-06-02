import './_AboutSection.scss';
import BioAndPhoto from './components/BioAndPhoto/BioAndPhoto';
import CoursesAndCertifications from './components/CoursesAndCertifications/CoursesAndCertifications';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';

export default function AboutSection() {
  return (
    <section id='about' className='about'>
      <h2 className='section-title'>Sobre mí</h2>

      <article className='contenido-central'>
        <BioAndPhoto />
        <SkillsContainer />
        <CoursesAndCertifications />
      </article>
    </section>
  );
}
