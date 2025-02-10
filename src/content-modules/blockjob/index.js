import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function BlockJob({ title, company, date, to, summary }) {
  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

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

  if (isPrint) {
    return (
      <article className="job prose-sm mb-2 border-b-[0.25px] last:mb-4 last:border-b-0">
        <div className="not-prose mb-2">
          <h3 className="font-bold">{title}</h3>
          <p className="where text-xs font-semibold text-davidblue">
            {company}
          </p>
        </div>
        <div className="date flex items-center gap-1">
          <div className="date__item flex items-center gap-1">
            <FaCalendar />
            {date}
          </div>
          <span>-</span>
          {to ? (
            <div className="date__item flex items-center gap-1">{to}</div>
          ) : (
            <div className="date__item flex items-center gap-1">Current</div>
          )}
        </div>
        {summary && <>{renderRichText(summary, options)}</>}
      </article>
    );
  }

  return (
    <article className="job prose prose-sm md:prose-md lg:prose-md xl:prose-lg mb-2 border-b-[0.25px] last:mb-4 last:border-b-0">
      <div className="not-prose mb-2">
        <h3 className="font-bold">{title}</h3>
        <p className="md:text-md where font-semibold text-davidblue">
          {company}
        </p>
      </div>
      <div className="date flex items-center gap-1">
        <div className="date__item flex items-center gap-1">
          <FaCalendar />
          {date}
        </div>
        <span>-</span>
        {to ? (
          <div className="date__item flex items-center gap-1">{to}</div>
        ) : (
          <div className="date__item flex items-center gap-1">Current</div>
        )}
      </div>
      {summary && <>{renderRichText(summary, options)}</>}
    </article>
  );
}
