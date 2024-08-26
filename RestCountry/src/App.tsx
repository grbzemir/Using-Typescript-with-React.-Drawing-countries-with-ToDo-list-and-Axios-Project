import "./App.css";
import axios from "axios";
import { CountryType } from "./Types";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.log("Ülkeleri Alırken Hata Oluştu", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);

  return (
    <div>
      {countries.map((country) => {
        return (
          <p>
            {country.name} - {country.capital}
          </p>
        );
      })}
    </div>
  );
}

export default App;
