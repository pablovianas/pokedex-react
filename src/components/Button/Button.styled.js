import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex ;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  font-weight: bold ;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 20px;
`;
