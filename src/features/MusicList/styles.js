import styled from 'styled-components';

export const MusicList = styled.section`
  display: grid;
  overflow: auto;
  grid-auto-columns: 250px;
  background-color: ${({ theme: { colors } }) => colors.grey.primary};
  gap: 20px;
  grid-template-rows: 250px;
  grid-auto-rows: 250px;
  display:grid;
  grid-auto-flow: column;
  align-content:center;
  justify-content: start;
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    align-content:space-between;
    grid-template-rows: 100px;
  }
  height: 100%;
  width: 100%;

`;

export const Title = styled.h2`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    background-color: ${({ theme: { colors } }) => colors.grey.secondary};
    padding:20px;
    color:white;
    letter-spacing:5px;
    box-shadow:2px 5px 5px rgba(0, 0, 0, 0.25);
`;
