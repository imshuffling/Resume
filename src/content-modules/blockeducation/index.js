import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function BlockEducation( {title, university, to, end } ) {
  return (
    <section className="education">
        <h3 className="headline">Education</h3>
        <h2>{title}</h2>
        <div className="where">{university}</div>
        <div className="date">
          <div className="date__item"><FontAwesomeIcon size='1x' icon={faCalendar} />{to}</div>&nbsp;-&nbsp;<div className="date__item">{end}</div>
          <div className="date_location"><FontAwesomeIcon size='1x' icon={faMapMarkerAlt} />Portsmouth, UK</div>
        </div>
    </section>
  );
}
