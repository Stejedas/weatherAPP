
import './App.css';
import WeatherContexProvider from './components/context/provider.jsx';
import FoodFetch from './components/food-fetch';

import WeatherCard from './components/weatherCard';
import Header from './components/header';



function App() {
 
  return (
    <WeatherContexProvider>
      <Header></Header>
    
      <FoodFetch></FoodFetch>
      <WeatherCard></WeatherCard>
    </WeatherContexProvider>
    
  )
}




export default App;