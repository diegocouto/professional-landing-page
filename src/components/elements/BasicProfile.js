import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';
import Tags from './Tags';
import CallToAction from '../buttons/CallToAction';

const BasicProfile = () => (
  <Container>
    <Avatar />
    <Title>Diego Couto</Title>
    <Description>Full-stack software engineer working with web and mobile products</Description>

    <Tags centered tags={['React', 'React Native', 'Rails', 'NodeJS', 'Apollo']} style={{ marginBottom: 36 }} />

    <CallToAction label="Let's talk!" href="#say-hi" />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 340px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: rgba(255,255,255,0.70);
  line-height: 28px;
  margin-bottom: 20px;
`;

export default BasicProfile;
