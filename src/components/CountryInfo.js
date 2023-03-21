import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DateTime } from 'luxon'; // corrected import statement
import { fetchCountries } from '../redux/countrySlice';

const CountryInfo = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  const country = countries.find((c) => c.name === countryId);

  useEffect(() => {
    const clockElement = document.getElementById('clock'); // moved inside useEffect
    const runInterval = () => {
      setInterval(() => {
        const now = DateTime.now();
        clockElement.textContent = now.toLocaleString(
          DateTime.DATETIME_FULL_WITH_SECONDS,
        );
      }, 1000);
    };
    runInterval();
  }, []); // added empty dependency array

  return (
    <>
      {country && (
        <div className="countryInformation">
          <div className="modal">
            <img src={country.flagSvg} alt={country.flagAlt} className="flag" />
            <h1 className="name">{country.name}</h1>
          </div>
          <ul className="details">
            <li className="detail">
              <span className="modalName">Capital:</span>
              {' '}
              <span className="modalValue">{country.capital}</span>
            </li>
            <li className="detail">
              <span className="modalName">Population:</span>
              {' '}
              <span className="modalValue">
                {country.population.toLocaleString()}
              </span>
            </li>
            <li className="detail">
              <span className="modalName">Currencies:</span>
              {' '}
              <span className="modalValue">
                {Object.values(country.currencies).map((currency) => (
                  <span key={currency.symbol}>
                    {currency.symbol}
                    {' '}
                    -&nbsp;
                    {currency.name}
                  </span>
                ))}
              </span>
            </li>
            <li className="detail">
              <span className="modalName">Timezones:</span>
              {' '}
              <span className="modalValue">
                {country.timezones.map((timezone) => (
                  <span key={timezone} className="timezone">
                    {timezone}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span id="clock" />
              {' '}
              {/* added element with ID */}
            </li>
          </ul>
          <div />
        </div>
      )}
    </>
  );
};

export default CountryInfo;
