import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const defaultProps = {
  large: true,
};

const Avatar = ({ large }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AvatarContainer large>
        <AvatarImage fluid={data.file.childImageSharp.fluid} alt="Profile Image" />
      </AvatarContainer>
    )}
  />
);

const AvatarContainer = styled.div`
  ${props => (
    props.large ? `
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      padding: 5px;
      margin-bottom: 25px;
      width: 142px;
      height: 142px;  
    ` : `
      width: 64px;
      height: 64px;  
    `
  )}
`;

const AvatarImage = styled(Image)`
  img {
    border-radius: 50%;
  }
`;

Avatar.defaultProps = defaultProps;
Avatar.propTypes = {
  large: PropTypes.bool,
};

export default Avatar;
