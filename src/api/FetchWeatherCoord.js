import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/find";
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeatherCoord = async (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const { data } = await axios.get(URL, {
    params: {
      lat: lat,
      lon: long,
      units: "metric",
      cnd: 1,
      appid: apiKey,
    },
  });
  return data;
};
