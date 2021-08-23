import styled from 'styled-components';

export const Navbar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 4fr 1fr;
  grid-auto-columns: 1fr;
  background: ${({ theme: { colors } }) => colors.dark.primary};
  place-items: center;
  border-bottom: 2px inset black;

  @media (min-width: 600px) {
    grid-column: span 2;
  }
`;

export const Home = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const Logo = styled.img`
  font-size: 1rem;
  width: 50px;
  height: auto;
`;

export const Credits = styled.article`
  background: #85cfc9;
  display: flex;
  color: white;
  padding: 5px;
  border-radius: 10px 0 0 10px;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const ContainerMediaSocial = styled.article`
  display: grid;
  justify-content: space-around;
  padding: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.light.primary};
`;
