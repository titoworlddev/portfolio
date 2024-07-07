import { coursesAndCertificationsData } from '../../../../data/coursesAndCertificationsData';
import CertificationCard from './CertificationCard';
import './_CoursesAndCertifications.scss';

export default function CoursesAndCertifications() {
  return (
    <section className="certifications">
      <h2>Cursos y certificaciones</h2>

      <div className="certifications--cards">
        {coursesAndCertificationsData.map(course => (
          <CertificationCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}
