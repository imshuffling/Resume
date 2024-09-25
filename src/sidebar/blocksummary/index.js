import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

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
    <section className="prose prose-sm md:prose-md lg:prose-lg xl:prose-xl summary order-1">
      <h3 className="headline text-lg border-b-2">{title}</h3>
      {renderRichText(body, options)}
    </section>
  );
}
