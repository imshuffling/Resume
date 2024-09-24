import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function BlockEducation({ title, university, to, end }) {
  return (
    <article className="prose education mb-4 order-5">
      <h3 className="headline text-lg border-b-2">Education</h3>
      <div className="not-prose mb-2">
        <h3 className="text-md md:text-lg font-bold">{title}</h3>
        <div className="text-davidblue text-md where font-bold">
          {university}
        </div>
      </div>
      <div className="flex gap-1 items-center date">
        <div className="flex gap-1 items-center date__item">
          <FaCalendar />
          {to}
        </div>
        &nbsp;-&nbsp;
        <div className="flex gap-1 items-center date__item">{end}</div>
        <div className="flex gap-1 items-center date_location">
          <FaMapMarkerAlt />
          Portsmouth, UK
        </div>
      </div>
    </article>
  );
}
