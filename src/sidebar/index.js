import React from "react";

import BlockSkills from "../sidebar/blockskills";
import BlockCertification from "./blockcertification";
import BlockSummary from "./blocksummary";

const MODULE_MAP = {
  ContentfulSummary: BlockSummary,
  ContentfulSkills: BlockSkills,
  ContentfulCertification: BlockCertification,
};
export default function Sidebar({ sidebar }) {
  return (
    <>
      {sidebar.map(({ __typename: type, ...props }, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </>
  );
}
