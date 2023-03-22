import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import TopNav from './TopNav';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <TopNav />
      <NavLink to="/" className="link">
        {location.pathname !== '/' && <FiChevronLeft className="back_button" />}
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Navbar;
