import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';

export const Container = styled.footer`
    grid-column: span 2;
    background: black;
`;

export const Audioplayer = styled(ReactAudioPlayer)`
    width: 100%;
`;
