import { useState } from 'react';
import { coursesAndCertificationsData } from '../../../../data/coursesAndCertificationsData';
import CertificationCard from './CertificationCard';
import './_CoursesAndCertifications.scss';

export default function CoursesAndCertifications() {
  const [openedIndex, setOpenedIndex] = useState(-1);

  return (
    <section className="certifications">
      <h2>Cursos y certificaciones</h2>

      <div className="certifications--cards">
        {coursesAndCertificationsData
          .sort((a, b) => b.year - a.year)
          .map((course, index) => {
            return (
              <CertificationCard
                key={course.title}
                index={index}
                expand={openedIndex === index}
                onClick={i => {
                  setOpenedIndex(openedIndex === index ? -1 : i);
                }}
                {...course}
              />
            );
          })}
      </div>
    </section>
  );
}
