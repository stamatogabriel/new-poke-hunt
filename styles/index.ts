import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

interface Props {
  showPoke: boolean;
  pokeImage: string;
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

  background-image: url('/assets/background.jpg');
  background-color: #fff;
  background-size: cover;
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
    margin: 0;
    padding: 0;

    img {
      height: 120px;
    }
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 3rem;
  border-radius: 7px;
  padding: 3px 8px;
  font-size: 2rem;
  color: #222;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }

  @media (max-width: 600px) {
    max-width: 310px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 80%;
  height: auto;
  border: none;
  border-radius: 7px;
  background: ${theme.colors.primary};
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: ${theme.colors.dark_primary};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    max-width: 310px;
  }
`;

export const Error = styled.span`
  color: ${theme.colors.error};
  font-size: 1.3rem;
  margin-top: 1.5rem;
`;

export const Card = styled.div<Props>`
  border-radius: 8px;
  box-shadow: 3px 3px 3px 3px #999;
  perspective: 1000px;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
  transition: transform 0.8s, background 0.8s;
  transform-style: preserve-3d;
  background-image: url(${props => props.showPoke ? props.pokeImage : '/assets/CitySilhuete.png'});
  background-color: #fff;
  background-size: cover;

  div {
    border-radius: 8px;
    background-color: #ffffff;
    opacity: 0.8;
    width: 100%;
    min-height: 400px;
    margin: auto;

    h3 {
      font-size: 2rem;
      text-align: center;
      color: #000000;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      color: #000000;
    }

  }
   
  @media (max-width: 600px) {
    max-width: 310px;
    margin: 1rem auto;
  }


  &:hover {
    transform: rotateY(180deg);
  }
`;

export const PokeWrapper = styled.div`
  transform: rotateY(180deg);
`;