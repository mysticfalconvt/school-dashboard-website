import styled from "styled-components"

export const MainTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  padding: 10px;
  margin: 0;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  

`