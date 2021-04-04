import Head from "next/head";

import { useState } from "react";
import { IInfoCity, IPokemon } from "../interfaces";

import { GetPokemonTypes, GetPokemon, GetInfoCity } from "../logical";

import {
  Container,
  Wrapper,
  Input,
  Form,
  Button,
  Error,
  Card,
  PokeWrapper,
} from "../styles";

export default function Home() {
  const [city, setCity] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [infoCity, setInfoCity] = useState<IInfoCity | undefined>();
  const [poke, setPoke] = useState<IPokemon | undefined>();
  const [showPoke, setShowPoke] = useState<boolean>(false);

  const hunt = async (event) => {
    event.preventDefault();
    setError(undefined);
    try {
      const { name, weather, temperature } = await GetInfoCity(city);

      setInfoCity({ name, weather, temperature });

      const { type } = GetPokemonTypes(weather, temperature);

      const { pokemon } = await GetPokemon(type);

      return setPoke(pokemon);
    } catch (error) {
      if (error.message) {
        return setError(error.message);
      }
      return setError(error);
    }
  };

  const handleChange = (event) => {
    setError(undefined);
    setPoke(undefined);
    setInfoCity(undefined);
    setCity(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Pokemon Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <img src="/assets/PokemonLogo.png" alt="Pokemon Logo" />
        <Wrapper>
          <Form onSubmit={hunt}>
            <Input onChange={handleChange} value={city} />
            <Button type="submit">Gotta catch'em all!'</Button>
            {error && <Error>{error.toString()}</Error>}
          </Form>
          {infoCity && poke && (
            <Card
              onMouseEnter={() => setShowPoke(true)}
              onMouseLeave={() => setShowPoke(false)}
              showPoke={showPoke}
              pokeImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
            >
              {!showPoke && (
                <div>
                  <h3>{infoCity.name}</h3>
                  <p>Weather: {infoCity.weather}</p>
                  <p>Temperature: {infoCity.temperature} °C</p>
                </div>
              )}

              {showPoke && (
                <PokeWrapper>
                  <h3>{poke.name}</h3>
                  <p>Type: {poke.type}</p>
                </PokeWrapper>
              )}
            </Card>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
