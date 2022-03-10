
import './App.css';
import WeatherContexProvider from './components/context/provider.jsx';
import FoodFetch from './components/food-fetch';
import WeatherFetch from './components/weather-fetch';


function App() {
 
  return (
    <WeatherContexProvider>
      <WeatherFetch></WeatherFetch>
      <FoodFetch></FoodFetch>
    </WeatherContexProvider>
    
  )
}




export default App;