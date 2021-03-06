import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container id="say-hi">
    <Title>Let's talk?</Title>
    <Description>
      I’ll be glad to have a chat with you about your project, just drop me a line at:
    </Description>

    <MailLink href="mailto: diego@couto.dev">diego@couto.dev</MailLink>

    <SocialLinksContainer>
      <SocialLink
        title="Follow me on Github"
        href="https://github.com/diegocouto"
        target="_blank"
        rel="noopener"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </SocialLink>

      <SocialLink
        title="Follow me on Twitter"
        href="https://twitter.com/diegocouto"
        target="_blank"
        rel="noopener"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
        </svg>
      </SocialLink>
    </SocialLinksContainer>
  </Container>
);

const Container = styled.div`
  text-align: center;
  margin: 180px auto;
  padding: 0 20px;
  max-width: 400px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: rgb(255, 255, 255);
`;

const Description = styled.p`
  font-size: 18px;
  color: rgba(255,255,255,0.70);
  line-height: 28px;
`;

const MailLink = styled.a`
  border: 2px solid transparent;
  border-bottom-color: #5AA1FA;
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 4px 2px;
  transition: all .2s ease-in-out;

  &:focus:not(:hover) {
    border: 2px solid #CE65B4;
  }

  &:hover, &:focus {
    border-bottom-color: #795EFF;
    outline: none;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
`;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  text-decoration: none;
  transition: all .2s ease-in-out;
  padding: 10px;
  margin: 5px;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover, &:focus {
    background-image: linear-gradient(5deg, #795EFF 0%, #5AA1FA 100%);
    color: rgba(255, 255, 255, 1);
    outline: none;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export default Footer;
