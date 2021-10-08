import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const SelectCityContext = createContext();

export const SelectCityProvider = ({ children }) => {
    const [city, setCity] = useState({
        id: 7,
        latitude: "36.8841",
        longitude: "30.7056",
        name: "Antalya",
        population: 2288456,
        region: "Akdeniz",
    });
    const values = {
        city,
        setCity,
    };
    useEffect(() => {
        console.log(city.region);
    }, [city]);
    return (
        <SelectCityContext.Provider value={values}>
            {children}
        </SelectCityContext.Provider>
    );
};

export const UseSelectCity = () => useContext(SelectCityContext);
