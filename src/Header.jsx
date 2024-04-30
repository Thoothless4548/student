import React, { useState } from 'react';
import { BsJustify, BsBoxArrowInRight, BsSearch } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import Tooltip from 'react-bootstrap/Tooltip';
import { RiLockPasswordFill } from "react-icons/ri";


function Header({ OpenSidebar }) {
  // State variable to control the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown open/close state on click
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify onClick={OpenSidebar} />
      </div>

      <Tooltip title="Search">
      <div className='header-left'>
        <BsSearch style={{color:'black'}} />
      </div>
      </Tooltip>


      

      <Tooltip title="Profile">
      <div
        className='header-left'
        onClick={handleProfileClick} // Set the click event handler for the profile icon
      >
        <Dropdown show={isDropdownOpen}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="icon-toggle">
            <BsPersonCircle className="profile-icon white" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* Use the Link component for the Profile option */}
            
            <Dropdown.Item href="#/action-2">
              <BsBoxArrowInRight className="option-icon" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      </Tooltip>
    </header>
  );
}

export default Header;
