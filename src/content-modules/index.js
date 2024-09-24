import React from "react";
import BlockJob from "./blockjob";
import BlockEducation from "./blockeducation";

const MODULE_MAP = {
  ContentfulJob: BlockJob,
  ContentfulEducation: BlockEducation,
};

export default function ContentModules({ mainContent }) {
  const contentfulJobBlock = [];
  const contentfulBlocks = [];

  mainContent.forEach(({ __typename: type, ...props }, i) => {
    const Component = MODULE_MAP[type];

    if (type === "ContentfulJob") {
      contentfulJobBlock.push(<Component key={i} {...props} />);
    } else {
      contentfulBlocks.push(<Component key={i} {...props} />);
    }
  });

  return (
    <>
      {contentfulJobBlock.length > 0 && (
        <section className="prose jobs order-2">
          <h3 className="headline text-lg border-b-2">Experience</h3>
          <div className="gap gap-2">{contentfulJobBlock}</div>
        </section>
      )}
      {contentfulBlocks}
    </>
  );
}
