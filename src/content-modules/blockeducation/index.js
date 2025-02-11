import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { GoDash } from "react-icons/go";

export default function BlockEducation({ title, university, to, end }) {
  return (
    <article className="education mb-2 md:mb-0 prose prose-sm order-5 md:prose-md lg:prose-md xl:prose-lg">
      <h3 className="headline border-b-2 text-lg">Education</h3>
      <div className="not-prose mb-2">
        <h3 className="font-bold">{title}</h3>
        <div className="text-md where font-bold text-davidblue">
          {university}
        </div>
      </div>
      <div className="date flex items-center gap-4">
        <div className="date__item flex items-center gap-[2px]">
          <span className="flex items-center gap-1">
            <FaCalendar className="fill-gray-400" />
            {to}
          </span>
          <GoDash />
          <span>{end}</span>
        </div>
        <div className="date_location flex items-center gap-[2px]">
          <FaMapMarkerAlt className="fill-gray-400" />
          <span>Portsmouth, UK</span>
        </div>
      </div>
    </article>
  );
}
