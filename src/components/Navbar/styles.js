import styled from 'styled-components';

export const Navbar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 6fr;
  grid-auto-columns: 1fr;
  background: ${({ theme: { colors } }) => colors.dark.primary};
  place-items: center;
  border-bottom: 2px inset black;
  height: 10vh;
  
  @media(min-width: 600px){
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
  width:50px;
  height:auto;
`;

export const Credits = styled.article`
  background: ${({ theme: { colors } }) => colors.light.primary};
  width: 350px;
  text-align:center;
  padding:5px;
  border-radius:10px 0 0 10px;
`;

export const ContainerMediaSocial = styled.article`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.light.primary};
`;
