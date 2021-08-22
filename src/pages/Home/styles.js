import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme: { colors } }) => colors.light.tertiary};
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 3fr;
`;
