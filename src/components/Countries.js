import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countrySlice';
import Country from './Country';
import worldMap from '../img/worldM.png';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [continent, setContinent] = useState('all');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  return (
    <div className="main">
      <img src={worldMap} alt="worls map" className="logo" />
      <h1 className="title">All Countries</h1>
      <div className="dropdownMenu">
        <select
          name="continents"
          id="continents"
          className="select"
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select>
      </div>
      <ul className="countries">
        {countries
          .filter((country) => {
            if (continent === 'all') {
              return country;
            }
            return country.continent === continent;
          })
          .map((country) => (
            <Country
              key={country.name}
              name={country.name}
              continent={country.continent}
              flagEmoji={country.flagEmoji}
            />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
