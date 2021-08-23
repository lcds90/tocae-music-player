import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';

export const Container = styled.footer`
  grid-column: span 2;
  background: ${({ theme: { colors } }) => colors.grey.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Audioplayer = styled(AudioPlayer)`
  width: 80%;
  color: ${({ theme: { colors } }) => colors.light.primary} !important;
  background: ${({ theme: { colors } }) => colors.dark.tertiary} !important;
  border-radius: 0 25px 0 0;
`;

export const MusicCover = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  background-color: ${({ theme: { colors } }) => colors.dark.tertiary};
  height: 100%;
  width:100px;
  border-radius: 25px 0 0 0;
`;

export const MusicInfo = styled.article`
  display: flex;
  flex-direction:column;
  width: 200px;
  position:relative;
  align-items:center;
  justify-content:center;
  color:white;
  font-style:italic;
  letter-spacing:2px;
  height:100%;

`;

export const SeeOnDeezer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
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
