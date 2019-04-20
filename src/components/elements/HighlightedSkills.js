import React, { Fragment } from 'react';

import Skill from './Skill';

const HighlightedSkills = () => (
  <Fragment>
    <Skill name="Ruby on Rails" yearsOfExperience={7} />
    <Skill name="React" yearsOfExperience={4} />
    <Skill name="React Native" yearsOfExperience={2.5} />
    <Skill name="GraphQL" yearsOfExperience={2} />
    <Skill name="NodeJS" yearsOfExperience={4} />
    <Skill name="AWS" yearsOfExperience={4} />
  </Fragment>
);

export default HighlightedSkills;
