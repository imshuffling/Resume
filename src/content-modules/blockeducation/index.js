import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function BlockEducation( {title, university, to, end } ) {
  return (
    <section className="education">
        <h3 className="headline">Education</h3>
        <h2>{title}</h2>
        <div className="where">{university}</div>
        <div className="date">
          <div className="date__item"><FaCalendar />{to}</div>&nbsp;-&nbsp;<div className="date__item">{end}</div>
          <div className="date_location"><FaMapMarkerAlt />Portsmouth, UK</div>
        </div>
    </section>
  );
}
