import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';

function HomePageNav() {
  return (
    <div>
      <nav className="nav">
        <div className="icons">
          <div className="iconOne">
            <BiMicrophone />
          </div>
          <div className="iconTwo">
            <AiOutlineSetting />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomePageNav;
