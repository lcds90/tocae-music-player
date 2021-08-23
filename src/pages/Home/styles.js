/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme: { colors } }) => colors.light.tertiary};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 3fr;

  @media(min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 3fr;
  }
`;
