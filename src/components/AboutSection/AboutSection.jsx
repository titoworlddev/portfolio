import Skill from '../Skill/Skill';
import './_AboutSection.scss';
import { skillsImgs } from './skillsImgs';

export default function AboutSection() {
  return (
    <section id='about' className='about'>
      <h2 className='section-title'>Sobre mí</h2>

      <div className='contenido-central'>
        <div className='bio-photo-container'>
          <p className='bio'>
            Aunque actualmente solo me especializo en Frontend de Web y Móvil,
            estoy aprendiendo sobre el backend porque me gustaría llegar a ser
            un desarrollador fullstack.
            <br />
            <br />
            Con muchas ganas de trabajar, ya que me encanta lo que hago y me
            gusta mucho la programación y el diseño, por lo que me apasiona
            crear aplicaciones bonitas e intuitivas. <br />
            <br />
            En conclusión me gusta mucho el mundo de la tecnología y también soy
            muy curioso, lo cual me lleva a estar aprendiendo cosas nuevas
            constantemente.
            <br />
            <br />
            Si quieres saber más sobre mí, te invito a descargar mi CV.
            <br />
            <br />
            <a
              className='my-cv'
              href='/assets/Curriculum Cristian Arias.pdf'
              download=''
            >
              Descarga mi CV
            </a>
          </p>
        </div>

        <div className='skills-container'>
          <h2>Habilidades</h2>

          <div className='skills'>
            {Object.entries(skillsImgs).map(([key, value]) => (
              <div key={key} className='skill-section'>
                <h3>{value.name}</h3>

                <div className='skills-group'>
                  {skillsImgs[key].skills.map(skill => (
                    <Skill
                      key={skill.title}
                      title={skill.title}
                      img={skill.img}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
