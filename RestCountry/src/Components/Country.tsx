import { FunctionComponent } from "react";
import { CountryType } from "../Types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = ({ country }) => {
  return (
    <div>
      <p>
        {country.name.common} - {country.capital?.[0] || "No Capital"}
      </p>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        width="50"
      />
    </div>
  );
};

export default Country;
