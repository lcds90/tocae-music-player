import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 0;
  margin: auto;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(20, 20, 20, 0.5);
  width: 90%;

  ::placeholder {
    text-align: center;
    font-style: italic;
  }
`;
