export interface Country {
  capital: string;
  name: string;
  region: string;
  flag: string;
  population: number;
}

export interface Weather {
  current: Current;
  location: Location;
}

export interface CountryWeather extends Country {
  weather: Weather;
}

interface Location {
  name: string;
  country: string;
  region: string;
  lat: number;
  long: number;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: number;
}

interface Current {
  temperature: number;
  weather_code: number;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}
