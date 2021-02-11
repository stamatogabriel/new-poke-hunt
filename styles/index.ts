import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
    dark_primary: "#003673",
    error: "#C62828",
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

  @media (max-width: 600px) {
    img {
      height: 120px;
    }
  }
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.5rem;
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
  cursor: pointer;

  &:hover {
    background: ${theme.colors.dark_primary};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Error = styled.span`
  color: ${theme.colors.error};
  font-size: 1.3rem;
  margin-top: 1.5rem;
`;

export const InfoWrapper = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    width: 60%;
    padding: 1.5rem;
    align-items: flex-start;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 0 2rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
