import React from 'react';
import './Weather.css';

const Weather = () => {
	const timenow = new Date();

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const dayOfWeek = days[timenow.getDay()];
	const month = months[timenow.getMonth()];
	const day = timenow.getDate();

	const hours = timenow.getHours().toString().padStart(2, '0');
	const minutes = timenow.getMinutes().toString().padStart(2, '0');

	return (
		<div className="weather">
			<p className="today">Today</p>
			<p>{`${dayOfWeek}, ${month} ${day} | ${hours}:${minutes}`}</p>

			<div className="temp-container">
				<div>
					<p className="temp">
						23<sup>°C</sup>
					</p>
					<p className="temp-desc">
						{`min ${30}`}
						<sup>°C</sup>
						<span>
							{`max ${30}`}
							<sup>°C</sup>
						</span>
					</p>
				</div>
				<div>
					<img
						src={`${'//cdn.weatherapi.com/weather/64x64/night/113.png'.replace(
							'64x64',
							'128x128'
						)}`}
						alt="current-weather-icon"
						className="current-weather-icon"
					/>
					<p className="temp-desc">Heavy rain</p>
				</div>
			</div>
		</div>
	);
};

export default Weather;
