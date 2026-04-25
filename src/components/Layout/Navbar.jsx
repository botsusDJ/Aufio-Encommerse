import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ onCartOpen, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <div className="container nav-content">
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        <Link to="/" className="logo">audiophile</Link>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="hover-links" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/headphones" className="hover-links" onClick={() => setIsMenuOpen(false)}>Headphones</Link>
          <Link to="/speakers" className="hover-links" onClick={() => setIsMenuOpen(false)}>Speakers</Link>
          <Link to="/earphones"  className="hover-links"onClick={() => setIsMenuOpen(false)}>Earphones</Link>
        </div>

        <div className="cart-icon-trigger" onClick={onCartOpen}>
          <img src="src/assets/shared/desktop/icon-cart.svg" width="24px" height="20px"></img>
          {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
        </div>
      </div>
      
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </div>
  );
};