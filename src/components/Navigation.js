/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <NavLink to="/" className="link">
        {location.pathname !== '/' && <FiChevronLeft className="back_btn" />}
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Navbar;
