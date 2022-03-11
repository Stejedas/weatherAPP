
import './App.css';
import WeatherContexProvider from './components/context/provider.jsx';
import FoodFetch from './components/food-fetch';
import WeatherFetch from './components/weather-fetch';
import WeatherCard from './components/weatherCard';



function App() {
 
  return (
    <WeatherContexProvider>
      <WeatherFetch></WeatherFetch>
      <FoodFetch></FoodFetch>
      <WeatherCard></WeatherCard>
    </WeatherContexProvider>
    
  )
}




export default App;