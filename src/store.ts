import { create } from 'zustand';
import { WeatherStore, WeatherData, ForecastData } from './types';

const API_KEY = 'baac0c7e4decb501150c3eedb73386e5'; // Make sure this is your actual API key

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  weatherData: null,
  forecastData: [],
  isLoading: false,
  error: null,
  recentSearches: [],
  darkMode: false,

  fetchWeather: async (city: string) => {
    try {
      set({ isLoading: true, error: null });

      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
      ]);

      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('City not found');
      }

      const weatherData: WeatherData = await weatherResponse.json();
      const forecastJson = await forecastResponse.json();

      // ✅ Extract one forecast per day at 12:00:00 using dt_txt
      const dailyForecasts = forecastJson.list
        .filter((item: ForecastData) => item.dt_txt.includes('12:00:00'))
        .slice(0, 5);

      set((state) => ({
        weatherData,
        forecastData: dailyForecasts,
        recentSearches: [
          city,
          ...state.recentSearches.filter((s) => s !== city)
        ].slice(0, 5)
      }));
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : 'Failed to fetch weather data'
      });
    } finally {
      set({ isLoading: false });
    }
  },

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}));
