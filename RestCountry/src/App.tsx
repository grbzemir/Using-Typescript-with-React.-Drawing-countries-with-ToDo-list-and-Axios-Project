import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Components/Country";
import { CountryType } from "./Types";
import Loading from "./Components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch {
      console.log("Ülkeleri alırken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </Loading>
    </div>
  );
}

export default App;
