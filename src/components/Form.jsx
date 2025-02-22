import { useDispatch } from 'react-redux';
import { fetchData, fetchDataSuccess, fetchDataFailure } from '../redux/actions';
import { api_key, base_url } from '../utils/constants';

const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city) {
            dispatch(fetchData());
            try {
                const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
                if (!response.ok) {
                    throw new Error('Enter correct city name');
                }
                const data = await response.json();
                dispatch(fetchDataSuccess(data));
            } catch (err) {
                dispatch(fetchDataFailure(err.message));
            }
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
