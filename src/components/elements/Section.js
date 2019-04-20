import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  color: rgb(255,255,255);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  color: rgba(255,255,255,0.70);
  font-size: 18px;
  line-height: 28px;
`;

export { Section, SectionTitle, SectionDescription };
