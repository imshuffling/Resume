import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

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
        <div className="where">{company}</div>
        <div className="date">
          <div className="date__item"><FontAwesomeIcon icon={faCalendar} />{date}</div>&nbsp;-&nbsp;
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
        {documentToReactComponents(summary.json, options)}
    </section>
  );
}
