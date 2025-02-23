import { fetchData } from '../redux/actions';
import { useDispatch } from "react-redux";

const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = (e) => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city) {
            dispatch(fetchData(city));
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
