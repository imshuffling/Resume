import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaCalendar } from "react-icons/fa";

export default function BlockJob( {title, company,  date, to, summary} ) {

  const Bold = ({ children }) => <strong>{children}</strong>
  const Text = ({ children }) => <p>{children}</p>

  const options = {
      renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
      renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  }

  return (
    <section className="job dotted-line">
        <h3>{title}</h3>
        <h4 className="where">{company}</h4>
        <div className="date">
          <div className="date__item"><FaCalendar />{date}</div>&nbsp;-&nbsp;
          {to !== null &&
              <div className="date__item">{to}</div>
          }
          {
            to
            ? null
            : (
              <div className="date__item">
              Ongoing
              </div>
            )
          }
        </div>
        {summary !== null &&
          <>
            {documentToReactComponents(summary.json, options)}
          </>
        }
    </section>
  );
}
