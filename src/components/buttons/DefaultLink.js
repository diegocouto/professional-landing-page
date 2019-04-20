import styled from 'styled-components';

const DefaultLinkStyle = `
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  border: 3px solid transparent;
  -moz-background-clip: padding;
  -webkit-background-clip: padding;
  background-clip: padding-box;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,0.60);
  text-decoration: none;
  padding: 8px 18px;
  transition: all .2s ease-in-out;

  svg {
    margin-right: 5px;
    width: 13px;
    height: 13px;
  }

  &:focus:not(:hover) {
    border-color: #CE65B4;
    outline: none;
  }

  &:hover {
    background-image: linear-gradient(5deg, #795EFF 0%, #5AA1FA 100%);
    color: rgba(255, 255, 255, 1);
    outline: none;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const DefaultLink = styled.a`
  ${DefaultLinkStyle}
`;

export { DefaultLinkStyle };
export default DefaultLink;
