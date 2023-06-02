import './_SkillsContainer.scss';
import Skill from '../../../Skill/Skill';
import { skillsImgs } from './skillsImgs';

export default function SkillsContainer() {
  return (
    <div className='skills-container'>
      <h2>Habilidades</h2>

      <div className='skills'>
        {Object.entries(skillsImgs).map(([key, value]) => (
          <div key={key} className='skill-section'>
            <h3>{value.name}</h3>

            <div className='skills-group'>
              {skillsImgs[key].skills.map(skill => (
                <Skill key={skill.title} title={skill.title} img={skill.img} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
