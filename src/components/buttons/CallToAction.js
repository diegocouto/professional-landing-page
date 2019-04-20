import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CallToAction = ({ label, href }) => (
  <Link href={href}>{label}</Link>
);

const Link = styled.a`
  background-image: linear-gradient(5deg, #795EFF 0%, #5AA1FA 100%);
  border-radius: 1.5rem;
  border: 4px solid transparent;
  -moz-background-clip: padding;
  -webkit-background-clip: padding;
  background-clip: padding-box;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 10px 22px;
  transition: all .2s ease-in-out;

  &:focus:not(:hover) {
    border-color: #CE65B4;
    outline: none;
  }

  &:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.8);
  }

  &:active {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
    transform: scale(0.96);
  }
`;

CallToAction.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CallToAction;
