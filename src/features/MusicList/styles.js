import styled from 'styled-components';

const MusicList = styled.section`
    display:grid;
    overflow:auto;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    grid-auto-rows: 300px;
    padding:10px;

    @media(min-width: 600px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default MusicList;
