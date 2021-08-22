import styled from 'styled-components';

export const Navbar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-template-columns: 1fr 6fr;
  grid-auto-columns: 1fr;
  background: ${({ theme: { colors } }) => colors.dark.tertiary};
  place-items: center;
  grid-column: span 2;
  border-bottom: 2px inset black;
`;

export const Home = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const Logo = styled.h1`
  font-size: 1rem;
`;
