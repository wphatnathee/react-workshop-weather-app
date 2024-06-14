import React from 'react';
import './Forecast.css';

const Forecast = () => {
	const mockForecase = [
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
		{
			time: '2024-06-15 00:00',
			temp_c: 29.9,
			condition: {
				text: 'Clear ',
				icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
				code: 1000,
			},
			chance_of_rain: 100,
		},
	];

	return (
		<div className="forecast">
			{mockForecase.map((item, index) => (
				<div key={index} className="forecast-item">
					<p className="forecast-time">{item.time.split(' ')[1]}</p>
					<div>
						<p className="chance-of-rain">{`${item.chance_of_rain}%`}</p>
						<img
							alt={item.condition.text}
							src={item.condition.icon}
							className="weather-icon"
						/>
					</div>
					<p className="forecast-temp">
						{`${Math.floor(item.temp_c)}°`}
						<sup>c</sup>
					</p>
				</div>
			))}
		</div>
	);
};

export default Forecast;
