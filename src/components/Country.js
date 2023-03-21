import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, flagEmoji, continent }) => (
  <Link to={`/country/${name}`} className="link">
    <li className="country">
      <h2 className="countryName">
        {name}
        <br />
        {flagEmoji}
      </h2>
      <p>{continent}</p>
    </li>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Country;
