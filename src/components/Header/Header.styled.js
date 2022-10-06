import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  background-color: ${({ theme }) => theme.backgroundColor};
  
  @media(max-width: 768px){
    justify-content: center;
  }
`;

export const HeaderHome = styled(Header)`
  justify-content: space-between ;
  background-color: ${({ theme }) => theme.backgroundColor};
  
  @media(max-width: 1024px){
    padding: 10px;
    margin-bottom: 20px;
    
    button, a{
      font-size: initial ;
      align-items: center ;
    }
  }
`
