import { useRef, useState } from 'react';
import Detail from './components/detail/Detail';
import Forecast from './components/forecast/Forecast';
import Layout from './components/layout/Layout';
import Location from './components/location/Location';
import Weather from './components/weather/Weather';

function App() {
	const [location, setLocation] = useState('Chiang Mai');
	const [searchLocation, setSearchLocation] = useState('');

	const searchRef = useRef<HTMLParagraphElement>(null);

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			enterSearch();
		} else if (event.key === 'Backspace') {
			deleteSearch();
		} else {
			switch (event.key) {
				case 'Shift':
				case 'Caplock':
				case 'Alt':
				case 'Meta':
				case 'Control':
					break;
				default:
					return concatSearch(event.key);
			}
		}
	};

	const concatSearch = (char: string) =>
		setSearchLocation((prev) => `${(prev += char)}`);

	const deleteSearch = () =>
		setSearchLocation((prev) => prev.substring(0, prev.length - 1));

	const enterSearch = () => {
		setLocation(searchRef.current ? searchRef.current.innerText : '');
		setSearchLocation('');
	};

	return (
		<Layout>
			<Location
				location={location}
				searchLocation={searchLocation}
				searchRef={searchRef}
			/>
			<Weather />
			<Forecast />
			<Detail />
		</Layout>
	);
}

export default App;
