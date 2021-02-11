import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 1300px;
`;

export const Input = styled.input`
  width: 60%;
  height: 3rem;
  border-radius: 7px;
  padding: 3px;
  font-size: 2rem;
  color: #222;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 7px;
  background: ${theme.colors.primary};
  font-size: 1.5rem;
  color: #fff;
`;
