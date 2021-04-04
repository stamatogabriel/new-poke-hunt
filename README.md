# POKEHUNT
Application that shows a pokemon according to the current climatic conditions of the chosen city

## How to run

You can needed install [Docker and docker-compose](https://www.docker.com/).

In the project directory, you can run:<br>
 `docker-compose up -d`


Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## How it works
After you run the application launch command, a page in your default browser will open. Just type the chosen city in the text box, which will display the local climatic conditions and a pokemon chosen according to the local weather conditions.

Notes: The displayed temperature, along with the climatic condition, is in degrees Celsius.

### Pokemon selection criteria
According to the climatic conditions of the city, a Pokémon based on its type (fire, water, wind, electric, etc.) is displayed following the following rules:

* Places where the temperature is lower (<) than 5° C, an ice pokemon is displayed.
* Places where the temperature is between (> =) 5°C and (<) 10°C, a water-type pokémon is displayed.
* Places where the temperature is between 12°C and 15°C, a grass-type pokémon is displayed..
* Places where the temperature is between 15°C and 21°C, a ground-type pokémon is displayed.
* Places where the temperature is between 23°C and 27°C, insect-type pokémon (bug) is displayed.
* Places where the temperature is between 27°C and 33°C inclusive, a rock-type pokémon is displayed.
* Places where the temperature is higher than 33°C a fire-type pokémon is displayed.
* For any other temperature, a normal-type pokemon is displayed.
* And, in case it is raining in the region an electric pokémon (electric) is displayed, regardless of the temperature.

## Technologies used
To create this application we used the ReactJs framework, along with the libraries described below:

* Typescript
* NextJs
* Styled-Components: for styling pages and components


Data from the following APIs were consumed:

* OpenweatherMap [https://openweathermap.org/api](https://openweathermap.org/api): for real-time weather forecasting information of selected locations
* PokeAPI [https://pokeapi.co/](https://pokeapi.co/:) for information about pokemons shown on screen
