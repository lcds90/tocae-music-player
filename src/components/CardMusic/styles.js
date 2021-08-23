import styled from 'styled-components';

export const Container = styled.section`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 4fr;
  position:relative;
  background-color: transparent;
  border-radius: 25px;
  width:100%;
  height:100%;
`;

export const Info = styled.article`
  background-color: transparent;
  border-radius: 25px;
  box-shadow: 0 2.5px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.15s ease, filter 1s ease-in-out;
  filter:brightness(95%);
  width:100%;
  height:100%;
  grid-column: span 2;
  :hover{
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.25);
    filter:brightness(105%);
  }
  z-index: 1;
`;

export const Card = styled.section`
  background: url(${({ image }) => image});
  background-size: contain;
  background-repeat:no-repeat;
  background-position: center;
  filter: grayscale(15%);
  position: absolute;
  border-radius:10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  transition: filter 0.5s ease;
  border-bottom: double ${({ theme: { colors } }) => colors.dark.primary} 5px;
  grid-column: span 2;
  :hover{
    filter: grayscale(0%);
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  bottom:-5px;
  right:0;
  border:0;
  padding:15px;
  border-radius: 10px 0 10px 0;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  cursor:pointer;
  color: ${({ theme: { colors } }) => colors.green};
  font-style: italic;
`;

export const Title = styled.h2`
  padding:5px;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  color: ${({ theme: { colors } }) => colors.light.primary};

`;

export const Artist = styled.h3`
  padding:5px;
  background-color: ${({ theme: { colors } }) => colors.light.primary};
  color: ${({ theme: { colors } }) => colors.dark.primary};
  border-radius:5px 15px 0 10px;
`;

export const SeeOnDeezer = styled.a`
  padding:5px;
  background-color:orange;
  
`;
