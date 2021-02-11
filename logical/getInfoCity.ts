import { IInfoCity } from '../interfaces'

export default async function getInfoCity(city: string): Promise<IInfoCity> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_ID}`,
      {
        method: "GET",
      }
    );

    const { name, weather, main }: any = await response.json();

    return { name, weather: weather[0]?.main, temperature: main?.temp };
  } catch (error) {
    throw { message: "Oops ... Something went wrong. Please try again." };
  }
}
