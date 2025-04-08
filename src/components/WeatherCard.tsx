import React from 'react';
import { RefreshCw, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherCardProps {
  data: WeatherData;
  onRefresh: () => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, onRefresh }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 w-full border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">{data.name}</h2>
          <p className="text-white/80 mt-1">{data.weather[0].description}</p>
        </div>
        <button
          onClick={onRefresh}
          className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-180"
        >
          <RefreshCw size={20} className="text-white" />
        </button>
      </div>

      <div className="flex items-center justify-center my-8">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-32 h-32 animate-float drop-shadow-lg"
        />
        <div className="text-6xl font-bold text-white ml-4 drop-shadow-lg">
          {Math.round(data.main.temp)}°C
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
          <Droplets size={24} className="text-sky-300" />
          <div>
            <span className="block text-sm text-white/80">Humidity</span>
            <span className="block text-xl font-semibold">{data.main.humidity}%</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
          <Wind size={24} className="text-emerald-300" />
          <div>
            <span className="block text-sm text-white/80">Wind Speed</span>
            <span className="block text-xl font-semibold">{Math.round(data.wind.speed)} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};