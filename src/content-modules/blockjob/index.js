import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { FaCalendar } from "react-icons/fa";

export default function BlockJob({ title, company, date, to, summary }) {
  const Bold = ({ children }) => <strong>{children}</strong>;
  const Text = ({ children }) => <p>{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return (
    <article className="prose job dotted-line">
      <div className="not-prose mb-2">
        <h3 className="text-md md:text-lg font-bold">{title}</h3>
        <p className="text-davidblue text-sm md:text-md where font-semibold">
          {company}
        </p>
      </div>
      <div className="flex gap-1 items-center date">
        <div className="flex gap-1 items-center date__item">
          <FaCalendar />
          {date}
        </div>
        <span>-</span>
        {to ? (
          <div className="flex gap-1 items-center date__item">{to}</div>
        ) : (
          <div className="flex gap-1 items-center date__item">Ongoing</div>
        )}
      </div>
      {summary && <>{renderRichText(summary, options)}</>}
    </article>
  );
}
