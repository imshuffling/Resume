import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { GoDash } from "react-icons/go";

export default function BlockEducation({ title, university, to, end }) {
  return (
    <article className="education mb-2 md:mb-0 prose prose-sm order-5 md:prose lg:prose xl:prose-lg">
      <h3 className="headline border-b-2 text-lg">Education</h3>
      <div className="mb-2">
        <h3 className="text-pretty font-semibold">
          {title}
          <br />
          <span className="text-md where font-bold text-davidblue">
            {university}
          </span>
        </h3>
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
