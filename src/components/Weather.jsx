
import { useSelector } from 'react-redux';

const Weather = () => {
    const { loading, data, error } = useSelector((state) => state.weather);
    return (
        <div className={'infoWeath'}>
            {error ? (
                <p>{error}</p>
            ) : loading ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <p>Location: {data.name}, {data.sys.country}</p>
                    <p>Temp: {data.main.temp} °C</p>
                    <p>Pressure: {data.main.pressure} hPa</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </>
            ) : (
                <p>No weather data available</p>
            )}
        </div>
    );
};

export default Weather;
