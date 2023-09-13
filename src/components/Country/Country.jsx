import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "red" : "black" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code:{cca3}</small>
      </p>
      <button className="btn" onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button className="btn" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited" : "I want to visit"}
    </div>
  );
};

export default Country;
