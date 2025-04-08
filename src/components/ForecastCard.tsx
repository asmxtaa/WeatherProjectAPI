import React from 'react';
import { ForecastData } from '../types';

interface ForecastCardProps {
  data: ForecastData;
}
export const ForecastCard: React.FC<ForecastCardProps> = ({ data }) => {
  const date = new Date(data.dt * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center transform hover:scale-105 transition-all duration-300 border border-white/20">
      <span className="text-sm font-semibold text-white mb-2">{day}</span>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="w-12 h-12 drop-shadow-lg"
      />
      <span className="text-xl font-bold text-white">
        {Math.round(data.main.temp)}°C
      </span>
      <span className="text-xs text-white/80 mt-1">
        {data.weather[0].description}
      </span>
    </div>
  );
};