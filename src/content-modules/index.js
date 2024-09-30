import React from "react";
import { useMediaQuery } from "react-responsive";

import BlockEducation from "./blockeducation";
import BlockJob from "./blockjob";

const MODULE_MAP = {
  ContentfulJob: BlockJob,
  ContentfulEducation: BlockEducation,
};

export default function ContentModules({ mainContent }) {
  const isPrint = useMediaQuery({ query: "print" }); // Detect print mode

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

  if (isPrint) {
    return (
      <>
        {contentfulJobBlock.length > 0 && (
          <article className="jobs prose">
            <h3 className="headline border-b-2 text-sm">Experience</h3>
            <div className="gap gap-2">{contentfulJobBlock}</div>
          </article>
        )}
        {contentfulBlocks}
      </>
    );
  }

  return (
    <>
      {contentfulJobBlock.length > 0 && (
        <article className="jobs prose prose-sm order-2 md:prose-md lg:prose-md xl:prose-lg">
          <h3 className="headline border-b-2 text-lg">Experience</h3>
          <div className="gap gap-2">{contentfulJobBlock}</div>
        </article>
      )}
      {contentfulBlocks}
    </>
  );
}
