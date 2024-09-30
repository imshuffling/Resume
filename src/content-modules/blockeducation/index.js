import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function BlockEducation({ title, university, to, end }) {
  return (
    <article className="education prose prose-sm order-5 md:prose-md lg:prose-md xl:prose-lg">
      <h3 className="headline border-b-2 mdtext-md lg:text-lg">Education</h3>
      <div className="not-prose mb-2">
        <h3 className="font-bold">{title}</h3>
        <div className="text-md where font-bold text-davidblue">
          {university}
        </div>
      </div>
      <div className="date flex items-center gap-1">
        <div className="date__item flex items-center gap-1">
          <FaCalendar />
          {to}
        </div>
        &nbsp;-&nbsp;
        <div className="date__item flex items-center gap-1">{end}</div>
        <div className="date_location flex items-center gap-1">
          <FaMapMarkerAlt />
          Portsmouth, UK
        </div>
      </div>
    </article>
  );
}
