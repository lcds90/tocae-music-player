/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme: { colors } }) => colors.light.tertiary};
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: grid;
  overflow: auto;
  height: 100%;
  transition: all 2s ease;
  ${({ userSearching }) => (userSearching
    ? `
  grid-template-columns: 1fr;
  grid-template-rows: 0.01fr 1fr;
  align-content:center;
  @media(min-width: 768px) {
    grid-template-columns: 0.25fr 1fr;
    grid-template-rows: 1fr;
  }
    `
    : `
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
    
  @media(min-width: 768px) {
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
  }
  `)}
`;
