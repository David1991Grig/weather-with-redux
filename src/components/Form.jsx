import { useDispatch } from 'react-redux';
import { fetchWeather} from '../redux/actions';


const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city) {
            fetchWeather(city, dispatch);

        } else {
            alert('Please enter a city name');
        }
    };

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type='text' name='city' placeholder='Enter city name' />
            <button type='submit'>Get Weather</button>
        </form>
    );
};

export default Form;
