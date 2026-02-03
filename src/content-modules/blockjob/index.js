import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

export default function BlockJob({
  title,
  company,
  companyLink,
  date,
  to,
  summary,
}) {
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
      <article className="job prose-sm mb-2 border-b-[0.25px] last:mb-4 last:border-b-[0px]">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <h4 className="where text-davidblue">{company}</h4>
          <div className="date text-xs flex items-center gap-[2px]">
            <div className="date__item flex items-center gap-1">
              <FaCalendar className="fill-gray-400" />
              {date}
            </div>
            <GoDash />
            {to ? (
              <div className="date__item flex items-center">{to}</div>
            ) : (
              <div className="date__item flex items-center">Current</div>
            )}
          </div>
        </div>
        {summary && <>{renderRichText(summary, options)}</>}
      </article>
    );
  }

  return (
    <article className="job prose prose-sm md:prose lg:prose xl:prose-lg mb-2 border-b-[0.25px] last:mb-4 last:border-b-[0px]">
      <div>
        <h3 className="font-semibold text-pretty">
          {title}
          <br />
          {companyLink ? (
            <span className="where">
              <a
                className="text-davidblue font-semibold flex items-center gap-1"
                href={companyLink}
                target="_blank"
                rel="noreferrer"
              >
                {company}
                <FiExternalLink />
              </a>
            </span>
          ) : (
            <span className="where text-davidblue">{company}</span>
          )}
        </h3>
        <div className="date text-xs flex items-center gap-[2px]">
          <div className="date__item flex items-center gap-1">
            <FaCalendar className="fill-gray-400" />
            {date}
          </div>
          <GoDash />
          {to ? (
            <div className="date__item flex items-center">{to}</div>
          ) : (
            <div className="date__item flex items-center">Current</div>
          )}
        </div>
      </div>
      {summary && <>{renderRichText(summary, options)}</>}
    </article>
  );
}
