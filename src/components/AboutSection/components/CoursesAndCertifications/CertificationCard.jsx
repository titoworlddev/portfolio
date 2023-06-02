import './_CertificationCard.scss';
import { useState } from 'react';

import ChevronRightIcon from '../../../Icons/ChevronRightIcon';
import ChevronDownIcon from '../../../Icons/ChevronDownIcon';

export default function CertificationCard({
  title = '',
  school = '',
  year = '',
  description = '',
  skills = '',
  certificateUrl = ''
}) {
  const [expand, setExpand] = useState('none');

  return (
    <div className='certifications--card'>
      <div className='card--header'>
        <div
          className='card--icon'
          onClick={() => {
            setExpand(expand === 'none' ? 'flex' : 'none');
          }}
        >
          {expand === 'none' ? <ChevronRightIcon /> : <ChevronDownIcon />}
        </div>
        <div className='card--title'>
          <h5>{title}</h5>
          <h6>
            {school} - {year}
          </h6>
        </div>
      </div>
      <div className='card--expandible' style={{ display: expand }}>
        <p>
          <span>Temas principales del curso:</span>
          {description}
        </p>
        <p>
          <span>Tecnologías y herramientas:</span>
          {skills}
        </p>
        <a target='_blank' rel='noreferrer' href={certificateUrl}>
          Ver certificado
        </a>
      </div>
    </div>
  );
}
