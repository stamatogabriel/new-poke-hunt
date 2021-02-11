import { IPokemonType } from "../interfaces";

export default function getType(
  weather: string,
  temperature: number
): IPokemonType {
  if (weather === "Rain") {
    return { type: "electric" };
  } else if (temperature < 5) {
    return { type: "ice" };
  } else if (temperature >= 5 && temperature < 10) {
    return { type: "water" };
  } else if (temperature >= 12 && temperature < 15) {
    return { type: "grass" };
  } else if (temperature >= 15 && temperature < 21) {
    return { type: "ground" };
  } else if (temperature >= 23 && temperature < 27) {
    return { type: "bug" };
  } else if (temperature >= 27 && temperature <= 33) {
    return { type: "rock" };
  } else if (temperature > 33) {
    return { type: "fire" };
  } else {
    return { type: "normal" };
  }
}
