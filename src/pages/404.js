import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/containers/Layout';
import SEO from '../components/utils/Seo';
import { DefaultLinkStyle } from '../components/buttons/DefaultLink';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />

    <PageContainer>
      <ContentBox>
        <Title>404</Title>
        <Description>
          Oops! It looks like this page doesn't exist or isn't available anymore.
        </Description>

        <LinkButton to="/">Back to homepage</LinkButton>
      </ContentBox>
    </PageContainer>
  </Layout>
);

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentBox = styled.div`
  text-align: center;
  max-width: 360px;
  margin-top: 200px;
`;

const Title = styled.h1`
  font-size: 62px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  color: rgba(255,255,255,0.70);
  line-height: 30px;
  margin-bottom: 30px;
`;

const LinkButton = styled(Link)`
  ${DefaultLinkStyle}
`;


export default NotFoundPage;
