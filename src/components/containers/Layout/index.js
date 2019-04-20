import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './index.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <Page>
        {children}
      </Page>
    )}
  />
);

const Page = styled.div``;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
