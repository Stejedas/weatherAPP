
import './App.css';
import WeatherContexProvider from './components/context/provider.jsx';
import FoodFetch from './components/food-fetch';
import WeatherCard from './components/weatherCard';



function App() {
 
  return (
    <WeatherContexProvider>
    
      <FoodFetch></FoodFetch>
      <WeatherCard></WeatherCard>
    </WeatherContexProvider>
    
  )
}




export default App;