import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultProps = {
  horizontal: true,
  style: {},
};

const Tags = ({ tags, horizontal, style }) => (
  <List horizontal={horizontal} style={style}>
    {tags.map(tag => <Item key={tag}>{tag}</Item>)}
  </List>
);

const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  flex-wrap: wrap;
  margin: -4px;
`;

const Item = styled.div`
  background: rgba(255,255,255,0.10);
  border-radius: 0.4rem;
  color: rgba(255,255,255,0.50);
  font-size: 14px;
  font-weight: 600;
  padding: 5px 18px;
  margin: 4px;
`;

Tags.defaultProps = defaultProps;
Tags.propTypes = {
  horizontal: PropTypes.bool,
  style: PropTypes.shape,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
