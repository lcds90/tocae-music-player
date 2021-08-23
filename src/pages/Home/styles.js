/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme: { colors } }) => colors.light.tertiary};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction:column;
`;

export const Wrapper = styled.div`
  display:flex;
  overflow:auto;
  flex-direction:column;
  height:100%;
  @media(min-width: 768px) {
    flex-direction:row;
  }
`;
