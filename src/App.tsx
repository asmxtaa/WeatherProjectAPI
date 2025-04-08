import React from 'react';
import { Sun, Moon, CloudSun } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { RecentSearches } from './components/RecentSearches';
import { useWeatherStore } from './store';

function App() {
  const {
    weatherData,
    forecastData,
    isLoading,
    error,
    recentSearches,
    darkMode,
    fetchWeather,
    toggleDarkMode
  } = useWeatherStore();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const isInitial = !weatherData && !isLoading && !error;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-500 dark:from-gray-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8 w-full animate-fadeIn">
            <div className="flex items-center gap-2">
              <CloudSun className="text-yellow-300 dark:text-white animate-pulse" size={36} />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white drop-shadow-lg tracking-wide">
                Weather Dashboard
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              {darkMode ? (
                <Sun className="text-yellow-300" size={24} />
              ) : (
                <Moon className="text-black dark:text-white" size={24} />
              )}
            </button>
          </div>

          {/* Search + Initial Message */}
          <div className={`${isInitial ? 'flex flex-col justify-center items-center min-h-[50vh]' : 'mb-8'} transition-all`}>
            <div className={`${isInitial ? 'w-full max-w-md text-center animate-fadeInUp' : 'w-full'}`}>
              <SearchBar onSearch={fetchWeather} />
              {isInitial && (
                <p className="text-lg mt-6 text-gray-800 dark:text-gray-300 animate-fadeIn delay-100">
                  Search for a city to view current weather and 5-day forecast.
                </p>
              )}
            </div>
          </div>

          {/* Loader */}
          {isLoading && (
            <div className="flex justify-center items-center mt-12">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-800 dark:border-white border-t-transparent"></div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-8 p-4 bg-red-400/20 backdrop-blur-md border border-red-300/50 rounded-lg text-white animate-fadeIn">
              {error}
            </div>
          )}

          {/* Weather & Forecast Cards */}
          {weatherData && !isLoading && (
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fadeInUp">
              <div className="transition-transform transform hover:scale-[1.02] shadow-xl rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                <WeatherCard data={weatherData} onRefresh={() => fetchWeather(weatherData.name)} />
              </div>

              {forecastData.length > 0 && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-6 drop-shadow-lg">
                    5-Day Forecast
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                    {forecastData.map((forecast) => (
                      <div
                        key={forecast.dt}
                        className="hover:scale-105 transform transition-transform duration-200"
                      >
                        <ForecastCard data={forecast} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <RecentSearches searches={recentSearches} onSelect={fetchWeather} />
        </div>
      </div>
    </div>
  );
}

export default App;
