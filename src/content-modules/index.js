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
        <article className="jobs prose prose-sm order-2 md:prose-md lg:prose-lg xl:prose-xl">
          <h3 className="headline border-b-2 text-lg">Experience</h3>
          <div className="gap gap-2">{contentfulJobBlock}</div>
        </article>
      )}
      {contentfulBlocks}
    </>
  );
}
