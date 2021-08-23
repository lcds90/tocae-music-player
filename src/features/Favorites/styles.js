import styled from 'styled-components';

export const FavoritesList = styled.section`
  overflow: auto;
  grid-auto-columns: 200px;
  gap: 20px;
  grid-template-rows: 250px;
  grid-auto-rows: 250px;
  transition:width 2s ease, height 2s ease;
  height:100%;
  width:100%;
  display:grid;
  grid-auto-flow: column;
  place-items:center;
  ${({ userSearching }) => (userSearching && `
  height:0;
  `)}

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    align-content:space-between;
    grid-template-rows: 100px;
    ${({ userSearching }) => (userSearching
    ? 'width:0%' : 'width:100%')}
  }

`;

export const Title = styled.h2`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    background-color: ${({ theme: { colors } }) => colors.dark.tertiary};
    padding:20px;
    color:white;
    letter-spacing:5px;
    box-shadow:2px 5px 5px rgba(0, 0, 0, 0.25);
    @media(min-width: 768px){
        grid-column: span 2;
    }
`;
