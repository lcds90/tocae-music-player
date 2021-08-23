import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.5fr 4fr;
  position: relative;
  background-color: transparent;
  border-radius: 25px;
  width: 100%;
  height: 100%;
`;

export const Info = styled.article`
  background-color: transparent;
  border-radius: 25px;
  box-shadow: 0 2.5px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.15s ease, filter 1s ease-in-out;
  filter: brightness(95%);
  width: 100%;
  height: 100%;
  grid-column: span 2;
  :hover {
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.25);
    filter: brightness(105%);
  }
  z-index: 1;
`;

export const Card = styled.section`
  background: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(15%);
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  transition: filter 0.5s ease;
  border-bottom: double ${({ theme: { colors } }) => colors.dark.primary} 5px;
  grid-column: span 2;
  :hover {
    filter: grayscale(0%);
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -5px;
  right: 0;
  border: 0;
  width: 40px;
  height: 40px;
  padding: 15px;
  border-radius: 10px 0 10px 0;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.green};
`;

export const Title = styled.h2`
  padding: 5px;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  color: ${({ theme: { colors } }) => colors.light.primary};
  font-size: 0.75rem;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
`;

export const Artist = styled.h3`
  padding: 5px;
  background-color: ${({ theme: { colors } }) => colors.light.primary};
  color: ${({ theme: { colors } }) => colors.dark.primary};
  display: flex;
  align-items: center;
`;

export const SeeOnDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 105px;
  width: 40px;
  height: 40px;
  right: 0;
  border: 0;
  border-radius: 10px 0 0 10px;
  background: url(${({ logo }) => logo});
  background-size: 25%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.green};
`;

export const Play = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  right: 0;
  border: 0;
  padding: 15px;
  width: 40px;
  height: 40px;
  border-radius: 10px 0 0 10px;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.green};
`;

export const Duration = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 155px;
  width: 40px;
  height: 40px;
  right: 0;
  border: 0;
  border-radius: 10px 0 0 10px;
  background: url(${({ logo }) => logo});
  background-size: 25%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme: { colors } }) => colors.dark.primary};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.green};
`;
