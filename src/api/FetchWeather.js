import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: "metric",
      appid: apiKey,
    },
  });
  return data;
};
