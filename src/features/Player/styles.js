import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';

export const Container = styled.footer`
    grid-column: span 2;
    background: ${({ theme: { colors } }) => colors.light.primary};
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const Audioplayer = styled(ReactAudioPlayer)`
    width: 100%;
`;

export const ContainerMediaSocial = styled.article`
    display:flex;
    justify-content:space-around;
    padding:5px;
    width:100%;
`;
