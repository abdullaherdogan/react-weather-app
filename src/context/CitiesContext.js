import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CitiesContext = createContext();

export const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json"
            )
            .then((response) => {
                setCities(response.data);
            });
    }, []);

    return (
        <CitiesContext.Provider value={cities}>
            {children}
        </CitiesContext.Provider>
    );
};

export const UseCities = () => useContext(CitiesContext);
