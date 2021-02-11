import Head from "next/head";

import { useState } from "react";
import { IInfoCity, IPokemon } from "../interfaces";

import { GetPokemonTypes, GetPokemon, GetInfoCity } from "../logical";

import { Container, Input, Form, Button } from "../styles";

export default function Home() {
  const [city, setCity] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [infoCity, setInfoCity] = useState<IInfoCity | undefined>();
  const [poke, setPoke] = useState<IPokemon | undefined>();

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
    setCity(event.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Pokemon Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src='/assets/PokemonLogo.png' alt="Pokemon Logo" />
      <Form onSubmit={hunt}>
        <Input onChange={handleChange} value={city} />
        <Button type="submit">Gotta catch'em all!'</Button>
        {error && <span>{error.toString()}</span>}
      </Form>
      <div>
        {infoCity && (
          <div>
            <h3>City: {infoCity.name}</h3>
            <p>Weather: {infoCity.weather}</p>
            <p>Temperature: {infoCity.temperature} °C</p>
          </div>
        )}
        {poke && (
          <div>
            <h3>Pokemon: {poke.name}</h3>
            <p>Type: {poke.type}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
              alt={poke.name}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
