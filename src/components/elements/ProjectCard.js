import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';

import DefaultLink from '../buttons/DefaultLink';
import Tags from './Tags';

const ProjectCard = ({
  name, description, tags, image, url,
}) => (
  <Card>
    <CardDescription>
      <Title>{name}</Title>
      <Description>{description}</Description>

      <DefaultLink href={url} target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>

        Visit website
      </DefaultLink>

      <TagsLabel>TECH STACK</TagsLabel>
      <Tags tags={tags} />
    </CardDescription>

    <CardImage>
      <Image fluid={image} />
    </CardImage>
  </Card>
);

const Card = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardImage = styled.div`
  flex: 1;

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (min-width: 768px) {
    flex: 0.55;
  }
`;

const CardDescription = styled.div`
  flex: 1;
  padding: 30px;

  @media (min-width: 768px) {
    flex: 0.45;
    padding: 50px;
  }
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: rgba(255,255,255,0.70);
  line-height: 27px;
  margin-bottom: 20px;
`;

const TagsLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  letter-spacing: 0.8px;
  margin: 30px 0 10px;
`;

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.shape({}).isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
