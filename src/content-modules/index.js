import React from 'react'
import PropTypes from 'prop-types'

import BlockJob from './blockjob';
import BlockEducation from './blockeducation';

const MODULE_MAP = {
  ContentfulJob: BlockJob,
  ContentfulEducation: BlockEducation,
};

const propTypes = {
    mainContent: PropTypes.any
};

export default function ContentModules({mainContent}) {
  // console.log('---', mainContent);
  return (
    <>
      {mainContent.map(({"__typename": type, ...props}, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </>
  );
}

ContentModules.propTypes = propTypes;
