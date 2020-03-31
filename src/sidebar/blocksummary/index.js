import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlockSummary( {title, body} ) {

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
    <section className="summary">
        <h3 className="headline">{title}</h3>
        {documentToReactComponents(body.json, options)}
    </section>
  );
}
