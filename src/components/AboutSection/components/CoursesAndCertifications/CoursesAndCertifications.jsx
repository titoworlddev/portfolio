import { coursesAndCertifications } from '../../../../data/coursesAndCertifications';
import CertificationCard from './CertificationCard';
import './_CoursesAndCertifications.scss';

export default function CoursesAndCertifications() {
  return (
    <section className="certifications">
      <h2>Cursos y certificaciones</h2>

      <div className="certifications--cards">
        {coursesAndCertifications.map(course => (
          <CertificationCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}
