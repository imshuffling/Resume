import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";

export default function BlockSummary({ title, body }) {
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
    <section className="summary prose prose-sm order-1 md:prose-md lg:prose-lg xl:prose-xl">
      <h3 className="headline border-b-2 text-lg">{title}</h3>
      {renderRichText(body, options)}
    </section>
  );
}
