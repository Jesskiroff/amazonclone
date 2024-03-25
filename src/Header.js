import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img
        className="header logo"
        src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-600x400.png.webp"
        alt="Amazon Logo"
      />

      <div className="header">
        <input className="header__searchInput" 
        type="text" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <div className='header__option'>
          <span
          className='header__optionLineOne'>Hello Guest</span>
          <span
          className='header__optionLineTwo'>Sign In</span>
        </div>

        <div className='header__option'>
          <span
            className='header__optionLineOne'>Returns</span>
            <span
            className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span
              className='header__optionLineOne'>Your</span>
              <span
              className='header__optionLineTwo'>Prime</span>
        </div>

      </div>
    </div>
  );
}

export default Header;
