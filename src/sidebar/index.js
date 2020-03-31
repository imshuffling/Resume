import React from 'react'
import PropTypes from 'prop-types'

import BlockSummary from './blocksummary';
import BlockSkills from '../sidebar/blockskills';
import BlockCertification from './blockcertification';

const MODULE_MAP = {
  ContentfulSummary: BlockSummary,
  ContentfulSkills: BlockSkills,
  ContentfulCertification: BlockCertification,
};

const propTypes = {
    sidebar: PropTypes.any
};

export default function Sidebar({sidebar}) {
  console.log('---', sidebar);
  return (
    <>
      {sidebar.map(({"__typename": type, ...props}, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </>
  );
}

Sidebar.propTypes = propTypes;
