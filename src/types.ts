export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export interface ForecastData {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export interface WeatherStore {
  weatherData: WeatherData | null;
  forecastData: ForecastData[];
  isLoading: boolean;
  error: string | null;
  recentSearches: string[];
  darkMode: boolean;
  fetchWeather: (city: string) => Promise<void>;
  toggleDarkMode: () => void;
}