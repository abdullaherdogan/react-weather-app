import "./App.css";
import { CitiesProvider } from "./context/CitiesContext";
import GetCityWeather from "./components/GetCityWeather";
function App() {
    return (
        <div className="App">
            <CitiesProvider>
                <GetCityWeather />
            </CitiesProvider>
        </div>
    );
}

export default App;
