import React from "react";
import BlockJob from "./blockjob";
import BlockEducation from "./blockeducation";

const MODULE_MAP = {
  ContentfulJob: BlockJob,
  ContentfulEducation: BlockEducation,
};

export default function ContentModules({ mainContent }) {
  return (
    <>
      {mainContent.map(({ __typename: type, ...props }, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </>
  );
}
