import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BASE_EXPERIENCE = 7.2;

const Skill = ({ name, yearsOfExperience }) => (
  <Container>
    <DescriptionContainer>
      <SkillName>{name}</SkillName>
      <Experience>+{yearsOfExperience} years</Experience>
    </DescriptionContainer>

    <ExperienceBarBackground>
      <ExperienceBar width={(yearsOfExperience / BASE_EXPERIENCE) * 100} />
    </ExperienceBarBackground>
  </Container>
);

const Container = styled.div`
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

const Experience = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: rgba(255,255,255,0.6);
  text-align: right;
  text-transform: uppercase;
`;

const ExperienceBarBackground = styled.div`
  background: rgba(255,255,255,0.10);
  border-radius: 3px;
  width: 100%;
  height: 5px;
  overflow: hidden;
`;

const ExperienceBar = styled.div`
  background-image: linear-gradient(90deg, #1D976C 0%, #93F9B9 100%);
  border-radius: 3px;
  ${({ width }) => `width: ${width}%;`}
  height: 5px;
`;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  yearsOfExperience: PropTypes.number.isRequired,
};

export default Skill;
