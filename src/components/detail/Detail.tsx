import React from 'react';
import './Detail.css';
import WeatherDeatail from './WeatherDetail';
import { ReactComponent as WaterIcon } from '../../assets/water.svg';
import { ReactComponent as WindIcon } from '../../assets/wind.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

const Detail = () => {
	return (
		<div className="detail">
			<WeatherDeatail icon={<WaterIcon />} title="Rain Chance" data="45%" />
			<WeatherDeatail icon={<WindIcon />} title="Wind" data="6 km/h" />
			<WeatherDeatail icon={<HumidityIcon />} title="Humidity" data="81%" />
			<WeatherDeatail icon={<SunIcon />} title="UV Index" data="7" />
		</div>
	);
};

export default Detail;
